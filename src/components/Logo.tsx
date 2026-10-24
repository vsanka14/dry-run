interface LogoProps {
  className?: string;
}

const KEYS_ROW_1 = [6.2, 8.6, 11, 13.4, 15.8, 18.2, 20.6, 23];
const KEYS_ROW_2 = [6.2, 8.6, 21.8, 24.2];

// A pastel retro computer. On hover, the code on its screen is traced line by
// line, like a dry run, and the cursor blinks. On a route change, the screen
// changes channel like an old CRT.
export function ComputerIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="5" y="2.5" width="22" height="19.5" rx="2.5" fill="#f2b8c6" />
      <rect x="7.5" y="5" width="17" height="11.5" rx="1.6" fill="#7d5a8c" />
      <rect x="8.5" y="6" width="15" height="9.5" rx="1" fill="#120f14" />
      <g className="crt-screen">
        <rect x="8.5" y="6" width="15" height="9.5" rx="1" fill="#241e27" />
        <rect className="code-line code-line-1" x="10" y="7.6" width="7" height="1.3" rx="0.65" fill="#e3b04b" />
        <rect className="code-line code-line-2" x="12" y="10.1" width="8.5" height="1.3" rx="0.65" fill="#9cc3d5" />
        <rect className="code-line code-line-3" x="10" y="12.6" width="5" height="1.3" rx="0.65" fill="#9cb98a" />
        <rect className="code-cursor" x="16" y="12.4" width="1.1" height="1.7" fill="#e8836b" />
        <rect className="crt-glow" x="8.5" y="6" width="15" height="9.5" rx="1" fill="#f1e6dc" opacity="0" />
      </g>
      <rect x="8" y="18.4" width="1.2" height="1.4" fill="#e8836b" />
      <rect x="9.2" y="18.4" width="1.2" height="1.4" fill="#e3b04b" />
      <rect x="10.4" y="18.4" width="1.2" height="1.4" fill="#9cb98a" />
      <rect x="11.6" y="18.4" width="1.2" height="1.4" fill="#9cc3d5" />
      <rect x="18.5" y="18.6" width="6" height="1" rx="0.5" fill="#7d5a8c" />
      <rect x="13" y="22" width="6" height="2" fill="#e8a0b4" />
      <rect x="4" y="24" width="24" height="5.5" rx="1.3" fill="#cfa8e0" />
      {KEYS_ROW_1.map((x) => (
        <rect key={`k1-${x}`} x={x} y="25.1" width="1.8" height="1.3" rx="0.3" fill="#f1e6dc" />
      ))}
      {KEYS_ROW_2.map((x) => (
        <rect key={`k2-${x}`} x={x} y="27.1" width="1.8" height="1.3" rx="0.3" fill="#f1e6dc" />
      ))}
      <rect x="11" y="27.1" width="10.4" height="1.3" rx="0.3" fill="#f1e6dc" />
    </svg>
  );
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <a
      href="/"
      className={`font-mono text-3xl font-medium tracking-tight text-text hover:no-underline flex items-center gap-3 group ${className}`}
    >
      <ComputerIcon className="w-12 h-12" />
      <span className="logo-text">
        dry<span className="text-accent">run</span>
      </span>
    </a>
  );
}
