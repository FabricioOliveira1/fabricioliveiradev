import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 relative">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <a
            href="https://wa.me/5521997592837?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary/40 rounded-full px-6 py-3 text-sm text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Entrar em Contato
          </a>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/FabricioOliveira1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fabricioliveira-1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/5521997592837?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} Fabricio Oliveira. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
