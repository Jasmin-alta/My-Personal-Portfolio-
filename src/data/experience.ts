export type Experience = {
  id: string
  title: string
  organization: string
  date?: string
  icon: 'technology' | 'city' | 'leadership'
  details: string[]
}

export const experiences: Experience[] = [
  {
    id: 'microsoft', title: 'Microsoft Discovery Intern', organization: 'Microsoft',
    date: 'Summer 2026', icon: 'technology',
    details: [
      'Collaborated with four Discovery interns to develop an AI-powered troubleshooting assistant using Microsoft Copilot Studio.',
      'Interviewed three Azure Support Engineers and translated documentation-search challenges into features that retrieve and rank relevant articles.',
      'Built a functional prototype with visual, step-by-step troubleshooting guidance and presented a live demonstration to Microsoft stakeholders.',
    ],
  },
  {
    id: 'lawrenceville', title: 'Economic Development & Events Intern', organization: 'City of Lawrenceville',
    date: 'June 2025 – Present', icon: 'city',
    details: [
      'Developed automated reminder and progress-tracking workflows using Microsoft Power Automate and Microsoft Lists.',
      'Led event coordination for WellFest, including artist, vendor, and sponsor outreach.',
      'Served as stage manager for two major city events.',
    ],
  },
  {
    id: 'altafuture', title: 'Founder', organization: 'AltaFuture', icon: 'leadership',
    details: [
      'Founded AltaFuture, a registered 501(c)(3) nonprofit equipping students with real-world financial literacy skills through toolkits and interactive workshops; currently supporting 20 members globally.',
      'Oversee operations for the California Chapter, collaborating with the chapter president to coordinate outreach, member activities, and workshop execution.',
      'Secured a $500 grant from the Karma for Cara Foundation to fund the development of financial toolkits and supplies for the California Chapter.',
    ],
  },
  {
    id: 'luv-michael', title: 'Team Leader', organization: 'Luv Michael',
    date: 'August 2025 – February 2026', icon: 'leadership',
    details: [
      'Recruited and led a team of 26 students to organize fundraising campaigns supporting autism acceptance and advocacy.',
      'Collaborated with team members to raise $1,211 in donations, strengthening leadership, communication, and teamwork toward a shared goal.',
    ],
  },
]
