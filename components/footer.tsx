import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-10 bg-slate-900 text-slate-300">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 Abhishek Yadav. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com/abhii232" className="hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/abhiiiii/" className="hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://x.com/zzabhizz" className="hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
