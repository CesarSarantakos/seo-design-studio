import { cn } from "@/lib/utils";

type Variant = "dark-to-light" | "light-to-light";
type Direction = "down-right" | "down-left";

interface SectionDividerProps {
  variant?: Variant;
  direction?: Direction;
  className?: string;
  height?: number;
}

/**
 * Angled section divider with a thin gold hairline along the diagonal cut.
 * Use between two stacked <section>s to create a stepped/diagonal transition
 * matching the brand's white + gold style.
 */
export function SectionDivider({
  variant = "dark-to-light",
  direction = "down-right",
  className,
  height = 80,
}: SectionDividerProps) {
  // Colors
  const topFill =
    variant === "dark-to-light"
      ? "oklch(0.22 0.09 260)" // --background (deep navy)
      : "oklch(0.96 0.01 240)"; // soft cool white
  const bottomFill =
    variant === "dark-to-light"
      ? "oklch(0.96 0.01 240)" // soft cool white
      : "oklch(0.93 0.015 230)"; // slightly cooler white
  const goldStroke = "oklch(0.78 0.13 85)"; // --gold

  // Step path: horizontal — diagonal — horizontal
  // Viewbox 1000 wide, 100 tall.
  const isRight = direction === "down-right";
  const stepStart = isRight ? 360 : 640;
  const stepEnd = isRight ? 540 : 460;

  const topPath = `M0,0 L1000,0 L1000,40 L${stepEnd},40 L${stepStart},75 L0,75 Z`;
  const linePath = `M0,75 L${stepStart},75 L${stepEnd},40 L1000,40`;

  return (
    <div
      aria-hidden="true"
      className={cn("relative w-full overflow-hidden -mt-px -mb-px leading-[0]", className)}
      style={{ height, background: bottomFill }}
    >
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full block"
      >
        <path d={topPath} fill={topFill} />
        <path
          d={linePath}
          fill="none"
          stroke={goldStroke}
          strokeWidth={0.8}
          strokeOpacity={0.7}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}