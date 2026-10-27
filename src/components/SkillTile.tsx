import { Atom, Bot, Code2, GitBranch, ListChecks, Workflow } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import type { Skill } from '../data/skills'
import { Github } from './SocialIcons'

const icons = {
  React: Atom,
  'React Native': Atom,
  Git: GitBranch,
  GitHub: Github,
  'VS Code': Code2,
  'Microsoft Copilot Studio': Bot,
  'Power Automate': Workflow,
  'Microsoft Lists': ListChecks,
}

export function SkillTile({ skill }: { skill: Skill }) {
  const reduceMotion = useReducedMotion()
  const Icon = icons[skill.name as keyof typeof icons]
  return <motion.li className="skill-tile" whileHover={reduceMotion ? undefined : { y: -3, boxShadow: '0 6px 16px rgba(82, 51, 101, 0.09)' }} transition={{ duration: .2 }}>
    <span className="skill-symbol" aria-hidden="true">{Icon ? <Icon /> : <span>{skill.label}</span>}</span>
    <span className="skill-label">{skill.name}</span>
  </motion.li>
}
