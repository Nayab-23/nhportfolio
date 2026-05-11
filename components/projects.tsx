"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

type ProjectType = "All" | "Software" | "Hardware"

type Project = {
  id: string
  title: string
  year: string
  type: Exclude<ProjectType, "All">
  category: string
  origin: string
  summary: string
  description: string
  details: string[]
  tags: string[]
  githubUrl?: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    id: "payment-router",
    title: "Autonomous Payment Router",
    year: "2026",
    type: "Software",
    category: "Payment Systems",
    origin: "Recent work",
    summary: "Routes prompts across LLM providers, chooses the cheapest option that still meets policy, then settles usage with gasless USDC payments.",
    description:
      "Designed a routing layer for AI workloads that compares real-time provider pricing, latency, and quality constraints before selecting an execution path.",
    details: [
      "Classifies incoming tasks before quote lookup so cheap models are not overused on high-stakes requests.",
      "Evaluates provider quotes against latency and quality policies before choosing a route.",
      "Settles usage with gasless USDC payments on Arc L1 for a smoother product workflow.",
    ],
    tags: ["LLM Providers", "Prompt Routing", "USDC", "Policy Engine", "Arc L1"],
    githubUrl: "https://github.com/Nayab-23/AgenticCommerce",
  },
  {
    id: "parallel",
    title: "Parallel",
    year: "2026",
    type: "Software",
    category: "AI Workspace",
    origin: "Recent work",
    summary: "Enterprise-ready AI workspace that unifies team knowledge, conversations, and action tracking.",
    description:
      "Built around the idea that teams move faster when chat, knowledge retrieval, and action history live in one place instead of across disconnected tools.",
    details: [
      "Centralizes context so teams can answer questions and keep work moving without tool-switching.",
      "Uses retrieval and structured storage to keep answers grounded in organizational knowledge.",
      "Targets practical execution rather than a generic chatbot wrapper.",
    ],
    tags: ["PostgreSQL", "pgvector", "SSE", "Enterprise AI", "Knowledge Systems"],
  },
  {
    id: "civic",
    title: "Personal Digital Document Hub",
    year: "2026",
    type: "Software",
    category: "Digital Records",
    origin: "Recent work",
    summary: "Secure personal records hub with reminders, revocable sharing, and emergency-safe access controls.",
    description:
      "A document system for trust-sensitive workflows where people need life records to stay organized, shareable, and secure without turning the product into a maze.",
    details: [
      "Supports revocable audited sharing links for sensitive documents.",
      "Includes expiration reminders so important records do not silently go stale.",
      "Adds a Panic Mode concept for emergency access scenarios.",
    ],
    tags: ["Document Security", "Sharing Links", "Reminders", "Access Control"],
  },
  {
    id: "sentiment-mcp",
    title: "Sentiment Analysis Tool with MCP",
    year: "2025",
    type: "Software",
    category: "AI Tooling",
    origin: "Imported from older portfolio",
    summary: "Python MCP server that exposes sentiment analysis as a reusable tool for agents, IDEs, and lightweight web clients.",
    description:
      "This project from the older portfolio is now represented as a compact tool-building case study rather than a separate long page.",
    details: [
      "Exposes an `analyze_sentiment` tool that returns a normalized label and confidence score.",
      "Tested from both an MCP client and a lightweight web UI for reuse across interfaces.",
      "Added tool schema design, input validation, error handling, and usage docs for CLI and web contexts.",
    ],
    tags: ["Python", "MCP", "Gradio", "JSON Schema", "Sentiment Analysis"],
  },
  {
    id: "enterprise-rag",
    title: "Enterprise Document Intelligence System with RAG",
    year: "2025",
    type: "Software",
    category: "Retrieval Systems",
    origin: "Imported from older portfolio",
    summary: "Production-grade RAG platform for context-aware search across large enterprise document collections.",
    description:
      "Built to retrieve the right information quickly from messy document stores and ground generated answers in actual enterprise content.",
    details: [
      "Processed PDFs, Word files, and scanned images with OCR and semantic chunking for ingestion.",
      "Combined vector search and hybrid retrieval for fast, citation-backed answers.",
      "Used FastAPI, auth controls, Docker, Kubernetes, AWS, and monitoring to shape it like a real platform rather than a demo.",
    ],
    tags: ["RAG", "FastAPI", "Milvus", "Redis", "OCR", "Kubernetes", "AWS"],
  },
  {
    id: "darwin-lab",
    title: "Darwin Research Lab for Trading",
    year: "2026",
    type: "Software",
    category: "Quant Research",
    origin: "Recent work",
    summary: "Graph-based deterministic equity strategy lab for testing multiple strategy variants side by side.",
    description:
      "Designed to shorten the path from trading idea to validated strategy while keeping experimentation cheap and less prone to overfitting.",
    details: [
      "Runs deterministic strategy graphs so experiments are repeatable.",
      "Encourages side-by-side validation instead of single-path curve fitting.",
      "Built for fast iteration on research ideas under constrained compute budgets.",
    ],
    tags: ["Trading Strategy", "Graph Models", "Backtesting", "Quant Research"],
  },
  {
    id: "echofix",
    title: "Social Media Ingester for User Feedback",
    year: "2026",
    type: "Software",
    category: "Feedback Intelligence",
    origin: "Recent work",
    summary: "Turns Reddit and X feedback into issue briefs with acceptance criteria so teams can ship against real user pain.",
    description:
      "An operational bridge between social chatter and engineering execution, aimed at reducing the lag between user complaints and product action.",
    details: [
      "Clusters repeated praise and complaints instead of reacting to isolated posts.",
      "Drafts issue briefs with acceptance criteria for a faster handoff to engineering.",
      "Uses AI to compress noisy feedback into something a team can actually ship against.",
    ],
    tags: ["Gemini", "Reddit", "X", "Issue Briefs", "User Feedback"],
    githubUrl: "https://github.com/Nayab-23/EchoFix",
  },
  {
    id: "resume-analyzer",
    title: "Resume Analyzer",
    year: "2026",
    type: "Software",
    category: "Developer Utilities",
    origin: "Recent work",
    summary: "CLI tool that extracts contact details, degrees, and skills from PDF, TXT, and DOCX resumes.",
    description:
      "Built as a practical utility for resume parsing with a straightforward pipeline instead of heavyweight infrastructure.",
    details: [
      "Ingests multiple file formats from one command-line interface.",
      "Combines regex heuristics and keyword matching for useful extraction without overengineering.",
      "Keeps the data flow simple enough to extend for screening or reporting workflows later.",
    ],
    tags: ["Python", "CLI", "PDF", "DOCX", "Regex", "NLP Heuristics"],
    githubUrl: "https://github.com/Nayab-23/Resume_Analyzer",
  },
  {
    id: "llama-finetune",
    title: "Fine-Tune Llama 3",
    year: "2025",
    type: "Software",
    category: "Model Training",
    origin: "Imported from older portfolio",
    summary: "Fine-tuned Llama 3 with personal notes and textbook excerpts to improve relevance for code generation tasks.",
    description:
      "The earlier portfolio treated this as a learning-heavy model customization project centered on personalized data preparation and evaluation.",
    details: [
      "Collected and preprocessed notes and textbook excerpts into JSON training data.",
      "Focused on fine-tuning for more relevant and accurate code generation behavior.",
      "Benchmarked the fine-tuned model against the original setup to evaluate gains.",
    ],
    tags: ["Llama 3", "Fine-Tuning", "JSON Data Prep", "Evaluation"],
  },
  {
    id: "transformer-pipeline",
    title: "Transformer with Pipeline()",
    year: "2025",
    type: "Software",
    category: "NLP Systems",
    origin: "Imported from older portfolio",
    summary: "Built a custom Hugging Face style pipeline to understand the steps behind high-level NLP inference.",
    description:
      "This project breaks the convenience abstraction apart and walks through model loading, preprocessing, inference, and post-processing directly.",
    details: [
      "Loaded pretrained models and tokenizers manually with Hugging Face APIs.",
      "Handled padding, truncation, raw logits, softmax, and label mapping step by step.",
      "Used the project to understand what the high-level `pipeline()` abstraction actually does.",
    ],
    tags: ["Transformers", "Tokenization", "Inference", "Softmax", "Hugging Face"],
  },
  {
    id: "alien-predictions",
    title: "Fake Trading Prediction Minimizer",
    year: "2026",
    type: "Software",
    category: "Prediction Markets",
    origin: "Recent work",
    summary: "Mini app where verified humans create crypto predictions and stake assets so reputation is harder to game.",
    description:
      "Built around the idea that prediction products improve when identity and economic cost reduce low-quality participation.",
    details: [
      "Publishes on Alien.org with World ID and MiniKit Pay integration.",
      "Lets users stake WLD or USDC to make predictions with stronger accountability.",
      "Tracks immutable reputation so spammy fake predictions become more expensive.",
    ],
    tags: ["Alien.org", "World ID", "MiniKit Pay", "WLD", "USDC"],
    githubUrl: "https://github.com/Nayab-23/alien",
  },
  {
    id: "square-leap",
    title: "Square Leap",
    year: "2025",
    type: "Software",
    category: "Game Development",
    origin: "Imported from older portfolio",
    summary: "Built and published a game with Buildbox for the Google Play Store.",
    description:
      "The old site only partially documented this project, so the new portfolio keeps the core outcome clear: shipped a playable game end to end.",
    details: [
      "Designed and developed the game as lead builder.",
      "Published the project to the Google Play Store.",
      "Used it as a practical exercise in product packaging and shipping, not just prototyping.",
    ],
    tags: ["Buildbox", "Google Play", "Game Design", "Shipping"],
  },
  {
    id: "object-detection-camera",
    title: "Object Detection Camera",
    year: "2025",
    type: "Hardware",
    category: "Edge Vision",
    origin: "Imported from older portfolio",
    summary: "Raspberry Pi camera system using TensorFlow and YOLO for real-time object detection and tracking.",
    description:
      "This is the hardware project from the older portfolio that most directly benefits from a denser presentation because the original version spread a short story across a separate page.",
    details: [
      "Uses a Raspberry Pi and camera module for lightweight real-time vision.",
      "Detects, classifies, and tracks multiple objects with bounding boxes and labels.",
      "Targets use cases like home security, automated monitoring, and edge AI experimentation.",
    ],
    tags: ["Raspberry Pi Zero", "TensorFlow", "YOLO", "Computer Vision", "Edge AI"],
  },
  {
    id: "reachy-study-robot",
    title: "Reachy Study Monitoring Robot",
    year: "2026",
    type: "Hardware",
    category: "Embodied AI",
    origin: "Recent work",
    summary: "Hackathon prototype that monitors study sessions, detects distraction patterns, and reports focus analytics.",
    description:
      "Built as an embodied AI experiment where the physical system and the feedback loop matter as much as the model itself.",
    details: [
      "Uses Reachy and edge AI to monitor phone usage and attention drift in real time.",
      "Tracks active study time and session-level behavior patterns.",
      "Reports results through a dashboard instead of leaving the output trapped in raw model predictions.",
    ],
    tags: ["Reachy", "Jetson Orin Nano", "Embodied AI", "Computer Vision", "Dashboard"],
    githubUrl: "https://github.com/Nayab-23",
  },
  {
    id: "voice-assistant",
    title: "Raspberry Pi Voice Assistant",
    year: "2026",
    type: "Hardware",
    category: "Voice Interfaces",
    origin: "Recent work",
    summary: "TinyLLaMA-based voice chatbot running on a Raspberry Pi with text-to-speech and local optimization.",
    description:
      "A hardware-focused AI interface project centered on how much conversational usefulness can be pushed onto a small local device.",
    details: [
      "Integrates voice input with a lightweight local model workflow.",
      "Adds text-to-speech for a more natural device interaction loop.",
      "Optimizes for smoother on-device performance under limited hardware constraints.",
    ],
    tags: ["Raspberry Pi 4B", "TinyLLaMA", "Voice Input", "Text-to-Speech", "Local AI"],
  },
  {
    id: "parental-control-robot",
    title: "Parental Control Robot",
    year: "2026",
    type: "Hardware",
    category: "Networked Robotics",
    origin: "Recent work",
    summary: "Robot-assisted parental control system using DNS-layer filtering to enforce safer internet access.",
    description:
      "Built at a Seeed Studio hackathon as a physical interface for digital safety, mixing robotics with network controls.",
    details: [
      "Uses DNS-layer filtering to block distracting or unsafe websites.",
      "Turns parental controls into an interactive physical system rather than a hidden settings page.",
      "Combines embedded systems, networking, and security into a working hackathon prototype.",
    ],
    tags: ["Robotics", "DNS Filtering", "Network Security", "Embedded Systems", "Hackathon"],
  },
]

