// Per-tag chip colors drawn from a Wes Anderson storybook palette. Tones are
// light enough to read on the dark background, and distinct from each other.
const PALETTE = [
  "#9cc3d5", // powder blue
  "#9cb98a", // sage
  "#e3b04b", // mustard
  "#e8a0b4", // Mendl's pink
  "#cfa8e0", // lobby-boy plum
  "#7fc4bd", // teal
  "#e8836b", // burnt orange
  "#d99aa5", // dusty rose
];

// Stable assignments for the tags in use; everything else falls back to a
// deterministic hash so new tags get a consistent color without manual mapping.
const KNOWN: Record<string, string> = {
  tooling: "#9cc3d5", // powder blue
  terminal: "#9cb98a", // sage
  javascript: "#e3b04b", // mustard
  ai: "#e8a0b4", // Mendl's pink
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
