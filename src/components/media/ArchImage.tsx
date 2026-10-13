import Image from "next/image";

export type ArchVariant = "facade" | "lattice" | "towers" | "curtain" | "arcade";

type Props = {
  variant?: ArchVariant;
  /** Approved photograph. When supplied it replaces the architectural placeholder. */
  src?: string;
  alt?: string;
  /** Visible note shown on placeholders, e.g. "Image — approved photography required". */
  label?: string;
  /** Clip the frame to the sheared plane of the brand mark. */
  plane?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  reveal?: boolean;
};

/**
 * Image slot for architectural photography (UAE architecture, interiors, details).
 * No photography has been supplied yet, so slots render abstract architectural
 * compositions in the brand palette, clearly labelled as placeholders.
 */
export function ArchImage({
  variant = "facade",
  src,
  alt = "",
  label,
  plane = false,
  priority,
  sizes = "100vw",
  className = "",
  reveal = true,
}: Props) {
  return (
    <figure
      className={`arch ${plane ? "arch--plane" : ""} ${className}`}
      data-reveal={reveal ? "clip" : undefined}
      data-variant={variant}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="arch__img" />
      ) : (
        <>
          <ArchSvg variant={variant} />
          {label && <figcaption className="arch__label">[{label}]</figcaption>}
        </>
      )}
    </figure>
  );
}

const N = (n: number) => Array.from({ length: n }, (_, i) => i);
// Deterministic pseudo-variation (no Math.random → no hydration mismatch).
const wave = (i: number, a = 1) => (Math.sin(i * 12.9898 * a) * 43758.5453) % 1;
const v = (i: number, a = 1) => Math.abs(wave(i, a));