const filters: ProjectType[] = ["All", "Software", "Hardware"]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("All")
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0].id)

  const visibleProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.type === activeFilter)
  const selectedProject = visibleProjects.find((project) => project.id === selectedProjectId) ?? visibleProjects[0]

  const counts = {
    All: projects.length,
    Software: projects.filter((project) => project.type === "Software").length,
    Hardware: projects.filter((project) => project.type === "Hardware").length,
  } as const

  return (
    <section id="projects" className="bg-[#f6f8fb] py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.36em] text-emerald-700">Projects</p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">One explorer instead of a long wall of cards.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The software and hardware filters stay, but the layout now shows more projects at once and moves the full
              story into a detail panel so people do not need to scroll through repeated card chrome.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm lg:max-w-sm">
            Imported the older Wix portfolio projects here and merged them with newer work so the full archive lives in one place.
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[340px_minmax(0,1fr)]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_22px_70px_-50px_rgba(15,23,42,0.45)]">
            <div className="mb-4 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  type="button"
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className={
                    activeFilter === filter
                      ? "rounded-full bg-slate-950 text-white hover:bg-slate-800"
                      : "rounded-full border-slate-300 text-slate-700 hover:bg-slate-100"
                  }
                >
                  {filter}
                  <span className="ml-2 rounded-full bg-white/15 px-2 py-0.5 text-xs text-current">{counts[filter]}</span>
                </Button>
              ))}
            </div>

            <ScrollArea className="h-[24rem] pr-3 sm:h-[30rem] xl:h-[41rem]">
              <div className="space-y-3">
                {visibleProjects.map((project) => {
                  const isActive = project.id === selectedProject?.id

                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setSelectedProjectId(project.id)}
                      className={cn(
                        "w-full rounded-3xl border p-4 text-left transition",
                        isActive
                          ? "border-slate-950 bg-slate-950 text-white shadow-[0_20px_50px_-38px_rgba(15,23,42,0.9)]"
                          : "border-slate-200 bg-slate-50 text-slate-900 hover:border-slate-300 hover:bg-white",
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p
                            className={cn(
                              "text-xs font-semibold uppercase tracking-[0.28em]",
                              isActive ? "text-emerald-200/90" : "text-emerald-700",
                            )}
                          >
                            {project.type} • {project.year}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold leading-6">{project.title}</h3>
                        </div>
                        <span
                          className={cn(
                            "rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em]",
                            isActive ? "bg-white/10 text-white/80" : "bg-slate-200 text-slate-600",
                          )}
                        >
                          {project.category}
                        </span>
                      </div>
                      <p className={cn("mt-3 text-sm leading-6", isActive ? "text-slate-200" : "text-slate-600")}>{project.summary}</p>
                    </button>
                  )
                })}
              </div>
            </ScrollArea>
          </div>

          {selectedProject ? (
            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_28px_80px_-54px_rgba(15,23,42,0.45)] md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-6">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="border-0 bg-emerald-100 px-3 py-1 text-emerald-800 hover:bg-emerald-100">
                      {selectedProject.origin}
                    </Badge>
                    <Badge className="border-0 bg-slate-100 px-3 py-1 text-slate-700 hover:bg-slate-100">
                      {selectedProject.type}
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{selectedProject.title}</h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.28em] text-slate-500">
                    {selectedProject.category} • {selectedProject.year}
                  </p>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">{selectedProject.description}</p>
                </div>

                {(selectedProject.githubUrl || selectedProject.demoUrl) && (
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.githubUrl ? (
                      <Button asChild className="rounded-full bg-slate-950 text-white hover:bg-slate-800">
                        <Link href={selectedProject.githubUrl} target="_blank" rel="noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    ) : null}
                    {selectedProject.demoUrl ? (
                      <Button asChild variant="outline" className="rounded-full border-slate-300 text-slate-800 hover:bg-slate-100">
                        <Link href={selectedProject.demoUrl} target="_blank" rel="noreferrer">
                          <ArrowUpRight className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                )}
              </div>

              <div className="grid gap-8 pt-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">What it does</p>
                  <p className="mt-3 text-lg leading-8 text-slate-700">{selectedProject.summary}</p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {selectedProject.details.map((detail) => (
                      <div key={detail} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Tech stack</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full bg-white px-3 py-1 text-slate-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-8 rounded-3xl bg-slate-950 p-5 text-sm leading-6 text-slate-200">
                    <p className="font-semibold text-white">Why this layout is better</p>
                    <p className="mt-2">
                      People can skim the full project list first, then inspect only the one they care about instead of
                      repeatedly scrolling through oversized cards.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  )
}
