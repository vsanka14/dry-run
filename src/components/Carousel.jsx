import React, { useState } from "react";

/**
 * A reusable carousel component with step navigation
 * @param {Array} steps - Array of step objects with { title, description, content }
 * @param {string} className - Optional additional CSS classes
 * @param {string} contentHeight - Optional height for content area (default: "min-h-[280px]")
 */
export const Carousel = ({ steps, className = "", contentHeight = "min-h-[280px]" }) => {
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

  return (
    <div
      className={`rounded-lg overflow-hidden mb-6 bg-secondary outline-none border border-text-muted/30 ${className}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Step header - compact */}
      <div className="px-4 py-2 border-b border-primary/50 flex items-center justify-between">
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

      {/* Content area */}
      <div className={`py-6 px-6 bg-primary ${contentHeight}`}>
        {steps[step].content}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 px-4 py-2 bg-secondary border-t border-primary/50">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === step ? "w-4 bg-accent" : "w-1.5 bg-text-muted/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
