import React, { useState } from "react";
import getGridSpanClasses from "../utils/grid-span";
import { ProjectCard, type Project } from "../components/project-card";
import { ProjectModal } from "../components/project-modal";

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "roa",
      title: "ROA",
      imageSrc: "/static/ROA.png",
      imageAlt: "Pantalla de ROA",
      technologies: ["React", "HTML", "Redux", "Tailwind", "Python (Django)", "MongoDB"],
      href: "https://github.com/TooX12/ROA-cliente",
      variant: "web",
      description: "Repositorio de objetos de aprendizaje. Módulos de búsqueda, métricas y gestión."
    },
    {
      id: "sim-web",
      title: "SIM Inscripciones (Web)",
      imageSrc: "/static/SIM-inscripciones.png",
      imageAlt: "SIM Inscripciones",
      technologies: ["HTML", "CSS (Tailwind)", "PHP (Laravel)", "Livewire", "SQL"],
      href: "https://sim.morelia.tecnm.mx/login",
      variant: "web",
      description: "Portal de inscripciones con flujos multi-paso, validaciones y reportes."
    },
    {
      id: "vialidolid-web",
      title: "Vialidolid Web",
      imageSrc: "/static/vialidolid-web.png",
      imageAlt: "Vialidolid Web",
      technologies: ["JS (Express)", "HTML", "CSS", "SQL"],
      href: "https://github.com/DavidGuidoR/DenunciasCiudadanasWeb",
      variant: "web",
      description: "Plataforma para reportes ciudadanos y visualización en mapa."
    },
    {
      id: "butzu-mobile",
      title: "Butzu Mobile",
      imageSrc: "/static/butzu-mobile.png",
      imageAlt: "Butzu App",
      technologies: ["React Native", "HTML", "JS (Express)", "CSS", "MongoDB"],
      href: "https://github.com/DavidGuidoR/Butzu-client",
      variant: "mobile",
      description: "Aplicación móvil de transporte: mapa, tracking y publicaciones."
    },
    {
      id: "vialidolid-mobile",
      title: "Vialidolid Móvil",
      imageSrc: "/static/vialidolid-movil.png",
      imageAlt: "Vialidolid Móvil",
      technologies: ["Kotlin"],
      href: "https://github.com/RafaelContrerasA/vialidolidMovil",
      variant: "mobile",
      description: "Cliente Android para reportes y consulta de puntos en mapa."
    },
  ];

  return (
    <section className="min-w-screen w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Proyectos en los que he colaborado
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-6 md:gap-8 items-center md:items-center lg:items-start">
          {projects.map((project, index) => (
            <div key={project.id} className={getGridSpanClasses(index, projects.length)}>
              <ProjectCard project={project} onSelect={setActiveProject} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};

export default Projects;
