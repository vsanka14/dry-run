import React from "react";
import type { ReactNode } from "react";
import { Pane } from "./Pane";

interface CarouselStep {
  title: string;
  description?: string;
  content: ReactNode;
}

interface CarouselProps {
  steps: CarouselStep[];
  className?: string;
  contentHeight?: string;
}

export const Carousel = ({
  steps,
  className = "",
  contentHeight = "min-h-[300px]",
}: CarouselProps) => {
  const [step, setStep] = React.useState(0);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleKeyDown = (e: React.KeyboardEvent) => {
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
          className="px-2 py-1 text-sm text-accent font-bold hover:text-text transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={step === steps.length - 1}
          className="px-2 py-1 text-sm text-accent font-bold hover:text-text transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
          className={`h-2 rounded-full transition-all duration-200 ${
            i === step ? "w-6 bg-accent" : "w-3 bg-text-muted/30"
          }`}
          type="button"
          aria-label={`Step ${i + 1}`}
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
