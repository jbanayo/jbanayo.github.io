export const site = {
  name: 'Julius Noel Banayo',
  shortName: 'Julius Banayo',
  tagline: 'Rehabilitation Science Researcher, Biomedical Engineer & Product Builder',
  description:
    'Designing assistive devices, researching fundamental rehabilitation science, and building open-source tools that help people.',
  url: 'https://jbanayo.github.io',
  location: 'Japan / Philippines',
  affiliation: 'PhD Candidate in Fundamental Rehabilitation Sciences, Gunma University',
  links: {
    github: 'https://github.com/jbanayo',
    linkedin: 'https://www.linkedin.com/in/julius-noel/',
    email: 'juliusnoel.banayo@gmail.com',
    scholar: '',
    orcid: 'https://orcid.org/0009-0003-8633-7340',
  },
  nav: [
    { label: 'Inventions', href: '/inventions' },
    { label: 'Research', href: '/research' },
    { label: 'Projects', href: '/projects' },
    { label: 'Collaborate', href: '/collaborate' },
  ],
};

export const education = [
  {
    period: '2026 – Present',
    degree: 'PhD in Fundamental Rehabilitation Sciences',
    institution: 'Gunma University, Japan',
    focus: 'Rehabilitation sciences, mobility, human function evaluation (ICF framework), and translational assistive technologies.',
  },
  {
    period: '2024 – 2025',
    degree: 'MSc in Project Management',
    institution: 'La Salle Barcelona (URL), Spain',
    focus: 'Bridging engineering execution with market viability, stakeholder communication, economics, and structured delivery.',
  },
  {
    period: 'BSc',
    degree: 'BS in Electronics Engineering',
    institution: 'De La Salle University – Dasmariñas, Philippines',
    focus: 'Hardware systems, embedded electronics, control systems, and biomedical instrumentation.',
  },
];

export const openSourceProjects = [
  {
    name: 'practice-japanese',
    repo: 'https://github.com/jbanayo/practice-japanese',
    category: 'Open Source Tool',
    status: 'Public',
    description:
      'Interactive practice tool built to support daily Japanese language study while living and researching in Japan.',
    tags: ['Language', 'Web', 'Open Source'],
  },
  {
    name: 'investment-dashboard',
    repo: 'https://github.com/jbanayo/investment-dashboard',
    category: 'Data & Analytics',
    status: 'Public',
    description:
      'Personal analytics dashboard for tracking portfolio allocations, macro metrics, and long-term financial decisions.',
    tags: ['Data Viz', 'Finance', 'Open Source'],
  },
  {
    name: 'AI-companion',
    repo: 'https://github.com/jbanayo/AI-companion',
    category: 'AI Experiment',
    status: 'Public',
    description:
      'Exploratory project testing practical human-centered AI workflows and everyday productivity assistants.',
    tags: ['AI', 'Product', 'Open Source'],
  },
  {
    name: 'Product & AI Initiatives (BYC Ventures / ENGAGE EU)',
    repo: 'https://github.com/jbanayo',
    category: 'Product & Collaboration',
    status: 'Selected Work',
    description:
      'Product management across software and AI initiatives (Lumen, Forge, Lumen Beacon) and international collaboration with ENGAGE EU on AI skills and human upskilling.',
    tags: ['Product Management', 'AI Skills', 'Cross-functional'],
  },
];

export const researchItems = [
  {
    year: '2026 – Present',
    type: 'Doctoral Research',
    title: 'Fundamental Rehabilitation Sciences (Gunma University)',
    venue: 'Department of Rehabilitation Sciences, Gunma University',
    summary:
      'Investigating mechanisms of function, mobility, and recovery grounded in the WHO International Classification of Functioning, Disability and Health (ICF), connecting engineering methods with clinical rehabilitation.',
    links: [],
  },
  {
    year: '2020 – 2026',
    type: 'Translational R&D & Clinical Trial Record',
    title: 'TAYÔ / LLMo: Lower Limb Mobilization Assistive Powered Table',
    venue: 'DLSU Evelyn D. Ang Institute of Biomedical Engineering and Health Technologies (EDA-IBEHT) & DLSMHSI, supported by DOST–PCHRD',
    summary:
      'Multidisciplinary rehabilitation robotics research spanning concept development, prototyping, safety testing, clinical research activity, value engineering, and intellectual property protection.',
    links: [
      { label: 'ISRCTN Trial Record', href: 'https://www.isrctn.com/pdf/ISRCTN12604075' },
      { label: 'EDA-IBEHT Project Page', href: 'https://www.eda-ibeht.com/projects/tayo/' },
      { label: 'IPOPHL Patent Gazette', href: 'https://onlineservices.ipophil.gov.ph/patgazette/IPASJournal/V29N52_INV_2nd.pdf' },
    ],
  },
];
