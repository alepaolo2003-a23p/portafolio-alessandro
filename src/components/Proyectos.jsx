import { motion } from 'framer-motion'

const proyectos = [
  {
    hash: 'a1b2c3d',
    title: 'Sistema de Admisión 2026',
    description: 'Plataforma web para el proceso de admisión del instituto. Backend en PHP con MySQL, interfaz responsiva, registro de postulantes y gestión de resultados.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Responsive'],
    type: 'feature',
    metric: 'Proyecto académico — IESTP Aráoz Pinto',
  },
  {
    hash: 'e4f5g6h',
    title: 'Sistema CRM',
    description: 'Sistema completo con CRUD, autenticación por roles (admin, vendedor), panel de administración y generación de reportes.',
    tags: ['C#', 'ASP.NET MVC', 'SQL Server', 'Bootstrap'],
    type: 'fix',
    metric: 'Reducción del 70% en tiempos de gestión',
  },
  {
    hash: 'i7j8k9l',
    title: 'Este Portafolio',
    description: 'Portafolio personal con Vite + React + TailwindCSS. Diseño glassmorphism con estética hacker/diff. Desplegado en Vercel.',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
    type: 'feature',
    metric: 'En vivo — vercel.app',
  },
]

const commitColors = {
  feature: 'text-git-green border-git-green',
  fix: 'text-git-red border-git-red',
  docs: 'text-git-purple border-git-purple',
}

const commitLabels = {
  feature: 'feat',
  fix: 'fix',
  docs: 'docs',
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-git-purple tracking-widest uppercase glass-card px-4 py-2 inline-block mb-4">
            $ ls proyectos/
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold">
            Commits<span className="text-git-green"> Recientes</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {proyectos.map((proj, idx) => (
            <motion.div
              key={proj.hash}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-6 sm:p-8 hover:glow-green transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className={`font-mono text-xs px-3 py-1 rounded border ${commitColors[proj.type]}`}>
                    {commitLabels[proj.type]}
                  </span>
                  <span className="font-mono text-xs text-text-secondary mt-2">
                    [{proj.hash}]
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-mono text-xl font-semibold text-text-primary mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="diff-line added font-mono text-xs text-git-green">
                    {proj.metric}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
