import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Editorial & Arcade Font Stack */}
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&family=DM+Serif+Display:ital@0;1&family=Caveat:wght@500;700&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,300;0,400;0,700;0,800;1,400&family=Orbitron:wght@400;600;700;800;900&family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&family=Space+Grotesk:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Ángel Gómez — Frontend / Full-Stack Developer Jr. React, Next.js, TypeScript y NestJS. Puebla, México." />
        <meta name="author" content="Angel Gomez Garcia (GEELMZ)" />
        <meta name="theme-color" content="#f1eee3" />
      </Head>
      <body className="antialiased" >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

