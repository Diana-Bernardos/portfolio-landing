"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Palette, Bot } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background gradient circles */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Desarrolladora Fullstack</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
              & Interaction Design UI con IA
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Transformando ideas en experiencias digitales impactantes con código limpio y diseño intuitivo potenciado
            por inteligencia artificial.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white px-6 py-6">
              Ver Proyectos

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-500 text-purple-300 hover:border-purple-400 hover:text-white px-6 py-6"
            >
              Contactar
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <div className="flex items-center gap-2">
              <Code className="text-purple-400" />
              <span>Desarrollo</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="text-teal-400" />
              <span>Diseño UI</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="text-pink-400" />
              <span>IA</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-[500px]">
            <Image
              src="/robot.jpg"
              alt="Robot representando IA y tecnología"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
            className="absolute top-10 -left-10 bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>React & Next.js</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 2.5,
            }}
            className="absolute bottom-20 -right-5 bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span>Diseño UI/UX</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 3,
            }}
            className="absolute bottom-10 -left-5 bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>IA</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 3.5,
            }}
            className="absolute top-20 -right-5 bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span>Interaction Design</span>
            </div>
          </motion.div>

          
        </motion.div>
        
      </div>
    </section>
  )
}
