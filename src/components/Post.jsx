/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {Date} props.date
 * @param {string} props.slug
 * @param {string[]} [props.tags]
 */
export const Post = ({ title, description, date, slug, tags = [] }) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <article className="group">
      <a href={`/blog/${slug}`} className="block hover:no-underline">
        <div className="p-5 border border-secondary rounded-lg transition-all duration-200 hover:border-accent/40 hover:bg-secondary/20">
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
                  className="text-xs px-2 py-1 bg-accent/20 text-accent rounded"
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
