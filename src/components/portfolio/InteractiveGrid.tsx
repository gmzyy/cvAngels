"use client";

import { useMemo, useState, type CSSProperties } from "react";

const DEFAULT_LOGO = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='70.02'%20height='32'%20viewBox='0%200%20256%20117'%3e%3cpath%20fill='%23FFFFFF'%20d='M205.52%2050.813c-.858%200-1.705.03-2.551.058c-.137.007-.272.04-.398.094a1.424%201.424%200%200%200-.92.994l-3.628%2012.672c-1.565%205.449-.983%2010.48%201.646%2014.174c2.41%203.416%206.42%205.421%2011.289%205.655l19.679%201.194c.585.03%201.092.312%201.4.776a1.92%201.92%200%200%201%20.2%201.692a2.496%202.496%200%200%201-2.134%201.662l-20.448%201.193c-11.11.515-23.062%209.58-27.255%2020.633l-1.474%203.9a1.092%201.092%200%200%200%20.967%201.49h70.425a1.872%201.872%200%200%200%201.81-1.365A51.172%2051.172%200%200%200%20256%20101.828c0-28.16-22.582-50.984-50.449-50.984'/%3e%3cpath%20fill='%23CCCCCC'%20d='m174.782%20115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.822%201.822%200%200%201-1.459-.776a1.919%201.919%200%200%201-.203-1.693a2.496%202.496%200%200%201%202.154-1.662l93.173-1.193c11.063-.511%2023.015-9.58%2027.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126%2020.51%20166.91%200%20137.96%200C111.269%200%2088.626%2017.403%2080.5%2041.596a26.996%2026.996%200%200%200-19.156-5.359C48.549%2037.524%2038.25%2047.946%2036.979%2060.88a27.905%2027.905%200%200%200%20.702%209.642C16.773%2071.145%200%2088.454%200%20109.726c0%201.923.137%203.818.413%205.667c.115.897.879%201.57%201.783%201.568h170.48a2.223%202.223%200%200%200%202.106-1.63'/%3e%3c/svg%3e`;

const DEFAULTS = {
  padding: "12px",
  gap: 14,
  rounded: 16,
  cardFill: "rgba(255, 255, 255, 0.04)",
  cardBorder: "rgba(255, 255, 255, 0.14)",
};

const DEFAULT_IMAGES = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", title: "Next.js 16" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React 19" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", title: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", title: "NestJS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", title: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", title: "FastAPI" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", title: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", title: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", title: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", title: "Git" },
];

const NS = "smooth-tech-grid";

const CSS = `
.${NS}-card {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  will-change: transform;
  transform: translateZ(0);
}
.${NS}-card:hover {
  transform: translateY(-5px) scale(1.02);
  background: rgba(255, 255, 255, 0.12) !important;
  border-color: rgba(255, 255, 255, 0.4) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.15) !important;
}
.${NS}-card img {
  opacity: 0.85;
  transition: opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease;
  transform: translateZ(0);
}
.${NS}-card:hover img { 
  opacity: 1;
  transform: scale(1.08);
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
}
`;

interface ImageItem {
  src: string;
  title?: string;
}

interface InteractiveGridProps {
  images?: (ImageItem | string)[];
  padding?: string;
  gap?: number;
  rounded?: number;
  cardFill?: string;
  cardBorder?: string;
  style?: CSSProperties;
}

const srcOf = (image: ImageItem | string): string =>
  typeof image === "string" ? image : (image?.src ?? "");

const titleOf = (image: ImageItem | string): string =>
  typeof image === "string" ? "" : (image?.title ?? "");

export default function InteractiveGrid(props: Partial<InteractiveGridProps>) {
  const {
    images = DEFAULT_IMAGES,
    padding = DEFAULTS.padding,
    gap = DEFAULTS.gap,
    rounded = DEFAULTS.rounded,
    cardFill = DEFAULTS.cardFill,
    cardBorder = DEFAULTS.cardBorder,
    style,
  } = props;

  const items = useMemo(() => {
    const list = (images ?? []).filter(Boolean);
    return list.length ? list : DEFAULT_IMAGES;
  }, [images]);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div
      style={{
        ...style,
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding,
        boxSizing: "border-box",
      }}
    >
      <style>{CSS}</style>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap,
          width: "100%",
        }}
      >
        {items.map((item, i) => {
          const src = srcOf(item) || DEFAULT_LOGO;
          const title = titleOf(item);
          const isHovered = hoveredIdx === i;

          return (
            <div
              key={title || `${src}-${i}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`${NS}-card`}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 10px",
                background: cardFill,
                border: `1px solid ${cardBorder}`,
                borderRadius: rounded,
                boxSizing: "border-box",
                minWidth: 0,
                minHeight: "105px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img
                src={src}
                alt={title}
                draggable={false}
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
              {title && (
                <span
                  className="font-mono"
                  style={{
                    fontSize: "0.74rem",
                    color: isHovered ? "#FFFFFF" : "#CBD5E1",
                    marginTop: "8px",
                    textAlign: "center",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    transition: "color 0.25s ease",
                  }}
                >
                  {title}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
