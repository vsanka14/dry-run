import React from "react";
import { Carousel } from "../../../../components/Carousel";

// Arrow component
const Arrow = () => (
  <div className="text-2xl font-black text-on-primary">↓</div>
);

// Reusable slot component - neo-brutalism style
const Slot = ({ value, color, filled, active }) => {
  const getColorClass = (colorName) => {
    const colorMap = {
      accent1: "var(--color-accent-cyan)",
      accent2: "var(--color-accent-magenta)",
      accent3: "var(--color-accent-green)",
    };
    return colorMap[colorName] || "var(--color-muted)";
  };

  const getBgColor = (colorName) => {
    const colorMap = {
      accent1: "var(--color-accent-cyan)",
      accent2: "var(--color-accent-magenta)",
      accent3: "var(--color-accent-green)",
    };
    return colorMap[colorName] || "transparent";
  };

  const colorValue = getColorClass(color);
  const bgColor = filled ? getBgColor(color) : "var(--color-primary)";

  return (
    <span
      className={`inline-flex items-center justify-center font-black transition-all duration-200 w-8 h-8 text-sm border-3 border-on-primary ${
        active ? "scale-110 rotate-3" : "scale-100"
      }`}
      style={{
        backgroundColor: bgColor,
        color: filled ? "var(--color-on-primary)" : "var(--color-muted)",
        boxShadow: active
          ? "3px 3px 0px var(--color-on-primary)"
          : "2px 2px 0px var(--color-on-primary)",
      }}
    >
      {value}
    </span>
  );
};

// Step 1: First argument
const CurriedStepA = () => (
  <div className="flex flex-col items-center gap-4 animate-fadeIn">
    {/* Function call */}
    <div className="flex items-center gap-2 text-base font-mono font-bold">
      <span className="text-on-primary">curriedAdd</span>
      <span className="text-on-primary">(</span>
      <Slot value="2" color="accent1" filled active />
      <span className="text-on-primary">)</span>
    </div>

    <Arrow />

    {/* Returned function */}
    <div className="flex flex-col items-center gap-2">
      <span className="text-sm font-bold uppercase tracking-wider text-on-secondary">
        Returns a new function:
      </span>
      <div className="px-4 py-3 border-3 border-on-primary bg-tertiary font-mono text-sm shadow-[3px_3px_0px_var(--color-on-primary)]">
        <span className="text-on-primary">fn(</span>
        <span className="text-accent-magenta font-bold">b</span>
        <span className="text-on-primary">) =&gt; </span>
        <span className="text-muted">/* waits for b, then c */</span>
      </div>
    </div>

    {/* Memory indicator */}
    <div className="flex items-center gap-2 mt-2 px-4 py-2 bg-accent-cyan border-3 border-on-primary shadow-[2px_2px_0px_var(--color-on-primary)]">
      <span className="text-sm font-black text-on-primary uppercase">
        a = 2 remembered!
      </span>
    </div>
  </div>
);

// Step 2: Second argument
const CurriedStepB = () => (
  <div className="flex flex-col items-center gap-4 animate-fadeIn">
    {/* Chain so far */}
    <div className="flex items-center gap-1 text-base font-mono font-bold">
      <span className="text-on-primary opacity-60">curriedAdd</span>
      <span className="text-on-primary">(</span>
      <Slot value="2" color="accent1" filled />
      <span className="text-on-primary">)</span>
      <span className="text-on-primary">(</span>
      <Slot value="3" color="accent2" filled active />
      <span className="text-on-primary">)</span>
    </div>

    <Arrow />

    {/* Returned function */}
    <div className="flex flex-col items-center gap-2">
      <span className="text-sm font-bold uppercase tracking-wider text-on-secondary">
        Returns another function:
      </span>
      <div className="px-4 py-3 border-3 border-on-primary bg-tertiary font-mono text-sm shadow-[3px_3px_0px_var(--color-on-primary)]">
        <span className="text-on-primary">fn(</span>
        <span className="text-accent-green font-bold">c</span>
        <span className="text-on-primary">) =&gt; </span>
        <span className="text-accent-cyan font-bold">2</span>
        <span className="text-on-primary"> + </span>
        <span className="text-accent-magenta font-bold">3</span>
        <span className="text-on-primary"> + c</span>
      </div>
    </div>

    {/* Memory indicator */}
    <div className="flex items-center gap-3 mt-2">
      <div className="px-3 py-2 bg-accent-cyan border-3 border-on-primary shadow-[2px_2px_0px_var(--color-on-primary)]">
        <span className="text-sm font-black text-on-primary">a = 2</span>
      </div>
      <div className="px-3 py-2 bg-accent-magenta border-3 border-on-primary shadow-[2px_2px_0px_var(--color-on-primary)]">
        <span className="text-sm font-black text-on-primary">b = 3</span>
      </div>
    </div>
  </div>
);

