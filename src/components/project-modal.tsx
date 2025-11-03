import React from "react";
import type { Project } from "./project-card";
import { Modal } from "./modal";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const titleId = `project-modal-title-${project.id}`;
  const isMobile = project.variant === "mobile";

  return (
    <Modal open={!!project} onClose={onClose} labelledBy={titleId}>
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 id={titleId} className="text-xl sm:text-2xl font-semibold text-white">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/60"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div
              className={[
                "overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40",
                isMobile
                  ? "mx-auto w-[clamp(180px,40vw,260px)] aspect-[9/16]"
                  : "w-full aspect-[16/9]"
              ].join(" ")}
            >
              <img src={project.imageSrc} alt={project.imageAlt} className="h-full w-full object-cover" />
            </div>

            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-white text-custom-black hover:bg-secondary font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60 no-underline hover:no-underline focus:no-underline visited:text-[#0f1524]"
              >
                Ver código
              </a>
            )}
          </div>

          <div>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              {project.description ?? "Proyecto sin descripción."}
            </p>

            <div className="mt-5">
              <h4 className="text-sm font-semibold text-white/90">Tecnologías</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
