export type Skill = { name: string; label: string }
export type SkillGroup = { id: string; title: string; skills: Skill[] }

// These are technologies Jasmin has worked with, not proficiency ratings.
export const skillCategories: SkillGroup[] = [
  { id: 'languages', title: 'Languages', skills: [
    { name: 'Python', label: 'Py' },
    { name: 'JavaScript', label: 'JS' },
    { name: 'TypeScript', label: 'TS' },
    { name: 'HTML', label: '</>' },
    { name: 'CSS', label: '{ }' },
  ] },
  { id: 'frameworks', title: 'Frameworks & Libraries', skills: [
    { name: 'React', label: 'React' },
    { name: 'React Native', label: 'RN' },
    { name: 'Node.js', label: 'Node' },
    { name: 'Express', label: 'ex' },
    { name: 'Expo', label: 'Expo' },
  ] },
  { id: 'tools', title: 'Developer Tools & Platforms', skills: [
    { name: 'Git', label: 'Git' },
    { name: 'GitHub', label: 'GitHub' },
    { name: 'VS Code', label: 'Code' },
    { name: 'Microsoft Copilot Studio', label: 'AI' },
    { name: 'Power Automate', label: 'Flow' },
    { name: 'Microsoft Lists', label: 'Lists' },
  ] },
]

export const currentlyExploring = [
  'Building more web and mobile applications.',
  'Improving my coding and problem-solving skills.',
  'Exploring UI/UX design.',
  'Learning more about AI and cloud technologies.',
  'Discovering different opportunities in tech.',
]
