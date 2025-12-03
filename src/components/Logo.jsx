export function Logo({ className = "" }) {
  return (
    <a
      href="/"
      className={`text-3xl font-extrabold text-text hover:no-underline tracking-wide flex items-center gap-3 group ${className}`}
    >
      <svg
        className="w-7 h-7 text-accent translate-y-[0.1em]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
        <line x1="6" y1="7" x2="14" y2="7" className="code-line-1"></line>
        <line x1="6" y1="10" x2="11" y2="10" className="code-line-2"></line>
        <line x1="6" y1="13" x2="16" y2="13" className="code-line-3"></line>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
      <span className="logo-text">dryrun</span>
    </a>
  );
}
