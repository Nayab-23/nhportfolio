import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { FileText, Mail, MapPin, Phone } from "lucide-react"

export default function Hero() {
  const resumeUrl = "/NayabResume.pdf"
  const githubUrl = "https://github.com/Nayab-23"
  const linkedinUrl = "https://www.linkedin.com/in/nayabhossain"
  const huggingFaceUrl = "https://huggingface.co/nayab"

  const socialLinks = [
    {
      name: "LinkedIn",
      href: linkedinUrl,
      src: "/brands/linkedin-inbug.png",
      width: 40,
      height: 34,
      className: "h-10 w-auto",
    },
    {
      name: "GitHub",
      href: githubUrl,
      src: "/brands/github-invertocat-black.svg",
      width: 34,
      height: 34,
      className: "h-9 w-9",
    },
    {
      name: "Hugging Face",
      href: huggingFaceUrl,
      src: "/brands/huggingface-logo.svg",
      width: 34,
      height: 34,
      className: "h-9 w-9",
    },
  ] as const

  const quickFacts = [
    {
      label: "Building now",
      value: "Developer infrastructure, AI systems, and product-first software.",
    },
    {
      label: "Background",
      value: "Computer Engineering @ SJSU with ML deployment and edge hardware experience.",
    },
    {
      label: "Location",
      value: "San Jose, California",
    },
    {
      label: "Reach me",
      value: "nayabibnhossain@gmail.com • +1 408 449 8129",
    },
  ] as const

  return (
    <section className="relative overflow-hidden bg-[#081120] px-4 pb-12 pt-6 md:px-6 md:pb-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_24%),linear-gradient(180deg,#081120_0%,#0f172a_72%,#111827_100%)]"></div>
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/10"></div>

      <div className="container mx-auto max-w-6xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-emerald-300/90">Nayab Hossain</p>
            <p className="mt-1 text-sm text-slate-400">Portfolio rebuilt from the older Wix site with a denser UX.</p>
          </div>

          <nav className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
            <Button asChild variant="ghost" size="sm" className="rounded-full px-4 text-slate-200 hover:bg-white/10 hover:text-white">
              <Link href="#projects">Projects</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="rounded-full px-4 text-slate-200 hover:bg-white/10 hover:text-white">
              <Link href="#snapshot">Snapshot</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="rounded-full px-4 text-slate-200 hover:bg-white/10 hover:text-white">
              <Link href={resumeUrl} target="_blank" rel="noreferrer">
                Resume
              </Link>
            </Button>
          </nav>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#f4ece7] shadow-[0_28px_90px_-42px_rgba(8,17,32,0.9)]">
            <div className="px-8 pb-10 pt-8">
              <div className="mx-auto mb-8 h-52 w-52 overflow-hidden rounded-full bg-slate-200 shadow-[0_18px_40px_rgba(15,23,42,0.18)] sm:h-56 sm:w-56">
                <Image
                  src="/images/nayab-portrait.jpg"
                  alt="Portrait of Nayab Hossain"
                  width={360}
                  height={360}
                  priority
                  className="h-full w-full object-cover object-[center_58%]"
                />
              </div>

              <div className="space-y-5 text-center text-[#2b2745]">
                <div>
                  <h1 className="text-4xl font-semibold tracking-tight sm:text-[2.65rem]">Nayab Hossain</h1>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#6a647f]">Developer</p>
                </div>

                <div className="mx-auto h-[3px] w-16 rounded-full bg-[#2b2745]"></div>

                <div className="space-y-2 text-sm font-medium sm:text-base">
                  <p>Computer Engineering @ SJSU</p>
                  <p>Founder @ Polaris</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#6a647f]">Accelerated by Plug and Play Tech Center</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5 border-t border-slate-900/5 bg-[#fbfaf8] px-6 py-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(15,23,42,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b2745]/30"
                >
                  <Image
                    src={social.src}
                    alt={`${social.name} logo`}
                    width={social.width}
                    height={social.height}
                    unoptimized={social.src.endsWith(".svg")}
                    className={social.className}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/6 p-6 text-slate-100 shadow-[0_28px_90px_-52px_rgba(8,17,32,0.95)] backdrop-blur md:p-8">
            <div className="flex flex-wrap gap-2">
              <Badge className="border-0 bg-emerald-400/15 px-3 py-1 text-emerald-200 hover:bg-emerald-400/15">
                AI Systems
              </Badge>
              <Badge className="border-0 bg-sky-400/15 px-3 py-1 text-sky-200 hover:bg-sky-400/15">
                Software + Hardware
              </Badge>
              <Badge className="border-0 bg-amber-300/15 px-3 py-1 text-amber-100 hover:bg-amber-300/15">
                Startup Builder
              </Badge>
            </div>

            <div className="space-y-4">
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Building practical AI products without making people dig through a long page.
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-slate-200">
                Welcome to my portfolio. I explore ways to put AI into everyday workflows so people can think more rather
                than iterate more.
              </p>
              <p className="max-w-3xl text-base leading-7 text-slate-300">
                This version keeps the content from the older site, adds newer work, and turns the portfolio into a faster
                scanning experience with a compact project explorer and condensed resume snapshot.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/80">{fact.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-emerald-500 text-white hover:bg-emerald-600">
                <Link href="#projects">Explore Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href={resumeUrl} target="_blank" rel="noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-slate-200 hover:bg-white/10 hover:text-white"
              >
                <Link href="mailto:nayabibnhossain@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </Link>
              </Button>
            </div>

            <div className="grid gap-3 border-t border-white/10 pt-5 text-sm text-slate-300 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-300" />
                <span>San Jose, California</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-300" />
                <span>nayabibnhossain@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-300" />
                <span>+1 408 449 8129</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
