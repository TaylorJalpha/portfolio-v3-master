import { ref } from 'vue'

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  achievements: string[];
}

export function useExperiences() {
  const experiences = ref<ExperienceItem[]>([
    {
      year: '2025-Present',
      title: 'Technical Product Lead',
      company: 'RevSec AI — Pricing Intelligence & RevOps Platform · Self-employed · Los Angeles, CA (Remote)',
      description: 'Shipped an agentic pricing intelligence platform with 5 integrated product surfaces — pricing strategy engine, benchmark dashboard, plan management, CPQ, and experiment tracking — from 0→1 in 6 months (Nuxt 3, Rails 8, PostgreSQL), compressing what would typically require a cross-functional team of 5+ and a 12-month development cycle into a solo AI-assisted build at a fraction of the cost. Owned every phase from product discovery and Figma design through full-stack development and cloud deployment.',
      skills: ['Product Strategy', 'Nuxt 3', 'Rails 8', 'AWS Bedrock', 'PostgreSQL', 'Figma', 'RAG Pipelines', 'Python', 'Data Warehousing', 'Vector Search', 'Web Scraping', 'CPQ', 'Pricing Strategy', 'AWS Amplify', 'Kiro CLI', 'RevOps', 'Competitive Intelligence', 'AI/ML', 'Full-stack Development', 'Cloud Architecture'],
      achievements: [
        'End-to-End Delivery: Shipped a multi-service SaaS business end-to-end as a solo builder — requirements, Figma design, full-stack development, and AWS deployment — compressing what would typically require a cross-functional team of 5+ and a 12-month development cycle into a 6-month solo AI-assisted build, cutting development and discovery costs by nearly 90%',
        'Process Optimization: Engineered a synchronous AI pipeline using Rails service layers and async job orchestration to transform fragmented market research into structured, validated discovery templates via AWS Bedrock prompt chains; reduced end-to-end strategy generation latency ~70% (from ~60s to <20s) through prompt engineering and pipeline restructuring — all agentic features remain strictly scoped to private business data',
        'Technical Requirement Definition: Translated complex financial modeling, unit economics, competitive analysis, and success criteria requirements into 60+ actionable technical specs',
        'Engineered a Python-based web scraper, data warehouse, and RAG vector search pipeline that automates competitive benchmarking and synthesizes unstructured market data into risk-scored pricing recommendations — LLMs present findings, never decide',
        'Development Velocity: Leveraged AWS Kiro CLI for AI-assisted spec-driven development and deployed the full platform on AWS (EC2, RDS PostgreSQL, S3, Bedrock)',
        'Launched a fully automated, low-touch cloud business on AWS — the landing page is live in open beta as of March 2026, with hosting, CI/CD, and Bedrock AI capabilities managed entirely through infrastructure-as-code'
      ]
    },
    {
      year: '2025-Present',
      title: 'Technical Product Manager',
      company: 'OneSynergee - Los Angeles, California, United States',
      description: 'Leading technical strategy for an international agri-tech and climate-focused program while elevating agile delivery standards across product engineering pods.',
      skills: ['Technical Strategy', 'Program Management', 'Market Research', 'Agile Coaching', 'Backlog Management', 'Sprint Planning', 'Roadmapping', 'Asana', 'Product Discovery', 'Cross-functional Leadership'],
      achievements: [
        'Shaped technical strategy and delivery standards for an international, agri-tech and climate-focused initiative',
        'Building a tokenized marketplace (RWA) for farmers to access new markets and harness the power of a decentralized ledger',
        'Implemented structured agile workflows across pods; coached leads on backlog, sprints, roadmaps, and progress tracking (Jira/Asana/GitHub)',
        'Translated program goals into 0→1 technical work; facilitated discovery and problem-solving across Build and Scale teams; supported business-case validation'
      ]
    },
    {
      year: '2024-2025',
      title: 'Product Management Sabbatical',
      company: 'Consultant - Los Angeles, CA',
      description: 'Took time off to reassess priorities and deepen skills across product strategy, software development, AI/ML, cloud engineering, business strategy, and sales/customer acquisition.',
      skills: ['Business Strategy', 'User journey mapping', 'Team development', 'User research', 'Rails API Development', 'Vue.js', 'AWS Certification', 'Product Strategy', 'UX Design', 'Technical Discovery'],
      achievements: [
        'Completed advanced training in Rails API development and Vue.js frameworks',
        'Led freelance consulting projects for early-stage teams',
        'Pursuing AWS certification for cloud engineering expertise',
        'Focused on deepening AI/ML and business strategy knowledge'
      ]
    },
    {
      year: '2022-2024',
      title: 'Product Manager, Technical',
      company: 'Consultant - Los Angeles, CA',
      description: 'Led cross-functional teams on projects including personalization, customer acquisition, fiat-to-crypto onramp, role-based access control, Shopify re-build, UI/UX strategy, NFT marketplace optimization, and fintech API integrations.',
      skills: ['Cross-functional Leadership', 'Product discovery', 'Stripe & Plaid APIs', 'DeFi Platforms', 'Web3 Gaming', 'UI/UX Strategy', 'Web3 Development', 'Role-based Access Control', 'Search Optimization', 'Shopify', 'Agile Methodologies', 'Product Roadmapping'],
      achievements: [
        'Delivered 10% increase in transaction volume and 90%+ CSAT for 13+ months for a DeFi platform',
        'Launched Web3 gaming retention campaigns that reactivated dormant users by 4%',
        'Spearheaded full-stack B2B website redesign using Vue.js, Rails, AWS, and PostgreSQL',
        'Oversaw end-to-end product delivery including PRDs and business case validation'
      ]
    },
    {
      year: '2021-2022',
      title: 'Product Manager',
      company: 'GalacticWay - Los Angeles',
      description: 'Led development of NEAR-based NFT marketplace and drove significant user growth through strategic GTM execution and user-focused roadmap development.',
      skills: ['GTM Strategy', 'NEAR Blockchain', 'React.js', 'AWS', 'Business Strategy', 'User Onboarding', 'Product Roadmapping', 'Team Leadership', 'Market Research', 'User research', 'Product Discovery'],
      achievements: [
        'Drove 600% increase in user growth via GTM strategy and user-focused roadmap execution',
        'Achieved $293 LTV with onboarding automation for NEAR-based NFT marketplace',
        'Conducted market research and discovery resulting in successful codebase acquisition',
        'Led pitch development and strategic product positioning'
      ]
    },
    {
      year: '2021',
      title: 'Product Manager, Consultant',
      company: 'Erupt - Los Angeles, US',
      description: 'Implemented unified Engineering-Product-Design (EPD) processes and led process improvement initiatives to streamline team workflows across the organization.',
      skills: ['Process Improvement', 'Scrum','Agile Methodologies', 'EPD Alignment', 'Stakeholder Management', 'Workshop Facilitation', 'Team Leadership'],
      achievements: [
        'Implemented unified Engineering-Product-Design (EPD) processes',
        'Secured buy-in from senior stakeholders to streamline team workflows',
        'Led workshops, presentations, and regular team check-ins for successful adoption',
        'Improved cross-functional collaboration across multiple teams'
      ]
    },
    {
      year: '2019-2020',
      title: 'Associate Product Manager, Admin',
      company: 'GoGuardian - Los Angeles',
      description: 'Collaborated with data science teams to enhance machine learning models and drove significant revenue growth by solving critical customer pain points during the COVID-19 pandemic.',
      skills: ['Machine Learning', 'Data Science', 'Product Analytics', 'User Research', 'Statistical Analysis', 'Customer Feedback Analysis'],
      achievements: [
        'Played key role in driving multimillion-dollar increase in ARR/MRR during COVID-19',
        'Collaborated with data science teams to optimize ML models and platform performance',
        'Led multiple rounds of product discovery and user research initiatives',
        'Implemented comprehensive product analytics and statistical analysis frameworks'
      ]
    },
    {
      year: '2019',
      title: 'Product & Project Manager',
      company: 'EatOS By POS Labs - Beverly Hills',
      description: 'Led development of time and attendance application using Dart/Flutter, managing cross-functional teams and implementing prioritization frameworks for capacity planning.',
      skills: ['Dart/Flutter', 'Cross-platform Development', 'System Architecture', 'UI/UX Development', 'Team Management', 'AirTable'],
      achievements: [
        'Led development of cross-platform time and attendance application',
        'Directed 3 cross-functional teams across multiple time zones (25+ members)',
        'Created prioritization framework using AirTable for capacity and velocity planning',
        'Managed full product lifecycle from discovery to full-stack engineering'
      ]
    }
  ])
  return { experiences }
}
