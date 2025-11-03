import React from "react";

export type Project = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
  href?: string;
  variant?: "web" | "mobile";
  description?: string; 
};

type ProjectCardProps = {
  project: Project;
  onSelect?: (project: Project) => void;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { title, imageSrc, imageAlt, technologies, variant = "web" } = project;

  const frameClass =
    variant === "mobile"
      ? "mx-auto w-[clamp(160px,26vw,240px)] md:w-[clamp(180px,22vw,260px)] aspect-[9/16]"
      : "w-full aspect-[16/9]";

  const CardInner = (
    <>
      <div className={`overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 shadow-lg ${frameClass}`}>
        <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
      </div>

      <div className="px-4 py-4">
        <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.(project);
        }
      }}
      className="group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-2xl transition-transform duration-200 ease-out focus-visible:scale-[1.02] will-change-transform"
      aria-label={`Abrir detalles de ${title}`}
    >
      {CardInner}
    </div>
  );
};
