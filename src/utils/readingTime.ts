// Estimate reading time (in minutes) from a post's raw markdown/MDX body.
// Strips code fences, MDX import/export lines, and markup so the word count
// reflects prose, then rounds at an average reading pace.
const WORDS_PER_MINUTE = 200;

export function readingTime(body: string): number {
  const prose = body
    .replace(/```[\s\S]*?```/g, "") // fenced code blocks
    .replace(/`[^`]*`/g, "") // inline code
    .replace(/^(import|export)\s.*$/gm, "") // MDX import/export statements
    .replace(/<[^>]+>/g, "") // JSX/HTML tags
    .replace(/[#>*_~\[\]()!`-]/g, " "); // markdown punctuation

  const words = prose.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
