import { learningNow, learningSteps } from "../../data/learning";
import { Section } from "../ui/Section";

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="08 — Learning Journey"
      title="How the work is meant to deepen."
      intro="A process, not a scoreboard. The point is better judgement the next time a problem appears."
      className="bg-paper"
    >
      <ol className="grid gap-6 lg:grid-cols-2">
        {learningSteps.map((step, index) => (
          <li key={step.id} className="rounded-[1.5rem] border border-sand bg-ivory p-7">
            <p className="text-xs tracking-[0.22em] text-gold uppercase">
              Step {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-serif mt-3 text-2xl text-charcoal">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-mute">{step.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 rounded-[1.6rem] bg-charcoal p-8 text-ivory">
        <h3 className="font-serif text-3xl">What I am carrying forward</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {learningNow.map((item) => (
            <li key={item} className="border-l border-gold/50 pl-4 text-sm leading-relaxed text-ivory/80">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