// Step 3: Final argument
const CurriedStepC = () => (
  <div className="flex flex-col items-center gap-4 animate-fadeIn">
    {/* Full chain */}
    <div className="flex items-center gap-1 text-base font-mono font-bold">
      <span className="text-on-primary opacity-60">curriedAdd</span>
      <span className="text-on-primary">(</span>
      <Slot value="2" color="accent1" filled />
      <span className="text-on-primary">)(</span>
      <Slot value="3" color="accent2" filled />
      <span className="text-on-primary">)(</span>
      <Slot value="5" color="accent3" filled active />
      <span className="text-on-primary">)</span>
    </div>

    <Arrow />

    {/* Computation */}
    <div className="flex items-center gap-2 font-mono text-lg font-bold">
      <span className="text-accent-cyan">2</span>
      <span className="text-on-primary">+</span>
      <span className="text-accent-magenta">3</span>
      <span className="text-on-primary">+</span>
      <span className="text-accent-green">5</span>
    </div>

    <Arrow />

    {/* Result */}
    <div className="px-8 py-4 bg-accent-orange border-3 border-on-primary shadow-[4px_4px_0px_var(--color-on-primary)] font-mono text-3xl font-black text-on-primary">
      10
    </div>
  </div>
);

// Regular function visualization (standalone, no carousel)
export const RegularFunctionViz = () => {
  return (
    <div className="border-3 border-on-primary overflow-hidden mb-6 bg-secondary shadow-[4px_4px_0px_var(--color-on-primary)]">
      <div className="px-5 py-4 border-b-3 border-on-primary bg-accent-yellow">
        <h3 className="text-base font-black mb-1 uppercase tracking-tight text-on-primary">
          A Regular Function
        </h3>
        <p className="text-sm font-bold text-on-primary opacity-80">
          Takes all arguments at once
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 animate-fadeIn py-6 px-5 bg-primary">
        {/* Function call */}
        <div className="flex items-center gap-1 text-base font-mono font-bold">
          <span className="text-on-primary">add</span>
          <span className="text-on-primary">(</span>
          <Slot value="2" color="accent1" filled />
          <span className="text-on-primary">,</span>
          <Slot value="3" color="accent2" filled />
          <span className="text-on-primary">,</span>
          <Slot value="5" color="accent3" filled />
          <span className="text-on-primary">)</span>
        </div>

        <Arrow />

        {/* Result */}
        <div className="px-6 py-3 bg-accent-orange border-3 border-on-primary shadow-[3px_3px_0px_var(--color-on-primary)] font-mono text-xl font-black text-on-primary">
          10
        </div>

        <p className="text-sm font-bold text-center max-w-xs text-on-secondary uppercase tracking-wide">
          All three values must be provided together
        </p>
      </div>
    </div>
  );
};

// Curried function carousel (steps 2-4)
export const CurriedCarousel = () => {
  const stepColors = ["bg-accent-cyan", "bg-accent-magenta", "bg-accent-green"];

  const curriedSteps = [
    {
      title: "Pass First Argument",
      description: "Returns a function waiting for 'b'",
      content: <CurriedStepA />,
    },
    {
      title: "Pass Second Argument",
      description: "Returns a function waiting for 'c'",
      content: <CurriedStepB />,
    },
    {
      title: "Pass Final Argument",
      description: "All arguments collected — BOOM! 💥",
      content: <CurriedStepC />,
    },
  ];

  return <Carousel steps={curriedSteps} stepColors={stepColors} />;
};
