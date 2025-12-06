import { Carousel } from "components/Carousel";
import { Arrow } from "components/Arrow";
import { Slot } from "components/Slot";

// Step 1: First argument
const CurriedStepA = () => (
  <div className="flex flex-col items-center gap-4">
    {/* Function call */}
    <div className="flex items-center gap-1.5 text-sm font-mono">
      <span className="text-text-muted">add</span>
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
      <span className="text-text-muted opacity-60">add</span>
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

// Step 3: Final argument captured
const CurriedStepC = () => (
  <div className="flex flex-col items-center gap-4">
    {/* Full chain */}
    <div className="flex items-center gap-1 text-sm font-mono">
      <span className="text-text-muted opacity-60">add</span>
      <span className="text-text-muted">(</span>
      <Slot value="2" />
      <span className="text-text-muted">)(</span>
      <Slot value="3" />
      <span className="text-text-muted">)(</span>
      <Slot value="5" active />
      <span className="text-text-muted">)</span>
    </div>

    <Arrow />

    {/* All values captured */}
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs text-text-muted uppercase tracking-wider">
        All values captured:
      </span>
    </div>

    {/* Memory indicator - all three values */}
    <div className="flex items-center gap-1.5">
      <div className="px-2 py-1 bg-secondary rounded text-xs text-text-muted">
        a = 2
      </div>
      <div className="px-2 py-1 bg-secondary rounded text-xs text-text-muted">
        b = 3
      </div>
      <div className="px-2 py-1 bg-secondary rounded text-xs text-accent">
        c = 5
      </div>
    </div>
  </div>
);

// Step 4: Computation
const CurriedStepD = () => (
  <div className="flex flex-col items-center gap-4">
    {/* All values available */}
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs text-text-muted uppercase tracking-wider">
        Now we can compute:
      </span>
      <div className="px-3 py-2 bg-secondary rounded font-mono text-xs">
        <span className="text-text">a + b + c</span>
      </div>
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

// Curried function carousel
export const CurriedCarousel = () => {
  const curriedSteps = [
    {
      title: "Curried Function: Pass first Argument",
      content: <CurriedStepA />,
    },
    {
      title: "Curried Function: Pass second Argument",
      content: <CurriedStepB />,
    },
    {
      title: "Curried Function: Pass third Argument",
      content: <CurriedStepC />,
    },
    {
      title: "Curried Function: Compute the result",
      content: <CurriedStepD />,
    },
  ];

  return <Carousel steps={curriedSteps} />;
};
