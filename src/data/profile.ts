// Everything the homepage says lives here. Edit text in this file;
// case studies live as Markdown in src/content/work/.

export const site = {
  name: 'Abhishek Kumar Mishra',
  shortName: 'Abhishek',
  title: 'Abhishek Kumar Mishra — Engineering Manager & AI Platform Leader',
  description:
    'Engineering leader with 12+ years building production AI: agentic analytics, ML platforms and real-time inference at Collinson, OCBC and IHS Markit.',
  url: 'https://abhimishra91.github.io',
  location: 'Delhi NCR',
  status: 'Open for collaboration',
  email: 'abhimishra.91@gmail.com',
  resume: '/Abhishek_Kumar_Mishra_Resume.pdf',
};

export const links = {
  github: 'https://github.com/abhimishra91',
  linkedin: 'https://www.linkedin.com/in/abhimishra-ml/',
  email: `mailto:${site.email}`,
};

export const hero = {
  kicker: ['Engineering Manager', 'AI Platform Architect', 'Hands-on Builder'],
  headline: ['I build production AI systems', '— and the teams that ship them.'],
  intro:
    'For 12+ years I have taken AI from whiteboard to production at Collinson, OCBC Bank and IHS Markit — leading teams, architecting platforms, and working shoulder-to-shoulder with the people who use them.',
};

export const metrics = [
  { value: 12, prefix: '', suffix: '+', label: 'years shipping ML & AI to production' },
  { value: 1, prefix: 'USD ', suffix: 'M+', label: 'commercial impact from AI systems' },
  { value: 60, prefix: '~', suffix: '%', label: 'faster model deployment cycles' },
  { value: 11, prefix: '', suffix: '+', label: 'data scientists & ML engineers led' },
  { value: 18, prefix: '', suffix: ' hrs', label: 'of manual work removed, every day' },
];

export type Lens = 'lead' | 'architect' | 'deploy';

export const modes: {
  id: Lens;
  index: string;
  title: string;
  role: string;
  blurb: string;
  points: string[];
}[] = [
  {
    id: 'lead',
    index: '01',
    title: 'Lead',
    role: 'Engineering Manager',
    blurb: 'Build teams that own AI in production — not just notebooks.',
    points: [
      'Scaled a team of 7+ data scientists and 4+ ML engineers',
      'Hiring, mentoring and technical direction',
      'Roadmaps shaped with product, business and clients',
    ],
  },
  {
    id: 'architect',
    index: '02',
    title: 'Architect',
    role: 'Staff+ Engineer',
    blurb: 'Design the platform once so every team ships faster after.',
    points: [
      'Unified Data & AI platform on Snowflake, AWS and Prefect',
      'Agentic systems with LangGraph and secure SQL execution',
      'Batch + low-latency inference with Spark and Ray',
    ],
  },
  {
    id: 'deploy',
    index: '03',
    title: 'Deploy',
    role: 'Forward-Deployed Engineer',
    blurb: 'Sit with the user, turn ambiguity into a working system.',
    points: [
      'Translate fuzzy business problems into shipped AI',
      'Client-facing analytics products across APAC finance',
      'USD 1M+ in commercial impact from delivered systems',
    ],
  },
];

