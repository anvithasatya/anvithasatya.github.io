import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anvitha Reddy Thummalapally — Data Science & Analytics" },
      {
        name: "description",
        content:
          "Portfolio of Anvitha Reddy Thummalapally: data science, analytics, machine learning, forecasting, and product-oriented problem solving.",
      },
      { property: "og:title", content: "Anvitha Reddy — Data Science & Analytics" },
      {
        property: "og:description",
        content: "Turning complex data into clear insights, thoughtful models, and useful outcomes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

const projects = [
  {
    number: "01",
    title: "IRA Forecasting & Public Health Surveillance",
    category: "Forecasting",
    categories: ["Forecasting", "Machine Learning", "Research"],
    problem: "How can historical disease data help anticipate seasonal and regional patterns before they become a larger public-health burden?",
    summary: "An end-to-end forecasting pipeline built on more than 20 years of epidemiological data across Peru.",
    stats: ["20+ years", "3 regions", "94% R²"],
    tools: "Python · Pandas · scikit-learn · Time Series · Deep Learning · Tableau",
    steps: ["Temporal and seasonal analysis", "Lag features and rolling statistics", "Statistical, ML, and deep learning models", "Rolling-window validation", "Regional and national projections"],
    insight: "The strongest work was not a single model—it was a repeatable system for comparing methods across regions and communicating uncertainty for planning.",
    visual: "health",
    github: "https://github.com/anvithasatya/IRA-HealthcareAnalytics",
  },
  {
    number: "02",
    title: "Energy Consumption Forecasting in Steel Manufacturing",
    category: "Analytics",
    categories: ["Analytics", "Machine Learning"],
    problem: "How can industrial energy data reveal what drives consumption and where operational behavior becomes unusual?",
    summary: "A combined forecasting, clustering, and anomaly-detection workflow for steel-production energy use.",
    stats: ["Forecasting", "Clustering", "Anomaly Detection"],
    tools: "Python · Pandas · Regression · Clustering · Anomaly Detection · Data Mining",
    steps: ["Industrial data preparation", "Consumption pattern exploration", "Regression forecasting", "Operational clustering", "Anomaly detection and interpretation"],
    insight: "Combining multiple analytical lenses made the result more useful: forecast what comes next, discover operating modes, then detect exceptions.",
    visual: "energy",
  },
  {
    number: "03",
    title: "Motor Vehicle Collision Severity Prediction",
    category: "Machine Learning",
    categories: ["Machine Learning", "Research"],
    problem: "Which traffic, roadway, and environmental factors are most associated with severe collisions?",
    summary: "A classification study designed to support clearer, data-informed road-safety analysis.",
    stats: ["Classification", "Feature engineering", "Road safety"],
    tools: "Python · Pandas · scikit-learn · Classification · Feature Engineering · EDA",
    steps: ["Data preprocessing", "Exploratory analysis", "Feature engineering", "Model comparison", "Evaluation and factor interpretation"],
    insight: "Prediction was only part of the value. Interpreting the features turned model performance into evidence that could inform safety decisions.",
    visual: "roads",
  },
];

const experiences = [
  {
    dates: "JAN 2026 — MAY 2026",
    role: "Research Assistant",
    focus: "Data Analytics & Forecasting",
    company: "University of Oklahoma · Norman, Oklahoma",
    metric: "94% R²",
    points: [
      "Built an end-to-end forecasting pipeline using 20+ years of epidemiological data across high-burden regions in Peru.",
      "Compared statistical, machine learning, and deep learning methods across three regions.",
      "Generated regional and national projections for disease surveillance and healthcare planning.",
    ],
  },
  {
    dates: "AUG 2024 — MAY 2026",
    role: "IT Services Specialist",
    focus: "Technical Operations",
    company: "University of Oklahoma · Norman, Oklahoma",
    metric: "70–80% resolved",
    points: [
      "Diagnosed and resolved the majority of Tier 1 technical incidents.",
      "Analyzed high-volume requests to identify recurring issues and usage patterns.",
      "Documented service trends and coordinated resolutions around urgency and impact.",
    ],
  },
  {
    dates: "JAN 2024 — JUN 2024",
    role: "Data Scientist",
    focus: "Customer & Marketing Analytics",
    company: "GoPunch · Hyderabad, India",
    metric: "+15% precision",
    points: [
      "Analyzed customer and marketing data to identify high-value segments and campaign patterns.",
      "Built predictive models and A/B tests to evaluate customer behavior.",
      "Developed performance dashboards for clearer data-driven decisions.",
    ],
  },
];

const skillGroups = [
  [
    "Data Science & Analytics",
    "EDA · Statistical Analysis · Predictive Modeling · Time Series Forecasting · A/B Testing · Experimentation",
  ],
  [
    "Machine Learning",
    "Supervised Learning · Unsupervised Learning · Feature Engineering · Model Evaluation & Tuning · NLP",
  ],
  [
    "Programming & Data",
    "Python · R · SQL · JavaScript · HTML/CSS · Pandas · NumPy · scikit-learn",
  ],
  [
    "Databases",
    "PostgreSQL · MySQL · SQLite · Data Cleaning · Data Transformation",
  ],
  [
    "Visualization & BI",
    "Tableau · Power BI · Excel · Matplotlib · Seaborn · Plotly",
  ],
  [
    "Tools & Development",
    "Git · GitHub · Jupyter · VS Code · Jira · Linux",
  ],
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Index() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("anvitha-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = saved ? saved === "dark" : prefersDark;
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("anvitha-theme", next ? "dark" : "light");
  };

  const filteredProjects = projects.filter((project) => filter === "All" || project.categories.includes(filter));

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-500">
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300 ${scrolled ? "border-border bg-background/90 py-1 backdrop-blur-xl" : "py-3"}`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 md:px-10 lg:px-16">
          <button className="font-display text-sm font-semibold uppercase text-foreground" onClick={() => scrollTo("home")} aria-label="Go to top">
            AR<span className="text-primary">.</span>
          </button>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="group relative font-mono text-[11px] uppercase text-muted-foreground transition-colors hover:text-foreground"><span>{item}</span><span className="absolute -bottom-2 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" /></button>)}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? "Use light mode" : "Use dark mode"}>{dark ? <Sun /> : <Moon />}</Button>
            <Button className="hidden sm:inline-flex" size="sm" onClick={() => scrollTo("contact")}>Let’s connect <ArrowDownRight /></Button>
            <Button className="lg:hidden" variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden">{navItems.map((item) => <button key={item} onClick={() => { scrollTo(item.toLowerCase()); setMenuOpen(false); }} className="block w-full border-b border-border py-3 text-left font-display text-xl">{item}</button>)}</nav>}
      </header>

      <main>
        <section id="home" className="editorial-grid relative flex min-h-[760px] scroll-mt-24 items-center overflow-hidden border-b border-border px-5 pb-16 pt-28 md:min-h-[820px] md:px-10 lg:h-[900px] lg:min-h-0 lg:px-16">
          <div className="pointer-events-none absolute inset-x-0 top-20 mx-auto hidden max-w-[1440px] justify-between px-2 font-mono text-[9px] uppercase text-muted-foreground/60 lg:flex">
            <span>Portfolio / 2026</span><span>27.9506° N · 82.4572° W</span>
          </div>
          <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 lg:grid-cols-[1.38fr_.62fr] lg:gap-20">
            <div className="relative z-10 reveal-up">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-50" /><span className="relative inline-flex size-2 rounded-full bg-primary" /></span>
                <span className="font-mono text-[9px] uppercase text-muted-foreground">Tampa, Florida · Open to opportunities</span>
              </div>
              <p className="mb-5 font-mono text-[10px] uppercase text-primary">Data Science · Analytics · Machine Learning · Forecasting</p>
              <h1 className="max-w-4xl font-display text-[clamp(3.25rem,6.2vw,6.8rem)] font-semibold leading-[.94] text-foreground">
                Turning data into <span className="italic text-primary">insights,</span> models, and things people can use.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-ink-soft md:text-lg">Data Science graduate with a Computer Science background, interested in solving real-world problems through data, experimentation, and thoughtful technology.</p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Button size="lg" className="rounded-full px-7" onClick={() => scrollTo("projects")}>View my work <a href="/Anvitha_Reddy_Resume.pdf" target="_blank" rel="noopener noreferrer"> <Button variant="outline" className="border-white bg-white text-primary hover:bg-white/90 hover:text-primary"> View Resume <ArrowUpRight className="ml-2 h-4 w-4" /> </Button> </a> <ArrowDownRight /></Button>
                <button onClick={() => scrollTo("about")} className="group inline-flex items-center gap-2 border-b border-foreground pb-1 font-mono text-[10px] uppercase text-foreground transition-colors hover:border-primary hover:text-primary">Read my story <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" /></button>
              </div>
              <div className="mt-12 flex items-center gap-5 border-t border-border pt-5 font-mono text-[9px] uppercase text-muted-foreground"><span>Research-led</span><span className="h-px w-8 bg-border" /><span>Product-minded</span><span className="h-px w-8 bg-border" /><span>Outcome-focused</span></div>
            </div>

            <div className="relative mx-auto w-full max-w-[410px] lg:mx-0">
              <div className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[1.5rem] border border-primary/30" />
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border bg-surface-raised shadow-[0_24px_80px_-38px_color-mix(in_oklab,var(--foreground)_38%,transparent)]">
                <img src="/profile.jpeg" alt="Anvitha Reddy" className="h-full w-full object-cover object-top"/>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-border bg-background/90 p-5 backdrop-blur-md"><div><p className="font-display text-xl font-semibold">Anvitha Reddy</p><p className="mt-1 font-mono text-[9px] uppercase text-muted-foreground">Data scientist / Analyst</p></div><span className="font-display text-4xl text-primary">AR</span></div>
              </div>
              <div className="absolute -bottom-7 -left-7 hidden max-w-[210px] rounded-2xl border border-border bg-background p-5 shadow-xl md:block">
                <p className="font-mono text-[9px] uppercase text-muted-foreground">Working across</p>
                <p className="mt-2 text-xs font-medium leading-5 text-foreground">Forecasting, machine learning, research & product analytics</p>
              </div>
              <div className="absolute -right-5 top-10 rounded-full border border-border bg-background p-3 shadow-lg"><BarChart3 className="size-5 text-primary" /></div>
            </div>
          </div>
          <button onClick={() => scrollTo("about")} className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[9px] uppercase text-muted-foreground lg:flex">Scroll to explore <ArrowDownRight className="size-3" /></button>
        </section>

        <section id="about" className="scroll-mt-24 px-5 py-24 md:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.52fr_1.48fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel index="01" title="About" />
              <div className="mt-12 hidden h-44 w-44 place-items-center rounded-full border border-border lg:grid">
                <div className="grid h-32 w-32 place-items-center rounded-full border border-primary/40 font-mono text-[9px] uppercase text-muted-foreground">Question<br />→ evidence<br />→ impact</div>
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase text-primary">Curiosity, translated into useful work</p>
              <h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.06] md:text-6xl">I look for the story hiding inside a complex problem.</h2>
              <div className="mt-12 grid gap-x-12 gap-y-8 border-t border-border pt-8 text-base leading-8 text-ink-soft md:grid-cols-2 md:text-lg">
                <p>Hi, I’m Anvitha Reddy, a Data Science graduate with a background in Computer Science and a curiosity for how data, technology, and products come together to solve real problems.</p>
                <p>My work spans data analytics, machine learning, research, and technology support. I enjoy taking messy or complex problems, finding the story within the data, and turning that into something useful—whether that’s a predictive model, a dashboard, an analysis, or a better way of doing things.</p>
                <p>I’m currently exploring opportunities across Data Science, Analytics, Machine Learning, and product-focused roles. Beyond a job title, I’m interested in building things people actually use and growing into work where I can combine analytical thinking with creativity, ownership, and problem-solving.</p>
                <p>This portfolio is a collection of the projects, experiences, and ideas I’ve worked on along the way.</p>
              </div>
              <blockquote className="my-20 max-w-5xl font-display text-4xl leading-[1.12] md:text-6xl">“I care about the <span className="border-b-2 border-primary text-primary">question behind the data</span>, not just the model that comes after it.”</blockquote>
              <div className="grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">{[["Data", "Patterns and meaning in complex datasets."], ["Technology", "Analytical solutions with modern tools."], ["Research", "Structured experimentation on real problems."], ["Product", "How insights become genuinely useful."]].map(([title, copy], index) => <div key={title} className="group border-b border-border p-6 transition-colors hover:bg-surface sm:odd:border-r lg:border-b-0 lg:not-last:border-r"><div className="flex items-center justify-between"><span className="font-mono text-[10px] text-primary">0{index + 1}</span><ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></div><h3 className="mt-10 font-display text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section id="approach" className="editorial-grid scroll-mt-24 bg-foreground px-5 py-24 text-background md:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-2"><div><p className="font-mono text-[10px] uppercase text-primary">02 / Process</p><h2 className="mt-5 font-display text-4xl font-semibold md:text-6xl">How I approach problems</h2></div><p className="max-w-xl self-end text-lg leading-8 text-background/70">The tool comes after the question. My process keeps the context, evidence, and end user visible at every step.</p></div>
            <div className="mt-16 grid border-l border-t border-background/20 md:grid-cols-5">{[["Understand", "Start with the problem, context, and question."], ["Explore", "Clean the data, investigate patterns, and hear what it is actually saying."], ["Build", "Choose methods, models, experiments, or visuals that fit."], ["Evaluate", "Test assumptions, compare approaches, and name limitations."], ["Communicate", "Turn findings into insight someone can actually use."]].map(([title, copy], index) => <div key={title} className="group relative flex min-h-72 flex-col border-b border-r border-background/20 p-6 transition-colors hover:bg-background/10 md:min-h-96"><span className="font-mono text-[10px] text-primary">0{index + 1} / 05</span><div className="mt-auto"><span className="mb-5 block h-px w-8 bg-primary transition-all duration-500 group-hover:w-full" /><h3 className="font-display text-2xl font-medium">{title}</h3><p className="mt-4 text-sm leading-6 text-background/65">{copy}</p></div></div>)}</div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 px-5 py-24 md:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1440px]"><div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]"><SectionHeader index="03" eyebrow="Experience" title="Work shaped by real questions." /><p className="max-w-lg self-end text-base leading-7 text-ink-soft">Research, technical operations, and customer analytics have taught me to move between careful investigation and practical delivery.</p></div>
            <div className="relative mt-16 border-t border-border before:absolute before:bottom-0 before:left-[7px] before:top-0 before:w-px before:bg-border lg:before:hidden">{experiences.map((experience, index) => <article key={experience.role} className="grid gap-7 border-b border-border py-10 pl-9 transition-colors hover:bg-surface lg:grid-cols-[.55fr_.9fr_1.55fr] lg:px-6">
              <div className="relative"><span className="absolute -left-[37px] top-1 size-3 rounded-full border-2 border-background bg-primary lg:static lg:inline-block lg:size-auto lg:rounded-none lg:border-0 lg:bg-transparent font-mono text-[10px] text-primary">0{index + 1}</span><p className="mt-4 font-mono text-[10px] uppercase text-muted-foreground">{experience.dates}</p><div className="mt-7 inline-block border border-primary px-3 py-2 font-mono text-xs text-primary">{experience.metric}</div></div>
              <div><h3 className="font-display text-3xl font-semibold">{experience.role}</h3><p className="mt-1 text-primary">{experience.focus}</p><p className="mt-5 text-sm text-muted-foreground">{experience.company}</p></div>
              <ul className="space-y-4 text-sm leading-6 text-ink-soft">{experience.points.map((point) => <li key={point} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-primary" />{point}</li>)}</ul>
            </article>)}</div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 bg-surface px-5 py-24 md:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1440px]"><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><SectionHeader index="04" eyebrow="Selected work" title="Projects built around the why." /><p className="max-w-sm font-mono text-[10px] uppercase leading-5 text-muted-foreground">Problem → data → approach → evaluation → insight → impact</p></div>
            <div className="mt-12 flex flex-wrap gap-2 border-y border-border py-4">{["All", "Analytics", "Machine Learning", "Forecasting", "Research"].map((item) => <Button key={item} variant={filter === item ? "default" : "ghost"} size="sm" onClick={() => setFilter(item)}>{item}</Button>)}</div>
            <div className="mt-10 space-y-10">{filteredProjects.map((project, projectIndex) => <article key={project.number} className="overflow-hidden border border-border bg-background shadow-[0_20px_70px_-55px_color-mix(in_oklab,var(--foreground)_45%,transparent)]">
              <div className={`grid lg:grid-cols-2 ${projectIndex % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <ProjectVisual type={project.visual} number={project.number} />
                 <div className="flex flex-col p-7 md:p-10 lg:p-12"><div className="flex items-start justify-between gap-4"><span className="font-mono text-[10px] uppercase text-primary">Project / {project.number}</span><span className="font-mono text-[10px] uppercase text-muted-foreground">{project.category}</span></div><h3 className="mt-10 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-5xl">{project.title}</h3><p className="mt-6 max-w-xl text-base leading-7 text-ink-soft">{project.summary}</p><div className="mt-8 grid grid-cols-3 border-y border-border">{project.stats.map((stat) => <div key={stat} className="py-5 text-center font-mono text-[10px] text-primary not-last:border-r not-last:border-border md:text-xs">{stat}</div>)}</div><div className="mt-auto flex items-end justify-between gap-4 pt-8"><Button variant="outline" onClick={() => setExpanded(expanded === project.number ? null : project.number)} aria-expanded={expanded === project.number}>Explore case study <ChevronDown className={`transition-transform ${expanded === project.number ? "rotate-180" : ""}`} /></Button><span className="hidden font-display text-6xl text-border md:block">{project.number}</span></div></div>
              </div>
              {expanded === project.number && <div className="grid gap-8 border-t border-border bg-surface p-7 md:grid-cols-3 md:p-10 lg:p-12"><div><p className="font-mono text-[10px] uppercase text-primary">Problem</p><p className="mt-4 text-sm leading-7 text-ink-soft">{project.problem}</p></div><div><p className="font-mono text-[10px] uppercase text-primary">Data → Approach → Evaluation</p><ol className="mt-4 space-y-3">{project.steps.map((step, index) => <li key={step} className="flex gap-3 text-sm text-ink-soft"><span className="font-mono text-[10px] text-primary">0{index + 1}</span>{step}</li>)}</ol></div><div><p className="font-mono text-[10px] uppercase text-primary">Insight / Impact</p><p className="mt-4 text-sm leading-7 text-ink-soft">{project.insight}</p><p className="mt-7 border-t border-border pt-5 font-mono text-[10px] leading-5 text-muted-foreground">{project.tools}</p>{"github" in project && project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase text-primary transition-opacity hover:opacity-60"
  >
    <Github className="size-4" />
    View Repository
    <ArrowUpRight className="size-3" />
  </a>
)}</div></div>}
            </article>)}</div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 px-5 py-24 md:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1440px]"><div className="grid gap-8 lg:grid-cols-2"><SectionHeader index="05" eyebrow="Capabilities" title="Tools, in context." /><p className="max-w-lg self-end text-base leading-7 text-ink-soft">No percentage bars—just a practical toolkit shaped by the questions I have worked through.</p></div>
            <div className="mt-16 border-t border-border">{skillGroups.map(([title, items], index) => <div key={title} className="group grid gap-5 border-b border-border py-7 transition-colors hover:bg-surface md:grid-cols-[64px_.65fr_1.35fr_auto] md:items-center md:px-5"><span className="font-mono text-[10px] text-primary">0{index + 1}</span><h3 className="font-display text-xl font-semibold">{title}</h3><p className="text-sm leading-7 text-muted-foreground transition-colors group-hover:text-ink-soft">{items}</p><ArrowUpRight className="hidden size-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:block" /></div>)}</div>
          </div>
        </section>

        <section className="bg-surface px-5 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-[1440px]"><SectionHeader index="06" eyebrow="Focus areas" title="What I work on." />
             <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{[
              [BarChart3, "Data Analytics & Insights", "Exploratory analysis, statistics, transformation, pattern discovery, and actionable insights."],
              [Database, "Machine Learning & Predictive Modeling", "Classification, regression, feature engineering, development, evaluation, and experimentation."],
              [ArrowRight, "Time Series & Forecasting", "Temporal analysis, trends, and statistical or machine-learning forecasting on real datasets."],
              [Search, "Data Visualization & Dashboards", "Tableau, Power BI, and interactive visualizations that make complexity clear."],
              [BriefcaseBusiness, "Research & Applied Data Science", "Research-driven workflows, public datasets, and real-world problem solving."],
              [Github, "Product & Business Analytics", "A/B testing, user behavior, experimentation, and data-informed product decisions."],
             ].map(([Icon, title, copy], index) => { const FocusIcon = Icon as typeof BarChart3; return <div key={title as string} className={`group bg-background p-7 transition-colors hover:bg-surface md:p-9 ${index === 0 || index === 5 ? "lg:col-span-2" : ""}`}><div className="flex items-center justify-between"><span className="grid size-10 place-items-center border border-border transition-colors group-hover:border-primary"><FocusIcon className="size-4 text-primary" /></span><span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span></div><h3 className="mt-14 max-w-sm font-display text-2xl font-semibold">{title as string}</h3><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{copy as string}</p></div>; })}</div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[.9fr_1.1fr]">
            <div><SectionLabel index="07" title="Education" /><div className="mt-10 space-y-10"><Education school="University of Oklahoma" degree="Master of Science in Data Science & Analytics" dates="Aug 2024 — May 2026" location="Norman, Oklahoma" metric="GPA 4.0 / 4.0" /><Education school="CVR College of Engineering" degree="Bachelor of Technology in Computer Science & Engineering" dates="Dec 2020 — Apr 2024" location="Hyderabad, India" /></div></div>
            <div className="editorial-grid border border-border bg-surface p-8 md:p-12"><SectionLabel index="08" title="Current direction" /><h2 className="mt-16 max-w-xl font-display text-4xl font-semibold md:text-6xl">What I’m exploring next<span className="text-primary">.</span></h2><p className="mt-8 max-w-xl text-lg leading-8 text-ink-soft">I’m interested in the intersection of data, technology, and products—especially work where analytical thinking can directly influence what gets built and how it gets used.</p><div className="mt-12 flex flex-wrap gap-2">{["Data Science", "Machine Learning", "Analytics", "Product Analytics", "Technical Products"].map((item) => <span key={item} className="bg-background px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground ring-1 ring-border">{item}</span>)}</div></div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-primary px-5 py-24 text-primary-foreground md:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-[1440px]"><div className="flex items-center justify-between"><p className="font-mono text-[10px] uppercase opacity-75">09 / Contact</p><span className="hidden font-mono text-[9px] uppercase opacity-60 md:block">Tampa · Florida · USA</span></div><div className="mt-12 grid gap-16 lg:grid-cols-[1.35fr_.65fr]"><div><h2 className="max-w-5xl font-display text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-8xl">Have a problem<br />worth <span className="italic">exploring?</span></h2><p className="mt-8 max-w-xl text-lg leading-8 opacity-80">I’m always interested in interesting problems, thoughtful products, and opportunities to turn data into something useful.</p></div><div className="self-end border-t border-primary-foreground/30 pt-6"><ContactRow label="Email" value="anvithareddyth@gmail.com" href="mailto:anvithareddyth@gmail.com" icon={<Mail />} /><ContactRow label="LinkedIn" value="anvithareddyt" href="https://www.linkedin.com/in/anvithareddyt" icon={<Linkedin />} /><ContactRow label="GitHub" value="anvithasatya" href="https://github.com/anvithasatya" icon={<Github />} /><div className="flex items-center gap-4 py-5"><MapPin className="size-4" /><div><p className="font-mono text-[9px] uppercase opacity-65">Based in</p><p className="text-sm">Tampa, Florida, United States</p></div></div></div></div><div className="mt-24 flex items-center justify-between border-t border-primary-foreground/30 pt-5 font-mono text-[9px] uppercase opacity-70"><span>© 2026 Anvitha Reddy</span><button onClick={() => scrollTo("home")} className="transition-opacity hover:opacity-100">Back to top ↑</button></div></div>
        </section>
      </main>
    </div>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) { return <div className="font-mono text-[10px] uppercase"><span className="text-primary">{index}</span><span className="mx-3 text-border">/</span><span className="text-muted-foreground">{title}</span></div>; }
