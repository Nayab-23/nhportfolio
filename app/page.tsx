import Hero from "@/components/hero"
import Experience from "@/components/experience"
import CurrentProject from "@/components/current-project"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Experience />
      <CurrentProject />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
