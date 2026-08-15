import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es" className="dark">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Cyber Futuristic & Sci-Fi Font Stack */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,300;0,400;0,700;0,800;1,400&family=Orbitron:wght@400;600;700;800;900&family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&family=Space+Grotesk:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="GEELMZ // Angel Gomez Garcia — Fullstack Developer & IA Architect. Cybernetic Software Engineering. Puebla, México." />
        <meta name="author" content="Angel Gomez Garcia (GEELMZ)" />
        <meta name="theme-color" content="#030712" />
      </Head>
      <body className="antialiased" style={{ background: "#030712", color: "#F1F5F9", margin: 0, padding: 0, overflowX: "hidden" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

