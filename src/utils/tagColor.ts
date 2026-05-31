// Per-tag chip colors drawn from the Tokyo Night accent palette, so tags read
// as distinct from each other (and from the site's purple accent).
const PALETTE = [
  "#7aa2f7", // blue
  "#9ece6a", // green
  "#7dcfff", // cyan
  "#ff9e64", // orange
  "#f7768e", // red
  "#e0af68", // yellow
  "#2ac3de", // teal
  "#bb9af7", // purple
];

// Stable assignments for the tags in use; everything else falls back to a
// deterministic hash so new tags get a consistent color without manual mapping.
const KNOWN: Record<string, string> = {
  tooling: "#7aa2f7", // blue
  terminal: "#9ece6a", // green
  javascript: "#e0af68", // yellow
  ai: "#f7768e", //red
};

export function tagColor(tag: string): string {
  const key = tag.toLowerCase();
  if (KNOWN[key]) return KNOWN[key];
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return PALETTE[hash % PALETTE.length];
}
