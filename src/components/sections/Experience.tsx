import { Section } from "../ui/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="PROFESSIONAL JOURNEY"
      title="My First Step into the Professional World"
      intro="My first internship was a meaningful step from academic learning into the professional world."
    >
      <div className="max-w-3xl">
        <div className="border-l-2 border-bronze pl-6 sm:pl-8">
          <p className="text-sm font-medium tracking-wide text-bronze">
            19 August 2026 — 30 September 2026
          </p>

          <h3 className="mt-3 font-serif text-2xl text-charcoal sm:text-3xl">
            Intern — Punjab Information Technology Board (PITB)
          </h3>

          <p className="mt-2 text-base text-mute">
            Arfa Karim Technology Incubator, Lahore, Pakistan
          </p>

          <p className="mt-5 leading-8 text-charcoal/80">
            My first internship during my fourth semester was an exciting
            opportunity to experience professional life beyond the classroom.
            Working on different projects allowed me to learn through practical
            experience, observe how professionals approach their work, and
            collaborate in a professional environment with people more
            experienced than me.
          </p>

          <p className="mt-4 leading-8 text-charcoal/80">
            This experience helped me step outside my comfort zone, broaden my
            perspective, and build confidence early in my career. It reminded
            me that growth comes from staying curious, being open to learning,
            and making the most of every opportunity.
          </p>
        </div>
      </div>
    </Section>
  );
}