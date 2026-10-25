export interface Project {
  name: string;
  roleTag: string;
  description: string;
  tags: string[];
  repoUrl: string | null;
  demoUrl: string | null;
  demoLabel: string;
  image?: string | null;
  images?: string[];
}

export const experience = [
  {
    role: "Desarrollador Full Stack & Cloud (Freelance)",
    company: "GFourmis (Colombia)",
    period: "Agosto 2026 — Presente",
    modality: "Remoto",
    bullets: [
      "Migré el sitio corporativo de WordPress a una arquitectura headless con Strapi 5 (CMS) y Astro (SSG), permitiendo que marketing publique blogs y noticias de forma autónoma, con plantillas de página asistidas por IA seleccionables desde el CMS.",
      "Diseñé y aprovisioné toda la infraestructura en AWS con CDK (TypeScript): ECS Fargate con ALB y autoscaling, Aurora PostgreSQL Serverless v2, S3 + CloudFront, ECR y Secrets Manager, separada por ambientes dev/prod.",
      "Implementé CI/CD completo (CodePipeline/CodeBuild con rollback automático y GitHub Actions con OIDC) y automaticé la publicación: un cambio en Strapi dispara una Lambda que reconstruye y despliega el sitio sin intervención manual.",
    ],
    tags: ["Strapi 5", "Astro", "AWS CDK", "ECS Fargate", "Aurora PostgreSQL", "GitHub Actions"],
  },
  {
    role: "Backend & Systems Engineer",
    company: "Kickoff Advertising (Estados Unidos)",
    period: "Mayo 2026 — Agosto 2026",
    modality: "Remoto",
    bullets: [
      "Asumí un sistema de lead routing fintech en estado crítico y lideré una reestructuración integral del 90% de la plataforma, pasando de 1 a 3 partners y de 1 a 4 lenders activos en producción.",      "Migré la arquitectura de subasta de leads a un waterfall round-robin con ventana exclusiva por lender y encolamiento de leads rechazados hacia un canal SMS externo.",
      "Construí desde cero el Waterfall Validator, un CRM interno en React/TypeScript con visualización en tiempo real del flujo de cada lead.",
    ],
    tags: ["Python","FastAPI", "MongoDB", "React", "TypeScript"],
  },
  {
    role: "Desarrollador Full Stack",
    company: "NiomSolutions (España)",
    period: "Septiembre 2025 — Mayo 2026",
    modality: "Remoto",
    prominent: true,
    bullets: [
      "Diseñé y optimicé el algoritmo de ruteo logístico para una empresa de transporte en España, integrando OR-Tools y OpenRouteService con 97% de eficiencia.",
      "Construí el dashboard en React/Next.js: visualización de rutas, gestión de flota con GPS en tiempo real (Wialon) y recepción de pedidos vía WebHooks.",
      "Entregué landing pages y sitios estáticos para clientes internacionales desde diseños en Figma, en producción con Next.js y Tailwind CSS.",
    ],
    tags: ["React", "Next.js", "Python", "FastAPI", "SQL","PostgreSQL","OR-Tools", "OpenRouteService", "Tailwind CSS",],
  },
  
];

export const projects: Project[] = [
  {
  name: "Pipeline AWS — GFourmis",
  roleTag: "Proyecto personal",
  description:
    "Pipeline serverless en Python para análisis de ventas y predicción financiera: S3, Lambda, SQS, Step Functions, Glue y generación de predicciones en lenguaje natural con Amazon Bedrock.",
  tags: ["Python", "AWS Lambda", "S3", "Step Functions", "Glue", "Bedrock"],
  repoUrl: null,
  demoUrl: null,
  demoLabel: "Privado",
  image: '/pipeline/pipeline-cover.jpg',
  },
  {
    name: "CLIA — Climate Intelligence & Analytics",
    roleTag: "Proyecto personal",
    description:
      "Pipeline ETL con ingesta automatizada desde 3 APIs meteorológicas para 120+ ciudades, forecasting con Prophet y análisis de riesgo agrícola en lenguaje natural vía Claude.",
    tags: ["React/Vite", "TypeScript", "Python/FastAPI", "Docker", "PostgreSQL", "Claude API"],
    repoUrl: null,
    demoUrl: "https://www.loom.com/share/a094c6e34e2b46b19a12ebfa6a9be54d",
    demoLabel: "Demo",
    image: '/clia/clia-cover.jpg',
    images: [
      '/clia/clia-empty.jpg',
      '/clia/clia-settings.jpg',
      '/clia/clia-all.jpg',
      '/clia/clia-LA.jpg',
      '/clia/clia-santiago.jpg',
      '/clia/clia-cartagena.jpg',
    ],
  },
  {
    name: "Waterfall Validator",
    roleTag: "CRM interno · Kickoff Advertising",
    description:
      "Módulo construido desde cero para visualizar en tiempo real el flujo de cada lead a través del waterfall: filtros avanzados, estado por etapa y switch de leads ganados.",
    tags: ["React/Nextjs", "TypeScript", "Python/FastAPI", "MongoDB"],
    repoUrl: null,
    demoUrl: null,
    demoLabel: "Privado",
    image: '/waterfall/waterfall-cover.jpg',
    images: [
      '/waterfall/waterfall.jpg',
      '/waterfall/waterfall-detail.jpg',
    ],
  },
];

export const skillCategories = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Astro", "TypeScript", "JavaScript", "Tailwind CSS", "React Native", "Figma"],  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs", "WebSockets", "WebHooks", "Strapi", "Pytest"],  },
  {
    label: "Datos",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Pandas", "NumPy", "ETL"],
  },
  {
    label: "Infraestructura & otros",
    items: ["Docker", "AWS", "AWS CDK", "Google Cloud", "Git / GitHub", "GitHub Actions", "CI/CD", "Linux / SSH", "OR-Tools", "Claude Code"],  },
];

export const featuredSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Git / GitHub",
  "Claude Code",
];

export const navSections = [
  { id: "hero", num: "01", name: "Inicio" },
  { id: "experience", num: "02", name: "Experiencia" },
  { id: "projects", num: "03", name: "Proyectos" },
  { id: "skills", num: "04", name: "Habilidades" },
  { id: "about", num: "05", name: "Sobre mí" },
  { id: "contact", num: "06", name: "Contacto" },
];
