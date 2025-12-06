import type { ReactNode } from "react";

interface PaneProps {
  header: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  contentClassName?: string;
  [key: string]: any;
}

export const Pane = ({
  header,
  children,
  footer,
  className = "",
  contentClassName = "",
  ...rest
}: PaneProps) => {
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
