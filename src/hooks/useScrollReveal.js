import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export function useScrollReveal() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return { controls, variants }
}
