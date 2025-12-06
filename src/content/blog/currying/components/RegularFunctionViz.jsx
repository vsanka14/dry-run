import { Pane } from "components/Pane";
import { Arrow } from "components/Arrow";
import { Slot } from "components/Slot";

export const RegularFunctionViz = () => {
  const header = (
    <div className="flex items-center gap-2">
      <span className="text-sm text-text">Regular Function</span>
      <span className="text-xs text-text-muted">— all args at once</span>
    </div>
  );

  return (
    <Pane header={header} contentClassName="flex flex-col items-center gap-4">
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
    </Pane>
  );
};
