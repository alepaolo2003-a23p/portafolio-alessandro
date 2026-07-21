import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Frontend',
    color: 'text-git-green',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3 / TailwindCSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    color: 'text-git-purple',
    items: ['PHP / MySQL', 'C# / ASP.NET MVC', 'Node.js / Express (aprendiendo)', 'Java / Spring Boot (explorando)'],
  },
  {
    title: 'Herramientas',
    color: 'text-git-red',
    items: ['Git / GitHub', 'Jira', 'Claude Code / OpenCode', 'Supabase (explorando)', 'Vue (explorando)'],
  },
]

export default function Stack() {
  return (
    <section id="stack" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-git-purple tracking-widest uppercase glass-card px-4 py-2 inline-block mb-4">
            $ cat stack.txt
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold">
            Stack<span className="text-gradient"> Técnico</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-6"
            >
              <h3 className={`font-mono text-lg font-semibold ${cat.color} mb-6 flex items-center gap-2`}>
                <span className="text-text-secondary">#</span>
                {cat.title}
              </h3>

              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div key={item} className="diff-line added">
                    <span className="text-text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
