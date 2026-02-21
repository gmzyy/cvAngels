import Header from "@/components/organisms/Header"
import About from "@/components/organisms/About"
import Experience from "@/components/organisms/Experience"
import Skills from "@/components/organisms/Skills"
import Projects from "@/components/organisms/Projects"
import Education from "@/components/organisms/Education"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div
        className="
          max-w-6xl mx-auto
          bg-white dark:bg-gray-800
          text-gray-800 dark:text-gray-100
          p-10 rounded-2xl shadow-lg
          transition-colors duration-300
        "
      >
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </div>
    </main>
  )
}
