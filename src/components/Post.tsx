import { tagColor } from "../utils/tagColor";

interface PostProps {
  title: string;
  description: string;
  date: Date;
  slug: string;
  tags?: string[];
}

export const Post = ({ title, date, slug, tags = [] }: PostProps) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <div className="flex items-baseline gap-3 py-2">
      <time className="text-xs text-text-muted whitespace-nowrap shrink-0">
        {formattedDate}
      </time>
      <div className="flex-1">
        <a
          href={`/blog/${slug}`}
          className="text-text no-underline hover:text-accent hover:underline underline-offset-4 transition-colors"
        >
          {title}
        </a>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap justify-end gap-2 shrink-0">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded"
              style={{
                backgroundColor: `${tagColor(tag)}33`,
                color: tagColor(tag),
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
