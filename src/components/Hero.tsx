import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { Github, Linkedin } from './SocialIcons'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDoodle, Doodle, Skyline } from './Decorations'
import { PhotoCollage } from './PhotoCollage'
import { contactDetails, contactDestination, contactAccessibleLabel } from '../data/contact'
export function Hero() {
  const reduceMotion = useReducedMotion()
  function viewWork() { document.getElementById('projects')?.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth' }) }
  return <section id="home" className="hero" aria-labelledby="home-heading">
    <Skyline />
    <motion.div className="hero-layout" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
      <div className="hero-copy">
        <h1 id="home-heading"><span className="greeting">Hi there! <span>♡</span></span><span className="intro">I'm</span><span className="name">Jasmin</span></h1>
        <p className="subtitle">Aspiring a Career in Tech <span>♡</span></p>
        <p className="description">I'm a Computer Information Systems student at Georgia State University who loves exploring and never limits myself to one thing. I'm passionate about technology, creativity, and building a future where both can coexist.</p>
        <div className="hero-actions"><button className="button button-primary" onClick={viewWork} aria-describedby="projects-status">View My Work <ArrowUpRight size={19} /></button><a className="button button-secondary" href="/Jasmin_Altamirano_Resume.pdf" download="Jasmin_Altamirano_Resume.pdf">Download Resume <Download size={17} /></a></div>
        <span id="projects-status" className="sr-only">Scroll to the Projects section.</span>
        <div className="connect-row"><div className="social-icons" role="group" aria-label="Connect with Jasmin">{(['linkedin', 'github', 'email'] as const).map(id => {
          const contact = contactDetails.find(item => item.id === id)!
          const href = contactDestination(contact)
          const Icon = id === 'linkedin' ? Linkedin : id === 'github' ? Github : Mail
          return href ? <a key={id} href={href} target={id === 'email' ? undefined : '_blank'} rel={id === 'email' ? undefined : 'noopener noreferrer'} aria-label={contactAccessibleLabel(contact)} title={contact.label}><Icon aria-hidden="true" /></a> : <button key={id} disabled aria-label={`${contact.label} link unavailable`}><Icon aria-hidden="true" /></button>
        })}</div><span className="connect-note"><ArrowDoodle />let's connect! <span>♡</span></span></div>
      </div>
      <PhotoCollage />
    </motion.div>
    <Doodle className="star-left" /><Doodle className="sparkle-top" /><Doodle className="star-small" />
    <span className="home-location" aria-hidden="true">a little creativity, a world of possibilities ♡</span>
  </section>
}
