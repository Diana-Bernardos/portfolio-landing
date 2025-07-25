"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Palette, Bot } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "Todos" },
    { id: "development", label: "Desarrollo" },
    { id: "design", label: "Diseño UI" },
    { id: "ai", label: "IA" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con panel de administración y pasarela de pagos.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["development", "design"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#",
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "Aplicación web que utiliza IA para generar imágenes a partir de descripciones textuales.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["development", "ai"],
      technologies: ["Next.js", "OpenAI API", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#",
      icon: <Bot className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Dashboard UI Kit",
      description: "Sistema de diseño completo para aplicaciones de dashboard con componentes reutilizables.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["design"],
      technologies: ["Figma", "Design System", "Component Library"],
      demoLink: "#",
      codeLink: "#",
      icon: <Palette className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Smart Home App",
      description: "Aplicación móvil para control de dispositivos domésticos inteligentes con integración de IA.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["development", "design", "ai"],
      technologies: ["React Native", "Firebase", "TensorFlow.js"],
      demoLink: "#",
      codeLink: "#",
      icon: <Bot className="h-5 w-5" />,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Sitio web de portfolio personalizado con animaciones y diseño interactivo.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["development", "design"],
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#",
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "Herramienta que utiliza IA para generar contenido para blogs, redes sociales y más.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["development", "ai"],
      technologies: ["Python", "GPT-4", "React"],
      demoLink: "#",
      codeLink: "#",
      icon: <Bot className="h-5 w-5" />,
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
              Proyectos
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes que muestran mis habilidades en desarrollo, diseño UI y
            aplicaciones de IA.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-500 to-teal-500 text-white"
                    : "border-gray-700 text-gray-300 hover:text-white"
                }
              `}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 border-gray-700 text-gray-300 hover:text-white">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white px-8 py-6">
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  )
}
