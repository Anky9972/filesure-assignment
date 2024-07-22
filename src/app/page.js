import Hero from "./hero/page";
import LogoBar from "./logo-bar/page";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import OurTeam from "./components/our-team";
import AppStages from "./components/app-stages";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Developed from "./components/project-developed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
      <section id="services">
        <LogoBar />
      </section>
      <section id="developed">
        <Developed />
      </section>
      <section id="projectss">
        <Projects />
      </section>
      <section id="contacts">
        <Contact />
      </section>
      <section id="app-stages">
        <AppStages />
      </section>
        <OurTeam />

      <section id="faq">
        <FAQ />
      </section>
        <Footer />
    </main>
  );
}
