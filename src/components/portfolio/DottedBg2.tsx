"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import {
  Renderer,
  Camera,
  Mesh,
  Plane,
  Program,
  RenderTarget as OglRenderTarget,
} from "ogl";

const INTRINSIC_WIDTH = 600;
const INTRINSIC_HEIGHT = 600;

const perlinVertexShader = `#version 300 es
in vec2 uv;
in vec2 position;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0., 1.);
}`;

const perlinFragmentShader = `#version 300 es
precision mediump float;
uniform float uFrequency;
uniform float uTime;
uniform float uSpeed;
uniform float uValue;
uniform vec2 uResolution;
in vec2 vUv;
out vec4 fragColor;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  uv = (uv - 0.5) * vec2(aspect, 1.0) + 0.5;
  float hue = abs(snoise(vec3(uv * uFrequency, uTime * uSpeed)));
  vec3 rainbowColor = hsv2rgb(vec3(hue, 1.0, uValue));
  fragColor = vec4(rainbowColor, 1.0);
}`;

const dotVertexShader = `#version 300 es
in vec2 uv;
in vec2 position;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0., 1.);
}`;

const dotFragmentShader = `#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform int uPaletteCount;
uniform vec3 uPalette[10];
uniform float uPaletteAlpha[10];
uniform float uCellSize;
uniform float uGamma;
uniform float uPaletteBias;
out vec4 fragColor;

void main() {
  vec2 pix = gl_FragCoord.xy;
  float cell = max(uCellSize, 1.0);

  vec2 cellIdx = floor(pix / cell);
  vec2 cellCenter = (cellIdx + 0.5) * cell;
  vec3 col = texture(uTexture, cellCenter / uResolution.xy).rgb;
  float gray = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;
  gray = pow(clamp(gray, 0.0001, 1.0), uGamma);

  vec2 cellUV = fract(pix / cell) - 0.5;
  float dist = length(cellUV);
  float radius = clamp(gray + uPaletteBias, 0.0, 1.0) * 0.5;
  float aa = fwidth(dist) + 1e-4;
  float mark = 1.0 - smoothstep(radius - aa, radius + aa, dist);

  float g2 = clamp(gray + uPaletteBias, 0.0, 1.0);
  int cnt = max(uPaletteCount, 1);
  vec3 dotCol;
  float dotOpacity;
  if (cnt <= 1) {
    dotCol = uPalette[0];
    dotOpacity = uPaletteAlpha[0];
  } else {
    float scaled = g2 * float(cnt - 1);
    int seg = int(floor(scaled));
    seg = clamp(seg, 0, cnt - 2);
    float f = clamp(scaled - float(seg), 0.0, 1.0);
    dotCol = mix(uPalette[seg], uPalette[seg + 1], f);
    dotOpacity = mix(uPaletteAlpha[seg], uPaletteAlpha[seg + 1], f);
  }
  fragColor = vec4(dotCol, mark * dotOpacity);
}`;

type Rgba = { r: number; g: number; b: number; a: number };

function parseColorToRgba(input: string): Rgba {
  if (!input) return { r: 0, g: 0, b: 0, a: 1 };
  const str = input.trim();
  const hex = str.replace(/^#/, "");
  if (hex.length === 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255,
      a: 1,
    };
  }
  if (hex.length === 8) {
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255,
      a: parseInt(hex.slice(6, 8), 16) / 255,
    };
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}

function mapLinear(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  if (inMax === inMin) return outMin;
  const t = (value - inMin) / (inMax - inMin);
  return outMin + t * (outMax - outMin);
}

function mapFrequencyUiToShader(ui: number): number {
  return mapLinear(ui, 1, 10, 0.3, 6);
}
function mapSpeedUiToShader(ui: number): number {
  return ui * 0.05;
}
function mapCellSizeUiToShader(ui: number): number {
  return mapLinear(ui, 1, 100, 6, 60);
}
function mapGammaUiToShader(ui: number): number {
  return mapLinear(ui, 1, 20, 0.5, 8);
}
function mapPaletteBiasUiToShader(ui: number): number {
  return ui * 0.05;
}

