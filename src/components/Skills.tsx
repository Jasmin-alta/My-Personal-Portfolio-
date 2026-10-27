import { BookOpen, Heart } from 'lucide-react'
import { skillCategories, currentlyExploring } from '../data/skills'
import { SkillCategory } from './SkillCategory'
import { Doodle } from './Decorations'
import './Skills.css'

export function Skills() {
  return <section id="skills" className="skills-section" aria-labelledby="skills-heading">
    <header className="skills-header"><h2 id="skills-heading">Skills &amp; Tools <span aria-hidden="true">♡</span></h2><p>Here are some of the tools and technologies I've worked with!</p><Doodle className="skills-heading-star" /></header>
    <div className="skills-layout">
      <div className="skills-main">
        <div className="skill-categories">{skillCategories.map(category => <SkillCategory key={category.id} category={category} />)}</div>
        <aside className="skills-exploring" aria-labelledby="exploring-heading"><h3 id="exploring-heading">Currently Exploring...</h3><ul>{currentlyExploring.map(item => <li key={item}>{item}</li>)}</ul></aside>
      </div>
      <div className="skills-scrapbook" aria-hidden="true"><div className="skills-paper-note"><span className="skills-tape" />always<br />learning<br />always<br />exploring<br />always<br />growing ♡</div><Doodle className="skills-note-star" /><div className="skills-book"><BookOpen strokeWidth={1.25} /><Heart className="skills-book-heart" strokeWidth={1.5} /></div></div>
    </div>
  </section>
}
