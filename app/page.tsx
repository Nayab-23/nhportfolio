import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </main>
  )
}
