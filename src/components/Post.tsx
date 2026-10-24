import type { CSSProperties } from "react";
import { tagColor } from "../utils/tagColor";
import { toRoman } from "../utils/roman";
import { stampColor } from "../utils/stampColors";

interface PostProps {
  title: string;
  description?: string;
  date: Date;
  slug: string;
  tags?: string[];
  readTime?: number;
  chapter?: number;
}

// A compact storybook card: a tag-colored ribbon on top and a postage-stamp
// chapter numeral.
export const Post = ({
  title,
  description,
  date,
  slug,
  tags = [],
  readTime,
  chapter,
}: PostProps) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
  const colors = tags.length > 0 ? tags.map(tagColor) : ["#e8a0b4"];
  const ribbon = `linear-gradient(90deg, ${colors
    .map((c, i) => `${c} ${(i / colors.length) * 100}% ${((i + 1) / colors.length) * 100}%`)
    .join(", ")})`;

  return (
    <a
      href={`/blog/${slug}`}
      className="group relative flex items-center gap-5 overflow-hidden rounded-md border border-secondary bg-secondary/90 px-5 pt-5 pb-4 text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-text-muted/30 hover:bg-secondary hover:no-underline"
    >
      <span aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ background: ribbon }} />
      {chapter && (
        <span
          aria-hidden
          className="stamp shrink-0"
          style={{ "--stamp-color": stampColor(chapter) } as CSSProperties}
        >
          {toRoman(chapter)}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-sm text-text-muted line-clamp-1">{description}</p>
        )}
        <div className="mt-2.5 flex items-center gap-2 text-[0.7rem] uppercase tracking-wider text-text-muted">
          {tags.length > 0 && (
            <span className="whitespace-nowrap normal-case tracking-normal">
              {tags.map((tag, i) => (
                <span key={tag}>
                  {i > 0 && <span className="text-text-muted/50"> · </span>}
                  <span style={{ color: tagColor(tag) }}>{tag}</span>
                </span>
              ))}
            </span>
          )}
          <span aria-hidden className="flex-1" />
          <time className="whitespace-nowrap">{formattedDate}</time>
          {readTime && (
            <>
              <span aria-hidden className="text-text-muted/50">·</span>
              <span className="whitespace-nowrap">{readTime} min</span>
            </>
          )}
        </div>
      </div>
    </a>
  );
};
