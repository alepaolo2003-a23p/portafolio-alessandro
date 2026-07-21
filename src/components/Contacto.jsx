import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.nombre,
          from_email: form.email,
          message: form.mensaje,
        },
      )
      setSent(true)
      setForm({ nombre: '', email: '', mensaje: '' })
    } catch (err) {
      console.error(err)
      setError('No se pudo enviar el mensaje. Intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-git-purple tracking-widest uppercase glass-card px-4 py-2 inline-block mb-4">
            $ ./contacto.sh
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold">
            Contacto<span className="text-gradient">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-mono text-lg font-semibold text-text-primary mb-4">
              $ Envíame un mensaje
            </h3>

            {sent ? (
              <div className="glass-card p-6 text-center">
                <p className="font-mono text-git-green text-lg mb-2">✓ Mensaje enviado</p>
                <p className="text-text-secondary text-sm">Te responderé lo antes posible.</p>
                <button
                  onClick={() => setSent(false)}
                  className="glass-btn mt-4 px-6 py-2 font-mono text-sm"
                >
                  $ enviar otro
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-mono text-xs text-text-secondary mb-1.5 block">
                    $ nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="glass-input w-full px-4 py-3 font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-text-secondary mb-1.5 block">
                    $ email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="glass-input w-full px-4 py-3 font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-text-secondary mb-1.5 block">
                    $ mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Escribe tu mensaje..."
                    className="glass-input w-full px-4 py-3 font-mono text-sm resize-none"
                  />
                </div>

                {error && (
                  <p className="font-mono text-xs text-git-red">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="glass-btn w-full px-6 py-3 font-mono text-sm disabled:opacity-50"
                >
                  {sending ? '$ enviando...' : '$ enviar mensaje'}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-mono text-lg font-semibold text-text-primary mb-4">
              $ Redes
            </h3>

            <div className="glass-card p-6 space-y-5">
              <a
                href="https://github.com/alepaolo2003-a23p"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-git-green transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f1f5f9">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-sm text-text-primary group-hover:text-git-green transition-colors">GitHub</p>
                  <p className="font-mono text-xs text-text-secondary">/alepaolo2003-a23p</p>
                </div>
                <span className="ml-auto font-mono text-xs text-git-green">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/alepzf7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-git-green transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f1f5f9">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-sm text-text-primary group-hover:text-git-green transition-colors">LinkedIn</p>
                  <p className="font-mono text-xs text-text-secondary">/in/alepzf7</p>
                </div>
                <span className="ml-auto font-mono text-xs text-git-green">↗</span>
              </a>
            </div>

            <div className="glass-card p-6 mt-6">
              <p className="font-mono text-xs text-text-secondary mb-2">$ Información adicional</p>
              <div className="diff-line added font-mono text-sm text-text-primary">
                alessandro.zelada.dev@gmail.com
              </div>
              <div className="diff-line added font-mono text-sm text-text-primary mt-1">
                IESTP Aráoz Pinto — 5to ciclo
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
