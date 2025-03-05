import About from "@/components/About-Section/About";
import Contact from "@/components/Contact-Section/Contact";
import Home from "@/components/Home-Section/Home";
import Projects from "@/components/Projects-Section/Projects";
import Skills from "@/components/Skills-Section/Skills";

export default function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}