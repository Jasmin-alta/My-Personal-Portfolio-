import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { ExperienceSection } from './components/Experience'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <div className="portfolio-shell"><a className="skip-link" href="#home">Skip to content</a><Navbar /><main><Hero /><About /><Projects /><ExperienceSection /><Skills /><Contact /></main></div>
  )
}
