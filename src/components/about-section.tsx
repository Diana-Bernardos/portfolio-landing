"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  const highlights = [
    "Desarrollo fullstack con React, Next.js y Node.js",
    "Diseño UI/UX con enfoque en experiencia de usuario",
    "Integración de IA para soluciones innovadoras",
    "Metodologías ágiles y trabajo colaborativo",
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Mi Enfoque</h3>
            <p className="text-gray-300 mb-6">
              Soy una profesional con un perfil híbrido que combina habilidades técnicas de desarrollo fullstack con un
              ojo creativo para el diseño UI. Mi pasión es crear soluciones digitales que no solo funcionen
              perfectamente sino que también ofrezcan experiencias visuales impactantes.
            </p>
            <p className="text-gray-300 mb-6">
              Mi experiencia con IA me permite potenciar tanto el desarrollo como el diseño, creando interfaces
              inteligentes y personalizadas que se adaptan a las necesidades específicas de cada proyecto y usuario.
            </p>

            <div className="space-y-3 mt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="text-teal-400 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-xl h-40 flex items-center justify-center border border-purple-800/50">
                  <div className="text-center">
                    <h4 className="text-4xl font-bold text-purple-400">3+</h4>
                    <p className="text-sm text-gray-300 mt-2">Años de Experiencia</p>
                  </div>
                </div>
                <div className="bg-teal-900/30 backdrop-blur-sm p-6 rounded-xl h-48 flex items-center justify-center border border-teal-800/50">
                  <div className="text-center">
                    <h4 className="text-4xl font-bold text-teal-400">10+</h4>
                    <p className="text-sm text-gray-300 mt-2">Proyectos Completados</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-pink-900/30 backdrop-blur-sm p-6 rounded-xl h-48 flex items-center justify-center border border-pink-800/50">
                  <div className="text-center">
                    <h4 className="text-4xl font-bold text-pink-400">100%</h4>
                    <p className="text-sm text-gray-300 mt-2">Personalización</p>
                  </div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl h-40 flex items-center justify-center border border-gray-700">
                  <div className="text-center">
                    <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                      100%
                    </h4>
                    <p className="text-sm text-gray-300 mt-2">Compromiso</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
