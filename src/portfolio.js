const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://chocoloe.github.io/profolio/',
  title: 'CH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chloe Hu',
  role: 'Software Engineer',
  description:
    'Hi, my name is Chloe. I am a full stack developer who focus on building scalable and impactful applications.',
  resume: 'https://drive.google.com/file/d/1QhunU0nUoseDnw1ptLKFFeRP4acfZHiU/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/chloehu-xy/',
    github: 'https://github.com/chocoloe',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Card-Mise',
    description:
      'A web application that allows users to create and share their own flashcards and motivate each other to tackle addiction issues in their own life',
    stack: ['TypeScript', 'Next.js', 'Prisma', 'CockroachDB', 'Tailwind', 'Docker', 'Auth.js'],
    sourceCode: 'https://github.com',
    livePreview: 'https://lightbulb-ten.vercel.app/',
  },
  {
    name: 'SMASH',
    description:
      'My capstone project that is sponsored by a startup who aims to provide an unconventional way to break into tech industry',
    stack: ['Next.js', 'Javascript', 'Styled Components', 'Figma', 'Vercel'],
    sourceCode: 'https://github.com/smash-technology',
    livePreview: 'https://smash-learn.web.app/',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'HTML5',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'CI/CD',
  'Azure',
  'GCP',
  'Bash',
  'Ruby'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'chloehusea@gmail.com',
}

export { header, about, projects, skills, contact }
