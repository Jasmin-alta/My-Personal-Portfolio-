import type { SkillGroup } from '../data/skills'
import { SkillTile } from './SkillTile'

export function SkillCategory({ category }: { category: SkillGroup }) {
  return <div className={`skill-category skill-category-${category.id}`} role="group" aria-labelledby={`skills-${category.id}`}>
    <h3 id={`skills-${category.id}`}>{category.title}</h3>
    <ul className="skill-tiles">{category.skills.map(skill => <SkillTile key={skill.name} skill={skill} />)}</ul>
  </div>
}
