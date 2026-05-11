import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 bg-slate-900 text-slate-300">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {year} Nayab Hossain. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com/Nayab-23" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/nayabhossain" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:nayabibnhossain@gmail.com" className="hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
