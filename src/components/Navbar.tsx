import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      }
    }, { rootMargin: '-25% 0px -50% 0px' })
    for (const id of ['home', 'about', 'projects', 'experience', 'skills', 'contact']) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])
  return <header className="site-header">
    <a className="signature" href="#home" aria-label="Jasmin, home">Jasmin <span>♡</span></a>
    <nav aria-label="Main navigation"><a href="#home" aria-current={activeSection === 'home' ? 'location' : undefined}>Home</a><a href="#about" aria-current={activeSection === 'about' ? 'location' : undefined}>About</a><a href="#projects" aria-current={activeSection === 'projects' ? 'location' : undefined}>Projects</a><a href="#experience" aria-current={activeSection === 'experience' ? 'location' : undefined}>Experience</a><a href="#skills" aria-current={activeSection === 'skills' ? 'location' : undefined}>Skills</a><a href="#contact" aria-current={activeSection === 'contact' ? 'location' : undefined}>Contact</a></nav>
    <a className="resume-nav" href="/Jasmin_Altamirano_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Jasmin's resume PDF (opens in a new tab)">Resume <ArrowUpRight size={17} /></a>
  </header>
}
