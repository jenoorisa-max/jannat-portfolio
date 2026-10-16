import { Section } from "../ui/Section";

const sdgPosterPath = "/images/activities/sdg-poster.jpg";

export function Activities() {
  return (
    <Section
      id="activities"
      eyebrow="BEYOND THE CLASSROOM"
      title="A Journey Beyond Academics"
      intro="My university experience has given me opportunities to explore creativity, take responsibility, lead teams, and express myself beyond the classroom."
    >
      <div className="max-w-4xl">
        {/* Media & Creative Work */}
        <article className="grid gap-4 border-t border-charcoal/15 py-8 sm:grid-cols-[220px_1fr] sm:gap-10 sm:py-10">
          <h3 className="font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
            Media & Creative Work
          </h3>

          <p className="leading-8 text-mute">
            I have contributed to covering different university events through
            photography, videography, and video editing. As a Media Core Member
            of ESF, I take part in media-related responsibilities and contribute
            to event coverage and other activities. I enjoy capturing meaningful
            moments and turning them into visual stories that preserve the
            experience and energy of each event.
          </p>
        </article>

        {/* Leadership & Event Management */}
        <article className="grid gap-4 border-t border-charcoal/15 py-8 sm:grid-cols-[220px_1fr] sm:gap-10 sm:py-10">
          <h3 className="font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
            Leadership & Event Management
          </h3>

          <p className="leading-8 text-mute">
            As the Founder and Lead of the Student Development Association
            (SDA), I take responsibility for leading the team, coordinating
            activities, and organizing events. This role allows me to work
            closely with others, manage responsibilities, and turn ideas into
            meaningful student experiences. It continues to strengthen my
            leadership, teamwork, and organizational skills.
          </p>
        </article>

        {/* SDG Advocacy */}
        <article className="grid gap-4 border-t border-charcoal/15 py-8 sm:grid-cols-[220px_1fr] sm:gap-10 sm:py-10">
          <h3 className="font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
            SDG Advocacy & Ambassadorship
          </h3>

          <div>
            <p className="leading-8 text-mute">
              As an SDG Ambassador for Goal 14: Life Below Water, I am
              interested in raising awareness about marine conservation,
              pollution, and the importance of protecting aquatic ecosystems.
              Through this role, I engage with sustainability-related
              initiatives that encourage environmental awareness and
              responsible action.
            </p>

            <a
              href={sdgPosterPath}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 border-b border-bronze pb-1 text-sm font-medium tracking-wide text-charcoal transition-colors duration-300 hover:text-bronze"
            >
              View Poster
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        {/* Declamation */}
        <article className="grid gap-4 border-t border-charcoal/15 py-8 sm:grid-cols-[220px_1fr] sm:gap-10 sm:py-10">
          <h3 className="font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
            Declamation & Public Speaking
          </h3>

          <p className="leading-8 text-mute">
            Public speaking has been part of my journey since childhood, from
            school and college competitions to university-level participation.
            I have also participated in two All-Pakistan bilingual declamation
            competitions. These experiences have helped me express ideas with
            confidence, communicate effectively, and appreciate the power of
            language and expression.
          </p>
        </article>

        {/* Hosting */}
        <article className="grid gap-4 border-y border-charcoal/15 py-8 sm:grid-cols-[220px_1fr] sm:gap-10 sm:py-10">
          <h3 className="font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
            Hosting & Stage Presence
          </h3>

          <p className="leading-8 text-mute">
            I have enjoyed hosting events since childhood and have continued
            this interest throughout school, college, and university. Being on
            stage allows me to connect with audiences, contribute to event
            experiences, and bring energy to different occasions. Hosting has
            played an important role in developing my confidence, adaptability,
            and communication skills.
          </p>
        </article>
      </div>
    </Section>
  );
}