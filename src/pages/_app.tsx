import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/context/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden", position: "relative" }}>
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  );
}
