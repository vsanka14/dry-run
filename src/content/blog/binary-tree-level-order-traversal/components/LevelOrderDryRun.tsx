import type { ReactNode } from "react";
import { Carousel } from "components/Carousel";

interface CodeLineProps {
  children: ReactNode;
  highlight?: boolean;
  indent?: number;
}

const CodeLine = ({ children, highlight, indent = 0 }: CodeLineProps) => (
  <div
    className={`font-mono text-xs leading-relaxed transition-all duration-300 ${
      highlight ? "bg-accent/20 -mx-2 px-2 rounded" : ""
    }`}
    style={{ paddingLeft: `${indent * 0.75}rem` }}
  >
    {children}
  </div>
);

interface VarBadgeProps {
  name: string;
  value: string;
}

const VarBadge = ({ name, value }: VarBadgeProps) => (
  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-code-bg rounded text-xs font-mono">
    <span className="text-text-muted">{name}:</span>
    <span className="text-accent">{value}</span>
  </span>
);

interface FullCodeProps {
  highlightLines?: number[];
  annotations?: Record<number, string>;
}

const FullCode = ({ highlightLines = [], annotations = {} }: FullCodeProps) => (
  <div className="bg-code-bg rounded-lg p-2 md:p-3 space-y-0.5 text-xs overflow-x-auto">
    <CodeLine highlight={highlightLines.includes(1)}>
      <span className="text-text-muted">function</span>{" "}
      <span className="text-text">levelOrder(root)</span>{" "}
      <span className="text-text-muted">{"{"}</span>
      {annotations[1] && (
        <span className="text-accent ml-2">{annotations[1]}</span>
      )}
    </CodeLine>
    <CodeLine indent={1} highlight={highlightLines.includes(2)}>
      <span className="text-text-muted">if</span>{" "}
      <span className="text-text">(!root)</span>{" "}
      <span className="text-text-muted">return</span>{" "}
      <span className="text-text">[]</span>
      {annotations[2] && (
        <span className="text-accent ml-2">{annotations[2]}</span>
      )}
    </CodeLine>
    <CodeLine indent={1} highlight={highlightLines.includes(3)}>
      <span className="text-text-muted">const</span>{" "}
      <span className="text-text">result = []</span>
      {annotations[3] && (
        <span className="text-accent ml-2">{annotations[3]}</span>
      )}
    </CodeLine>
    <CodeLine indent={1} highlight={highlightLines.includes(4)}>
      <span className="text-text-muted">const</span>{" "}
      <span className="text-text">queue = [root]</span>
      {annotations[4] && (
        <span className="text-accent ml-2">{annotations[4]}</span>
      )}
    </CodeLine>
    <CodeLine />
    <CodeLine indent={1} highlight={highlightLines.includes(6)}>
      <span className="text-text-muted">while</span>{" "}
      <span className="text-text">(queue.length {">"} 0)</span>{" "}
      <span className="text-text-muted">{"{"}</span>
      {annotations[6] && (
        <span className="text-accent ml-2">{annotations[6]}</span>
      )}
    </CodeLine>
    <CodeLine indent={2} highlight={highlightLines.includes(7)}>
      <span className="text-text-muted">const</span>{" "}
      <span className="text-text">levelSize = queue.length</span>
      {annotations[7] && (
        <span className="text-accent ml-2">{annotations[7]}</span>
      )}
    </CodeLine>
    <CodeLine indent={2} highlight={highlightLines.includes(8)}>
      <span className="text-text-muted">const</span>{" "}
      <span className="text-text">currentLevel = []</span>
      {annotations[8] && (
        <span className="text-accent ml-2">{annotations[8]}</span>
      )}
    </CodeLine>
    <CodeLine />
    <CodeLine indent={2} highlight={highlightLines.includes(10)}>
      <span className="text-text-muted">for</span>{" "}
      <span className="text-text">(let i = 0; i {"<"} levelSize; i++)</span>{" "}
      <span className="text-text-muted">{"{"}</span>
      {annotations[10] && (
        <span className="text-accent ml-2">{annotations[10]}</span>
      )}
    </CodeLine>
    <CodeLine indent={3} highlight={highlightLines.includes(11)}>
      <span className="text-text-muted">const</span>{" "}
      <span className="text-text">node = queue.shift()</span>
      {annotations[11] && (
        <span className="text-accent ml-2">{annotations[11]}</span>
      )}
    </CodeLine>
    <CodeLine indent={3} highlight={highlightLines.includes(12)}>
      <span className="text-text">currentLevel.push(node.val)</span>
      {annotations[12] && (
        <span className="text-accent ml-2">{annotations[12]}</span>
      )}
    </CodeLine>
    <CodeLine />
    <CodeLine indent={3} highlight={highlightLines.includes(14)}>
      <span className="text-text-muted">if</span>{" "}
      <span className="text-text">(node.left) queue.push(node.left)</span>
      {annotations[14] && (
        <span className="text-accent ml-2">{annotations[14]}</span>
      )}
    </CodeLine>
    <CodeLine indent={3} highlight={highlightLines.includes(15)}>
      <span className="text-text-muted">if</span>{" "}
      <span className="text-text">(node.right) queue.push(node.right)</span>
      {annotations[15] && (
        <span className="text-accent ml-2">{annotations[15]}</span>
      )}
    </CodeLine>
    <CodeLine indent={2}>
      <span className="text-text-muted">{"}"}</span>
    </CodeLine>
    <CodeLine />
    <CodeLine indent={2} highlight={highlightLines.includes(18)}>
      <span className="text-text">result.push(currentLevel)</span>
      {annotations[18] && (
        <span className="text-accent ml-2">{annotations[18]}</span>
      )}
    </CodeLine>
    <CodeLine indent={1}>
      <span className="text-text-muted">{"}"}</span>
    </CodeLine>
    <CodeLine />
    <CodeLine indent={1} highlight={highlightLines.includes(21)}>
      <span className="text-text-muted">return</span>{" "}
      <span className="text-text">result</span>
      {annotations[21] && (
        <span className="text-accent ml-2">{annotations[21]}</span>
      )}
    </CodeLine>
    <CodeLine>
      <span className="text-text-muted">{"}"}</span>
    </CodeLine>
  </div>
);

