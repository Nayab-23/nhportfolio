import ElectricBorderCard from "@/components/electric-border-card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const resumeUrl = "/NayabResume.pdf"

  const skillBadges = [
    {
      label: "C++",
      className: "border-sky-300 bg-sky-100 text-sky-900 shadow-[0_12px_28px_-18px_rgba(14,165,233,0.8)]",
      icons: [
        {
          src: "/images/cplusplus.svg",
          alt: "C++ logo",
          width: 24,
          height: 24,
          className: "h-6 w-6 shrink-0",
        },
      ],
    },
    {
      label: "Python",
      className: "border-[#ffd343] bg-[#fff7d6] text-[#2b5b84] shadow-[0_12px_28px_-18px_rgba(255,211,67,0.8)]",
      icons: [
        {
          src: "/images/python-logo.png",
          alt: "Python logo",
          width: 1869,
          height: 2048,
          className: "h-6 w-auto max-h-6 shrink-0 object-contain",
        },
      ],
    },
    {
      label: "Claude",
      className: "border-[#f0d9c2] bg-[#fff4ea] text-[#4a3a2a] shadow-[0_12px_28px_-18px_rgba(203,149,95,0.65)]",
      icons: [
        {
          src: "/images/claude-logo.png",
          alt: "Claude logo",
          width: 48,
          height: 48,
          className: "h-6 w-6 shrink-0 rounded-[3px] object-contain",
        },
      ],
    },
    {
      label: "Codex",
      className: "border-[#e8dfd0] bg-[#faf6f1] text-[#3d3428] shadow-[0_12px_28px_-18px_rgba(160,120,80,0.45)]",
      icons: [
        {
          src: "/images/codex-logo.svg",
          alt: "Codex logo",
          width: 41,
          height: 41,
          className: "h-6 w-6 shrink-0 object-contain",
        },
      ],
    },
    {
      label: "Verilog",
      className: "border-fuchsia-300 bg-fuchsia-100 text-fuchsia-900 shadow-[0_12px_28px_-18px_rgba(192,38,211,0.8)]",
      icons: [
        {
          src: "/images/verilog-icon.svg",
          alt: "Verilog logo",
          width: 24,
          height: 24,
          className: "h-6 w-6 shrink-0",
        },
      ],
    },
    {
      label: "SystemVerilog",
      className: "border-amber-300 bg-amber-100 text-amber-950 shadow-[0_12px_28px_-18px_rgba(245,158,11,0.8)]",
      icons: [
        {
          src: "/images/systemverilog-icon.svg",
          alt: "SystemVerilog logo",
          width: 24,
          height: 24,
          className: "h-6 w-6 shrink-0",
        },
      ],
    },
    {
      label: "FPGA",
      className: "border-emerald-300 bg-emerald-100 text-emerald-900 shadow-[0_12px_28px_-18px_rgba(5,150,105,0.8)]",
      icons: [
        {
          src: "/images/fpga-icon.svg",
          alt: "FPGA grid icon",
          width: 24,
          height: 24,
          className: "h-6 w-6 shrink-0",
        },
      ],
    },
  ] as const

  return (
    <section className="relative flex min-h-screen items-center px-4 py-20 md:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(16,185,129,0.16),transparent_35%,transparent_65%,rgba(56,189,248,0.1))]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_32%,rgba(212,175,55,0.18),transparent_18%),radial-gradient(circle_at_68%_72%,rgba(184,134,11,0.12),transparent_24%)]"></div>
      <div className="container mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[minmax(300px,360px)_minmax(0,1fr)] lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-20">
        <div className="mx-auto w-full max-w-[360px] md:mx-0">
          <ElectricBorderCard />
        </div>
        <div className="space-y-6 text-center md:pl-10 md:text-left lg:pl-20">
          <h1 className="text-4xl font-bold tracking-tighter text-white md:text-7xl lg:text-[5.5rem] lg:leading-[0.95]">
            <span className="block">Computer Engineering @</span>
            <span className="mt-2 inline-flex items-center gap-4">
              <span>SJSU</span>
              <span className="relative inline-flex items-center justify-center [perspective:560px]">
                <span className="spartan-logo-3d inline-block drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)]">
                  <Image
                    src="/images/spartan-logo.svg"
                    alt="San Jose State Spartans logo"
                    width={276}
                    height={295}
                    unoptimized
                    className="relative h-[1.15em] w-auto transform-gpu"
                  />
                </span>
              </span>
            </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {skillBadges.map((badge) => (
              <span
                key={badge.label}
                className={`inline-flex h-10 items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-semibold tracking-[0.06em] ${badge.className}`}
              >
                {badge.icons ? (
                  <span className="flex shrink-0 items-center gap-1">
                    {badge.icons.map((icon) => (
                      <Image
                        key={`${badge.label}-${icon.src}`}
                        src={icon.src}
                        alt={icon.alt}
                        width={icon.width}
                        height={icon.height}
                        unoptimized={icon.src.endsWith(".svg")}
                        className={icon.className}
                      />
                    ))}
                  </span>
                ) : null}
                {badge.label}
              </span>
            ))}
          </div>
          <p className="mx-auto max-w-2xl text-lg text-slate-200 md:text-xl lg:mx-0">Check out my projects.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4 md:justify-start">
            <Button
              asChild
              size="lg"
              className="button-shine rounded-xl border border-[#d4af37]/60 bg-[#1b2336] px-8 text-[#f7e3a2] shadow-[0_22px_55px_-26px_rgba(184,134,11,0.75)] hover:bg-[#141d2d]"
            >
              <Link href={resumeUrl} target="_blank" rel="noreferrer">
                View Resume
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="button-shine rounded-xl border-[#d4af37]/75 bg-white/10 px-8 text-white shadow-[0_22px_55px_-26px_rgba(199,155,43,0.65)] hover:bg-white/16"
            >
              <Link href="#projects">Explore Projects</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center">
        <div className="animate-bounce rounded-full border border-[#d4af37]/30 bg-white/10 p-4 shadow-[0_0_45px_rgba(199,155,43,0.22)] backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 4v16"></path>
            <path d="m19 13-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
