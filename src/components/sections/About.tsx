
import { Section } from "../ui/Section";

const focusAreas = [
  {
    number: "01",
    title: "Artificial Intelligence",
    detail: "Exploring intelligent solutions",
  },
  {
    number: "02",
    title: "Creative Media",
    detail: "Expressing ideas creatively",
  },
  {
    number: "03",
    title: "Leadership",
    detail: "Building and guiding teams",
  },
  {
    number: "04",
    title: "Communication",
    detail: "Connecting through ideas",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — The Story So Far"
      title="A journey shaped by curiosity."
      intro="Every new direction opened a new possibility."
      className="bg-paper"
    >
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
              A little perspective
            </span>

            <h3 className="mt-5 font-serif text-3xl leading-snug text-charcoal sm:text-4xl">
              Different beginnings.
              <span className="italic text-bronze">
                {" "}One evolving vision.
              </span>
            </h3>
          </div>

          <div className="mt-8 border-l-2 border-bronze/50 py-2 pl-5 lg:mt-16">
            <p className="font-serif text-lg italic leading-8 text-ink/75">
              “Growth begins when you allow yourself to explore a
              different direction.”
            </p>
          </div>
        </div>

        <div className="space-y-6 text-base leading-8 text-ink/80 sm:text-lg">
          <p>
            My academic journey has taken me through different fields,
            from <strong className="font-medium text-charcoal">Medical Sciences</strong> in
            matriculation to <strong className="font-medium text-charcoal">Engineering</strong> in
            intermediate, and eventually to{" "}
            <strong className="font-medium text-bronze">Artificial Intelligence</strong>.
            Each transition brought a new perspective, challenged me to
            think differently, and helped me discover what truly interests me.
          </p>

          <p>
            As a BS Artificial Intelligence student, I believe in
            <strong className="font-medium text-charcoal"> learning by doing</strong>.
            Through academic and personal projects, I explore programming,
            machine learning, computer vision, and practical problem-solving.
            Understanding a concept becomes more meaningful when I can
            apply it to build something useful.
          </p>

          <p>
            Beyond technology, I am drawn to{" "}
            <strong className="font-medium text-charcoal">
              creativity, communication, and working with people
            </strong>.
            From hosting and declamation to media work, event planning,
            and leading a student team, these experiences continue to
            strengthen my confidence, collaboration, and perspective.
          </p>

          <p className="border-t border-sand pt-6">
            I see my journey as an ongoing process of{" "}
            <strong className="font-medium text-bronze">
              learning, experimenting, and discovering
            </strong>{" "}
            new possibilities — both within technology and beyond it.
          </p>
        </div>
      </div>

      <div className="mt-14 border-t border-sand pt-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-bronze">
              Beyond the classroom
            </p>
            <h3 className="mt-2 font-serif text-2xl text-charcoal">
              What shapes me
            </h3>
          </div>

          <span className="text-sm text-ink/50">
            Interests & strengths
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((area) => (
            <article
              key={area.number}
              className="group rounded-xl border border-sand/80 bg-ivory p-5 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-lg hover:shadow-charcoal/5"
            >
              <span className="font-serif text-sm text-bronze">
                {area.number}
              </span>

              <h4 className="mt-4 font-serif text-xl text-charcoal">
                {area.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-ink/60">
                {area.detail}
              </p>

              <div className="mt-5 h-px w-8 bg-bronze/60 transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
