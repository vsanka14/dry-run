import { Carousel } from "components/Carousel";

// Code line component for dry run
const CodeLine = ({ children, highlight, indent = 0 }) => (
  <div
    className={`font-mono text-xs leading-relaxed transition-all duration-300 ${
      highlight ? "bg-accent/20 -mx-2 px-2 rounded" : ""
    }`}
    style={{ paddingLeft: `${indent * 1}rem` }}
  >
    {children}
  </div>
);

// Variable badge
const VarBadge = ({ name, value }) => (
  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-code-bg rounded text-xs font-mono">
    <span className="text-text-muted">{name}:</span>
    <span className="text-accent">{value}</span>
  </span>
);

// Full curry function code block - reusable component
const FullCurryCode = ({ highlightLines = [], annotations = {} }) => (
  <div className="bg-code-bg rounded-lg p-3 space-y-0.5 text-xs">
    <CodeLine highlight={highlightLines.includes(1)}>
      <span className="text-text-muted">function</span>{" "}
      <span className="text-text">curry(func)</span>{" "}
      <span className="text-text-muted">{"{"}</span>
      {annotations[1] && (
        <span className="text-accent ml-2">{annotations[1]}</span>
      )}
    </CodeLine>
    <CodeLine indent={1} highlight={highlightLines.includes(2)}>
      <span className="text-text-muted">return function</span>{" "}
      <span className="text-text">curried(...args)</span>{" "}
      <span className="text-text-muted">{"{"}</span>
      {annotations[2] && (
        <span className="text-accent ml-2">{annotations[2]}</span>
      )}
    </CodeLine>
    <CodeLine indent={2} highlight={highlightLines.includes(3)}>
      <span className="text-text-muted">if (</span>
      <span className="text-text">args.length</span>{" "}
      <span className="text-text-muted">&gt;=</span>{" "}
      <span className="text-text">func.length</span>
      <span className="text-text-muted">)</span>
      {annotations[3] && (
        <span className="text-accent ml-2">{annotations[3]}</span>
      )}
    </CodeLine>
    <CodeLine indent={3} highlight={highlightLines.includes(4)}>
      <span className="text-text-muted">return</span>{" "}
      <span className="text-text">func.apply(this, args)</span>
      {annotations[4] && (
        <span className="text-accent ml-2">{annotations[4]}</span>
      )}
    </CodeLine>
    <CodeLine indent={2} highlight={highlightLines.includes(5)}>
      <span className="text-text-muted">else</span>
    </CodeLine>
    <CodeLine indent={3} highlight={highlightLines.includes(6)}>
      <span className="text-text-muted">return function</span>{" "}
      <span className="text-text">(...args2)</span>{" "}
      <span className="text-text-muted">{"{"}</span>
      {annotations[6] && (
        <span className="text-accent ml-2">{annotations[6]}</span>
      )}
    </CodeLine>
    <CodeLine indent={4} highlight={highlightLines.includes(7)}>
      <span className="text-text-muted">return</span>{" "}
      <span className="text-text">curried(...args.concat(args2))</span>
      {annotations[7] && (
        <span className="text-accent ml-2">{annotations[7]}</span>
      )}
    </CodeLine>
    <CodeLine indent={3}>
      <span className="text-text-muted">{"}"}</span>
    </CodeLine>
    <CodeLine indent={1}>
      <span className="text-text-muted">{"}"}</span>
    </CodeLine>
    <CodeLine>
      <span className="text-text-muted">{"}"}</span>
    </CodeLine>
  </div>
);

// Dry run step 1: Setup
const DryRunStep1 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      First, we define our function and curry it:
    </div>
    <div className="bg-code-bg rounded-lg p-3 space-y-1 text-xs">
      <CodeLine highlight>
        <span className="text-text-muted">const</span>{" "}
        <span className="text-text">_add</span>{" "}
        <span className="text-text-muted">=</span>{" "}
        <span className="text-text">(a, b, c)</span>{" "}
        <span className="text-text-muted">=&gt;</span>{" "}
        <span className="text-text">a + b + c</span>
        <span className="text-accent ml-2">← 3 params</span>
      </CodeLine>
      <CodeLine highlight>
        <span className="text-text-muted">const</span>{" "}
        <span className="text-accent">add</span>{" "}
        <span className="text-text-muted">=</span>{" "}
        <span className="text-text">curry(_add)</span>
        <span className="text-accent ml-2">← wrap it</span>
      </CodeLine>
    </div>
    <FullCurryCode
      highlightLines={[1, 2]}
      annotations={{ 1: "← called with _add", 2: "← returns this" }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="_add.length" value="3" />
      <VarBadge name="add" value="curried fn" />
    </div>
  </div>
);

