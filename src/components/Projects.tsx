import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface Project {
  title: string;
  image: string;
  tags: string[];
  link?: string;
  description: string;
  inDevelopment?: boolean;
  mobile?: boolean;
}

const projects: Project[] = [
  {
    title: "Hora Certa Med",
    image: "/src/assets/hora-certa-med.png",
    inDevelopment: true,
    mobile: true,
    tags: ["React Native", "Expo"],
    link: "https://expo.dev/preview/update?message=Corrigido+bug+no+campo+de+cadastro+de+medicamento%2C+e+corrigido+bug+da+area+da+tela+entre+android+e+ios&updateRuntimeVersion=1.0.0&createdAt=2025-07-18T16%3A36%3A28.249Z&slug=exp&projectId=0c50762d-b0c8-43a2-8a6f-bd75abf9c4ce&group=34c20dcd-32a4-46ff-9d00-915d1975a73b",
    description: "Aplicativo para gerenciamento de medicamentos com lembretes e acompanhamento de doses.",
  },
  {
    title: "App Crossfit VK",
    image: "/src/assets/cftvk-app.jpeg",
    inDevelopment: true,
    mobile: true,
    tags: ["React Native", "Expo"],
    link: "",
    description: "Aplicativo para o box de Crossfit VK, oferecendo funcionalidades como agendamento de aulas, acompanhamento de treinos e comunicação com os membros.",
  },
  {
    title: "Site Crossfit VK",
    image: "/src/assets/cftvk-website.png",
    inDevelopment: false,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://cftvk-website.vercel.app/",
    description: "Site institucional para o box de Crossfit VK, destacando seus serviços, informações e contato.",
  },
  {
    title: "Site Impulso Digital",
    image: "/src/assets/impulso-digital-website.png",
    inDevelopment: false,
    link: "https://impulsodigital.dev.br/",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    description: "Site institucional para a empresa de desenvolvimento de software Impulso Digital, apresentando seus serviços e portfólio.",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="section-spacing relative">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Projetos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const className = "relative group block rounded-xl border border-border bg-card/50 overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-pointer";

  const content = (
    <>
      {project.inDevelopment && (
        <span className="absolute top-3 right-3 z-20 bg-amber-500 text-amber-900 text-xs font-semibold px-2 py-0.5 rounded-md shadow pointer-events-none">
          Em desenvolvimento
        </span>
      )}
      <div className="aspect-video bg-secondary/50 overflow-hidden flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="relative z-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-muted-foreground text-4xl">📂</div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-baseline gap-2 mb-1">
          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 flex items-baseline gap-2">
            <span>{project.title}</span>
          </h4>
          {project.mobile && (
            <FontAwesomeIcon icon={faMobileScreen} />
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
};

export default Projects;