const MAX_COLORS = 10;

interface MonoPhase {
  name: string;
  bgRgb: [number, number, number];
  colors: string[];
  frequency: number;
  speed: number;
  cellSize: number;
  gamma: number;
  paletteBias: number;
}

// ── MONOCHROMATIC ETHEREAL TECH SCROLL PHASES ──
// Triggered dynamically as the user scrolls down the page!
const SCROLL_PHASES: MonoPhase[] = [
  {
    name: "01_HERO_OBSIDIAN_WAVE",
    bgRgb: [3, 7, 18], // Deep Void Black
    colors: ["#000000", "#333333", "#777777", "#CCCCCC", "#FFFFFF"],
    frequency: 1.2,
    speed: 3.2,
    cellSize: 32,
    gamma: 6,
    paletteBias: -3,
  },
  {
    name: "02_ETHEREAL_WHITE_LIGHT",
    bgRgb: [236, 240, 248], // Pure Ethereal White & Luminous Silver
    colors: ["#FFFFFF", "#D5D9E2", "#858A96", "#353A48", "#05060A"],
    frequency: 0.8,
    speed: 1.8,
    cellSize: 48,
    gamma: 11,
    paletteBias: 2.8,
  },
  {
    name: "03_SILVER_TECH_SPACE",
    bgRgb: [6, 8, 14], // Minimal Deep Silver Obsidian
    colors: ["#000000", "#20222A", "#606575", "#B0B5C5", "#FFFFFF"],
    frequency: 2.0,
    speed: 3.8,
    cellSize: 24,
    gamma: 5,
    paletteBias: -3.5,
  },
  {
    name: "04_ETHEREAL_HALO_GLOW",
    bgRgb: [14, 16, 26], // Ethereal Dark Halo
    colors: ["#000000", "#444452", "#88889C", "#DDDDED", "#FFFFFF"],
    frequency: 1.4,
    speed: 4.2,
    cellSize: 36,
    gamma: 7,
    paletteBias: -1.2,
  },
];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function parsePhasePalette(colorList: string[]) {
  const rgb: [number, number, number][] = [];
  const alpha: number[] = [];
  for (let i = 0; i < MAX_COLORS; i++) {
    const src = colorList[i];
    if (src != null) {
      const { r, g, b, a } = parseColorToRgba(src);
      rgb.push([r, g, b]);
      alpha.push(a);
    } else {
      rgb.push([0, 0, 0]);
      alpha.push(0);
    }
  }
  return { rgb, alpha };
}

interface DottedBg2Props {
  style?: CSSProperties;
}