function SectionHeader({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) { return <div><SectionLabel index={index} title={eyebrow} /><h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">{title}</h2></div>; }
function Education({ school, degree, dates, location, metric }: { school: string; degree: string; dates: string; location: string; metric?: string }) { return <article className="border-t border-border pt-5"><div className="flex flex-wrap justify-between gap-3"><h3 className="font-display text-2xl font-semibold">{school}</h3>{metric && <span className="border border-primary px-3 py-1 font-mono text-xs text-primary">{metric}</span>}</div><p className="mt-2 text-sm text-ink-soft">{degree}</p><div className="mt-5 flex flex-wrap gap-4 font-mono text-[9px] uppercase text-muted-foreground"><span>{dates}</span><span>{location}</span></div></article>; }
function ContactRow({ label, value, href, icon }: { label: string; value: string; href: string; icon: React.ReactNode }) { return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 border-b border-primary-foreground/30 py-4">{icon}<div><p className="font-mono text-[9px] uppercase opacity-65">{label}</p><p className="break-all text-sm">{value}</p></div><ArrowRight className="ml-auto transition-transform group-hover:translate-x-2" /></a>; }

function DataPortrait() {
  return <div className="relative h-full w-full overflow-hidden bg-surface"><div className="absolute inset-0 editorial-grid opacity-45" /><div className="absolute left-7 right-7 top-7 flex items-center justify-between border-t border-border pt-3 font-mono text-[8px] uppercase text-muted-foreground"><span>Profile / 001</span><span>Data + products</span></div><svg aria-hidden="true" viewBox="0 0 400 500" className="absolute inset-0 h-full w-full text-primary"><circle cx="200" cy="225" r="118" fill="none" stroke="currentColor" opacity=".12"/><circle cx="200" cy="225" r="86" fill="none" stroke="currentColor" opacity=".12"/><path d="M-20 390 C 80 350, 80 180, 190 250 S 310 100, 430 120" fill="none" stroke="currentColor" strokeWidth="2" className="data-path"/><path d="M-20 420 C 90 350, 130 410, 220 300 S 320 260, 430 170" fill="none" stroke="currentColor" strokeWidth="1" opacity=".45"/><circle cx="190" cy="250" r="5" fill="currentColor" className="data-point"/><circle cx="310" cy="160" r="4" fill="currentColor" className="data-point"/><text x="55" y="250" fill="currentColor" fontSize="128" fontFamily="Syne" fontWeight="600" opacity=".9">AR</text><text x="98" y="280" fill="currentColor" fontSize="9" fontFamily="DM Mono">DATA / QUESTIONS / IMPACT</text></svg><div className="absolute bottom-24 right-5 font-mono text-[8px] uppercase text-muted-foreground [writing-mode:vertical-rl]">Portrait ready / 2026</div></div>;
}

function ProjectVisual({ type, number }: { type: string; number: string }) {
  return <div className="group relative aspect-[4/3] overflow-hidden bg-foreground text-background lg:aspect-auto lg:min-h-[510px]"><div className="absolute inset-0 editorial-grid opacity-15" /><span className="absolute left-6 top-6 z-10 font-mono text-[10px] text-primary">VISUAL STUDY / {number}</span>{type === "health" && <svg viewBox="0 0 700 520" className="absolute inset-0 h-full w-full"><path d="M30 390 C100 380 105 220 160 270S240 410 290 290 370 120 430 250s80 170 110 40 80-100 140-180" fill="none" stroke="currentColor" opacity=".25"/><path d="M30 410 C100 320 140 350 190 300S250 220 320 260 390 350 470 240 590 170 680 220" fill="none" stroke="var(--signal)" strokeWidth="3" className="data-path"/><g fill="var(--signal)">{[130,270,410,550].map((x,i)=><circle key={x} cx={x} cy={[333,243,326,204][i]} r="5"/>)}</g><text x="48" y="475" fill="currentColor" opacity=".55" fontSize="12" fontFamily="DM Mono">2004</text><text x="610" y="475" fill="currentColor" opacity=".55" fontSize="12" fontFamily="DM Mono">2026</text></svg>}{type === "energy" && <div className="absolute inset-12 flex items-end gap-3">{["h-1/4","h-1/2","h-2/3","h-1/3","h-4/5","h-3/5","h-full","h-2/5","h-3/4"].map((height,index)=><div key={index} className={`flex-1 ${height} border-t border-primary bg-primary/20 transition-all duration-500 group-hover:bg-primary/40`} />)}<span className="absolute bottom-0 left-0 font-mono text-[10px] text-background/50">CONSUMPTION / OPERATING CYCLES</span></div>}{type === "roads" && <svg viewBox="0 0 700 520" className="absolute inset-0 h-full w-full"><path d="M40 500 C170 360 120 260 320 170 S510 160 680 20" fill="none" stroke="currentColor" strokeWidth="46" opacity=".12"/><path d="M40 500 C170 360 120 260 320 170 S510 160 680 20" fill="none" stroke="var(--signal)" strokeWidth="2" strokeDasharray="14 15"/><path d="M0 150 C180 190 300 400 700 360" fill="none" stroke="currentColor" strokeWidth="28" opacity=".08"/><g fill="var(--signal)"><circle cx="160" cy="355" r="8"/><circle cx="318" cy="171" r="8"/><circle cx="508" cy="130" r="8"/></g><text x="52" y="92" fill="currentColor" fontFamily="DM Mono" fontSize="12" opacity=".55">SEVERITY FACTORS / ROAD CONDITIONS / ENVIRONMENT</text></svg>}</div>;
}
