export const site = {
  name: 'Julius Noel Banayo',
  shortName: 'Julius Banayo',
  tagline: 'Rehabilitation Science Researcher, Biomedical Engineer & Product Builder',
  description:
    'Designing assistive devices, researching fundamental rehabilitation science, shipping AI/software products, and building open-source tools that help people.',
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

export const bycOverview = {
  company: 'BYC Ventures',
  period: '2026',
  role: 'Product Manager & AI-Assisted Builder',
  summary:
    'Product manager across BYC’s suite of AI, blockchain, and partner products who also builds and ships production code with AI coding agents—taking products from idea to production with lean teams while establishing the documentation, QA, and planning systems the product team runs on.',
  highlights: [
    { metric: '2 prod releases', label: 'BYC Halo v3.0 & v3.1 shipped (~310 commits, 39 PRs with AI agents)' },
    { metric: '0.342 → 0.620', label: 'Lumen Beacon AI answer-quality eval score lift in under 2 weeks' },
    { metric: '10+ prototypes', label: 'Interactive clickable & 3D prototypes used to align direction before build' },
    { metric: '15+ products', label: 'Covered in an agent-readable product docs repo (~180 commits) & Hub' },
    { metric: '5 products', label: 'Running under an Agentic QA practice & restructured Plane backlogs' },
  ],
};

export const bycProducts = [
  {
    name: 'BYC Halo',
    subtitle: 'Partner Portal',
    role: 'Product Manager & Builder',
    summary:
      'Partner accreditation, courses, auto-filled certificates, and co-selling portal for BYC deals.',
    bullets: [
      'Authored the revamp brief shifting the model so deals flow from BYC to partners, with progressive dashboard activation and granular partner visibility controls.',
      'Built both the admin and partner portals end to end with AI coding agents (~310 commits, 39 PRs across two apps): deal listings & partner interest, "view as partner" preview, visibility audit logs, onboarding guides, team roles, accreditation/certificates, notifications, and metrics.',
      'Shipped v3.0 and v3.1 to production with code review; wrote and ran ~59 user stories across five cycles plus full BD launch collateral (release notes, admin guide, Partner Accreditation Agreement v1.0, and the first 5-lesson partner course).',
    ],
    tags: ['Partner Portal', 'AI-Assisted Dev', 'Production Release'],
  },
  {
    name: 'Lumen Beacon',
    subtitle: 'AI Business Analytics',
    role: 'Product Manager',
    summary:
      'Conversational business analytics platform where companies query their own numbers and receive verified answers with charts.',
    bullets: [
      'Authored Alpha and v1.0 PRDs, end-to-end user journeys, rebranding from Solomon to Beacon, and the Early Access → Beta → v1.0 release ladder.',
      'Set up an architecture → test → evals → gate loop that turned evaluation findings into targeted fixes, lifting the answer-quality score from 0.342 to 0.620 in under two weeks.',
      'Restyled the production web app onto the Lumen design system page by page with AI agents, built the 8-step guided tour and progress-saving API, prepared 10 Early Access legal/policy drafts, and framed 72 open product decisions for leadership.',
    ],
    tags: ['AI Analytics', 'Evals Loop', 'Design System'],
  },
  {
    name: 'Prismo',
    subtitle: 'Blockchain Identity (Passport, Pulse, Prismo AI)',
    role: 'Co-Owner',
    summary:
      'Public blockchain ecosystem featuring a self-owned identity account and verified surveys.',
    bullets: [
      'Authored Passport, Pulse, and Prismo AI requirements and secured 17 key product rulings (including web-first delivery, batched record minting, and a unified version line).',
      'Reset an inherited backlog into a focused 30-story first epic and shipped a live "walking skeleton" of the Passport on test.',
      'Refocused the roadmap around data ownership (integrating Pulse surveys into Passport) and built ~10 interactive prototypes—including a live 3D "machine Passport" concept now scoped for development—across three planned dev cycles.',
    ],
    tags: ['Blockchain Identity', '3D Prototyping', 'Product Strategy'],
  },
  {
    name: 'Lumen Platform & Core',
    subtitle: 'Developer Platform & APIs',
    role: 'Owner',
    summary:
      'Core developer infrastructure covering developer portal, wallet APIs, keys, gas, and platform migrations.',
    bullets: [
      'Authored the approved communications plan for the Azure-to-AWS migration and benchmarked wallet APIs against competitors to prioritize and verify delivered features.',
      'Planned multi-cycle roadmaps including a monitoring plan and a 71-issue risk- and impact-scored audit across the developer portal, wallets, keys, and gas.',
      'Delivered Lumen 2.5 release notes and BD changelogs, ran cycle retrospectives, and led two structured backlog cleanups with full archive records.',
    ],
    tags: ['Developer Platform', 'APIs & Wallets', 'Cloud Migration'],
  },
  {
    name: 'BYC Admin Portal',
    subtitle: 'Unified Internal Operations',
    role: 'Concept & Prototype Lead',
    summary:
      'Single internal admin surface unifying operations across BYC’s product suite.',
    bullets: [
      'Conceived the unified portal, built an interactive multi-product switcher prototype, and secured sign-off to establish it as a standalone product.',
      'Defined its scope boundaries alongside Halo Admin and wrote the first sprint’s 18 user stories.',
    ],
    tags: ['Internal Tools', 'Prototyping', 'Platform Scope'],
  },
  {
    name: 'Time Chamber',
    subtitle: 'Self-Serve AI Evaluation',
    role: 'Product Owner',
    summary:
      'Internal evaluation platform designed to make AI benchmarking self-serve across the team.',
    bullets: [
      'Wrote the product proposal turning roughly a full day of single-person manual benchmarking into a self-serve workflow anyone on the team can trigger.',
      'Established the project structure, naming, target schedule, and first sprint user stories.',
    ],
    tags: ['AI Evals', 'Developer Productivity', 'Self-Serve'],
  },
];

export const bycPractices = [
  {
    name: 'Agent-Readable Product Docs & Hub',
    detail:
      'Founded a central product-docs repository (~180 commits across 15+ products) with dated indexes and source-of-truth precedence rules for both humans and AI agents, paired with the BYC Product Hub and a recorded refresh workflow.',
  },
  {
    name: 'Agentic QA Practice (ISO 2859-Inspired Sampling)',
    detail:
      'Founded the QA repo, runbooks, and AI test-runner agents across 5 products with strict staging-only and cost-visibility rules, plus a risk-weighted human audit-sampling pilot modelled on ISO 2859 acceptance sampling.',
  },
  {
    name: 'Prototype → Stories → Backlog → AI-Assisted Build',
    detail:
      'Standardized alignment on clickable prototypes before writing acceptance-criteria user stories into Plane across 5 products, enabling rapid page-by-page builds with AI coding agents, mocked APIs, accessibility scans, and reviewed PRs.',
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
    name: 'ENGAGE EU — AI & Upskilling Collaboration',
    repo: 'https://github.com/jbanayo',
    category: 'International Collaboration',
    status: '2024',
    description:
      'Cross-country collaboration focused on AI skills, human upskilling, and responsible adoption across organizations.',
    tags: ['AI Skills', 'International', 'Collaboration'],
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
