interface SlotProps {
  value: string | number;
  active?: boolean;
}

export const Slot = ({ value, active }: SlotProps) => {
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
