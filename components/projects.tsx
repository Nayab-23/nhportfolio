import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Plant Disease and Pest Classification System",
      description: "Developed a deep learning model for multiclass classification of crop diseases and pests using the ResNet18 architecture,achieving 71% test accuracy across 22 visually similar disease classes.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python3", "PyTorch", "ResNet18"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Blood Bank Management",
      description: "An interactive web application with real-time updates and social service help features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/abhii232/Blood-Donation-Management-Website",
    },
    {
      id: 3,
      title: "Wine Quality Prediction System",
      description: "ADeveloped a wine quality prediction system using multiple machine learning models, improving classification accuracy.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python3", "Logistic Regression", "Decision Tree", "Random Forest"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">My Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-slate-200 dark:border-slate-800">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.githubUrl}>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.liveUrl}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
