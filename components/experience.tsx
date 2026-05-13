import Image from "next/image"

type ExperienceLogo = {
  src: string
  alt: string
  width: number
  height: number
  label?: string
  imageClassName?: string
  wrapperClassName?: string
}

type Role = {
  company: string
  title: string
  period: string
  location: string
  summary: string
  highlights: string[]
  logo?: ExperienceLogo
  accelerator?: {
    caption: string
    logo: ExperienceLogo
  }
}

const roles: Role[] = [
  {
    company: "AI & Machine Learning Club SJSU",
    title: "Officer Lead",
    period: "Jan 2026 - Present · 5 mos",
    location: "San Jose, California, United States",
    summary:
      "Leading core club operations across infrastructure, frontend coordination, and event execution for the AI & ML community at SJSU.",
    highlights: [
      "Manage Supabase and database infrastructure.",
      "Collaborate with the UI team on frontend development.",
      "Plan and organize club events.",
    ],
    logo: {
      src: "/brands/experience/ai-ml-club-logo.png",
      alt: "AI & Machine Learning Club SJSU logo",
      width: 500,
      height: 500,
      label: "club mark",
      imageClassName: "h-24 w-24 rounded-2xl object-cover",
      wrapperClassName: "w-fit rounded-3xl bg-slate-950/95 p-3 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.85)]",
    },
  },
  {
    company: "Polaris",
    title: "Co-Founder",
    period: "2026",
    location: "San Jose, CA",
    summary:
      "Building developer infrastructure for hardware teams that need to catch integration risk before it reaches the main branch.",
    highlights: [
      "Built a real-time conflict detection engine for FPGA and firmware teams using deterministic git merge-tree analysis plus semantic detectors across VHDL, Verilog, TypeScript, and C.",
      "Shipped cross-file blast radius analysis that surfaces semantically risky package and port definition changes in under 5 seconds before any push.",
      "Ran 50+ customer discovery interviews with FPGA engineers across CERN, national labs, and semiconductor companies.",
    ],
    accelerator: {
      caption: "accelerated by",
      logo: {
        src: "/brands/plug-and-play-tech-center.png",
        alt: "Plug and Play Tech Center",
        width: 936,
        height: 176,
        imageClassName: "h-auto max-w-[11rem] object-contain sm:max-w-[12.5rem]",
      },
    },
  },
  {
    company: "Penta Global",
    title: "Software Developer",
    period: "Apr 2024 - Aug 2024",
    location: "Dhaka, Bangladesh",
    summary:
      "Worked on model deployment and data validation workflows to make internal ML systems more reproducible, faster to train, and easier to trust.",
    highlights: [
      "Containerized LLaMA-3 and Mistral models with Docker for reproducible environments.",
      "Built Pandera-based validation pipelines to enforce schemas and cut runtime data issues before training.",
      "Used Unsloth to speed up fine-tuning and reduce training cost by more than 40 percent.",
      "Automated internal analytics reports with Python and Matplotlib, improving turnaround time by 3x.",
    ],
    logo: {
      src: "/brands/experience/penta-global-logo.png",
      alt: "Penta Global logo",
      width: 808,
      height: 309,
      label: "company",
      imageClassName: "h-auto max-w-[11rem] object-contain sm:max-w-[12rem]",
      wrapperClassName: "w-full rounded-3xl bg-slate-950 px-5 py-5 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.85)]",
    },
  },
]

function FloatingLogoCard({
  logo,
  caption,
}: {
  logo: ExperienceLogo
  caption?: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_8px_28px_-20px_rgba(15,23,42,0.35)]">
      {caption ? (
        <p className="mb-3.5 text-sm font-medium lowercase leading-snug tracking-normal text-slate-600">{caption}</p>
      ) : logo.label ? (
        <p className="mb-3.5 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">{logo.label}</p>
      ) : null}
      <div className="flex justify-start border-t border-slate-100 pt-3.5">
        <span className="relative inline-flex items-center justify-center [perspective:560px]">
          <span className={`spartan-logo-3d inline-block ${logo.wrapperClassName ?? ""}`.trim()}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={`relative transform-gpu ${logo.imageClassName ?? "h-auto max-w-[11rem] object-contain sm:max-w-[12.5rem]"}`.trim()}
            />
          </span>
        </span>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">Experience</h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8">
          {roles.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="grid gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.5)] lg:grid-cols-[260px_minmax(0,1fr)] lg:p-10"
            >
              <div className="space-y-4">
                <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                  {role.period}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{role.title}</h3>
                  <p className="text-lg font-medium text-slate-700">{role.company}</p>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{role.location}</p>
                </div>
                {role.logo ? <FloatingLogoCard logo={role.logo} /> : null}
                {role.accelerator ? (
                  <FloatingLogoCard logo={role.accelerator.logo} caption={role.accelerator.caption} />
                ) : null}
              </div>

              <div className="space-y-5">
                <p className="max-w-3xl text-lg leading-8 text-slate-700">{role.summary}</p>
                <ul className="grid gap-3 text-slate-700 md:grid-cols-2">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 leading-7">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
