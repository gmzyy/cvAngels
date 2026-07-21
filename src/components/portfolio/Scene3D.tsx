"use client"

/** Pure CSS 3D geometric composition — no images, no canvas */
export default function Scene3D() {
  return (
    <div style={{ position: "relative", width: 340, height: 340 }}>
      {/* Halo glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, margin: "auto",
          width: 240, height: 240, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,24,74,0.28) 0%, rgba(201,24,74,0.06) 55%, transparent 75%)",
          filter: "blur(18px)",
          animation: "pulse-halo 3.5s ease-in-out infinite",
        }}
      />

      {/* 3D scene container */}
      <div className="scene-3d">

        {/* Wireframe cube */}
        <div className="geo-cube">
          <div className="cube-face cf-front" />
          <div className="cube-face cf-back" />
          <div className="cube-face cf-left" />
          <div className="cube-face cf-right" />
          <div className="cube-face cf-top" />
          <div className="cube-face cf-bottom" />
        </div>

        {/* Orbiting ring */}
        <div className="geo-ring-wrap">
          <div className="geo-ring">
            <div className="geo-ring-dot" />
          </div>
        </div>

        {/* Rotating geo group */}
        <div className="geo-group">
          {/* Large red rhombus */}
          <div className="geo-shape geo-r1">
            <div className="face-main" />
            <div className="face-shine" />
          </div>
          {/* Ghost white rhombus */}
          <div className="geo-shape geo-r2">
            <div className="face-main" />
          </div>
          {/* Red outline rhombus */}
          <div className="geo-shape geo-r3">
            <div className="face-main" />
          </div>
          {/* Triangles */}
          <div className="geo-shape geo-t1" />
          <div className="geo-shape geo-t2" />
        </div>

      </div>
    </div>
  )
}
