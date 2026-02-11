import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faJava, faJs, faReact, faTailwindCss, faTypescript, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import ReactNativeIcon from "/src/assets/react-native.png"; 
import ExpoIcon from "/src/assets/expo.svg"; 
import NextIcon from "/src/assets/nextjs.svg"; 



interface Skill {
  name: string;
  icon: IconDefinition | string; // Pode ser um ícone do FontAwesome ou um caminho para uma imagem
}

const mainSkills: Skill[] = [
  { name: "React.js", icon: faReact },
  { name: "Typescript", icon: faTypescript },
  { name: "JavaScript", icon: faJs }, 
  { name: "CSS", icon: faCss3Alt },
  { name: "React Native", icon: ReactNativeIcon },
  { name: "Expo", icon: ExpoIcon },
  { name: "Tailwind CSS", icon: faTailwindCss },
  { name: "Next.js", icon: NextIcon },
];

const secondarySkills = [
  "Styled Components",
  "SASS",
  "WordPress",
  "Firebsase",
  "Figma",
  "Generative AI",
  "Notion",
  "Git",
  "GitHub",
  "Node.js",
];

const Skills = () => {
  const marqueeItems = [...secondarySkills, ...secondarySkills, ...secondarySkills, ...secondarySkills];

  return (
    <section id="skills" className="section-spacing relative">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Minhas Skills e <span className="text-gradient">Power up's</span>
          </h2>
        </motion.div>

        {/* Main Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {mainSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:bg-card transition-all duration-300"
            >
              {/* <span className="text-4xl">{skill.icon}</span> */}
              {typeof skill.icon === "string" ? (
                <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              ) : (
              <FontAwesomeIcon size="4x" icon={skill.icon} />
              )}
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Marquee secondary skills */}
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap">
            {marqueeItems.map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="mx-4 text-sm text-muted-foreground font-medium"
              >
                {skill} /
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
