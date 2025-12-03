import React from "react";
import { Carousel } from "../Carousel";

// Arrow component
const Arrow = () => <div className="text-lg text-text-muted">↓</div>;

// Reusable slot component - minimal style
const Slot = ({ value, active }) => {
  return (
    <span
      className={`inline-flex items-center justify-center w-7 h-7 text-sm font-mono rounded border transition-all duration-200 ${
        active
          ? "border-accent text-accent scale-105"
          : "border-text-muted/50 text-text"
      }`}
    >
      {value}
    </span>
  );
};

// Step 1: First argument
const CurriedStepA = () => (
  <div className="flex flex-col items-center gap-4">
    {/* Function call */}
    <div className="flex items-center gap-1.5 text-sm font-mono">
      <span className="text-text-muted">curriedAdd</span>
      <span className="text-text-muted">(</span>
      <Slot value="2" active />
      <span className="text-text-muted">)</span>
    </div>

    <Arrow />

    {/* Returned function */}
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs text-text-muted uppercase tracking-wider">
        Returns:
      </span>
      <div className="px-3 py-2 bg-secondary rounded font-mono text-xs">
        <span className="text-text">fn(</span>
        <span className="text-accent font-medium">b</span>
        <span className="text-text">) =&gt; </span>
        <span className="text-text-muted">/* waits for b, c */</span>
      </div>
    </div>

    {/* Memory indicator */}
    <div className="px-2 py-1 bg-secondary rounded text-xs text-accent">
      a = 2
    </div>
  </div>
);

// Step 2: Second argument
const CurriedStepB = () => (
  <div className="flex flex-col items-center gap-4">
    {/* Chain so far */}
    <div className="flex items-center gap-1 text-sm font-mono">
      <span className="text-text-muted opacity-60">curriedAdd</span>
      <span className="text-text-muted">(</span>
      <Slot value="2" />
      <span className="text-text-muted">)(</span>
      <Slot value="3" active />
      <span className="text-text-muted">)</span>
    </div>

    <Arrow />

    {/* Returned function */}
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs text-text-muted uppercase tracking-wider">
        Returns:
      </span>
      <div className="px-3 py-2 bg-secondary rounded font-mono text-xs">
        <span className="text-text">fn(</span>
        <span className="text-accent font-medium">c</span>
        <span className="text-text">) =&gt; </span>
        <span className="text-text-muted">2 + 3 + c</span>
      </div>
    </div>

    {/* Memory indicator */}
    <div className="flex items-center gap-1.5">
      <div className="px-2 py-1 bg-secondary rounded text-xs text-text-muted">
        a = 2
      </div>
      <div className="px-2 py-1 bg-secondary rounded text-xs text-text-muted">
        b = 3
      </div>
    </div>
  </div>
);

// Step 3: Final argument
const CurriedStepC = () => (
  <div className="flex flex-col items-center gap-4">
    {/* Full chain */}
    <div className="flex items-center gap-1 text-sm font-mono">
      <span className="text-text-muted opacity-60">curriedAdd</span>
      <span className="text-text-muted">(</span>
      <Slot value="2" />
      <span className="text-text-muted">)(</span>
      <Slot value="3" />
      <span className="text-text-muted">)(</span>
      <Slot value="5" active />
      <span className="text-text-muted">)</span>
    </div>

    <Arrow />

    {/* Computation */}
    <div className="flex items-center gap-1.5 font-mono text-sm text-text-muted">
      <span>2</span>
      <span>+</span>
      <span>3</span>
      <span>+</span>
      <span>5</span>
    </div>

    <Arrow />

    {/* Result */}
    <div className="px-4 py-2 bg-secondary rounded font-mono text-xl font-medium text-accent">
      10
    </div>
  </div>
);

// Regular function visualization (standalone, no carousel)
export const RegularFunctionViz = () => {
  return (
    <div className="rounded-lg overflow-hidden mb-6 bg-secondary border border-text-muted/30">
      <div className="px-4 py-2 border-b border-primary/50 flex items-center gap-2">
        <span className="text-sm text-text">Regular Function</span>
        <span className="text-xs text-text-muted">— all args at once</span>
      </div>
      <div className="flex flex-col items-center gap-4 py-6 px-4 bg-primary">
        {/* Function call */}
        <div className="flex items-center gap-1 text-sm font-mono">
          <span className="text-text-muted">add</span>
          <span className="text-text-muted">(</span>
          <Slot value="2" />
          <span className="text-text-muted">,</span>
          <Slot value="3" />
          <span className="text-text-muted">,</span>
          <Slot value="5" />
          <span className="text-text-muted">)</span>
        </div>

        <Arrow />

        {/* Result */}
        <div className="px-4 py-2 bg-secondary rounded font-mono text-xl font-medium text-accent">
          10
        </div>
      </div>
    </div>
  );
};

// Curried function carousel
export const CurriedCarousel = () => {
  const curriedSteps = [
    {
      title: "First Argument",
      content: <CurriedStepA />,
    },
    {
      title: "Second Argument",
      content: <CurriedStepB />,
    },
    {
      title: "Final Argument",
      content: <CurriedStepC />,
    },
  ];

  return <Carousel steps={curriedSteps} />;
};
