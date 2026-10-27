export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  technologiesProvisional?: boolean
  illustration: 'weather' | 'mentorship' | 'pokedex' | 'tasks' | 'soon'
  screenshot?: { src: string; alt: string }
  githubUrl?: string
  demoUrl?: string
  comingSoon?: boolean
}

// Add only confirmed technologies and real, working URLs.
// Screenshots go in public/images; use a path such as /images/weather-app.png.
export const projects: Project[] = [
  {
    id: 'weather', title: 'Weather App', illustration: 'weather',
    githubUrl: 'https://github.com/Jasmin-alta/Weather-App',
    description: 'A responsive weather application that retrieves real-time weather information and displays current weather conditions.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
  },
  {
    id: 'mentor-match', title: 'Mentor Match', illustration: 'mentorship',
    description: 'A mentorship matching application that helps connect students with mentors based on shared interests and availability.',
    technologies: ['JavaScript', 'Node.js', 'Express'],
    technologiesProvisional: true, // Verify against original project files.
  },
  {
    id: 'pokedex', title: 'Pokédex App', illustration: 'pokedex',
    description: 'A mobile Pokédex app I built while learning React Native through a hands-on crash course. The app uses PokéAPI to fetch and display Pokémon names, images, and types.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'PokéAPI'],
  },
  {
    id: 'todo', title: 'TaskFlow — To-Do List App', illustration: 'tasks',
    githubUrl: 'https://github.com/Jasmin-alta/TaskFlow',
    description: 'A task management application for organizing and tracking everyday tasks.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'coming-soon', title: 'More Projects Coming Soon...', illustration: 'soon',
    description: "I'm always learning, exploring, and building something new. Stay tuned!",
    technologies: [], comingSoon: true,
  },
]
