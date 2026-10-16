
import { Section } from "../ui/Section";

const expertise = [
  {
    number: "01",
    title: "Programming & Problem-Solving",
    technologies: "Python · Java · Object-Oriented Programming",
    description:
      "Building programming logic and applying core concepts to practical problems and applications.",
    icon: "code",
  },
  {
    number: "02",
    title: "Artificial Intelligence & Computer Vision",
    technologies: "CNN · YOLO · Image Classification · Text Detection",
    description:
      "Exploring intelligent systems through image classification and Urdu–English document text detection.",
    icon: "brain",
  },
  {
    number: "03",
    title: "Application Development",
    technologies: "Python · Tkinter · GUI Development",
    description:
      "Developing desktop applications and management systems with interactive interfaces and practical functionality.",
    icon: "app",
  },
  {
    number: "04",
    title: "Databases & Web Fundamentals",
    technologies: "SQL · MySQL · HTML",
    description:
      "Understanding relational databases and foundational web technologies.",
    icon: "database",
  },
  {
    number: "05",
    title: "Hardware & Embedded Systems",
    technologies: "Arduino · Sensors · Hardware–Software Integration",
    description:
      "Connecting hardware and software through sensor-based detection, automation, and interactive systems.",
    icon: "hardware",
  },
  {
    number: "06",
    title: "Computer Science Foundations",
    technologies: "Data Structures · Operating Systems · Multithreading · Concurrency",
    description:
      "Applying fundamental computer science concepts through coursework and projects involving thread synchronization and concurrency.",
    icon: "network",
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Technical Expertise"
      title="Turning ideas into intelligent solutions."
      intro="Learning through practice."
      className="bg-paper"
    >
      <div className="mb-10 max-w-3xl">
        <p className="text-base leading-8 text-ink/75 sm:text-lg">
          My technical foundation combines academic learning with
          hands-on project experience. From programming and application
          development to machine learning and hardware-based systems,
          I enjoy exploring concepts by turning them into practical
          solutions. I continue to strengthen my skills through
          experimentation, problem-solving, and continuous learning.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {expertise.map((item) => (
          <article
            key={item.number}
            className="group relative overflow-hidden rounded-2xl border border-sand bg-ivory p-6 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-xl hover:shadow-charcoal/5"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-serif text-sm text-bronze">
                {item.number}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-ink/35">
                Expertise
              </span>
            </div>

            <h3 className="mt-6 font-serif text-xl leading-snug text-charcoal">
              {item.title}
            </h3>

            <p className="mt-4 text-sm font-medium leading-6 text-bronze">
              {item.technologies}
            </p>

            <p className="mt-4 text-sm leading-7 text-ink/70">
              {item.description}
            </p>

            <div className="mt-6 h-px w-10 bg-bronze/60 transition-all duration-300 group-hover:w-full" />
          </article>
        ))}
      </div>

      <p className="mt-8 border-l-2 border-bronze/50 pl-4 text-sm leading-7 text-ink/60">
        These areas reflect my academic foundation and practical
        project experience as I continue to grow in Artificial Intelligence.
      </p>
    </Section>
  );
}
