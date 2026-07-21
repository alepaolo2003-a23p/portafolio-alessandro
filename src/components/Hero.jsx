import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const terminalLines = [
  { text: '> git init', delay: 500 },
  { text: '> status: building in progress...', delay: 1500 },
  { text: '> commit -m "feat: iniciando portafolio"', delay: 2500 },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [typingLine, setTypingLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(blink)
  }, [])

  useEffect(() => {
    if (typingLine >= terminalLines.length) return

    const line = terminalLines[typingLine]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < line.text.length) {
        setCurrentText(line.text.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTypingLine((prev) => {
          const next = prev + 1
          if (next < terminalLines.length) {
            setTimeout(() => setCurrentText(''), 400)
          }
          return next
        })
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [typingLine])

  useEffect(() => {
    const timers = terminalLines.map((_, i) =>
      setTimeout(() => setVisibleLines((prev) => Math.max(prev, i + 1)), terminalLines[i].delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-center gap-1 opacity-20 px-2 font-mono text-xs text-git-green">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i}>+</span>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-12 flex flex-col justify-center gap-1 opacity-20 px-2 font-mono text-xs text-git-red">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i}>-</span>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block font-mono text-xs text-git-purple tracking-widest uppercase mb-4 glass-card px-4 py-2">
            Desarrollador de Sistemas de Información
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-mono text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Alessandro
          <span className="text-gradient"> Zelada</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Construyendo mi camino de atención al cliente al desarrollo backend.
          Con resultados reales entregados, no solo cursos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="glass-card p-5 sm:p-6 text-left max-w-xl mx-auto mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-git-red" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-git-green" />
            <span className="font-mono text-xs text-text-secondary ml-2">terminal — bash</span>
          </div>
          <div className="font-mono text-sm sm:text-base leading-relaxed min-h-[80px]">
            {Array.from({ length: visibleLines }).map((_, i) => (
              <div key={i} className="diff-line added">
                <span className="text-text-primary">{terminalLines[i].text}</span>
              </div>
            ))}
            {typingLine < terminalLines.length && (
              <div className="diff-line added">
                <span className="text-text-primary">
                  {currentText}
                  {showCursor && (
                    <span className="text-git-green animate-pulse">▊</span>
                  )}
                </span>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#proyectos" className="glass-btn px-8 py-3 font-mono text-sm">
            $ ver proyectos
          </a>
          <a href="#contacto" className="glass-card px-8 py-3 font-mono text-sm text-text-secondary hover:text-text-primary transition-colors text-center">
            $ contacto
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  )
}
