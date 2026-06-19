import type { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms before the reveal transition starts. */
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
