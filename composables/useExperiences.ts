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
      title: 'Technical Product Manager',
      company: 'OneSynergee - Los Angeles, California, United States',
      description: 'Directing technical strategy for an international climate-focused program while elevating agile delivery standards across product engineering pods.',
      skills: ['Technical Strategy', 'Program Management', 'Market Research', 'Agile Coaching', 'Backlog Management', 'Sprint Planning', 'Roadmapping', 'Asana', 'Product Discovery', 'Cross-functional Leadership'],
      achievements: [
        'Directing technical strategy and delivery standards for an international, climate-focused product engineering program aligned with program goals and agile best practices',
        'Implementing structured agile workflows across cross-functional pods, guiding pod leads in backlog management, sprint planning, roadmapping, and progress tracking and prioritization using tools like Jira, Asana, and GitHub',
        'Defining program goals into actionable technical tasks for 0-1 product development, facilitating product discovery and technical problem solving within Build and Scale teams while supporting business case validation'
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
