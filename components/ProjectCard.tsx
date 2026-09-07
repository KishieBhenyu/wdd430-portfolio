interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border p-6 shadow-sm">
      <h2 className="mb-3 text-xl font-bold">{title}</h2>

      <p className="mb-4 text-gray-600">{description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm"
          >
            {technology}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          View Project
        </a>
      )}
    </article>
  );
}