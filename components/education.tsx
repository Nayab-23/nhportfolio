import Image from "next/image"

import { cn } from "@/lib/utils"

const educationEntries = [
  {
    years: "2025 - Present",
    institution: "San Jose State University",
    location: "San Jose, CA",
    program: "Bachelor of Science in Computer Engineering",
    description:
      "Building a strong technical base across mathematics, programming, and data structures while continuing to apply those fundamentals to product engineering, startup execution, and developer tooling.",
    detailLabel: "Relevant Coursework",
    details: ["Calculus I and II", "Discrete Mathematics", "Advanced Programming in Java and Python", "Data Structures"],
    logoSrc: "/brands/education/sjsu-logo-blue.png",
    logoAlt: "San Jose State University logo",
    logoWidth: 4547,
    logoHeight: 851,
    logoClassName: "h-10 w-auto sm:h-12",
    surfaceClassName: "from-sky-50 via-white to-amber-50/80",
  },
  {
    years: "2009 - 2025",
    institution: "Scholastica Uttara",
    location: "Dhaka, BD",
    program: "Primary and Secondary Education",
    description:
      "Received a comprehensive academic background that prepared me for higher studies in technology and computer engineering, fostering critical thinking, problem-solving, and lifelong learning.",
    detailLabel: "Core Outcomes",
    details: ["Academic rigor", "Critical thinking", "Problem-solving", "Lifelong learning"],
    logoSrc: "/brands/education/scholastica-logo.png",
    logoAlt: "Scholastica school logo",
    logoWidth: 180,
    logoHeight: 81,
    logoClassName: "h-14 w-auto sm:h-16",
    surfaceClassName: "from-fuchsia-50 via-white to-emerald-50/90",
  },
] as const

export default function Education() {
  return (
    <section id="education" className="bg-slate-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-6xl">Education</h2>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          {educationEntries.map((entry) => (
            <article
              key={entry.institution}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_90px_-52px_rgba(15,23,42,0.25)]"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br", entry.surfaceClassName)}></div>
              <div className="relative grid gap-6 p-5 sm:p-7 md:p-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
                <div className="space-y-5 text-center lg:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-sm sm:tracking-[0.35em]">
                    {entry.years}
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">{entry.institution}</h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500 sm:text-sm sm:tracking-[0.28em]">
                      {entry.location}
                    </p>
                  </div>
                  <div className="pt-1">
                    <Image
                      src={entry.logoSrc}
                      alt={entry.logoAlt}
                      width={entry.logoWidth}
                      height={entry.logoHeight}
                      className={cn("max-w-full object-contain object-left", entry.logoClassName)}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-lg font-semibold text-slate-950">{entry.program}</p>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700 sm:leading-8">{entry.description}</p>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-sm sm:tracking-[0.3em]">
                      {entry.detailLabel}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {entry.details.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200/80 bg-white/85 px-3 py-2 text-xs font-medium text-slate-700 backdrop-blur sm:px-4 sm:text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
