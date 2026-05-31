import { tagColor } from "../utils/tagColor";

interface PostProps {
  title: string;
  description: string;
  date: Date;
  slug: string;
  tags?: string[];
}

export const Post = ({
  title,
  description,
  date,
  slug,
  tags = [],
}: PostProps) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <article className="group">
      <a href={`/blog/${slug}`} className="block hover:no-underline">
        <div className="p-4 border border-secondary/60 rounded-lg bg-primary/40 backdrop-blur-md transition-all duration-200 hover:border-accent/40 hover:bg-primary/60">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-lg text-text group-hover:text-accent transition-colors font-semibold">
              {title}
            </h3>
            <time className="text-xs text-text-muted whitespace-nowrap mt-1">
              {formattedDate}
            </time>
          </div>

          <p className="text-sm text-text-muted leading-relaxed mb-4">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded"
                  style={{ backgroundColor: `${tagColor(tag)}33`, color: tagColor(tag) }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </article>
  );
};
