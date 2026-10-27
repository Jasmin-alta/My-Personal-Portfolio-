import { Check, CloudSun, Heart, Laptop, ListChecks, Sparkles, UsersRound } from 'lucide-react'
import type { Project } from '../data/projects'
import { Doodle } from './Decorations'

export function ProjectIllustration({ kind }: { kind: Project['illustration'] }) {
  return <div className={`project-illustration illustration-${kind}`} aria-hidden="true">
    <Doodle className="project-art-star" /><Doodle heart className="project-art-heart" />
    {kind === 'weather' && <><span className="weather-orbit" /><CloudSun className="project-main-icon" strokeWidth={1.2} /><span className="art-cloud cloud-one" /><span className="art-cloud cloud-two" /></>}
    {kind === 'mentorship' && <><span className="connection-ring" /><UsersRound className="project-main-icon" strokeWidth={1.2} /><Heart className="connection-heart" size={23} /></>}
    {kind === 'pokedex' && <div className="pokedex-phone"><span className="phone-speaker" /><div className="poke-ball"><span /></div><span className="phone-detail" /><span className="phone-detail short" /></div>}
    {kind === 'tasks' && <div className="task-paper"><ListChecks size={26} strokeWidth={1.4} />{[0,1,2].map(n => <div className="task-line" key={n}><Check size={15} /><span /></div>)}</div>}
    {kind === 'soon' && <><Laptop className="project-main-icon" strokeWidth={1.2} /><Heart className="laptop-heart" size={30} strokeWidth={1.4} /><span className="art-handwriting">always creating</span></>}
    <Sparkles className="project-art-sparkles" size={23} strokeWidth={1.2} />
  </div>
}
