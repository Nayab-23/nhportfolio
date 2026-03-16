import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Do you want to connect me to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-slate-600 dark:text-slate-400">ay6306339@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-full">
                <Phone className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-slate-600 dark:text-slate-400">(+91)630-633-9839</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-400">Punjab, India</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Input placeholder="Name" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="space-y-2">
              <Input placeholder="Subject" />
            </div>
            <div className="space-y-2">
              <Textarea placeholder="Your message" className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
