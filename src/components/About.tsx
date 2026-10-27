import { CakeSlice, Diamond, GraduationCap, MapPin, Plane, Sparkles, Utensils } from 'lucide-react'
import { Doodle } from './Decorations'
import './About.css'
import { BeyondCode } from './BeyondCode'

const interests = [
  { Icon: Utensils, text: 'An avid foodie who loves discovering new restaurants around Atlanta (and beyond!).' },
  { Icon: CakeSlice, text: 'Baking cheesecakes and experimenting with dessert recipes.' },
  { Icon: Diamond, text: 'Creating handmade friendship bracelets and exploring creative ideas.' },
  { Icon: Plane, text: 'Exploring new opportunities — whether through travel, creative projects, or the Disney College Program.' },
]

export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-layout">
        <div className="about-introduction">
          <h2 id="about-heading" className="about-heading"><span>About Me</span> <b aria-hidden="true">♡</b></h2>
          <div className="about-description about-expanded-description">
            <p><strong>Hi, I'm Jasmin! ♡</strong></p>
            <p>I'm a Computer Information Systems student at Georgia State University, exploring the world of technology and discovering where my interests can take me.</p>
            <p>Beyond tech, I love meeting new people from around the world, learning about different cultures, and seeking leadership opportunities that challenge me to grow. I enjoy stepping outside my comfort zone, trying new experiences, and building meaningful connections along the way.</p>
            <p>Whether I'm working on a coding project, helping bring a community event to life, or exploring a new opportunity, I'm always excited to learn something new and make a positive impact. ✨</p>
          </div>
          <ul className="about-facts" aria-label="A little about me">
            <li><GraduationCap aria-hidden="true" /><span>Georgia State<br />University<br /><strong>CIS Student</strong></span></li>
            <li><MapPin aria-hidden="true" /><span>Lawrenceville, GA</span></li>
            <li><Sparkles aria-hidden="true" /><span>Disney College<br />Program<br /><small>— Future Opportunity</small></span></li>
          </ul>
        </div>
        <aside className="about-interests" aria-labelledby="interests-heading">
          <span className="about-tape" aria-hidden="true" />
          <h3 id="interests-heading">A Few Things I Love <span aria-hidden="true">♡</span></h3>
          <ul>{interests.map(({ Icon, text }) => <li key={text}><span className="interest-icon"><Icon aria-hidden="true" strokeWidth={1.4} /></span><p>{text}</p></li>)}</ul>
          <Doodle className="about-panel-star" /><Doodle heart className="about-panel-heart" />
        </aside>
      </div>
      <BeyondCode />
      <Doodle className="about-side-star" />
    </section>
  )
}