export const experience = [
  {
    company: 'Collinson Group',
    role: 'Manager, Data Science',
    period: 'Jan 2023 — Present',
    place: 'Singapore · India',
    summary:
      'Leading a multi-disciplinary AI team and the platform it runs on.',
    highlights: [
      'Led and scaled a team of 7+ data scientists and 4+ ML engineers — technical direction, architecture guidance, mentoring and production ownership.',
      'Built a unified Data & AI platform on Snowflake, AWS and Prefect covering experimentation, training, deployment, real-time inference, CI/CD, observability and governance.',
      'Architected an agentic conversational analytics platform (LangChain / LangGraph) that improved analyst productivity by ~30%.',
      'Set production engineering standards that cut deployment cycles by ~60% and aligned the AI roadmap to USD 1M+ in commercial impact.',
    ],
    work: ['agentic-analytics', 'data-ai-platform'],
  },
  {
    company: 'OCBC Bank',
    role: 'Senior Data Scientist & Commercialization Product Lead',
    period: 'Jan 2022 — Dec 2022',
    place: 'Singapore',
    summary: 'Production ML for fraud and personalisation in a regulated bank.',
    highlights: [
      'Designed scalable ML services for batch and low-latency online inference on Spark, Ray and AWS, improving pipeline efficiency by ~70%.',
      'Built fraud-detection and personalisation capabilities integrated with customer-facing and core banking systems.',
      'Introduced CI/CD, observability and production-readiness practices for auditable, reliable ML releases.',
    ],
    work: ['fraud-personalisation'],
  },
  {
    company: 'IHS Markit',
    role: 'Data Scientist & Product Manager',
    period: 'Nov 2016 — Dec 2021',
    place: 'Singapore',
    summary: 'Owned ML-powered analytics products for APAC financial clients.',
    highlights: [
      'Owned roadmap and delivery of a Big Data analytics platform for APAC financial clients, doubling adoption.',
      'Delivered forecasting and classification products that outperformed benchmarks by ~30%.',
      'Built data and ML systems on AWS (EMR, Glue, Redshift), cutting processing time by 40%.',
    ],
    work: ['investment-analytics'],
  },
  {
    company: 'IHS Markit',
    role: 'Digital Transformation Specialist',
    period: 'Aug 2013 — Oct 2016',
    place: 'Singapore · India',
    summary: 'Where it started: 0→1 automation and early AI.',
    highlights: [
      'Led 0→1 automation initiatives, including an NLP email-classification system that saved 18 hours of manual effort per day across global operations.',
      'Innovation SME helping teams adopt automation, analytics and early AI.',
    ],
    work: ['email-classification'],
  },
];

export const stack = [
  {
    layer: 'AI applications',
    items: ['LLMs', 'Agentic workflows', 'LangGraph', 'LangChain', 'LlamaIndex', 'RAG', 'NLP', 'Recommender systems', 'Forecasting', 'Classification'],
  },
  {
    layer: 'Services & APIs',
    items: ['Python', 'FastAPI', 'REST APIs', 'Microservices', 'Async processing', 'Model serving', 'Service integration'],
  },
  {
    layer: 'Platform & MLOps',
    items: ['CI/CD', 'Observability', 'Monitoring', 'Model registry', 'ML lifecycle', 'Model evaluation', 'Prefect', 'Docker', 'Git'],
  },
  {
    layer: 'Data & compute',
    items: ['Snowflake', 'Spark', 'Ray', 'AWS SageMaker', 'EMR', 'ECS', 'Lambda', 'Step Functions', 'Glue', 'Redshift'],
  },
  {
    layer: 'Leadership',
    items: ['Technical strategy', 'Architecture & design', 'Team building', 'Hiring & mentoring', 'Roadmap planning', 'Cross-functional leadership', 'Production ownership'],
  },
];

export const openSource = [
  {
    name: 'transformers-tutorials',
    repo: 'abhimishra91/transformers-tutorials',
    description: 'Hands-on notebooks for fine-tuning Transformer models on real NLP tasks.',
    tags: ['PyTorch', 'Hugging Face', 'NLP'],
  },
  {
    name: 'insight',
    repo: 'abhimishra91/insight',
    description: 'Project Insight — NLP as a Service: a set of NLP models served behind one API and UI.',
    tags: ['FastAPI', 'Streamlit', 'NLP'],
  },
];

export const beyond = {
  motto: 'Eat. Sleep. Pray. Code.',
  interests: [
    { icon: 'book', title: 'Manga, voraciously', text: 'A big-time manga reader — always a few volumes into something new.' },
    { icon: 'flame', title: 'Cooking experiments', text: 'Weekends go to trying new dishes. Iteration applies in the kitchen too.' },
    { icon: 'spark', title: 'Always building', text: 'Side projects and open-source keep me close to the latest in ML and NLP.' },
  ],
  education: {
    degree: 'B.Tech, Electronics & Communication Engineering',
    school: 'Guru Gobind Singh Indraprastha University, Delhi',
    period: '2009 — 2013',
  },
  certifications: ['AWS Certified Solutions Architect — Associate'],
};
