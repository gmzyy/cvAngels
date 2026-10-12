export interface EyeConfig {
  left: number // % contenedor x
  top: number // % contenedor y
  width: number // % contenedor w
  height: number // % contenedor h
  centerX: number // % contenedor centro x
  centerY: number // % contenedor centro y
  maxDeltaX: number // % contenedor máx desplazamiento x (~40px / 1312 = ~3.05%)
  maxDeltaY: number // % contenedor máx desplazamiento y (~12px / 1199 = ~1.00%)
  pupilSizePct: number // % contenedor diámetro pupila (~48px / 1312 = ~3.66%)
  clipRadius: string
}

export interface AvatarConfig {
  imageWidth: number
  imageHeight: number
  aspectRatio: number
  skinColor: string
  pupilColor: string
  leftEye: EyeConfig
  rightEye: EyeConfig
  motion: {
    pupilDuration: number
    pupilEase: string
    headDuration: number
    headEase: string
    maxHeadRotateDeg: number
    maxHeadTranslatePx: number
    pointerSensitivity: number
    idleTimeoutMs: number
    minBlinkInterval: number
    maxBlinkInterval: number
  }
}

export const AVATAR_CONFIG: AvatarConfig = {
  imageWidth: 1312,
  imageHeight: 1199,
  aspectRatio: 1312 / 1199,
  skinColor: '#F6AD75', // Tono exacto de piel medido en caralogo.png
  pupilColor: '#0a0908',

  // Ojo izquierdo (desde la perspectiva del espectador)
  leftEye: {
    left: 34.53, // 453px / 1312
    top: 49.62, // 595px / 1199
    width: 12.12, // 159px / 1312
    height: 6.34, // 76px / 1199
    centerX: 40.59, // (453 + 79.5) / 1312
    centerY: 52.79, // (595 + 38) / 1199
    maxDeltaX: 2.95, // Recorrido máx horizontal contenido (~38.7px)
    maxDeltaY: 0.95, // Recorrido máx vertical contenido (~11.4px)
    pupilSizePct: 3.65, // ~48px
    clipRadius: '48% 48% 44% 44%',
  },

  // Ojo derecho (desde la perspectiva del espectador)
  rightEye: {
    left: 55.79, // 732px / 1312
    top: 49.46, // 593px / 1199
    width: 12.42, // 163px / 1312
    height: 6.59, // 79px / 1199
    centerX: 62.00, // (732 + 81.5) / 1312
    centerY: 52.75, // (593 + 39.5) / 1199
    maxDeltaX: 2.95, // Recorrido máx horizontal contenido (~38.7px)
    maxDeltaY: 0.95, // Recorrido máx vertical contenido (~11.4px)
    pupilSizePct: 3.65, // ~48px
    clipRadius: '48% 48% 44% 44%',
  },

  motion: {
    pupilDuration: 0.18,
    pupilEase: 'power2.out',
    headDuration: 0.45,
    headEase: 'power2.out',
    maxHeadRotateDeg: 2.5,
    maxHeadTranslatePx: 4,
    pointerSensitivity: 360, // Radio en px para alcance completo
    idleTimeoutMs: 3200,
    minBlinkInterval: 3.2,
    maxBlinkInterval: 6.0,
  },
}
