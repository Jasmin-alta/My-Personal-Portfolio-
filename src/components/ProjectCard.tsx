import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import type { Project } from '../data/projects'
import { Github } from './SocialIcons'
import { ProjectIllustration } from './ProjectIllustration'

function webUrl(value?: string) {
  if (!value) return undefined
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : undefined } catch { return undefined }
}

export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion()
  const demoUrl = !project.comingSoon ? webUrl(project.demoUrl) : undefined
  const githubUrl = !project.comingSoon ? webUrl(project.githubUrl) : undefined
  return <motion.article className={`project-card${project.comingSoon ? ' project-coming-soon' : ''}`} aria-labelledby={`project-${project.id}`} whileHover={reduceMotion ? undefined : { y: -5, boxShadow: '0 12px 28px rgba(82, 51, 101, 0.12)' }} transition={{ duration: .22 }}>
    {project.screenshot ? <img className="project-screenshot" src={project.screenshot.src} alt={project.screenshot.alt} loading="lazy" /> : <ProjectIllustration kind={project.illustration} />}
    <div className="project-card-content">
      <h3 id={`project-${project.id}`}>{project.title}</h3>
      <p>{project.description}</p>
      {project.technologies.length > 0 && <ul className="project-tags" aria-label="Technologies">{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>}
      {project.technologiesProvisional && <small className="project-provisional">Technology tags are provisional.</small>}
      {(demoUrl || githubUrl) && <div className="project-links">
        {demoUrl && <a className="project-demo" href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title} (opens in a new tab)`}>Live Demo <ArrowUpRight size={17} /></a>}
        {githubUrl && <a className="project-github" href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub (opens in a new tab)`}>GitHub <Github /></a>}
      </div>}
    </div>
  </motion.article>
}
