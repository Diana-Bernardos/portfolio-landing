"use client"

import { motion } from "framer-motion"
import { Code, Palette, Bot, Server, Globe, Database } from "lucide-react"

export default function SkillsSection() {
  const skills = [
    {
      category: "Desarrollo Frontend",
      icon: <Code className="h-6 w-6 text-purple-400" />,
      items: ["PHP","Java","React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
      color: "from-purple-500 to-purple-700",
    },
    {
      category: "Desarrollo Backend",
      icon: <Server className="h-6 w-6 text-teal-400" />,
      items: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"],
      color: "from-teal-500 to-teal-700",
    },
    {
      category: "Diseño UI/UX",
      icon: <Palette className="h-6 w-6 text-pink-400" />,
      items: ["Figma", "Adobe XD", "Diseño Responsivo", "Prototipado", "Design Systems"],
      color: "from-pink-500 to-pink-700",
    },
    {
      category: "Inteligencia Artificial",
      icon: <Bot className="h-6 w-6 text-blue-400" />,
      items: ["Generación de Imágenes", "Chatbots", "Automatizaciónes","IA Generativa","Machine Learning"],
      color: "from-blue-500 to-blue-700",
    },
    {
      category: "Bases de Datos",
      icon: <Database className="h-6 w-6 text-amber-400" />,
      items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase","MySql"],
      color: "from-amber-500 to-amber-700",
    },
    {
      category: "Despliegue",
      icon: <Globe className="h-6 w-6 text-green-400" />,
      items: ["Vercel", "Netlify", "Docker", "Render", "AWS"],
      color: "from-green-500 to-green-700",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-950/50">
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
              Habilidades
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Mi perfil híbrido me permite abordar proyectos desde múltiples perspectivas, combinando habilidades técnicas
            y creativas para ofrecer soluciones completas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${skill.color} p-6`}>
                <div className="flex items-center gap-3">
                  {skill.icon}
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
