import { Bot, Building2, UsersRound } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import type { Experience } from '../data/experience'
import { LawrencevilleGallery } from './LawrencevilleGallery'

const icons = { technology: Bot, city: Building2, leadership: UsersRound }

export function ExperienceTimeline({ entries }: { entries: Experience[] }) {
  const reduceMotion = useReducedMotion()
  return <ol className="experience-timeline" aria-label="Experience timeline">
    {entries.map(entry => {
      const Icon = icons[entry.icon]
      return <li key={entry.id} className="experience-timeline-entry">
        <span className="experience-timeline-marker" aria-hidden="true"><Icon size={20} strokeWidth={1.5} /></span>
        <motion.article className="experience-card" aria-labelledby={`experience-${entry.id}`} whileHover={reduceMotion ? undefined : { y: -3, boxShadow: '0 8px 22px rgba(82, 51, 101, 0.07)' }} transition={{ duration: .2 }}>
          <span className={`experience-role-icon experience-role-${entry.icon}`} aria-hidden="true"><Icon size={31} strokeWidth={1.4} /></span>
          <div className="experience-card-copy"><h3 id={`experience-${entry.id}`}>{entry.title}</h3>
            <p className="experience-organization">{entry.organization}{entry.date && <><span className="experience-date-divider" aria-hidden="true"> | </span><span className="experience-date">{entry.date}</span></>}</p>
            <ul>{entry.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
            {entry.id === 'lawrenceville' && <LawrencevilleGallery />}
          </div>
        </motion.article>
      </li>
    })}
  </ol>
}
