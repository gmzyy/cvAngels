"use client" // Necesario porque ahora usaremos un evento del navegador (onClick)

import Button from "../atoms/Button"
import ThemeSwitch from "../atoms/ThemeSwitch"
import { Phone, Mail, Github, Linkedin, Download } from "lucide-react"

export default function Header() {
  
  // Función para descargar el CV
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    // El href debe coincidir EXACTAMENTE con el nombre de tu archivo en la carpeta public
    link.href = "/CV_Angel_GG.pdf"; 
    // Nombre con el que se guardará en la computadora del reclutador
    link.download = "CV_Angel_GG.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="mb-20 flex flex-col md:flex-row justify-between items-start gap-6">
      
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
          Angel Gomez
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl font-medium tracking-tight">
          Desarrollador de Software Full Stack.
          <span className="block mt-2 text-lg text-gray-500 dark:text-gray-400 font-normal">
            Especializado en construir aplicaciones web y APIs robustas utilizando el ecosistema MERN (MongoDB, Express, React, Node.js) y tecnologías .NET.
          </span>
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm md:text-base text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500 dark:text-gray-400" /> 
            221 822 6470
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" /> 
            angelgom042@gmail.com
          </span>
          
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Gmzyy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> 
              GitHub
            </a>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <a
              href="https://www.linkedin.com/in/angel-gomez-59b341350" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" /> 
              LinkedIn
            </a>
          </div>
        </div>

        {/* BOTONES */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button onClick={handleDownloadCV}>
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Descargar CV
            </span>
          </Button>
          
          <Button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver proyectos
          </Button>
        </div>
      </div>

      {/* SWITCH */}
      <div className="absolute top-6 right-6 md:relative md:top-0 md:right-0">
        <ThemeSwitch />
      </div>
    </header>
  )
}