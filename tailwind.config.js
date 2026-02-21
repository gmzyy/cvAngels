/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <--- ¡ESTA ES LA LÍNEA MÁGICA!
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Aquí conectamos tus variables CSS con Tailwind
      colors: {
        // Ahora puedes usar: bg-main o text-main en tus componentes
        main: "var(--bg-main)",
        card: "var(--bg-card)",
        primary: "var(--text-main)",
      },
    },
  },
  plugins: [],
};