// Dry run step 2: First call add(1)
const DryRunStep2 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm font-mono">
      <span className="text-accent bg-accent/20 px-1 rounded">add(1)</span>
      <span className="text-text-muted">(2)(3)</span>
    </div>
    <FullCurryCode
      highlightLines={[2, 3, 5, 6, 7]}
      annotations={{
        2: "← args = [1]",
        3: "← 1 >= 3? NO",
        6: "← returns this",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="args" value="[1]" />
      <VarBadge name="func.length" value="3" />
      <VarBadge name="1 >= 3" value="false" />
    </div>
    <div className="text-xs text-text-muted">
      Not enough args! Returns a{" "}
      <span className="text-accent">new function</span> that remembers{" "}
      <code className="text-accent">[1]</code> in closure.
    </div>
  </div>
);

// Dry run step 3a: Second call (2) - inner function receives args2
const DryRunStep3a = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm font-mono">
      <span className="text-accent bg-accent/20 px-1 rounded">add(1)(2)</span>
      <span className="text-text-muted">(3)</span>
    </div>
    <FullCurryCode
      highlightLines={[6, 7]}
      annotations={{
        6: "← args2 = [2]",
        7: "← concat: [1] + [2]",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="closure" value="[1]" />
      <VarBadge name="args2" value="[2]" />
    </div>
  </div>
);

// Dry run step 3b: Second call (2) - curried called with combined args
const DryRunStep3b = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm font-mono">
      <span className="text-accent bg-accent/20 px-1 rounded">add(1)(2)</span>
      <span className="text-text-muted">(3)</span>
    </div>
    <FullCurryCode
      highlightLines={[2, 3, 5, 6]}
      annotations={{
        2: "← args = [1, 2]",
        3: "← 2 >= 3? NO",
        6: "← returns this",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="args" value="[1, 2]" />
      <VarBadge name="func.length" value="3" />
      <VarBadge name="2 >= 3" value="false" />
    </div>
  </div>
);

// Dry run step 4a: Third call (3) - inner function receives args2
const DryRunStep4a = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm font-mono">
      <span className="text-accent bg-accent/20 px-1 rounded">
        add(1)(2)(3)
      </span>
    </div>
    <FullCurryCode
      highlightLines={[6, 7]}
      annotations={{
        6: "← args2 = [3]",
        7: "← concat: [1,2] + [3]",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="closure" value="[1, 2]" />
      <VarBadge name="args2" value="[3]" />
    </div>
  </div>
);

// Dry run step 4b: Third call (3) - curried called with all args
const DryRunStep4b = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm font-mono">
      <span className="text-accent bg-accent/20 px-1 rounded">
        add(1)(2)(3)
      </span>
    </div>
    <FullCurryCode
      highlightLines={[2, 3, 4]}
      annotations={{
        2: "← args = [1, 2, 3]",
        3: "← 3 >= 3? YES!",
        4: "← _add(1, 2, 3)",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="args" value="[1, 2, 3]" />
      <VarBadge name="func.length" value="3" />
      <VarBadge name="3 >= 3" value="true ✓" />
    </div>
  </div>
);

// Dry run step 5: Result
const DryRunStep5 = () => (
  <div className="flex flex-col h-full justify-between gap-3">
    <div className="text-sm text-text-muted">
      The original function executes:
      <div className="mt-3 bg-code-bg rounded-lg p-3 space-y-1">
        <CodeLine highlight>
          <span className="text-text">_add(1, 2, 3)</span>
        </CodeLine>
        <CodeLine>
          <span className="text-text-muted">↓</span>
        </CodeLine>
        <CodeLine highlight>
          <span className="text-text">1 + 2 + 3</span>
        </CodeLine>
        <CodeLine>
          <span className="text-text-muted">↓</span>
        </CodeLine>
        <CodeLine highlight>
          <span className="text-accent text-lg font-bold">6</span>
        </CodeLine>
      </div>
    </div>
    <div className="mt-2 p-3 bg-accent/10 rounded border border-accent/30">
      <div className="text-sm text-text">
        <span className="font-mono text-accent">add(1)(2)(3)</span> ={" "}
        <span className="font-mono text-accent font-bold">6</span>
      </div>
      <div className="text-xs text-text-muted mt-2">
        Each call either returns a new function (collecting args in closure) or
        executes the original when all args are collected.
      </div>
    </div>
  </div>
);

// Dry run carousel
export const DryRunCarousel = () => {
  const steps = [
    {
      title: "Setup",
      content: <DryRunStep1 />,
    },
    {
      title: "add(1)",
      content: <DryRunStep2 />,
    },
    {
      title: "add(1)(2)",
      content: <DryRunStep3a />,
    },
    {
      title: "add(1)(2) → curried",
      content: <DryRunStep3b />,
    },
    {
      title: "add(1)(2)(3)",
      content: <DryRunStep4a />,
    },
    {
      title: "add(1)(2)(3) → curried",
      content: <DryRunStep4b />,
    },
    {
      title: "Result",
      content: <DryRunStep5 />,
    },
  ];

  return <Carousel steps={steps} contentHeight="h-[500px] md:h-[450px]" />;
};
