import { projects } from '../data/projects'
import { Doodle, ArrowDoodle } from './Decorations'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export function Projects() {
  return <section id="projects" className="projects-section" aria-labelledby="projects-heading">
    <header className="projects-header"><h2 id="projects-heading">Projects <span aria-hidden="true">♡</span></h2><p>Here are some of the projects I've worked on! Each one represents a piece of my journey and what I'm passionate about.</p><Doodle className="projects-heading-star" /></header>
    <div className="projects-grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
    <div className="projects-footer-note" aria-hidden="true"><ArrowDoodle /><span>a little curiosity goes a long way ♡</span></div>
  </section>
}
