import Header from '../components/Header'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Showcase from '../components/Showcase'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main id="top" className="grain relative bg-ink overflow-x-clip">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Showcase />
      <Experience />
      <Contact />
    </main>
  )
}
