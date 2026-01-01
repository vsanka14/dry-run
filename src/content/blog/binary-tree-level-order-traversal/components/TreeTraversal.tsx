import type { ReactNode } from "react";
import { Carousel } from "components/Carousel";

type NodeState = "default" | "queued" | "current" | "visited";

interface TreeNodeProps {
  value: number | null;
  state: NodeState;
}

const TreeNode = ({ value, state }: TreeNodeProps) => {
  if (value === null) {
    return <div className="w-8 h-8 md:w-10 md:h-10" />;
  }

  const stateStyles: Record<NodeState, string> = {
    default: "bg-secondary border-text-muted/50 text-text",
    queued: "bg-accent/20 border-accent text-text",
    current:
      "bg-accent border-accent text-primary scale-110 shadow-lg shadow-accent/30",
    visited: "bg-secondary/50 border-text-muted/30 text-text-muted",
  };

  return (
    <div
      className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center 
        font-mono text-sm md:text-base font-bold transition-all duration-300 ${stateStyles[state]}`}
    >
      {value}
    </div>
  );
};

interface QueueDisplayProps {
  values: number[];
  label?: string;
}

const QueueDisplay = ({ values, label = "Queue" }: QueueDisplayProps) => (
  <div className="flex items-center gap-2 flex-wrap">
    <span className="text-xs text-text-muted">{label}:</span>
    <div className="flex gap-1">
      {values.length === 0 ? (
        <span className="text-xs text-text-muted italic">empty</span>
      ) : (
        values.map((val, i) => (
          <span
            key={i}
            className="px-2 py-0.5 bg-accent/20 border border-accent/50 rounded text-xs font-mono text-accent"
          >
            {val}
          </span>
        ))
      )}
    </div>
  </div>
);

interface ResultDisplayProps {
  levels: number[][];
}

const ResultDisplay = ({ levels }: ResultDisplayProps) => (
  <div className="flex items-center gap-2 flex-wrap">
    <span className="text-xs text-text-muted">Result:</span>
    <span className="font-mono text-xs text-text">
      [
      {levels.map((level, i) => (
        <span key={i}>
          {i > 0 && ", "}
          <span className="text-accent">[{level.join(", ")}]</span>
        </span>
      ))}
      ]
    </span>
  </div>
);

interface TreeVisualizationProps {
  nodeStates: Record<number, NodeState>;
}

const TreeVisualization = ({ nodeStates }: TreeVisualizationProps) => {
  const getState = (val: number): NodeState => nodeStates[val] || "default";

  return (
    <div className="flex flex-col items-center gap-1 md:gap-2">
      {/* Level 0: Root */}
      <div className="flex justify-center">
        <TreeNode value={3} state={getState(3)} />
      </div>

      {/* Connector lines for level 0 -> 1 */}
      <div className="flex justify-center w-full">
        <div className="relative w-20 md:w-28 h-4 md:h-6">
          {/* Left branch */}
          <div className="absolute left-1/2 top-0 w-1/2 h-full border-l-2 border-b-2 border-text-muted/30 rounded-bl-lg -translate-x-full" />
          {/* Right branch */}
          <div className="absolute left-1/2 top-0 w-1/2 h-full border-r-2 border-b-2 border-text-muted/30 rounded-br-lg" />
        </div>
      </div>

      {/* Level 1: 9 and 20 */}
      <div className="flex justify-center gap-12 md:gap-20">
        <TreeNode value={9} state={getState(9)} />
        <TreeNode value={20} state={getState(20)} />
      </div>

      {/* Connector lines for level 1 -> 2 (only from 20) */}
      <div className="flex justify-center w-full">
        <div className="flex gap-12 md:gap-20">
          {/* Empty space under 9 */}
          <div className="w-8 md:w-10 h-4 md:h-6" />
          {/* Branches under 20 */}
          <div className="relative w-12 md:w-16 h-4 md:h-6">
            <div className="absolute left-1/2 top-0 w-1/2 h-full border-l-2 border-b-2 border-text-muted/30 rounded-bl-lg -translate-x-full" />
            <div className="absolute left-1/2 top-0 w-1/2 h-full border-r-2 border-b-2 border-text-muted/30 rounded-br-lg" />
          </div>
        </div>
      </div>

      {/* Level 2: 15 and 7 (children of 20) */}
      <div className="flex justify-center">
        <div className="flex gap-12 md:gap-20">
          {/* Empty space under 9 */}
          <div className="w-8 md:w-10" />
          {/* 15 and 7 under 20 */}
          <div className="flex gap-2 md:gap-4">
            <TreeNode value={15} state={getState(15)} />
            <TreeNode value={7} state={getState(7)} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Step 1: Start
const Step1 = () => (
  <div className="flex flex-col gap-4 h-full">
    <div className="text-sm text-text-muted">
      Initialize the queue with the root node. We'll process nodes level by
      level.
    </div>
    <div className="flex-grow flex items-center justify-center">
      <TreeVisualization nodeStates={{ 3: "queued" }} />
    </div>
    <div className="space-y-2 pt-2 border-t border-text-muted/20">
      <QueueDisplay values={[3]} />
      <ResultDisplay levels={[]} />
    </div>
  </div>
);

// Step 2: Visit 3
const Step2 = () => (
  <div className="flex flex-col gap-4 h-full">
    <div className="text-sm text-text-muted">
      Dequeue <span className="text-accent font-mono">3</span>. Add its value to
      the current level. Enqueue its children{" "}
      <span className="text-accent font-mono">9</span> and{" "}
      <span className="text-accent font-mono">20</span>.
    </div>
    <div className="flex-grow flex items-center justify-center">
      <TreeVisualization
        nodeStates={{ 3: "current", 9: "queued", 20: "queued" }}
      />
    </div>
    <div className="space-y-2 pt-2 border-t border-text-muted/20">
      <QueueDisplay values={[9, 20]} />
      <ResultDisplay levels={[[3]]} />
    </div>
  </div>
);

// Step 3: Visit 9
const Step3 = () => (
  <div className="flex flex-col gap-4 h-full">
    <div className="text-sm text-text-muted">
      Dequeue <span className="text-accent font-mono">9</span>. Add its value to
      the current level. No children to enqueue.
    </div>
    <div className="flex-grow flex items-center justify-center">
      <TreeVisualization
        nodeStates={{ 3: "visited", 9: "current", 20: "queued" }}
      />
    </div>
    <div className="space-y-2 pt-2 border-t border-text-muted/20">
      <QueueDisplay values={[20]} />
      <ResultDisplay levels={[[3], [9]]} />
    </div>
  </div>
);

// Step 4: Visit 20
const Step4 = () => (
  <div className="flex flex-col gap-4 h-full">
    <div className="text-sm text-text-muted">
      Dequeue <span className="text-accent font-mono">20</span>. Add its value
      to complete level 1. Enqueue children{" "}
      <span className="text-accent font-mono">15</span> and{" "}
      <span className="text-accent font-mono">7</span>.
    </div>
    <div className="flex-grow flex items-center justify-center">
      <TreeVisualization
        nodeStates={{
          3: "visited",
          9: "visited",
          20: "current",
          15: "queued",
          7: "queued",
        }}
      />
    </div>
    <div className="space-y-2 pt-2 border-t border-text-muted/20">
      <QueueDisplay values={[15, 7]} />
      <ResultDisplay levels={[[3], [9, 20]]} />
    </div>
  </div>
);

// Step 5: Visit 15
const Step5 = () => (
  <div className="flex flex-col gap-4 h-full">
    <div className="text-sm text-text-muted">
      Dequeue <span className="text-accent font-mono">15</span>. Add its value
      to the current level. No children to enqueue.
    </div>
    <div className="flex-grow flex items-center justify-center">
      <TreeVisualization
        nodeStates={{
          3: "visited",
          9: "visited",
          20: "visited",
          15: "current",
          7: "queued",
        }}
      />
    </div>
    <div className="space-y-2 pt-2 border-t border-text-muted/20">
      <QueueDisplay values={[7]} />
      <ResultDisplay levels={[[3], [9, 20], [15]]} />
    </div>
  </div>
);

// Step 6: Visit 7
const Step6 = () => (
  <div className="flex flex-col gap-4 h-full">
    <div className="text-sm text-text-muted">
      Dequeue <span className="text-accent font-mono">7</span>. Add its value to
      complete level 2. No children. Queue is now empty.
    </div>
    <div className="flex-grow flex items-center justify-center">
      <TreeVisualization
        nodeStates={{
          3: "visited",
          9: "visited",
          20: "visited",
          15: "visited",
          7: "current",
        }}
      />
    </div>
    <div className="space-y-2 pt-2 border-t border-text-muted/20">
      <QueueDisplay values={[]} />
      <ResultDisplay levels={[[3], [9, 20], [15, 7]]} />
    </div>
  </div>
);

// Step 7: Complete
const Step7 = () => (
  <div className="flex flex-col gap-4 h-full">
    <div className="text-sm text-text-muted">
      Queue is empty. Traversal complete! All nodes visited level by level.
    </div>
    <div className="flex-grow flex items-center justify-center">
      <TreeVisualization
        nodeStates={{
          3: "visited",
          9: "visited",
          20: "visited",
          15: "visited",
          7: "visited",
        }}
      />
    </div>
    <div className="space-y-2 pt-2 border-t border-text-muted/20">
      <QueueDisplay values={[]} />
      <div className="p-2 bg-accent/10 rounded border border-accent/30">
        <div className="text-sm">
          <span className="text-text-muted">Final Result: </span>
          <span className="font-mono text-accent font-bold">
            [[3], [9, 20], [15, 7]]
          </span>
        </div>
      </div>
    </div>
  </div>
);

export const TreeTraversalCarousel = () => {
  const steps = [
    { title: "Start", content: (<Step1 />) as ReactNode },
    { title: "Visit 3", content: (<Step2 />) as ReactNode },
    { title: "Visit 9", content: (<Step3 />) as ReactNode },
    { title: "Visit 20", content: (<Step4 />) as ReactNode },
    { title: "Visit 15", content: (<Step5 />) as ReactNode },
    { title: "Visit 7", content: (<Step6 />) as ReactNode },
    { title: "Complete", content: (<Step7 />) as ReactNode },
  ];

  return <Carousel steps={steps} contentHeight="h-[420px] md:h-[380px]" />;
};
