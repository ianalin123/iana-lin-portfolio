import type { ReactElement } from "react";

interface MathProps {
  math: string;
}

// Lightweight fallback math renderers to preserve all legacy content
// without requiring extra runtime dependencies.
export function InlineMath({ math }: MathProps): ReactElement {
  return <code className="px-1 text-xs md:text-sm">{math}</code>;
}

export function BlockMath({ math }: MathProps): ReactElement {
  return (
    <pre className="overflow-x-auto rounded-md bg-gray-100 p-3 text-xs md:text-sm dark:bg-gray-900">
      {math}
    </pre>
  );
}

export const formatLatex = (expression: string): string => expression;

export const commonExpressions = {
  leastSquares: "L(w) = || y - Xw ||^2",
  gaussian: "G(x) = (1/sqrt(2*pi*sigma^2)) * exp(-((x-mu)^2)/(2*sigma^2))",
};