// Step 1: Setup
const DryRunStep1 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Initialize with root node. Create empty result array and queue with root.
    </div>
    <FullCode
      highlightLines={[1, 3, 4]}
      annotations={{
        3: "<- []",
        4: "<- [Node(3)]",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="queue" value="[3]" />
      <VarBadge name="result" value="[]" />
    </div>
  </div>
);

// Step 2: Level 0 Start
const DryRunStep2 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Enter while loop. Capture queue length as{" "}
      <span className="text-accent font-mono">levelSize</span> - this is how
      many nodes are at the current level.
    </div>
    <FullCode
      highlightLines={[6, 7, 8]}
      annotations={{
        6: "<- true",
        7: "<- 1",
        8: "<- []",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="levelSize" value="1" />
      <VarBadge name="currentLevel" value="[]" />
      <VarBadge name="queue" value="[3]" />
    </div>
  </div>
);

// Step 3: Process 3
const DryRunStep3 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Dequeue node <span className="text-accent font-mono">3</span>. Add its
      value to currentLevel.
    </div>
    <FullCode
      highlightLines={[10, 11, 12]}
      annotations={{
        10: "<- i=0",
        11: "<- Node(3)",
        12: "<- [3]",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="node.val" value="3" />
      <VarBadge name="currentLevel" value="[3]" />
      <VarBadge name="queue" value="[]" />
    </div>
  </div>
);

// Step 4: Add children of 3
const DryRunStep4 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Node 3 has children. Enqueue left child{" "}
      <span className="text-accent font-mono">9</span> and right child{" "}
      <span className="text-accent font-mono">20</span>.
    </div>
    <FullCode
      highlightLines={[14, 15]}
      annotations={{
        14: "<- enqueue 9",
        15: "<- enqueue 20",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="node.left" value="9" />
      <VarBadge name="node.right" value="20" />
      <VarBadge name="queue" value="[9, 20]" />
    </div>
  </div>
);

// Step 5: Level 0 End
const DryRunStep5 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Level 0 complete (processed 1 node). Push currentLevel to result.
    </div>
    <FullCode
      highlightLines={[18]}
      annotations={{
        18: "<- [[3]]",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="currentLevel" value="[3]" />
      <VarBadge name="result" value="[[3]]" />
      <VarBadge name="queue" value="[9, 20]" />
    </div>
  </div>
);

// Step 6: Level 1 Start
const DryRunStep6 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Next iteration. Queue has 2 nodes, so{" "}
      <span className="text-accent font-mono">levelSize = 2</span>. We'll
      process exactly 2 nodes for level 1.
    </div>
    <FullCode
      highlightLines={[6, 7, 8]}
      annotations={{
        6: "<- true",
        7: "<- 2",
        8: "<- []",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="levelSize" value="2" />
      <VarBadge name="currentLevel" value="[]" />
      <VarBadge name="queue" value="[9, 20]" />
    </div>
  </div>
);

// Step 7: Process 9
const DryRunStep7 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Dequeue <span className="text-accent font-mono">9</span>. Add to
      currentLevel. No children to enqueue.
    </div>
    <FullCode
      highlightLines={[10, 11, 12, 14, 15]}
      annotations={{
        11: "<- Node(9)",
        12: "<- [9]",
        14: "<- null",
        15: "<- null",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="i" value="0" />
      <VarBadge name="node.val" value="9" />
      <VarBadge name="currentLevel" value="[9]" />
      <VarBadge name="queue" value="[20]" />
    </div>
  </div>
);

// Step 8: Process 20
const DryRunStep8 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Dequeue <span className="text-accent font-mono">20</span>. Add to
      currentLevel. Enqueue children{" "}
      <span className="text-accent font-mono">15</span> and{" "}
      <span className="text-accent font-mono">7</span>.
    </div>
    <FullCode
      highlightLines={[10, 11, 12, 14, 15]}
      annotations={{
        11: "<- Node(20)",
        12: "<- [9, 20]",
        14: "<- enqueue 15",
        15: "<- enqueue 7",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="i" value="1" />
      <VarBadge name="node.val" value="20" />
      <VarBadge name="currentLevel" value="[9, 20]" />
      <VarBadge name="queue" value="[15, 7]" />
    </div>
  </div>
);

// Step 9: Level 1 End
const DryRunStep9 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Level 1 complete (processed 2 nodes). Push currentLevel to result.
    </div>
    <FullCode
      highlightLines={[18]}
      annotations={{
        18: "<- [[3], [9, 20]]",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="currentLevel" value="[9, 20]" />
      <VarBadge name="result" value="[[3], [9, 20]]" />
      <VarBadge name="queue" value="[15, 7]" />
    </div>
  </div>
);

// Step 10: Level 2 Start
const DryRunStep10 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Final level. Queue has 2 nodes, so{" "}
      <span className="text-accent font-mono">levelSize = 2</span>.
    </div>
    <FullCode
      highlightLines={[6, 7, 8]}
      annotations={{
        6: "<- true",
        7: "<- 2",
        8: "<- []",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="levelSize" value="2" />
      <VarBadge name="currentLevel" value="[]" />
      <VarBadge name="queue" value="[15, 7]" />
    </div>
  </div>
);

// Step 11: Process 15 and 7
const DryRunStep11 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Process <span className="text-accent font-mono">15</span> and{" "}
      <span className="text-accent font-mono">7</span>. Neither has children.
      Queue becomes empty.
    </div>
    <FullCode
      highlightLines={[10, 11, 12]}
      annotations={{
        10: "<- i=0,1",
        12: "<- [15, 7]",
      }}
    />
    <div className="flex-grow" />
    <div className="flex flex-wrap gap-2">
      <VarBadge name="currentLevel" value="[15, 7]" />
      <VarBadge name="queue" value="[]" />
    </div>
    <div className="text-xs text-text-muted">
      Both nodes are leaf nodes - no children to add to queue.
    </div>
  </div>
);

// Step 12: Complete
const DryRunStep12 = () => (
  <div className="flex flex-col gap-3 h-full">
    <div className="text-sm text-text-muted">
      Push final level to result. Queue is empty, while loop exits. Return
      result.
    </div>
    <FullCode
      highlightLines={[18, 6, 21]}
      annotations={{
        18: "<- [[3], [9, 20], [15, 7]]",
        6: "<- false, exit loop",
        21: "<- done!",
      }}
    />
    <div className="flex-grow" />
    <div className="p-2 bg-accent/10 rounded border border-accent/30">
      <div className="text-sm">
        <span className="text-text-muted">Return: </span>
        <span className="font-mono text-accent font-bold">
          [[3], [9, 20], [15, 7]]
        </span>
      </div>
    </div>
    <div className="text-xs text-text-muted">
      Each inner array contains all node values at that depth level.
    </div>
  </div>
);

export const DryRunCarousel = () => {
  const steps = [
    { title: "Setup", content: (<DryRunStep1 />) as ReactNode },
    { title: "Level 0 Start", content: (<DryRunStep2 />) as ReactNode },
    { title: "Process 3", content: (<DryRunStep3 />) as ReactNode },
    { title: "Add Children", content: (<DryRunStep4 />) as ReactNode },
    { title: "Level 0 End", content: (<DryRunStep5 />) as ReactNode },
    { title: "Level 1 Start", content: (<DryRunStep6 />) as ReactNode },
    { title: "Process 9", content: (<DryRunStep7 />) as ReactNode },
    { title: "Process 20", content: (<DryRunStep8 />) as ReactNode },
    { title: "Level 1 End", content: (<DryRunStep9 />) as ReactNode },
    { title: "Level 2 Start", content: (<DryRunStep10 />) as ReactNode },
    { title: "Process 15 & 7", content: (<DryRunStep11 />) as ReactNode },
    { title: "Complete", content: (<DryRunStep12 />) as ReactNode },
  ];

  return <Carousel steps={steps} contentHeight="h-[480px] md:h-[420px]" />;
};
