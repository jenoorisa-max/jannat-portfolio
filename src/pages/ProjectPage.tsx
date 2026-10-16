import { Link, useParams } from "react-router-dom";
import { experiences } from "../data/experience";
import { getProjectBySlug, projectCategories } from "../data/projects";
import { ImageSlot } from "../components/ui/ImageSlot";
import { StatusBadge } from "../components/ui/StatusBadge";

function Detail({ title, body }: { title: string; body?: string }) {
  if (!body) return null;
  return (
    <div>
      <h2 className="text-xs tracking-[0.2em] text-bronze uppercase">{title}</h2>
      <p className="mt-2 leading-relaxed text-ink">{body}</p>
    </div>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-5 pt-32 pb-20">
        <h1 className="font-serif text-4xl text-charcoal">Project not found</h1>
        <Link to="/#projects" className="mt-6 inline-block text-bronze">
          Back to projects
        </Link>
      </main>
    );
  }

  const relatedExperience = experiences.find((item) => item.id === project.relatedExperienceId);

  return (
    <main className="px-5 pt-32 pb-20 sm:px-8">
      <article className="mx-auto max-w-4xl">
        <Link to="/#projects" className="text-xs tracking-[0.18em] text-bronze uppercase">
          ← All projects
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          {project.categories.map((id) => (
            <span key={id} className="text-xs text-mute">
              {projectCategories.find((category) => category.id === id)?.label}
            </span>
          ))}
        </div>
        <h1 className="font-serif mt-4 text-4xl text-charcoal sm:text-6xl">{project.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-mute">{project.summary}</p>
        {project.statusNote ? (
          <p className="mt-4 rounded-2xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-bronze">
            {project.statusNote}
          </p>
        ) : null}

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {project.images.map((image) => (
            <ImageSlot key={image.suggestedPath} image={image} aspect="landscape" showCaption />
          ))}
        </div>

        <div className="mt-12 grid gap-8">
          <Detail title="Objective" body={project.objective} />
          <Detail title="Problem" body={project.problem} />
          <Detail title="Methodology" body={project.methodology} />
          <Detail title="Contribution" body={project.contribution} />
          <Detail title="Results" body={project.results} />
          <Detail title="Challenges" body={project.challenges} />
          <Detail title="Limitations" body={project.limitations} />
          {project.extraNotes ? <Detail title="Notes" body={project.extraNotes} /> : null}
        </div>

        {project.implementations ? (
          <div className="mt-10">
            <h2 className="text-xs tracking-[0.2em] text-bronze uppercase">Implementations</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {project.implementations.map((item) => (
                <div key={item.name} className="rounded-3xl border border-sand bg-paper p-5">
                  <h3 className="font-serif text-2xl text-charcoal">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{item.summary}</p>
                  {item.notes ? <p className="mt-3 text-sm text-mute">{item.notes}</p> : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10">
          <h2 className="text-xs tracking-[0.2em] text-bronze uppercase">Tools recorded so far</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <li key={tool} className="rounded-full bg-cream px-3 py-1 text-sm">
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {relatedExperience ? (
          <p className="mt-10 text-sm text-mute">
            Related internship: {relatedExperience.organization}.{" "}
            <Link to="/#experience" className="text-bronze underline">
              View experience
            </Link>
          </p>
        ) : null}

        {project.sourceCodeUrl ? (
          <a href={project.sourceCodeUrl} className="mt-8 inline-block text-bronze">
            Source code
          </a>
        ) : (
          <p className="mt-8 text-sm text-mute">Source code link will appear when a repository URL is added.</p>
        )}
      </article>
    </main>
  );
}
