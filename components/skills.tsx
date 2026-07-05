import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { BrainCircuit, Cpu, Gauge, Network, ScanSearch, ShieldCheck, Workflow } from "lucide-react"

type SkillCategory = {
  title: string
  description: string
  icon: LucideIcon
  accentClass: string
  skills: string[]
  toolLogos?: ToolLogo[]
}

type ToolLogo = {
  name: string
  src: string
  alt: string
  width: number
  height: number
  logoClassName: string
}

const edaToolLogos: ToolLogo[] = [
  {
    name: "SymbiYosys",
    src: "/brands/eda/yosys.png",
    alt: "Yosys logo",
    width: 280,
    height: 280,
    logoClassName: "h-10 w-10 object-contain",
  },
  {
    name: "Jasper Gold",
    src: "/brands/eda/cadence.svg",
    alt: "Cadence logo",
    width: 193,
    height: 36,
    logoClassName: "h-7 w-24 object-contain",
  },
  {
    name: "Questa Formal",
    src: "/brands/eda/siemens.svg",
    alt: "Siemens logo",
    width: 1000,
    height: 159,
    logoClassName: "h-7 w-24 object-contain",
  },
  {
    name: "VCS Formal",
    src: "/brands/eda/synopsys.svg",
    alt: "Synopsys logo",
    width: 334,
    height: 76,
    logoClassName: "h-7 w-24 object-contain",
  },
]

const skillCategories: SkillCategory[] = [
  {
    title: "Formal Verification",
    description: "Assertion strategy, proof workflows, failure analysis, and coverage closure.",
    icon: ShieldCheck,
    accentClass: "from-emerald-500 to-teal-600",
    skills: [
      "SystemVerilog Assertions",
      "Bounded Model Checking",
      "Property-Based Verification",
      "Counterexample Analysis",
      "Coverage Closure",
      "Formal Verification Planning",
      "VCD Trace Analysis",
    ],
  },
  {
    title: "AI Applied to EDA",
    description: "Agentic verification systems that connect LLM reasoning to hardware toolchains.",
    icon: BrainCircuit,
    accentClass: "from-violet-500 to-fuchsia-600",
    skills: [
      "LLM-Driven Assertion Generation",
      "Rulebook-Guided Prompt Engineering",
      "RAG over Hardware Standards",
      "Protocol-Spec Grounding",
      "Multi-Agent Verification Pipelines",
      "Human-in-the-Loop Verification",
      "Root Cause Analysis Agents",
    ],
  },
  {
    title: "Hardware and RTL",
    description: "Reading designs, extracting intent, and turning specs into verification plans.",
    icon: Cpu,
    accentClass: "from-amber-500 to-orange-600",
    skills: [
      "RTL Analysis",
      "Verilog",
      "SystemVerilog",
      "Clock Domain Crossing",
      "Verification Plan Generation",
      "Design Specification Parsing",
    ],
  },
  {
    title: "EDA Tools",
    description: "Formal engines and commercial verification environments used in the flow.",
    icon: Gauge,
    accentClass: "from-sky-500 to-cyan-600",
    skills: ["SymbiYosys", "Jasper Gold", "Questa Formal", "VCS Formal"],
    toolLogos: edaToolLogos,
  },
  {
    title: "AI and ML",
    description: "Applied model workflows for retrieval, evaluation, and agent behavior.",
    icon: Workflow,
    accentClass: "from-lime-500 to-emerald-600",
    skills: ["LLaMA", "Mistral", "Gemini", "Agentic Systems", "RAG", "Semantic Search", "Unsloth", "Model Evaluation"],
  },
  {
    title: "Backend and Data",
    description: "APIs and storage layers that support product-grade AI systems.",
    icon: Network,
    accentClass: "from-indigo-500 to-blue-600",
    skills: ["Python", "Java", "SQL", "Bash", "FastAPI", "REST APIs", "PostgreSQL", "SQLite", "pgvector", "SSE"],
  },
  {
    title: "Edge Systems",
    description: "Hardware-adjacent prototypes with cameras, constrained devices, and inference loops.",
    icon: ScanSearch,
    accentClass: "from-rose-500 to-red-600",
    skills: ["Raspberry Pi", "Camera Modules", "Real-time Inference", "Resource-constrained Systems"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-12 sm:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 sm:text-base sm:tracking-[0.28em]">
            Technical focus
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Formal verification, RTL, and AI systems.
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-600">
            A hardware-focused skill set centered on building agentic tools that turn design specs into verified
            properties, debug failures, and close coverage with real EDA workflows.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon

            return (
              <div
                key={category.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-48px_rgba(15,23,42,0.85)]"
              >
                <div className={`h-1.5 bg-gradient-to-r ${category.accentClass}`} />
                <div className="p-4">
                  <div className="mb-3 flex items-start gap-3">
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.accentClass} text-white shadow-[0_14px_30px_-22px_rgba(15,23,42,0.9)]`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">{category.title}</h3>
                      <p className="mt-1 text-base leading-6 text-slate-600">{category.description}</p>
                    </div>
                  </div>

                  {category.toolLogos ? (
                    <div className="grid grid-cols-2 gap-2">
                      {category.toolLogos.map((tool) => (
                        <div key={tool.name} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2">
                          <span className="inline-flex h-11 w-28 shrink-0 items-center justify-center rounded-lg bg-white px-2 shadow-sm">
                            <Image
                              src={tool.src}
                              alt={tool.alt}
                              width={tool.width}
                              height={tool.height}
                              unoptimized={tool.src.endsWith(".svg")}
                              className={tool.logoClassName}
                            />
                          </span>
                          <span className="text-sm font-semibold leading-tight text-slate-800">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="max-w-full break-words rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium leading-5 text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
