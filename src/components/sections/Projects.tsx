
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projectCategories, projects } from "../../data/projects";
import type { Project, ProjectCategoryId } from "../../types/content";
import { Section } from "../ui/Section";
import { StatusBadge } from "../ui/StatusBadge";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sand/80 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-xl hover:shadow-charcoal/5 sm:p-7"
      style={{ transitionDelay: `${(index % 3) * 50}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-serif text-sm text-bronze">
          {String(index + 1).padStart(2, "0")}
        </span>
        <StatusBadge status={project.status} />
      </div>

      <h3 className="mt-7 font-serif text-2xl leading-snug text-charcoal transition-colors duration-300 group-hover:text-bronze">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-mute">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-sand/80 bg-cream/70 px-3 py-1.5 text-[11px] tracking-wide text-ink"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-sand/80 pt-5">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-charcoal transition-all duration-300 hover:gap-5 hover:text-bronze"
        >
          Explore project
          <span className="text-lg" aria-hidden="true">
            ↗
          </span>
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-bronze transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

export function Projects() {
  const [active, setActive] = useState<ProjectCategoryId | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;

    return projects.filter((project) =>
      project.categories.includes(active)
    );
  }, [active]);

  return (
    <Section
      id="projects"
      eyebrow="04 — Selected Work"
      title="Ideas into applications."
      intro="A collection of projects reflecting my work across artificial intelligence, computer vision, software development, embedded systems, and practical problem-solving."
    >
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        <button
          type="button"
          role="tab"
          aria-selected={active === "all"}
          onClick={() => setActive("all")}
          className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.13em] transition-all duration-300 ${
            active === "all"
              ? "bg-charcoal text-ivory shadow-md"
              : "border border-sand bg-paper text-mute hover:border-bronze hover:text-charcoal"
          }`}
        >
          All projects
        </button>

        {projectCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={active === category.id}
            onClick={() => setActive(category.id)}
            className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.13em] transition-all duration-300 ${
              active === category.id
                ? "bg-charcoal text-ivory shadow-md"
                : "border border-sand bg-paper text-mute hover:border-bronze hover:text-charcoal"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-mute">
          Selected work, built through practice.
        </p>

        <span className="shrink-0 font-serif text-sm text-bronze">
          {String(filtered.length).padStart(2, "0")} projects
        </span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-sand bg-cream/60 p-7 sm:p-9">
        <p className="text-[10px] uppercase tracking-[0.25em] text-bronze">
          The work continues
        </p>

        <h3 className="mt-3 font-serif text-2xl text-charcoal sm:text-3xl">
          Built with purpose. Improved through practice.
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-mute">
          Each project is an opportunity to apply what I learn,
          explore a new challenge, and develop more practical solutions.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-charcoal px-6 py-3.5 text-xs uppercase tracking-widest text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-bronze"
        >
          Let's connect
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </Section>
  );
}
