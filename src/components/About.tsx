import { motion } from "framer-motion";
import rocketIllustration from "@/assets/rocket-illustration.svg";

const About = () => {
  return (
    <section id="sobre" className="section-spacing relative">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre <span className="text-gradient">mim</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3 space-y-4 text-foreground/70 leading-relaxed text-center md:text-left">
              <p>
                Sou um desenvolvedor <span className="text-primary font-medium">Front-end</span>, tenho 32 anos e moro
                no Rio de Janeiro. Atualmente cursando faculdade de{" "}
                <span className="text-primary font-medium">Análise e Desenvolvimento de Sistemas</span>, e cursos para
                especialização em <span className="text-primary font-medium">React.js, React Native </span>e todo o ecossistema.
              </p>
              <p>
                <span className="text-primary font-semibold">O meu principal objetivo é evoluir como desenvolvedor full stack e mobile.</span>
                {" "}Então, se você é uma empresa que procura por uma presença melhor na internet,
                ou se deseja <span className="text-primary font-medium">contratar</span>,
                pode entrar em contato comigo{" "}
                <a
                  href="https://wa.me/5521997592837?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-accent-foreground transition-colors"
                >
                  aqui
                </a>
                , ou ver alguns trabalhos{" "}
                <a
                  href="#projetos"
                  className="text-primary underline underline-offset-2 hover:text-accent-foreground transition-colors"
                >
                  aqui
                </a>
                .
              </p>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <motion.img
                src={rocketIllustration}
                alt="Ilustração de foguete"
                className="w-48 md:w-64 animate-float"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </div>
          </div>

          {/* Quote */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="italic text-foreground/50 text-sm">
              "Today is the opportunity to build the tomorrow you want."
            </p>
            <p className="text-primary/60 text-xs font-semibold mt-2">
              — Ken Poirot
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
