import React, { useState } from "react";
import { Pane } from "./Pane";

/**
 * A reusable carousel component with step navigation
 * @param {Array} steps - Array of step objects with { title, description, content }
 * @param {string} className - Optional additional CSS classes
 * @param {string} contentHeight - Optional height for content area (default: "min-h-[280px]")
 */
export const Carousel = ({
  steps,
  className = "",
  contentHeight = "min-h-[280px]",
}) => {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      next();
    } else if (e.key === "ArrowLeft") {
      prev();
    }
  };

  const header = (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xs text-text-muted">
          {step + 1}/{steps.length}
        </span>
        <span className="text-sm text-text">{steps[step].title}</span>
      </div>
      {/* Navigation inline */}
      <div className="flex items-center gap-1">
        <button
          onClick={prev}
          disabled={step === 0}
          className="px-2 py-1 text-xs text-text-muted hover:text-text transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={step === steps.length - 1}
          className="px-2 py-1 text-xs text-accent hover:text-text transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>
    </div>
  );

  const footer = (
    <div className="flex justify-center gap-1.5">
      {steps.map((_, i) => (
        <button
          key={i}
          onClick={() => setStep(i)}
          className={`h-1.5 rounded-full transition-all duration-200 ${
            i === step ? "w-4 bg-accent" : "w-1.5 bg-text-muted/30"
          }`}
          type="button"
          aria-label={`Step ${i}`}
        />
      ))}
    </div>
  );

  return (
    <Pane
      header={header}
      footer={footer}
      className={`outline-none ${className}`}
      contentClassName={`py-3 px-3 md:py-6 md:px-6 ${contentHeight}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {steps[step].content}
    </Pane>
  );
};
