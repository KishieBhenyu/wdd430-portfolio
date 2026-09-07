import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Event Management API",
    description:
      "A REST API for managing events and venues using Node.js, Express, and MongoDB.",
    technologies: ["Node.js", "Express", "MongoDB", "JavaScript"],
  },
  {
    title: "Scripture Study Tracker",
    description:
      "A web application designed to help users organize and track their scripture study.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Chamber of Commerce Website",
    description:
      "A responsive website project focused on modern web design, accessibility, and dynamic content.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ProjectList() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}