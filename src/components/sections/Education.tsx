
import { Section } from "../ui/Section";

const education = [
  {
    number: "01",
    title: "BS Artificial Intelligence",
    subtitle: "Undergraduate Degree",
    status: "CURRENT",
  },
  {
    number: "02",
    title: "Intermediate — Engineering",
    subtitle: "Intermediate Education",
  },
  {
    number: "03",
    title: "Matriculation — Medical Sciences",
    subtitle: "Secondary Education",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="03 — Education"
      title="Every step shaped the next."
      intro="Different disciplines. A journey of growth."
      className="bg-ivory"
    >
      <div className="mb-12 border-y border-sand py-8 sm:py-10">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
          A thought to carry forward
        </span>

        <blockquote className="mt-4 max-w-3xl font-serif text-2xl italic leading-relaxed text-charcoal sm:text-3xl lg:text-4xl">
          “Your path doesn't have to be straight to lead somewhere
          <span className="text-bronze"> meaningful.</span>”
        </blockquote>
      </div>

      <div className="relative ml-2 space-y-5 border-l border-bronze/40 pl-7 sm:ml-4 sm:pl-10">
        {education.map((item) => (
          <article
            key={item.number}
            className="group relative rounded-2xl border border-sand bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-lg hover:shadow-charcoal/5 sm:p-7"
          >
            <span className="absolute -left-[2.15rem] top-7 h-3 w-3 rounded-full border-2 border-bronze bg-ivory sm:-left-[2.85rem]" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="font-serif text-sm text-bronze">
                    {item.number}
                  </span>

                  {item.status && (
                    <span className="rounded-full border border-bronze/30 px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-bronze">
                      {item.status}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl leading-snug text-charcoal sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-ink/60">
                  {item.subtitle}
                </p>
              </div>

              <span className="self-start text-2xl text-bronze/60 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
