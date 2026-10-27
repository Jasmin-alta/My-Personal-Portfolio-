import { ArrowUpRight, Mail } from 'lucide-react'
import { Github, Linkedin } from './SocialIcons'
import { contactAccessibleLabel, contactDestination, type ContactDetail } from '../data/contact'

export function ContactLink({ contact }: { contact: ContactDetail }) {
  const href = contactDestination(contact)
  const Icon = contact.id === 'email' ? Mail : contact.id === 'linkedin' ? Linkedin : Github
  const content = <><span className={`contact-link-icon contact-icon-${contact.id}`} aria-hidden="true"><Icon /></span><span className="contact-link-copy"><span className="contact-link-label">{contact.label}</span><span className="contact-link-value">{href ? contact.value.trim() : contact.placeholder}</span></span>{href && <ArrowUpRight className="contact-external-arrow" size={18} aria-hidden="true" />}</>
  return <li>{href ? <a className="contact-link" href={href} target={contact.id === 'email' ? undefined : '_blank'} rel={contact.id === 'email' ? undefined : 'noopener noreferrer'} aria-label={contactAccessibleLabel(contact)}>{content}</a> : <div className="contact-link contact-link-placeholder">{content}</div>}</li>
}
