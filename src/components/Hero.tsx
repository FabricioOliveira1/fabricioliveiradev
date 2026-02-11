import { motion } from "framer-motion";
import fabricioPhoto from "/assets/fabricio-photo.png"; 
const Hero = () => {
  return (
    <section id="main" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Cosmic gradient overlay */}
      <div className="absolute inset-0 cosmic-gradient" />

      {/* Glow line effect */}
      <div className="absolute top-1/3 left-0 right-0 h-px glow-line animate-glow-pulse" />

      <div className="container-narrow relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-lg text-foreground/70 mb-2">
              Olá, eu sou
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2">
              <span className="text-gradient">Fabricio Oliveira</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Desenvolvedor<br />Front-end
            </h2>
            <p className="text-primary/80 font-mono text-sm mb-8">
              Web & Mobile Developer
            </p>

            <a
              href="#projetos"
              className="inline-flex items-center gap-2 border border-foreground/30 rounded-full px-6 py-3 text-sm text-foreground hover:border-primary hover:text-primary transition-all duration-300 uppercase tracking-wider font-medium"
            >
              Veja meus Projetos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />
              <img
                src={fabricioPhoto}
                alt="Fabricio Oliveira"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-primary/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
