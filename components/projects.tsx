"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

type ProjectType = "All" | "Software" | "Hardware"

type Project = {
  id: number
  title: string
  type: Exclude<ProjectType, "All">
  category: string
  description: string
  accentClass: string
  tags: string[]
  githubUrl?: string
  youtubeUrl?: string
  heroSubtitle?: string
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("All")
  const [showAllProjects, setShowAllProjects] = useState(false)
  const initialProjectCount = 4

  const projects: Project[] = [
    {
      id: 16,
      title: "Formally Verified Real-Time Control Gateway",
      type: "Hardware",
      category: "Embedded Control",
      description:
        "Three-board control stack with STM32, ULX3S FPGA, and Tuya T5AI for safe monitoring, wireless control, and formal verification.",
      accentClass: "from-emerald-500 via-cyan-600 to-slate-950",
      tags: ["STM32", "ULX3S FPGA", "Tuya T5AI", "RTL", "SymbiYosys", "Z3"],
      youtubeUrl: "https://youtu.be/B4A7BAhrAfE",
      heroSubtitle: "Embedded control, communication, and formal safety checks in one hardware system.",
    },
    {
      id: 9,
      title: "Parental Control Robot",
      type: "Hardware",
      category: "ROBOTICS / DNS SECURITY",
      description:
        "Built a robot-based parental control system at a Seeed Studio hackathon that enforced internet restrictions through a DNS-layer filtering setup. The project was designed to help parents manage screen time, block distracting or unsafe sites, and create a more interactive physical interface for digital safety. It combined robotics, networking, and system design into a working hackathon prototype.",
      accentClass: "from-cyan-400 via-blue-500 to-slate-900",
      tags: ["Robotics", "DNS Filtering", "Parental Control", "Embedded Systems", "Network Security", "Hackathon"],
      githubUrl: "GITHUB_LINK_PLACEHOLDER",
      youtubeUrl: "https://youtu.be/B4A7BAhrAfE",
      heroSubtitle: "Built at a hackathon around embedded systems, networking, and parental controls.",
    },
    {
      id: 11,
      title: "LLaMA 3 Fine-Tuning",
      type: "Software",
      category: "Model Adaptation",
      description:
        "Fine-tuned LLaMA 3 on a personalized dataset of personal notes and textbook excerpts to improve code-generation relevance, efficiency, and task-specific performance.",
      accentClass: "from-blue-500 via-cyan-500 to-slate-900",
      tags: ["LLaMA 3", "Fine-Tuning", "JSON Data Prep", "Code Generation", "Model Evaluation"],
      heroSubtitle: "Customized datasets, targeted training, and benchmarking for more relevant code output.",
    },
    {
      id: 15,
      title: "Enterprise Document Intelligence System with RAG",
      type: "Software",
      category: "Document Intelligence",
      description:
        "Built a production-grade RAG platform for fast, accurate, context-aware search across enterprise documents by combining scalable ingestion, hybrid retrieval, fine-tuned LLaMA 3 responses, and secure APIs.",
      accentClass: "from-slate-700 via-blue-700 to-slate-950",
      tags: ["RAG", "Milvus + Redis", "BM25 + FAISS", "FastAPI", "LLaMA 3", "AWS + Kubernetes"],
      heroSubtitle: "Enterprise search stack with hybrid retrieval, secure backend services, and cloud deployment.",
    },
    {
      id: 1,
      title: "Parallel",
      type: "Software",
      category: "AI Workspace",
      description:
        "Enterprise-ready AI workspace that unifies team knowledge, conversations, and action tracking so organizations can execute faster with fewer tool silos.",
      accentClass: "from-emerald-500 via-teal-600 to-slate-900",
      tags: ["PostgreSQL", "pgvector", "SSE", "VS Code Extension", "Enterprise AI"],
    },
    {
      id: 10,
      title: "Personal Digital Document Hub for More Secured and Organized Sharing",
      type: "Software",
      category: "Digital Records",
      description:
        "Civic is a personal digital records hub that keeps life documents secure, categorized, and ready to share. It sends expiration reminders, offers one-tap Panic Mode for emergencies, and supports revocable, audited sharing links for trust-sensitive workflows.",
      accentClass: "from-cyan-500 via-blue-600 to-slate-900",
      tags: ["Document Security", "Sharing Links", "Reminders", "Access Control", "Trust Workflows"],
    },
    {
      id: 4,
      title: "Autonomous Payment Router",
      type: "Software",
      category: "Payment Systems",
      description:
        "Classifies incoming prompts, fetches real-time quotes from LLM providers, selects the lowest-cost option that still meets latency and quality policies, and settles usage with gasless USDC payments on Arc L1.",
      accentClass: "from-emerald-500 via-teal-600 to-slate-900",
      tags: ["LLM Providers", "Prompt Routing", "Arc L1", "USDC", "Policy Engine"],
      githubUrl: "https://github.com/Nayab-23/AgenticCommerce",
    },
    {
      id: 5,
      title: "Darwin Research Lab for Trading",
      type: "Software",
      category: "Quant Research",
      description:
        "Built a graph-based deterministic equity strategy lab designed to shorten the path from trading idea to validated strategy, reduce overfitting risk, and keep experimentation cheap by testing multiple strategy variations side by side.",
      accentClass: "from-indigo-500 via-sky-600 to-slate-900",
      tags: ["Trading Strategy", "Graph Models", "Backtesting", "Quant Research"],
    },
    {
      id: 6,
      title: "Fake Trading Prediction Minimizer",
      type: "Software",
      category: "Prediction Markets",
      description:
        "Built a mini app published on Alien.org where verified humans create crypto price predictions, stake WLD or USDC through MiniKit Pay, and build immutable reputation tied to World ID to make fake prediction spam significantly harder to game.",
      accentClass: "from-violet-500 via-fuchsia-600 to-slate-900",
      tags: ["Alien.org", "World ID", "MiniKit Pay", "WLD/USDC", "Prediction Markets"],
      githubUrl: "https://github.com/Nayab-23/alien",
    },
    {
      id: 7,
      title: "Object Detection Camera",
      type: "Hardware",
      category: "Edge Vision",
      description:
        "Developed a real-time object detection system using a Raspberry Pi and camera module, applying computer vision to identify and track objects efficiently for AI-powered edge applications.",
      accentClass: "from-amber-400 via-orange-500 to-slate-900",
      tags: ["Raspberry Pi Zero", "Camera Module", "Computer Vision", "Edge AI"],
    },
    {
      id: 8,
      title: "Reachy Study Monitoring Robot",
      type: "Hardware",
      category: "Embodied AI",
      description:
        "Built a hackathon prototype using Reachy and edge AI to monitor study sessions in real time. The system detects distraction patterns such as phone usage or losing focus, tracks active study time, and reports session insights through a dashboard.",
      accentClass: "from-cyan-400 via-sky-500 to-slate-900",
      tags: ["Reachy", "Jetson Orin Nano", "Computer Vision", "Embodied AI", "Focus Tracking", "Study Dashboard"],
      githubUrl: "https://github.com/Nayab-23",
    },
    {
      id: 12,
      title: "Resume Analyzer",
      type: "Software",
      category: "Developer Utilities",
      description:
        "Python CLI that ingests PDF, TXT, and DOCX resumes and extracts key information. Combines regex-based contact detection, degree spotting, and skill matching against a configurable keyword list.",
      accentClass: "from-slate-600 via-slate-800 to-slate-950",
      tags: ["Python", "CLI", "PDF/DOCX/TXT", "Regex", "NLP Heuristics"],
      githubUrl: "https://github.com/Nayab-23/Resume_Analyzer",
    },
    {
      id: 13,
      title: "Social Media Ingester for User Feedback",
      type: "Software",
      category: "Feedback Intelligence",
      description:
        "Turns Reddit and Twitter threads into shippable engineering work. Uses Gemini to detect recurring praise and complaints, cluster themes, and draft issue briefs with acceptance criteria so teams can act on real user feedback faster.",
      accentClass: "from-lime-500 via-emerald-600 to-slate-900",
      tags: ["Gemini", "Reddit", "Twitter", "Issue Briefs", "User Feedback"],
      githubUrl: "https://github.com/Nayab-23/EchoFix",
    },
    {
      id: 14,
      title: "Square Leap",
      type: "Software",
      category: "Mobile Games",
      description:
        "Served as lead developer on a Buildbox game and shipped it to both the Google Play Store and the Apple App Store.",
      accentClass: "from-rose-500 via-red-600 to-slate-950",
      tags: ["Buildbox", "Mobile Game", "Lead Developer", "Google Play Store", "App Store"],
      heroSubtitle: "Lead developer for a mobile game released on both major app stores.",
    },
    {
      id: 2,
      title: "NanoBrief",
      type: "Software",
      category: "Agentic Ops",
      description:
        "Agentic content pack generator that turns messy notes, changelogs, and requests into a publish-ready update, announcement, and FAQ set.",
      accentClass: "from-sky-500 via-cyan-600 to-slate-900",
      tags: ["Gemini Nano Banana", "On-device Planning", "Safety Filtering", "Evaluation"],
    },
    {
      id: 3,
      title: "Volta",
      type: "Software",
      category: "Feedback to Shipping",
      description:
        "Feedback-to-ticket bridge that turns high-signal X replies into GitHub issues, implementation plans, and shipped fixes.",
      accentClass: "from-violet-500 via-fuchsia-600 to-slate-900",
      tags: ["X Webhooks", "GitHub", "Grok 4", "Quality Gates", "Automation"],
      githubUrl: "https://github.com/Nayab-23/EchoFix",
    },
  ]

  const filters: ProjectType[] = ["All", "Software", "Hardware"]
  const visibleProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.type === activeFilter)
  const displayedProjects = showAllProjects ? visibleProjects : visibleProjects.slice(0, initialProjectCount)

  return (
    <section id="projects" className="bg-white py-12 dark:bg-slate-950 sm:py-14">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tighter">My Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A mix of current startup work, AI systems, and hardware prototypes.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveFilter(filter)
                setShowAllProjects(false)
              }}
              className={
                activeFilter === filter
                  ? "bg-emerald-500 hover:bg-emerald-600"
                  : "border-slate-300 dark:border-slate-700"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl dark:border-slate-800 dark:hover:border-slate-700"
            >
              <div className={`relative aspect-[16/7] overflow-hidden bg-gradient-to-br ${project.accentClass}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_55%)]"></div>
                <div className="relative flex h-full flex-col justify-between p-4 text-white">
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/85 sm:text-xs sm:tracking-[0.2em]">
                      {project.type}
                    </span>
                    <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs sm:tracking-[0.3em]">
                      {project.category}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold tracking-tight sm:text-xl">{project.title}</p>
                    {project.heroSubtitle ? <p className="text-sm text-white/80">{project.heroSubtitle}</p> : null}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3 pt-4">
                <p className="line-clamp-2 text-sm leading-6 text-slate-600 transition-all duration-300 group-hover:line-clamp-none dark:text-slate-400">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-h-[360px] group-hover:opacity-100">
                  <div className="pt-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>

              {project.githubUrl || project.youtubeUrl ? (
                <CardFooter className="flex flex-col gap-2 pt-0 sm:flex-row sm:flex-wrap">
                  {project.githubUrl ? (
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-slate-950 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 sm:w-auto"
                    >
                      <Link href={project.githubUrl} target="_blank" rel="noreferrer" title={`${project.title} code`}>
                        <Github className="mr-2 h-4 w-4 text-white dark:text-slate-950" />
                        Code
                      </Link>
                    </Button>
                  ) : null}
                  {project.youtubeUrl ? (
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-slate-950 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 sm:w-auto"
                    >
                      <Link href={project.youtubeUrl} target="_blank" rel="noreferrer" title={`${project.title} demo video`}>
                        <Image
                          src="/images/youtube-logo.svg"
                          alt=""
                          width={16}
                          height={16}
                          aria-hidden="true"
                          className="mr-2 h-4 w-4"
                        />
                        YouTube
                      </Link>
                    </Button>
                  ) : null}
                </CardFooter>
              ) : null}
            </Card>
          ))}
        </div>

        {visibleProjects.length > initialProjectCount ? (
          <div className="mt-6 flex justify-center">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowAllProjects((current) => !current)}
              className="border-slate-300 bg-white px-6 text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            >
              {showAllProjects ? "Show fewer projects" : `Show ${visibleProjects.length - initialProjectCount} more projects`}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
