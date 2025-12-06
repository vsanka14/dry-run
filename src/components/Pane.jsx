/** @jsxImportSource react */

/**
 * A reusable pane component with a header and content area
 * @param {React.ReactNode} header - Content for the header area
 * @param {React.ReactNode} children - Content for the main area
 * @param {React.ReactNode} footer - Optional content for the footer area
 * @param {string} className - Optional additional CSS classes for the outer container
 * @param {string} contentClassName - Optional additional CSS classes for the content area
 */
export const Pane = ({
  header,
  children,
  footer,
  className = "",
  contentClassName = "",
  ...rest
}) => {
  return (
    <div
      className={`rounded-lg overflow-hidden mb-6 bg-secondary border border-text-muted/30 ${className}`}
      {...rest}
    >
      {/* Header */}
      <div className="px-4 py-2 border-b border-primary/50">{header}</div>

      {/* Content area */}
      <div className={`py-6 px-4 bg-primary flex flex-col ${contentClassName}`}>
        {children}
      </div>

      {/* Optional footer */}
      {footer && (
        <div className="px-4 py-2 bg-secondary border-t border-primary/50">
          {footer}
        </div>
      )}
    </div>
  );
};
