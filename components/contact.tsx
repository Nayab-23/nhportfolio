import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Github, Linkedin, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const emailAddress = "nayabibnhossain@gmail.com"
  const linkedinUrl = "https://www.linkedin.com/in/nayabhossain"
  const githubUrl = "https://github.com/Nayab-23"
  const resumeUrl = "/NayabResume.pdf"

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600 sm:text-sm sm:tracking-[0.4em]">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tighter text-slate-950">Get in touch</h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Open to conversations about developer tools, backend systems, AI products, internships, and startup collaboration.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 sm:text-sm sm:tracking-[0.3em]">
                Nayab Hossain
              </p>
              <h3 className="text-2xl font-semibold tracking-tight">
                Computer Engineering Student and Builder
              </h3>
              <p className="text-slate-600">
                Based in San Jose, California and currently building systems across developer infrastructure, AI workflows,
                and product-focused software.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-emerald-100 p-3">
                <Mail className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <a href={`mailto:${emailAddress}`} className="break-all text-slate-600 hover:text-slate-900">
                  {emailAddress}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-emerald-100 p-3">
                <Linkedin className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                <a href={linkedinUrl} className="break-all text-slate-600 hover:text-slate-900">
                  linkedin.com/in/nayabhossain
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-emerald-100 p-3">
                <Github className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-medium mb-1">GitHub</h3>
                <a href={githubUrl} className="break-all text-slate-600 hover:text-slate-900">
                  github.com/Nayab-23
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-emerald-100 p-3">
                <MapPin className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-slate-600">San Jose, California</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-emerald-100 p-3">
                <FileText className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Resume</h3>
                <a href={resumeUrl} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
                  Open PDF resume
                </a>
              </div>
            </div>
          </div>

          <form
            className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6"
            action={`mailto:${emailAddress}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Input name="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Input name="email" type="email" placeholder={emailAddress} />
              </div>
            </div>
            <div className="space-y-2">
              <Input name="subject" placeholder="Project, role, or collaboration" />
            </div>
            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Tell me about the opportunity, product, or problem you're working on."
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
              Send Message
            </Button>
            <p className="text-sm text-slate-500">
              You can also email me directly if you prefer to reach out outside the form.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
