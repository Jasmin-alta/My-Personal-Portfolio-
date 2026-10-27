import { experiences } from '../data/experience'
import { ExperienceTimeline } from './ExperienceTimeline'
import { Doodle } from './Decorations'
import './Experience.css'

export function ExperienceSection() {
  return <section id="experience" className="experience-section" aria-labelledby="experience-heading">
    <header className="experience-header"><h2 id="experience-heading">Experience <span aria-hidden="true">♡</span></h2><p>From internships to leadership roles, here are some opportunities that have shaped my journey so far.</p><Doodle className="experience-heading-star" /></header>
    <div className="experience-layout">
      <ExperienceTimeline entries={experiences} />
      <aside className="experience-scrapbook" aria-label="A memory at Microsoft">
        <figure className="experience-photo"><span className="experience-photo-tape" aria-hidden="true" /><img src="/images/microsoft-campus.jpeg" alt="Jasmin with her arms raised behind the Microsoft sign in the campus courtyard" loading="lazy" /><figcaption>a little moment at Microsoft ♡</figcaption></figure>
        <p className="experience-paper-note">grateful for every<br />opportunity ♡</p>
        <Doodle className="experience-photo-star" /><Doodle heart className="experience-photo-heart" /><Doodle className="experience-note-star" />
      </aside>
    </div>
  </section>
}
