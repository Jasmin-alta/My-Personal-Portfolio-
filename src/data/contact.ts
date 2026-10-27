export type ContactDetail = {
  id: 'email' | 'linkedin' | 'github'
  label: string
  value: string
  placeholder: string
}

// Fill value with your professional email or full HTTPS profile URL.
// Empty or invalid values render as non-clickable placeholders.
export const contactDetails: ContactDetail[] = [
  { id: 'email', label: 'Email', value: 'jasminaltamiranoavendano@gmail.com', placeholder: 'Professional email not provided yet' },
  { id: 'linkedin', label: 'LinkedIn', value: 'https://www.linkedin.com/in/jasminaltav', placeholder: 'LinkedIn profile not provided yet' },
  { id: 'github', label: 'GitHub', value: 'https://github.com/Jasmin-alta', placeholder: 'GitHub profile not provided yet' },
]

export function contactDestination(contact: ContactDetail) {
  const value = contact.value.trim()
  if (!value) return undefined
  if (contact.id === 'email') {
    return /^[^\s@<>?&#:]+@[^\s@<>?&#:]+\.[^\s@<>?&#:]+$/.test(value) ? `mailto:${value}` : undefined
  }
  try {
    const url = new URL(value)
    const domain = contact.id === 'linkedin' ? 'linkedin.com' : 'github.com'
    const validHost = url.hostname === domain || url.hostname === `www.${domain}`
    const profilePath = contact.id === 'linkedin' ? /^\/in\/[^/]+\/?$/ : /^\/[^/]+\/?$/
    return url.protocol === 'https:' && validHost && !url.username && !url.password && profilePath.test(url.pathname) ? url.href : undefined
  } catch { return undefined }
}

export function contactAccessibleLabel(contact: ContactDetail) {
  return contact.id === 'email'
    ? `Email Jasmin at ${contact.value.trim()} (opens your email app)`
    : `Visit Jasmin's ${contact.label} profile (opens in a new tab)`
}
