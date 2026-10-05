"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "li" | "article" | "figure";
  className?: string;
  /** Delay in milliseconds, for staggering siblings. */
  delay?: number;
};

// Fades and slides an element in once it scrolls into view. CSS-only motion
// (see .reveal in globals.css); the observer just toggles a class.
export default function Reveal({ children, as = "div", className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as as "div";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
