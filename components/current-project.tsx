import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const currentProjectTags = [
  "SystemVerilog",
  "SVA",
  "SystemVerilog Assertions",
  "YAML",
  "Pydantic",
  "GraphRAG",
  "Human-in-the-Loop",
  "Formal Verification",
  "SymbiYosys",
  "Verilator",
  "RTL",
  "RCA",
  "Coverage Analysis",
  "Assertion",
]

export default function CurrentProject() {
  return (
    <section id="current-project" className="bg-slate-50 py-12 dark:bg-slate-950 sm:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="mb-3 text-3xl font-bold tracking-tighter text-slate-950 dark:text-white sm:text-4xl">
            Current Project
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            A larger spotlight for the system currently in progress.
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_28px_90px_-52px_rgba(15,23,42,0.6)] dark:border-slate-800 dark:bg-slate-900">
          <div className="grid min-h-[360px] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[260px] overflow-hidden bg-gradient-to-br from-emerald-500 via-cyan-600 to-slate-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.26),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.25),_transparent_34%)]" />
              <div className="absolute inset-x-8 bottom-8 top-8 rounded-lg border border-white/20 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm" />
              <div className="relative flex h-full min-h-[260px] items-end p-6 text-white sm:p-8">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">In Progress</p>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">AI Formal Verification for Chips</h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                    LLM-driven formal verification agent that autonomously generates and proves SVA from RTL/spec
                    inputs, combining agentic generator-critic loops, RAG-grounded prompting, and automated RCA.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
                  Featured Build
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                  AI Formal Verification for Chips
                </h3>
                <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
                  Autonomous multi-agent pipeline that converts RTL designs and specifications into proven SVAs,
                  with SymbiYosys and Verilator.
                </p>
                <div className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
                  <p>
                    <span className="font-medium text-slate-900 dark:text-slate-100">Human-in-the-loop escalation:</span>{" "}
                    improves assertion accuracy and reduces false-positive proof failures.
                  </p>
                  <p>
                    <span className="font-medium text-slate-900 dark:text-slate-100">Rulebook-guided RAG:</span> grounds
                    SVA generation in protocol standards, prior assertions, and historical error/fix patterns to boost
                    proof success rates.
                  </p>
                  <p>
                    <span className="font-medium text-slate-900 dark:text-slate-100">RCA tooling:</span> parses VCD
                    traces, analyzes coverage, and auto-repairs failing proofs with parallel job execution and
                    incremental run persistence.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentProjectTags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Button
                  size="lg"
                  disabled
                  className="w-full bg-slate-950 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 sm:w-auto"
                  title="Current Project demo video"
                >
                  <Image
                    src="/images/youtube-logo.svg"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                    className="mr-2 h-5 w-5"
                  />
                  YouTube
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
