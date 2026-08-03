import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Street & Underground Font Stack */}
        <link
          href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Gloria+Hallelujah&family=Kalam:wght@400;700&family=Permanent+Marker&family=Rock+Salt&family=Sedgwick+Ave&family=Sedgwick+Ave+Display&family=Rubik+Spray+Paint&family=East+Sea+Dokdo&family=Mr+Dafoe&family=Splash&family=Creepster&family=Bebas+Neue&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;600;800;900&family=Rubik+Glitch&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="FEELMZ // GEELMZ — Fullstack Developer & IA. Puebla, México." />
        <meta name="author" content="Angel Gomez Garcia (Geelmz)" />
        <meta name="theme-color" content="#080808" />
      </Head>
      <body className="antialiased" style={{ background: "#060606", margin: 0, padding: 0, overflowX: "hidden" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
