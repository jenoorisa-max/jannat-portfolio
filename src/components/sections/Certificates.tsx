import { certificates } from "../../data/certificates";
import { Section } from "../ui/Section";

export function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="CERTIFICATES & ACHIEVEMENTS"
      title="Learning Beyond the Classroom"
      intro="A collection of certificates reflecting my participation in community initiatives, public speaking, and learning opportunities."
    >
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {certificates.map((item, index) => {
          const imagePath = item.image.src;

          return (
            <article key={item.id} className="group">
              <a
                href={imagePath ?? undefined}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => {
                  if (!imagePath) event.preventDefault();
                }}
                aria-label={`View certificate: ${item.title}`}
                className="block overflow-hidden border border-charcoal/10 bg-white/60"
              >
                {imagePath ? (
                  <img
                    src={imagePath}
                    alt={item.image.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center bg-cream p-6">
                    <p className="text-sm text-mute">
                      Certificate image unavailable
                    </p>
                  </div>
                )}
              </a>

              <div className="mt-5 flex items-start gap-4">
                <span className="pt-1 text-xs tracking-widest text-bronze">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-serif text-xl leading-snug text-charcoal sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-mute">
                    {item.summary}
                  </p>

                  {imagePath && (
                    <a
                      href={imagePath}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 border-b border-bronze pb-1 text-sm font-medium text-charcoal transition-colors hover:text-bronze"
                    >
                      View Certificate
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-7 h-px bg-charcoal/10" />
            </article>
          );
        })}
      </div>
    </Section>
  );
}