export default function DottedBg2({ style }: DottedBg2Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const perlinProgramRef = useRef<any>(null);
  const dotProgramRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const perlinMeshRef = useRef<any>(null);
  const dotMeshRef = useRef<any>(null);
  const renderTargetRef = useRef<any>(null);
  const glRef = useRef<any>(null);
  const rafIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);

  // Scroll position tracking for smooth transitions as user scrolls down
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        targetScrollRef.current = Math.min(1, Math.max(0, window.scrollY / docHeight));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let resizeHandler: (() => void) | null = null;
    let resizeObserver: ResizeObserver | null = null;
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      alpha: true,
      premultipliedAlpha: false,
    });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    rendererRef.current = renderer;
    glRef.current = gl;

    const camera = new Camera(gl, { near: 0.1, far: 100 });
    camera.position.set(0, 0, 3);
    cameraRef.current = camera;

    const doResize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
      if (renderTargetRef.current && renderTargetRef.current.setSize) {
        renderTargetRef.current.setSize(gl.canvas.width, gl.canvas.height);
      }
      if (perlinProgramRef.current) {
        perlinProgramRef.current.uniforms.uResolution.value = [
          gl.canvas.width,
          gl.canvas.height,
        ];
      }
    };

    let resizePending = false;
    const scheduleResize = () => {
      if (resizePending) return;
      resizePending = true;
      requestAnimationFrame(() => {
        resizePending = false;
        doResize();
      });
    };
    resizeHandler = scheduleResize;
    window.addEventListener("resize", scheduleResize);
    if (typeof window.ResizeObserver !== "undefined") {
      resizeObserver = new window.ResizeObserver(scheduleResize);
      resizeObserver.observe(container);
    }
    scheduleResize();

    const initialPhase = SCROLL_PHASES[0];
    const initialPalette = parsePhasePalette(initialPhase.colors);

    const perlinProgram = new Program(gl, {
      vertex: perlinVertexShader,
      fragment: perlinFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uFrequency: { value: mapFrequencyUiToShader(initialPhase.frequency) },
        uSpeed: { value: mapSpeedUiToShader(initialPhase.speed) },
        uValue: { value: 1 },
        uResolution: { value: [gl.canvas.width, gl.canvas.height] },
      },
    });
    perlinProgramRef.current = perlinProgram;
    const perlinMesh = new Mesh(gl, {
      geometry: new Plane(gl, { width: 2, height: 2 }),
      program: perlinProgram,
    });
    perlinMeshRef.current = perlinMesh;

    const renderTarget = new OglRenderTarget(gl);
    renderTargetRef.current = renderTarget;

    const dotProgram = new Program(gl, {
      vertex: dotVertexShader,
      fragment: dotFragmentShader,
      uniforms: {
        uResolution: { value: [gl.canvas.width, gl.canvas.height] },
        uTexture: { value: renderTarget.texture },
        uPaletteCount: { value: MAX_COLORS },
        uPalette: { value: initialPalette.rgb },
        uPaletteAlpha: { value: initialPalette.alpha },
        uCellSize: { value: mapCellSizeUiToShader(initialPhase.cellSize) },
        uGamma: { value: mapGammaUiToShader(initialPhase.gamma) },
        uPaletteBias: { value: mapPaletteBiasUiToShader(initialPhase.paletteBias) },
      },
    });
    dotProgramRef.current = dotProgram;
    const dotMesh = new Mesh(gl, {
      geometry: new Plane(gl, { width: 2, height: 2 }),
      program: dotProgram,
    });
    dotMeshRef.current = dotMesh;

    const frameInterval = 1e3 / 30;

    const parsedPhases = SCROLL_PHASES.map((p) => ({
      ...p,
      parsedPalette: parsePhasePalette(p.colors),
    }));

    const currentPaletteRgb: [number, number, number][] = Array.from(
      { length: MAX_COLORS },
      () => [0, 0, 0]
    );
    const currentPaletteAlpha: number[] = Array.from(
      { length: MAX_COLORS },
      () => 1
    );

    const startTime = performance.now();

    const update = (now: number) => {
      if (!rendererRef.current) return;
      const last = lastTimeRef.current;
      if (now - last < frameInterval) {
        rafIdRef.current = requestAnimationFrame(update);
        return;
      }
      lastTimeRef.current = now;

      const totalElapsedSeconds = (now - startTime) * 0.001;

      // Smooth physics lerp on scroll position (fluid ethereal movement)
      currentScrollRef.current = lerp(
        currentScrollRef.current,
        targetScrollRef.current,
        0.06
      );

      const sPos = currentScrollRef.current; // 0..1
      const numSegments = parsedPhases.length - 1;
      const segment = sPos * numSegments;
      const idxA = Math.min(Math.floor(segment), numSegments - 1);
      const idxB = Math.min(idxA + 1, numSegments);
      const blendRaw = segment - idxA;
      // Smoothstep interpolation curve between scroll phases
      const blend = blendRaw * blendRaw * (3 - 2 * blendRaw);

      const pA = parsedPhases[idxA];
      const pB = parsedPhases[idxB];

      // Interpolate background color
      const bgR = Math.round(lerp(pA.bgRgb[0], pB.bgRgb[0], blend));
      const bgG = Math.round(lerp(pA.bgRgb[1], pB.bgRgb[1], blend));
      const bgB = Math.round(lerp(pA.bgRgb[2], pB.bgRgb[2], blend));

      if (wrapperRef.current) {
        wrapperRef.current.style.backgroundColor = `rgb(${bgR}, ${bgG}, ${bgB})`;
      }

      // Interpolate Shader Parameters
      const curFreq = lerp(pA.frequency, pB.frequency, blend);
      const curSpeed = lerp(pA.speed, pB.speed, blend);
      const curCellSize = lerp(pA.cellSize, pB.cellSize, blend);
      const curGamma = lerp(pA.gamma, pB.gamma, blend);
      const curBias = lerp(pA.paletteBias, pB.paletteBias, blend);

      perlinProgram.uniforms.uFrequency.value = mapFrequencyUiToShader(curFreq);
      perlinProgram.uniforms.uSpeed.value = mapSpeedUiToShader(curSpeed);

      dotProgram.uniforms.uCellSize.value = mapCellSizeUiToShader(curCellSize);
      dotProgram.uniforms.uGamma.value = mapGammaUiToShader(curGamma);
      dotProgram.uniforms.uPaletteBias.value = mapPaletteBiasUiToShader(curBias);

      // Interpolate Palette Colors
      for (let i = 0; i < MAX_COLORS; i++) {
        const rgbA = pA.parsedPalette.rgb[i];
        const rgbB = pB.parsedPalette.rgb[i];
        currentPaletteRgb[i] = [
          lerp(rgbA[0], rgbB[0], blend),
          lerp(rgbA[1], rgbB[1], blend),
          lerp(rgbA[2], rgbB[2], blend),
        ];
        currentPaletteAlpha[i] = lerp(
          pA.parsedPalette.alpha[i],
          pB.parsedPalette.alpha[i],
          blend
        );
      }

      dotProgram.uniforms.uPalette.value = currentPaletteRgb;
      dotProgram.uniforms.uPaletteAlpha.value = currentPaletteAlpha;

      perlinProgram.uniforms.uTime.value = totalElapsedSeconds;

      renderer.render({
        scene: perlinMesh,
        camera,
        target: renderTarget,
      });

      dotProgram.uniforms.uResolution.value = [
        gl.canvas.width,
        gl.canvas.height,
      ];
      perlinProgram.uniforms.uResolution.value = [
        gl.canvas.width,
        gl.canvas.height,
      ];

      renderer.render({ scene: dotMesh, camera });
      rafIdRef.current = requestAnimationFrame(update);
    };

    rafIdRef.current = requestAnimationFrame(update);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      if (resizeObserver) {
        try {
          resizeObserver.disconnect();
        } catch {}
        resizeObserver = null;
      }
      if (gl && gl.canvas && gl.canvas.parentElement === container) {
        container.removeChild(gl.canvas);
      }
      perlinProgramRef.current = null;
      dotProgramRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      perlinMeshRef.current = null;
      dotMeshRef.current = null;
      renderTargetRef.current = null;
      glRef.current = null;
      rafIdRef.current = null;
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(3, 7, 18)",
        transition: "background-color 0.8s ease",
        lineHeight: 0,
        minWidth: 0,
        minHeight: 0,
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          width: `${INTRINSIC_WIDTH}px`,
          height: `${INTRINSIC_HEIGHT}px`,
          minWidth: `${INTRINSIC_WIDTH}px`,
          minHeight: `${INTRINSIC_HEIGHT}px`,
          visibility: "hidden",
          position: "absolute",
          pointerEvents: "none",
        }}
      />
      <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />
    </div>
  );
}
