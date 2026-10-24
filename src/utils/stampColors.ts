// One pastel per chapter, used by the postage stamps.
export const STAMP_COLORS = [
  "#e3b04b",
  "#9cc3d5",
  "#e8a0b4",
  "#9cb98a",
  "#cfa8e0",
  "#e8836b",
];

export const stampColor = (chapter: number) =>
  STAMP_COLORS[(chapter - 1) % STAMP_COLORS.length];
