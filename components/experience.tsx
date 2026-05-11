import Link from "next/link"
import { FileText, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const roles = [
  {
    company: "Polaris",
    title: "Founder",
    period: "2026 - Present",
    location: "San Jose, CA",
    summary:
      "Building developer infrastructure for hardware teams that need to catch integration risk before it reaches the main branch.",
    highlights: [
      "Built a real-time conflict detection engine for FPGA and firmware workflows using deterministic merge analysis plus language-aware detectors.",
      "Shipped cross-file blast-radius analysis that surfaces risky package and port definition changes in seconds.",
      "Ran customer discovery with FPGA engineers across labs and semiconductor teams to pressure-test the product direction.",
    ],
  },
  {
    company: "Penta Global Limited",
    title: "Software Developer",
    period: "June 2024 - July 2024",
    location: "Dhaka, Bangladesh",
    summary:
      "Worked on model deployment and validation workflows with a strong focus on reproducibility, faster training, and more trustworthy ML systems.",
    highlights: [
      "Containerized Llama-3 and Mistral models with Docker using Python for reproducible deployment flows.",
      "Validated data pipelines with Pandera to enforce schemas and catch anomalies before training.",
      "Accelerated fine-tuning with Unsloth while reducing training time and resource use.",
    ],
  },
] as const

const educationEntries = [
  {
    years: "2025 - Present",
    institution: "San Jose State University",
    location: "San Jose, CA",
    program: "Computer Engineering",
    description:
      "Building a strong foundation in programming, software development, and systems thinking while applying those skills to startups and shipped products.",
    details: ["Programming", "Software Development", "Database Management", "Systems Thinking"],
  },
  {
    years: "2009 - 2025",
    institution: "Scholastica Uttara",
    location: "Dhaka, BD",
    program: "Primary and Secondary Education",
    description:
      "Received the academic grounding that prepared me for higher studies in technology and computer engineering, with an emphasis on critical thinking and problem solving.",
    details: ["Academic Rigor", "Critical Thinking", "Problem Solving", "Lifelong Learning"],
  },
] as const

const skillGroups = [
  {
    title: "Software Engineering",
    skills: ["Python", "Java", "TypeScript", "APIs", "Schema Validation", "Linux Commands"],
  },
  {
    title: "AI and ML",
    skills: ["RAG", "Fine-Tuning LLMs", "Model Deployment", "MCP", "Semantic Search", "Model Evaluation"],
  },
  {
    title: "DevOps and MLOps",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "Data Validation Pipelines", "Observability"],
  },
  {
    title: "Hardware and Edge",
    skills: ["Raspberry Pi", "Computer Vision", "Edge AI", "Voice Interfaces", "Embodied AI"],
  },
] as const

const contactItems = [
  {
    label: "Email",
    value: "nayabibnhossain@gmail.com",
    href: "mailto:nayabibnhossain@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+1 408 449 8129",
    href: "tel:+14084498129",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nayabhossain",
    href: "https://www.linkedin.com/in/nayabhossain",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Nayab-23",
    href: "https://github.com/Nayab-23",
    icon: Github,
  },
  {
    label: "Location",
    value: "San Jose, California",
    href: undefined,
    icon: MapPin,
  },
  {
    label: "Resume",
    value: "Open PDF resume",
    href: "/NayabResume.pdf",
    icon: FileText,
  },
] as const

export default function Experience() {
  return (
    <section id="snapshot" className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.36em] text-emerald-700">Snapshot</p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Resume, education, skills, and contact in one place.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The old portfolio scattered this information across separate sections and pages. This version compresses it
            into a single switchable panel so visitors can scan what matters faster.
          </p>
        </div>

        <Tabs defaultValue="experience" className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-[0_28px_80px_-54px_rgba(15,23,42,0.3)] md:p-6">
          <TabsList className="grid h-auto w-full grid-cols-2 gap-2 rounded-[1.5rem] bg-white p-2 md:grid-cols-4">
            <TabsTrigger value="experience" className="rounded-[1rem] px-4 py-3 text-sm font-semibold">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="rounded-[1rem] px-4 py-3 text-sm font-semibold">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="rounded-[1rem] px-4 py-3 text-sm font-semibold">
              Skills
            </TabsTrigger>
            <TabsTrigger value="contact" className="rounded-[1rem] px-4 py-3 text-sm font-semibold">
              Contact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="mt-5">
            <div className="grid gap-4 xl:grid-cols-2">
              {roles.map((role) => (
                <article key={`${role.company}-${role.title}`} className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">{role.period}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{role.title}</h3>
                      <p className="mt-1 text-base font-medium text-slate-700">{role.company}</p>
                      <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-500">{role.location}</p>
                    </div>
                    <Badge className="border-0 bg-slate-100 text-slate-700 hover:bg-slate-100">Work</Badge>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">{role.summary}</p>

                  <div className="mt-6 grid gap-3">
                    {role.highlights.map((highlight) => (
                      <div key={highlight} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-5">
            <div className="grid gap-4 lg:grid-cols-2">
              {educationEntries.map((entry) => (
                <article key={entry.institution} className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">{entry.years}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{entry.institution}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-500">{entry.location}</p>
                  <p className="mt-4 text-lg font-medium text-slate-800">{entry.program}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{entry.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {entry.details.map((detail) => (
                      <Badge key={detail} variant="secondary" className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                        {detail}
                      </Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="mt-5">
            <div className="grid gap-4 lg:grid-cols-2">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact" className="mt-5">
            <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon

                  const content = (
                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:bg-slate-50">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-emerald-100 p-3">
                          <Icon className="h-5 w-5 text-emerald-700" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">{item.label}</p>
                          <p className="mt-1 text-sm text-slate-700">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") || item.href.endsWith(".pdf") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") || item.href.endsWith(".pdf") ? "noreferrer" : undefined}
                    >
                      {content}
                    </Link>
                  ) : (
                    <div key={item.label}>{content}</div>
                  )
                })}
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-slate-200">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Contact UX</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">Direct actions beat a generic form here.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  The old portfolio had a standard contact form. This version switches to immediate email, phone, resume,
                  GitHub, and LinkedIn actions because those are faster for recruiters, collaborators, and hackathon teams.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="rounded-full bg-emerald-500 text-white hover:bg-emerald-600">
                    <Link href="mailto:nayabibnhossain@gmail.com">Email Nayab</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
                    <Link href="/NayabResume.pdf" target="_blank" rel="noreferrer">
                      View Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
