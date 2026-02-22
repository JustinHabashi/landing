import type { Project } from "../types";

type ProjectTileProps = {
  project: Project;
};

export function ProjectTile({ project }: ProjectTileProps) {
  return (
    <article className="project-tile">
      <div className="project-tile__header">
        <p className="project-tile__status" aria-label={`Status: ${project.status}`}>
          {project.status}
        </p>
        <h3>{project.title}</h3>
      </div>

      <p className="project-tile__summary">{project.summary}</p>

      <ul className="project-tile__tags" aria-label={`${project.title} technologies`}>
        {project.tech.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <a
        className="project-tile__link"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        Open project
      </a>
    </article>
  );
}
