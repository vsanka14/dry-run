import { tagColor } from "../utils/tagColor";

interface PostProps {
  title: string;
  description: string;
  date: Date;
  slug: string;
  tags?: string[];
  readTime?: number;
}

export const Post = ({ title, date, slug, tags = [], readTime }: PostProps) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <div className="flex items-baseline gap-2.5 py-2">
      <span aria-hidden className="text-xs text-accent select-none leading-none">
        ❯
      </span>
      <div className="flex flex-col gap-1.5">
        <a
          href={`/blog/${slug}`}
          className="text-text no-underline hover:text-accent hover:underline underline-offset-4 transition-colors"
        >
          {title}
        </a>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
          <time className="text-xs text-text-muted whitespace-nowrap">
            {formattedDate}
          </time>
          {readTime && (
            <span className="text-xs text-text-muted whitespace-nowrap">
              {readTime} min read
            </span>
          )}
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded"
              style={{
                backgroundColor: `${tagColor(tag)}33`,
                color: tagColor(tag),
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
