import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`observe scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium tracking-[0.28em] text-bronze uppercase">{eyebrow}</p>
        <h2 className="font-serif mt-3 max-w-3xl text-4xl leading-tight text-charcoal sm:text-5xl">
          {title}
        </h2>
        {intro ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">{intro}</p> : null}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
