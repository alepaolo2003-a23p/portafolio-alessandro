import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Proyectos from './components/Proyectos'
import Stack from './components/Stack'
import Trayectoria from './components/Trayectoria'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 grid-bg">
      <Navbar />
      <main>
        <Hero />
        <Proyectos />
        <Stack />
        <Trayectoria />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
