import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

const KineticGrid = dynamic(() => import("@/components/portfolio/KineticGrid"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      {/* ══ GLOBAL TOTAL BLACK KINETIC GRID BACKGROUND ══ */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: "#000000",
        }}
      >
        <KineticGrid
          background="#000000"
          dotColor="#FFFFFF"
          lineColor="rgba(255, 255, 255, 0.16)"
          trailColor="rgba(255, 255, 255, 0.65)"
          spacing={40}
          radius={260}
          strength={4.5}
          trail={true}
        />
      </div>

      <div style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden", position: "relative", zIndex: 1 }}>
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  );
}
