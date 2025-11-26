import React, { useState } from "react";

/**
 * A reusable carousel component with step navigation
 * @param {Array} steps - Array of step objects with { title, description, content }
 * @param {Array} stepColors - Optional array of background color classes for each step header
 * @param {string} className - Optional additional CSS classes
 */
export const Carousel = ({ steps, stepColors, className = "" }) => {
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

  // Default step colors if not provided
  const defaultStepColors = [
    "bg-accent-cyan",
    "bg-accent-magenta",
    "bg-accent-green",
  ];
  const colors = stepColors || defaultStepColors.slice(0, steps.length);

  return (
    <div
      className={`border-3 border-on-primary overflow-hidden mb-6 bg-secondary shadow-[4px_4px_0px_var(--color-on-primary)] outline-none ${className}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Step title */}
      <div
        className={`px-5 py-4 border-b-3 border-on-primary ${
          colors[step] || colors[0]
        } transition-colors duration-300`}
      >
        <p className="text-xs font-black uppercase tracking-widest mb-1 text-on-primary opacity-80">
          Step {step + 1} of {steps.length}
        </p>
        <h3 className="text-base font-black uppercase tracking-tight text-on-primary">
          {steps[step].title}
        </h3>
        {steps[step].description && (
          <p className="text-sm font-bold mt-1 text-on-primary opacity-80">
            {steps[step].description}
          </p>
        )}
      </div>

      {/* Content area */}
      <div className="py-8 px-5 flex flex-col items-center justify-center min-h-[240px] bg-primary">
        {steps[step].content}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-3 px-5 pb-4 bg-primary">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`h-3 border-3 border-on-primary transition-all duration-200 ${
              i === step ? "w-8" : "w-3"
            } ${i === step ? colors[i] || colors[0] : "bg-secondary"}`}
            style={{
              boxShadow:
                i === step ? "2px 2px 0px var(--color-on-primary)" : "none",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="px-5 py-4 border-t-3 border-on-primary flex justify-between items-center bg-tertiary">
        <button
          onClick={prev}
          disabled={step === 0}
          className="px-4 py-2 text-sm font-black uppercase tracking-wider border-3 border-on-primary bg-secondary text-on-primary transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          style={{
            boxShadow:
              step === 0 ? "none" : "2px 2px 0px var(--color-on-primary)",
          }}
        >
          ← Prev
        </button>

        <button
          onClick={next}
          disabled={step === steps.length - 1}
          className={`px-4 py-2 text-sm font-black uppercase tracking-wider border-3 border-on-primary transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
            step === steps.length - 1
              ? "bg-secondary text-muted"
              : "bg-accent-yellow text-on-primary hover:bg-accent-orange"
          }`}
          style={{
            boxShadow:
              step === steps.length - 1
                ? "none"
                : "2px 2px 0px var(--color-on-primary)",
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
};
