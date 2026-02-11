import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <StarField />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
