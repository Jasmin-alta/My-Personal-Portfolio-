import { Plane } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { contactDetails } from '../data/contact'
import { ContactLink } from './ContactLink'
import { ArrowDoodle, Doodle } from './Decorations'
import './Contact.css'

function ContactSkyline() {
  return <svg className="contact-skyline" viewBox="0 0 720 500" fill="none" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">
    <path d="M0 500V406h35v-23h28v117h25V338h35v-27h12v27h22v162h24V273h37v-35h10v-30h8v30h10v35h26v227h24V156h12v-24h15V97h13V64h7v33h14v35h14v24h12v344h22V283h14v-34h12v-28h7v28h12v34h16v217h28V211h12v-29h11v-29h8v-35h6v35h8v29h12v29h12v289h25V342h21v-35h9v35h25v158h26V389h34v111h58Z" fill="#b09ac4" />
    <path d="M97 350v143m15-143v143m81-205v205m16-205v205m16-205v205m90-327v327m15-327v327m15-327v327m15-327v327m49-198v198m16-198v198m82-270v270m15-270v270m15-270v270m16-270v270m56-139v139m15-139v139" stroke="#fff7ec" strokeWidth="4" opacity=".6" strokeDasharray="9 6" />
    <path d="M0 465c65-19 110 16 169-4s95-15 149 0 81-25 140-13 100-17 148-5 76-4 114-8v65H0Z" fill="#ba9caf" opacity=".6" />
  </svg>
}

export function Contact() {
  const reduceMotion = useReducedMotion()
  return <section id="contact" className="contact-section" aria-labelledby="contact-heading">
    <ContactSkyline />
    <motion.div className="contact-content" initial={reduceMotion ? false : { opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5 }}>
      <h2 id="contact-heading">Let's Connect! <span aria-hidden="true">♡</span></h2>
      <p className="contact-description">I'd love to connect, whether it's about tech opportunities, collaborations, or just chatting about tech, creativity, or life!</p>
      <ul className="contact-options" aria-label="Contact options">{contactDetails.map(contact => <ContactLink key={contact.id} contact={contact} />)}</ul>
    </motion.div>
    <div className="contact-scrapbook" aria-hidden="true"><div className="contact-flight"><Plane strokeWidth={1.15} /><ArrowDoodle /><span>Atlanta, GA ♡</span></div><div className="contact-paper-note"><span className="contact-note-tape" />new places,<br />new experiences,<br />same girl ♡</div><Doodle className="contact-note-star" /></div>
    <Doodle className="contact-heading-star" /><Doodle heart className="contact-bottom-heart" />
  </section>
}
