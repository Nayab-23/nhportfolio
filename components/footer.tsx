import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 py-10 text-slate-300">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm">© {year} Nayab Hossain.</p>
            <p className="mt-1 text-sm text-slate-400">Powered and secured by NH Games.</p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://github.com/Nayab-23" className="transition-colors hover:text-white" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nayabhossain"
              className="transition-colors hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:nayabibnhossain@gmail.com" className="transition-colors hover:text-white">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
