import Header from "./components/Header";
import Hero from "./components/Hero";
import Credibility from "./components/Credibility";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Impact from "./components/Impact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credibility />
        <About />
        <Skills />
        <Projects />
        <Impact />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