function ArchSvg({ variant }: { variant: ArchVariant }) {
  const common = {
    className: "arch__svg",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid slice",
    "aria-hidden": true as const,
    focusable: "false" as const,
  };

  if (variant === "lattice") {
    // Mashrabiya-inspired lattice: an eight-point star tiling.
    const s = 64;
    return (
      <svg viewBox="0 0 640 800" {...common}>
        <defs>
          <pattern id="arch-lattice" width={s} height={s} patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#97B5C9" strokeWidth="1.1" opacity="0.55">
              <rect x="14" y="14" width="36" height="36" />
              <rect x="14" y="14" width="36" height="36" transform="rotate(45 32 32)" />
              <circle cx="32" cy="32" r="6" />
              <path d="M0 0L14 14M64 0L50 14M0 64L14 50M64 64L50 50" />
            </g>
          </pattern>
          <radialGradient id="arch-lattice-light" cx="72%" cy="28%" r="80%">
            <stop offset="0" stopColor="#486479" />
            <stop offset="1" stopColor="#1d2632" />
          </radialGradient>
        </defs>
        <rect width="640" height="800" fill="url(#arch-lattice-light)" />
        <rect width="640" height="800" fill="url(#arch-lattice)" />
        <rect x="0" y="0" width="640" height="800" fill="#293545" opacity="0.18" />
      </svg>
    );
  }

  if (variant === "towers") {
    const towers = N(13).map((i) => {
      const w = 26 + v(i, 1.7) * 44;
      const h = 170 + v(i, 2.3) * 300;
      return { i, w, h };
    });
    let x = -10;
    return (
      <svg viewBox="0 0 800 600" {...common}>
        <defs>
          <linearGradient id="arch-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E6E5E1" />
            <stop offset="1" stopColor="#ADB2B5" />
          </linearGradient>
          <pattern id="arch-windows" width="6" height="9" patternUnits="userSpaceOnUse">
            <rect width="6" height="1" fill="#E6E5E1" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="800" height="600" fill="url(#arch-sky)" />
        {/* distant layer */}
        {N(18).map((i) => {
          const w = 30 + v(i, 3.1) * 40;
          const h = 90 + v(i, 4.7) * 150;
          const xx = i * 46 - 20;
          return <rect key={`d${i}`} x={xx} y={600 - h - 40} width={w} height={h + 40} fill="#ADB2B5" opacity="0.9" />;
        })}
        {/* the slender central tower */}
        <g fill="#486479">
          <rect x="452" y="96" width="34" height="504" />
          <rect x="460" y="40" width="18" height="60" />
          <rect x="466" y="0" width="6" height="44" />
          <rect x="440" y="230" width="58" height="370" />
        </g>
        <rect x="440" y="96" width="58" height="504" fill="url(#arch-windows)" />
        {towers.map(({ i, w, h }) => {
          const tx = x;
          x += w + 6 + v(i, 5.3) * 12;
          if (tx > 420 && tx < 510) return null;
          return (
            <g key={i}>
              <rect x={tx} y={600 - h} width={w} height={h} fill={i % 3 === 0 ? "#293545" : "#486479"} />
              <rect x={tx} y={600 - h} width={w} height={h} fill="url(#arch-windows)" />
            </g>
          );
        })}
        <rect y="560" width="800" height="40" fill="#293545" />
      </svg>
    );
  }

  if (variant === "curtain") {
    return (
      <svg viewBox="0 0 600 750" {...common}>
        <defs>
          <linearGradient id="arch-glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#97B5C9" />
            <stop offset="0.55" stopColor="#486479" />
            <stop offset="1" stopColor="#293545" />
          </linearGradient>
        </defs>
        <rect width="600" height="750" fill="url(#arch-glass)" />
        <polygon points="0,180 600,0 600,120 0,330" fill="#E6E5E1" opacity="0.10" />
        <polygon points="0,470 600,300 600,340 0,520" fill="#E6E5E1" opacity="0.07" />
        <g stroke="#293545" strokeWidth="3" opacity="0.75">
          {N(9).map((i) => (
            <line key={`v${i}`} x1={i * 75} y1="0" x2={i * 75} y2="750" />
          ))}
        </g>
        <g stroke="#293545" strokeWidth="2" opacity="0.55">
          {N(12).map((i) => (
            <line key={`h${i}`} x1="0" y1={i * 68} x2="600" y2={i * 68} />
          ))}
        </g>
      </svg>
    );
  }

  if (variant === "arcade") {
    return (
      <svg viewBox="0 0 800 600" {...common}>
        <rect width="800" height="600" fill="#ADB2B5" />
        <rect y="470" width="800" height="130" fill="#E6E5E1" opacity="0.55" />
        {N(6).map((i) => {
          const x = 40 + i * 130;
          return (
            <g key={i}>
              <path
                d={`M${x} 470 V220 Q${x} 140 ${x + 45} 120 Q${x + 90} 140 ${x + 90} 220 V470 Z`}
                fill="#293545"
                opacity={0.92 - i * 0.06}
              />
              <rect x={x + 90} y="110" width="40" height="360" fill="#E6E5E1" opacity="0.85" />
            </g>
          );
        })}
        <rect y="90" width="800" height="22" fill="#E6E5E1" opacity="0.9" />
        <polygon points="0,600 800,470 800,600" fill="#486479" opacity="0.25" />
      </svg>
    );
  }

  // facade — vertical fins of a contemporary tower
  return (
    <svg viewBox="0 0 600 800" {...common}>
      <defs>
        <linearGradient id="arch-facade" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#486479" />
          <stop offset="1" stopColor="#1f2935" />
        </linearGradient>
        <linearGradient id="arch-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E6E5E1" stopOpacity="0" />
          <stop offset="0.5" stopColor="#E6E5E1" stopOpacity="0.16" />
          <stop offset="1" stopColor="#E6E5E1" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#arch-facade)" />
      {N(34).map((i) => {
        const x = i * 18 + (i % 4) * 2;
        const w = 4 + v(i, 1.3) * 5;
        return <rect key={i} x={x} y="0" width={w} height="800" fill="#97B5C9" opacity={0.12 + v(i, 2.1) * 0.28} />;
      })}
      <g stroke="#E6E5E1" strokeWidth="1" opacity="0.12">
        {N(14).map((i) => (
          <line key={i} x1="0" y1={i * 60 + 20} x2="600" y2={i * 60 + 20} />
        ))}
      </g>
      <polygon points="120,0 330,0 160,800 -50,800" fill="url(#arch-sweep)" />
    </svg>
  );
}
