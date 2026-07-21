export default function Footer() {
  return (
    <footer className="border-t border-border-glass py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-text-secondary">
          <span className="text-git-green">©</span> {new Date().getFullYear()} Alessandro Zelada
        </div>

        <div className="font-mono text-xs text-text-secondary flex items-center gap-2">
          <span className="text-git-green">✦</span>
          Construido con React + TailwindCSS + Framer Motion
          <span className="text-git-green">✦</span>
        </div>

        <a
          href="#hero"
          className="font-mono text-xs text-git-green hover:text-text-primary transition-colors"
        >
          $ cd ..
        </a>
      </div>
    </footer>
  )
}
