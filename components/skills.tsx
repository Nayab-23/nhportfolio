export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Bash"],
    },
    {
      title: "Backend and Systems",
      skills: ["FastAPI", "REST APIs", "PostgreSQL", "SQLite", "pgvector", "SSE", "OAuth 2.0", "Schema Validation"],
    },
    {
      title: "AI and ML",
      skills: ["LLaMA", "Mistral", "Gemini", "Agentic Systems", "RAG", "Semantic Search", "Unsloth", "Model Evaluation"],
    },
    {
      title: "Tooling and Platforms",
      skills: ["Docker", "Git", "GitHub", "VS Code Extension API", "Cursor", "Trae", "Claude Code", "Codex", "Linux"],
    },
    {
      title: "Hardware and Edge",
      skills: ["Raspberry Pi", "Camera Modules", "Real-time Inference", "Resource-constrained Systems"],
    },
    {
      title: "Testing and Quality",
      skills: ["Pandera", "Matplotlib", "API Contract Validation", "Linting", "Deterministic Builds", "Data Validation Pipelines"],
    },
  ]

  return (
    <section id="skills" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600">Skills</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Skills and expertise from the updated resume</h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            This section now mirrors the newer resume rather than the older placeholder categories.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-slate-950">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
