import type { Driver } from "../data/grid";

type Props = {
  driver: Driver;
  className?: string;
};

const SHELL_PATH =
  "M200 38 C 285 38 352 92 360 180 L 360 250 C 360 282 348 300 322 312 L 308 318 L 308 332 C 308 340 300 344 290 344 L 110 344 C 100 344 92 340 92 332 L 92 318 L 78 312 C 52 300 40 282 40 250 L 40 180 C 48 92 115 38 200 38 Z";

export function Helmet({ driver, className }: Props) {
  const { primary, secondary, tertiary, visor, pattern } = driver.helmet;
  const id = driver.id;
  const clipId = `clip-${id}`;
  const gradId = `grad-${id}`;
  const visorGradId = `visor-${id}`;
  const shineId = `shine-${id}`;

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={`${driver.firstName} ${driver.lastName} helmet`}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={SHELL_PATH} />
        </clipPath>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={primary} stopOpacity="1" />
          <stop offset="100%" stopColor={primary} stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id={visorGradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={visor} />
          <stop offset="40%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor={visor} />
        </linearGradient>
        <linearGradient id={shineId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Drop shadow */}
      <ellipse cx="200" cy="358" rx="135" ry="10" fill="#000" opacity="0.35" />

      {/* Base shell */}
      <path d={SHELL_PATH} fill={`url(#${gradId})`} />

      {/* Pattern layer, clipped to shell */}
      <g clipPath={`url(#${clipId})`}>
        <PatternLayer pattern={pattern} primary={primary} secondary={secondary} tertiary={tertiary} />
      </g>

      {/* Top intake */}
      <path
        d="M200 50 L 215 70 L 220 95 L 200 100 L 180 95 L 185 70 Z"
        fill="#0a0a0a"
        clipPath={`url(#${clipId})`}
      />

      {/* Visor opening */}
      <path
        d="M70 175 C 70 165 80 160 95 160 L 305 160 C 320 160 330 165 330 175 L 330 220 C 330 230 320 235 305 235 L 95 235 C 80 235 70 230 70 220 Z"
        fill={`url(#${visorGradId})`}
        clipPath={`url(#${clipId})`}
      />

      {/* Visor highlight */}
      <path
        d="M85 168 C 85 165 92 163 100 163 L 195 163 L 175 180 L 85 180 Z"
        fill={`url(#${shineId})`}
        clipPath={`url(#${clipId})`}
      />

      {/* Visor frame */}
      <path
        d="M70 175 C 70 165 80 160 95 160 L 305 160 C 320 160 330 165 330 175 L 330 220 C 330 230 320 235 305 235 L 95 235 C 80 235 70 230 70 220 Z"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="3"
        clipPath={`url(#${clipId})`}
      />

      {/* Side vent */}
      <g clipPath={`url(#${clipId})`}>
        <rect x="55" y="248" width="35" height="8" rx="2" fill="#0a0a0a" />
        <rect x="55" y="262" width="35" height="6" rx="2" fill="#0a0a0a" opacity="0.7" />
      </g>

      {/* Number badge */}
      <g clipPath={`url(#${clipId})`}>
        <circle cx="305" cy="275" r="28" fill="#ffffff" opacity="0.95" />
        <text
          x="305"
          y="286"
          textAnchor="middle"
          fontFamily="var(--font-display, 'Russo One'), sans-serif"
          fontWeight="800"
          fontSize="32"
          fill="#0a0a0a"
        >
          {driver.number}
        </text>
      </g>

      {/* Outer stroke */}
      <path
        d={SHELL_PATH}
        fill="none"
        stroke="#000"
        strokeOpacity="0.45"
        strokeWidth="2"
      />
    </svg>
  );
}

function PatternLayer({
  pattern,
  primary,
  secondary,
  tertiary,
}: {
  pattern: Driver["helmet"]["pattern"];
  primary: string;
  secondary: string;
  tertiary: string;
}) {
  switch (pattern) {
    case "topStripe":
      return (
        <>
          <rect x="0" y="60" width="400" height="55" fill={secondary} />
          <rect x="0" y="115" width="400" height="8" fill={tertiary} />
        </>
      );
    case "splitDiagonal":
      return (
        <>
          <polygon points="0,0 400,0 400,180 0,360" fill={secondary} />
          <rect x="0" y="320" width="400" height="20" fill={tertiary} />
        </>
      );
    case "halfHalf":
      return (
        <>
          <rect x="0" y="0" width="200" height="400" fill={secondary} />
          <rect x="195" y="0" width="10" height="400" fill={tertiary} />
        </>
      );
    case "star":
      return (
        <>
          <rect x="0" y="60" width="400" height="55" fill={secondary} />
          <Star cx={200} cy={90} size={22} fill={tertiary} />
          <Star cx={130} cy={90} size={14} fill={tertiary} opacity={0.85} />
          <Star cx={270} cy={90} size={14} fill={tertiary} opacity={0.85} />
        </>
      );
    case "wave":
      return (
        <>
          <path
            d="M0 110 C 100 80, 200 140, 400 100 L 400 150 C 200 190, 100 130, 0 160 Z"
            fill={secondary}
          />
          <path
            d="M0 145 C 100 115, 200 175, 400 135 L 400 165 C 200 205, 100 165, 0 195 Z"
            fill={tertiary}
            opacity="0.7"
          />
        </>
      );
    case "centerBand":
      return (
        <>
          <rect x="0" y="80" width="400" height="40" fill={secondary} />
          <rect x="0" y="120" width="400" height="6" fill={tertiary} />
          <rect x="0" y="74" width="400" height="6" fill={tertiary} />
        </>
      );
  }
}

function Star({
  cx,
  cy,
  size,
  fill,
  opacity = 1,
}: {
  cx: number;
  cy: number;
  size: number;
  fill: string;
  opacity?: number;
}) {
  const pts: number[][] = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const r = i % 2 === 0 ? size : size * 0.45;
    pts.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
  }
  const points = pts.map(([x, y]) => Math.round(x) + "," + Math.round(y)).join(" ");
  return <polygon points={points} fill={fill} opacity={opacity} />;
}
