import { motion } from 'framer-motion'

const commits = [
  {
    hash: 'c0d3a1',
    date: '2026',
    title: 'Desarrollador de Sistemas de Información (en formación)',
    description: 'Estudiante de 5to ciclo en IESTP Aráoz Pinto. Construyendo proyectos reales con PHP, C#, y ahora React/Node.',
    type: 'feature',
  },
  {
    hash: 'c0d3a2',
    date: '2025',
    title: 'Explorando el desarrollo backend',
    description: 'Primeros proyectos con CRUD, autenticación por roles, y bases de datos relacionales. Sistemas que resolvían problemas reales.',
    type: 'feature',
  },
  {
    hash: 'c0d3a3',
    date: '2023-2024',
    title: 'Atención al cliente — Cineplanet, Tiendas Mass, Talma',
    description: 'Tres años en servicio al cliente. Aprendí a resolver problemas bajo presión, comunicación efectiva y trabajo en equipo.',
    type: 'fix',
  },
  {
    hash: 'c0d3a4',
    date: '2023',
    title: 'Decisión: migrar a tecnología',
    description: 'Después de años en atención al cliente, decidí dar el salto a desarrollo de software. Empecé desde cero con lógica de programación.',
    type: 'docs',
  },
]

const typeStyles = {
  feature: 'border-git-green text-git-green',
  fix: 'border-git-red text-git-red',
  docs: 'border-git-purple text-git-purple',
}

const typeLabels = {
  feature: 'feat',
  fix: 'fix',
  docs: 'docs',
}

export default function Trayectoria() {
  return (
    <section id="trayectoria" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-git-purple tracking-widest uppercase glass-card px-4 py-2 inline-block mb-4">
            $ git log --oneline
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold">
            Trayectoria<span className="text-git-red"> (</span>
            <span className="text-git-green">commits</span>
            <span className="text-git-red">)</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border-glass" />

          <div className="space-y-10">
            {commits.map((commit, idx) => (
              <motion.div
                key={commit.hash}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-14"
              >
                <div className={`absolute left-[10px] top-1.5 w-[19px] h-[19px] rounded-full border-2 bg-dark-950 ${typeStyles[commit.type]}`} />

                <div className="glass-card p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className={`font-mono text-xs px-2 py-0.5 rounded border ${typeStyles[commit.type]}`}>
                      {typeLabels[commit.type]}
                    </span>
                    <span className="font-mono text-xs text-text-secondary">
                      [{commit.hash}]
                    </span>
                    <span className="font-mono text-xs text-text-secondary">
                      ({commit.date})
                    </span>
                  </div>

                  <h3 className="font-mono text-base sm:text-lg font-semibold text-text-primary mb-2">
                    {commit.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {commit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
