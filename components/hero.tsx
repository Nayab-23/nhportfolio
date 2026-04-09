import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

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

  return (
    <section className="relative flex min-h-screen items-center px-4 py-20 md:px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(16,185,129,0.18),transparent_35%,transparent_65%,rgba(56,189,248,0.12))]"></div>
      <div className="container mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[minmax(300px,360px)_minmax(0,1fr)] lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-20">
        <div className="mx-auto w-full max-w-[360px] md:mx-0">
          <div className="overflow-hidden rounded-[2px] bg-[#f4ece7] shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)]">
            <div className="px-8 pb-12 pt-8 sm:px-10">
              <div className="mx-auto mb-9 h-56 w-56 overflow-hidden rounded-full bg-slate-200 sm:h-60 sm:w-60">
                <Image
                  src="/images/nayab-portrait.jpg"
                  alt="Portrait of Nayab Hossain"
                  width={360}
                  height={360}
                  priority
                  className="h-full w-full object-cover object-[center_58%]"
                />
              </div>
              <div className="space-y-6 text-center text-[#2b2745]">
                <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-[2.65rem]">Nayab Hossain</h2>
                <div className="mx-auto h-[3px] w-16 rounded-full bg-[#2b2745]"></div>
                <div className="space-y-2">
                  <p className="text-[0.95rem] font-semibold tracking-[0.08em] text-[#2b2745] sm:text-base">
                    Computer Engineering @ SJSU
                  </p>
                  <p className="text-[0.95rem] font-semibold tracking-[0.08em] text-[#2b2745] sm:text-base">
                    Founder @ Polaris
                  </p>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#6a647f] sm:text-sm">
                    Accelerated by Plug and Play Tech Center
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 bg-[#fbfaf8] px-6 py-5">
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
        </div>
        <div className="space-y-5 text-center md:pl-10 md:text-left lg:pl-20">
          <h1 className="text-4xl font-bold tracking-tighter text-white md:text-6xl">Computer Engineering @ SJSU</h1>
          <p className="text-xl text-slate-300 md:text-2xl">Founder at Polaris</p>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl lg:mx-0">Welcome to my Portfolio!</p>
          <p className="mx-auto max-w-2xl text-slate-300 lg:mx-0">
            Finding ways to implement AI in every corner of daily life to let people think more rather than iterate more.
          </p>
          <p className="mx-auto max-w-2xl text-slate-400 lg:mx-0">
            Check out my projects to know more about my work and my thinking strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4 md:justify-start">
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              <Link href={resumeUrl} target="_blank" rel="noreferrer">
                View Resume
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              <Link href="#projects">Explore Projects</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center">
        <div className="animate-bounce rounded-full border border-white/20 bg-white/10 p-4 shadow-[0_0_45px_rgba(16,185,129,0.24)] backdrop-blur-sm">
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
