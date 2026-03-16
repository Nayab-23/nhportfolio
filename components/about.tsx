import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 bg-blue-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-xl">
              <Image
                src="/Pasted image.png"
                alt="Abhishek Yadav"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
            <p className="text-slate-600 dark:text-slate-400">
              I'm an AI enthusiast with a strong foundation in Python, deep learning, and modern web technologies. With hands-on experience in building intelligent systems, I specialize in crafting impactful machine learning models and interactive user experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              My journey began with curiosity for code, leading me to solve 300+ LeetCode problems and win university-level hackathons and CTF competitions. I have built systems like a plant disease classifier using ResNet18 and a wine quality predictor, combining data preprocessing, model optimization, and insightful visualizations.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              When I am not coding, I enjoy exploring new tools in AI, contributing to open-source, and staying on top of cloud tech trends like AWS.
            </p>
            <div className="pt-4">
              <Button asChild variant="outline" className="border-slate-300 dark:border-slate-700">
                <Link href="https://drive.google.com/file/d/14DrnTKtZJC7A5k2PbCDwCMV-tja5llxf/view?usp=sharing" download>
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
