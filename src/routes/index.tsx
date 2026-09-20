import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
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
  },
  {
    number: "02",
    title: "Energy Consumption Forecasting in Steel Manufacturing",
    category: "Analytics",
    categories: ["Analytics", "Machine Learning"],
    problem: "How can industrial energy data reveal what drives consumption and where operational behavior becomes unusual?",
    summary: "A combined forecasting, clustering, and anomaly-detection workflow for steel-production energy use.",
    stats: ["Forecast", "Discover", "Detect"],
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
  ["Data Science & Analytics", "EDA · Statistical analysis · Predictive modeling · Forecasting · A/B testing · Experimentation"],
  ["Programming & Data", "Python · SQL · R · C · Pandas · NumPy · scikit-learn · TensorFlow"],
  ["Databases & Processing", "MySQL · PostgreSQL · Data cleaning · Transformation · Feature engineering"],
  ["Visualization & BI", "Tableau · Power BI · Matplotlib · Seaborn · Plotly"],
  ["Cloud & Big Data", "AWS · Apache Spark · Hadoop"],
  ["Tools", "Git · GitHub · Jupyter · VS Code · Jira · Trello"],
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
        <section id="home" className="editorial-grid relative flex min-h-[94vh] scroll-mt-24 items-end border-b border-border px-5 pb-12 pt-32 md:px-10 md:pb-16 lg:px-16">
          <div className="mx-auto grid w-full max-w-[1440px] items-end gap-10 lg:grid-cols-[1.45fr_.55fr]">
            <div className="relative z-10">
              <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase text-muted-foreground">
                <span className="text-primary">Portfolio / 2026</span><span>Data science + product thinking</span><span className="flex items-center gap-1.5"><MapPin className="size-3" /> Tampa, Florida</span>
              </div>
              <h1 className="max-w-5xl font-display text-[clamp(3.2rem,7.5vw,7.8rem)] font-semibold leading-[.93] text-foreground">
                Turning data into <span className="text-primary">insights,</span> models, and things people can use.
              </h1>
              <div className="mt-10 grid max-w-4xl gap-8 border-t border-border pt-6 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="mb-3 font-mono text-[11px] uppercase text-primary">Data Science · Analytics · ML · Forecasting</p>
                  <p className="max-w-2xl text-base leading-7 text-ink-soft md:text-lg">Data Science graduate with a Computer Science background, interested in solving real-world problems through data, experimentation, and thoughtful technology.</p>
                </div>
                <div className="flex gap-3"><Button size="lg" onClick={() => scrollTo("projects")}>View my work <ArrowDownRight /></Button><Button variant="outline" size="lg" onClick={() => scrollTo("contact")}>Let’s connect</Button></div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[390px] lg:mx-0">
              <div className="absolute -left-5 -top-5 z-10 bg-primary px-3 py-2 font-mono text-[10px] uppercase text-primary-foreground">Open to opportunities</div>
              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
                <DataPortrait />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-background/90 p-4 backdrop-blur-sm"><div><p className="font-display text-lg font-semibold">Anvitha Reddy</p><p className="font-mono text-[9px] uppercase text-muted-foreground">Data scientist / Analyst</p></div><span className="font-display text-4xl text-primary">AR</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 px-5 py-24 md:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.55fr_1.45fr]">
            <SectionLabel index="01" title="About" />
            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">A little about me</h2>
              <div className="mt-10 grid gap-8 text-base leading-8 text-ink-soft md:grid-cols-2 md:text-lg">
                <p>Hi, I’m Anvitha Reddy, a Data Science graduate with a background in Computer Science and a curiosity for how data, technology, and products come together to solve real problems.</p>
                <p>My work spans data analytics, machine learning, research, and technology support. I enjoy taking messy or complex problems, finding the story within the data, and turning that into something useful—whether that’s a predictive model, a dashboard, an analysis, or a better way of doing things.</p>
                <p>I’m currently exploring opportunities across Data Science, Analytics, Machine Learning, and product-focused roles. Beyond a job title, I’m interested in building things people actually use and growing into work where I can combine analytical thinking with creativity, ownership, and problem-solving.</p>
                <p>This portfolio is a collection of the projects, experiences, and ideas I’ve worked on along the way.</p>
              </div>
              <blockquote className="my-16 border-l-2 border-primary pl-6 font-display text-3xl leading-snug md:text-5xl">“I care about the question behind the data, <span className="text-primary">not just the model</span> that comes after it.”</blockquote>
              <div className="grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">{[["Data", "Patterns and meaning in complex datasets."], ["Technology", "Analytical solutions with modern tools."], ["Research", "Structured experimentation on real problems."], ["Product", "How insights become genuinely useful."]].map(([title, copy], index) => <div key={title} className="border-b border-border p-6 transition-colors hover:bg-surface sm:odd:border-r lg:border-b-0 lg:not-last:border-r"><span className="font-mono text-[10px] text-primary">0{index + 1}</span><h3 className="mt-8 font-display text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section id="approach" className="scroll-mt-24 bg-foreground px-5 py-24 text-background md:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-2"><div><p className="font-mono text-[10px] uppercase text-primary">02 / Process</p><h2 className="mt-5 font-display text-4xl font-semibold md:text-6xl">How I approach problems</h2></div><p className="max-w-xl self-end text-lg leading-8 text-background/70">The tool comes after the question. My process keeps the context, evidence, and end user visible at every step.</p></div>
            <div className="mt-16 border-t border-background/20">{[["Understand", "Start with the problem, context, and question."], ["Explore", "Clean the data, investigate patterns, and hear what it is actually saying."], ["Build", "Choose analytical methods, models, experiments, or visuals that fit the problem."], ["Evaluate", "Test assumptions, compare approaches, validate results, and name limitations."], ["Communicate", "Turn technical findings into clear insights someone can actually use."]].map(([title, copy], index) => <div key={title} className="group grid gap-4 border-b border-background/20 py-7 transition-all hover:bg-background/5 md:grid-cols-[80px_1fr_1.2fr_auto] md:items-center md:px-4"><span className="font-mono text-xs text-primary">0{index + 1} / 05</span><h3 className="font-display text-2xl font-medium md:text-3xl">{title}</h3><p className="text-sm leading-6 text-background/65">{copy}</p><ArrowRight className="hidden transition-transform group-hover:translate-x-2 md:block" /></div>)}</div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 px-5 py-24 md:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1440px]"><SectionHeader index="03" eyebrow="Experience" title="Work shaped by real questions." />
            <div className="mt-16 border-t border-border">{experiences.map((experience, index) => <article key={experience.role} className="grid gap-7 border-b border-border py-10 lg:grid-cols-[.55fr_.9fr_1.55fr]">
              <div><span className="font-mono text-[10px] text-primary">0{index + 1}</span><p className="mt-4 font-mono text-[10px] uppercase text-muted-foreground">{experience.dates}</p><div className="mt-7 inline-block border border-primary px-3 py-2 font-mono text-xs text-primary">{experience.metric}</div></div>
              <div><h3 className="font-display text-3xl font-semibold">{experience.role}</h3><p className="mt-1 text-primary">{experience.focus}</p><p className="mt-5 text-sm text-muted-foreground">{experience.company}</p></div>
              <ul className="space-y-4 text-sm leading-6 text-ink-soft">{experience.points.map((point) => <li key={point} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-primary" />{point}</li>)}</ul>
            </article>)}</div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 bg-surface px-5 py-24 md:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1440px]"><SectionHeader index="04" eyebrow="Selected work" title="Projects built around the why." />
            <div className="mt-10 flex flex-wrap gap-2">{["All", "Analytics", "Machine Learning", "Forecasting", "Research"].map((item) => <Button key={item} variant={filter === item ? "default" : "outline"} size="sm" onClick={() => setFilter(item)}>{item}</Button>)}</div>
            <div className="mt-10 space-y-8">{filteredProjects.map((project) => <article key={project.number} className="overflow-hidden border border-border bg-background">
              <div className="grid lg:grid-cols-2">
                <ProjectVisual type={project.visual} number={project.number} />
                <div className="flex flex-col p-7 md:p-10 lg:p-12"><div className="flex items-start justify-between gap-4"><span className="font-mono text-[10px] uppercase text-primary">Project / {project.number}</span><span className="font-mono text-[10px] uppercase text-muted-foreground">{project.category}</span></div><h3 className="mt-10 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-5xl">{project.title}</h3><p className="mt-6 max-w-xl text-base leading-7 text-ink-soft">{project.summary}</p><div className="mt-8 grid grid-cols-3 border-y border-border">{project.stats.map((stat) => <div key={stat} className="py-5 text-center font-mono text-[10px] text-primary not-last:border-r not-last:border-border md:text-xs">{stat}</div>)}</div><div className="mt-auto pt-8"><Button variant="outline" onClick={() => setExpanded(expanded === project.number ? null : project.number)} aria-expanded={expanded === project.number}>Explore case study <ChevronDown className={`transition-transform ${expanded === project.number ? "rotate-180" : ""}`} /></Button></div></div>
              </div>
              {expanded === project.number && <div className="grid gap-8 border-t border-border bg-surface p-7 md:grid-cols-3 md:p-10 lg:p-12"><div><p className="font-mono text-[10px] uppercase text-primary">Problem</p><p className="mt-4 text-sm leading-7 text-ink-soft">{project.problem}</p></div><div><p className="font-mono text-[10px] uppercase text-primary">Data → Approach → Evaluation</p><ol className="mt-4 space-y-3">{project.steps.map((step, index) => <li key={step} className="flex gap-3 text-sm text-ink-soft"><span className="font-mono text-[10px] text-primary">0{index + 1}</span>{step}</li>)}</ol></div><div><p className="font-mono text-[10px] uppercase text-primary">Insight / Impact</p><p className="mt-4 text-sm leading-7 text-ink-soft">{project.insight}</p><p className="mt-7 border-t border-border pt-5 font-mono text-[10px] leading-5 text-muted-foreground">{project.tools}</p></div></div>}
            </article>)}</div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 px-5 py-24 md:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1440px]"><SectionHeader index="05" eyebrow="Capabilities" title="Tools, in context." />
            <div className="mt-16 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">{skillGroups.map(([title, items], index) => <div key={title} className="group min-h-52 border-b border-r border-border p-7 transition-colors hover:bg-surface"><span className="font-mono text-[10px] text-primary">0{index + 1}</span><h3 className="mt-8 font-display text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground transition-colors group-hover:text-ink-soft">{items}</p></div>)}</div>
          </div>
        </section>

        <section className="bg-surface px-5 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-[1440px]"><SectionHeader index="06" eyebrow="Focus areas" title="What I work on." />
            <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{[
              [BarChart3, "Data Analytics & Insights", "Exploratory analysis, statistics, transformation, pattern discovery, and actionable insights."],
              [Database, "Machine Learning & Predictive Modeling", "Classification, regression, feature engineering, development, evaluation, and experimentation."],
              [ArrowRight, "Time Series & Forecasting", "Temporal analysis, trends, and statistical or machine-learning forecasting on real datasets."],
              [Search, "Data Visualization & Dashboards", "Tableau, Power BI, and interactive visualizations that make complexity clear."],
              [BriefcaseBusiness, "Research & Applied Data Science", "Research-driven workflows, public datasets, and real-world problem solving."],
              [Github, "Product & Business Analytics", "A/B testing, user behavior, experimentation, and data-informed product decisions."],
            ].map(([Icon, title, copy], index) => { const FocusIcon = Icon as typeof BarChart3; return <div key={title as string} className="group bg-background p-7 md:p-9"><div className="flex items-center justify-between"><FocusIcon className="text-primary" /><span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span></div><h3 className="mt-14 font-display text-2xl font-semibold">{title as string}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy as string}</p></div>; })}</div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2">
            <div><SectionLabel index="07" title="Education" /><div className="mt-10 space-y-10"><Education school="University of Oklahoma" degree="Master of Science in Data Science & Analytics" dates="Aug 2024 — May 2026" location="Norman, Oklahoma" metric="4.0 CGPA" /><Education school="CVR College of Engineering" degree="Bachelor of Technology in Computer Science & Engineering" dates="Dec 2020 — Apr 2024" location="Hyderabad, India" /></div></div>
            <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"><SectionLabel index="08" title="Current direction" /><h2 className="mt-10 font-display text-4xl font-semibold md:text-5xl">What I’m exploring next</h2><p className="mt-8 max-w-xl text-lg leading-8 text-ink-soft">I’m interested in the intersection of data, technology, and products—especially work where analytical thinking can directly influence what gets built and how it gets used.</p><div className="mt-10 flex flex-wrap gap-2">{["Data Science", "Machine Learning", "Analytics", "Product Analytics", "Technical Products"].map((item) => <span key={item} className="border border-border px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground">{item}</span>)}</div></div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-primary px-5 py-24 text-primary-foreground md:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-[1440px]"><p className="font-mono text-[10px] uppercase opacity-75">09 / Contact</p><div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_.6fr]"><div><h2 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-8xl">Have a problem worth exploring?</h2><p className="mt-8 max-w-xl text-lg leading-8 opacity-80">I’m always interested in interesting problems, thoughtful products, and opportunities to turn data into something useful.</p></div><div className="self-end border-t border-primary-foreground/30 pt-6"><ContactRow label="Email" value="anvithareddyth@gmail.com" href="mailto:anvithareddyth@gmail.com" icon={<Mail />} /><ContactRow label="LinkedIn" value="anvithareddyt" href="https://www.linkedin.com/in/anvithareddyt" icon={<Linkedin />} /><div className="flex items-center gap-4 py-4"><MapPin className="size-4" /><div><p className="font-mono text-[9px] uppercase opacity-65">Based in</p><p className="text-sm">Tampa, Florida, United States</p></div></div></div></div><div className="mt-20 flex items-center justify-between border-t border-primary-foreground/30 pt-5 font-mono text-[9px] uppercase opacity-70"><span>© 2026 Anvitha Reddy</span><button onClick={() => scrollTo("home")}>Back to top ↑</button></div></div>
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
  return <div className="relative h-full w-full overflow-hidden bg-surface"><div className="absolute inset-0 editorial-grid opacity-60" /><svg aria-hidden="true" viewBox="0 0 400 500" className="absolute inset-0 h-full w-full text-primary"><path d="M-20 390 C 80 350, 80 180, 190 250 S 310 100, 430 120" fill="none" stroke="currentColor" strokeWidth="2" className="data-path"/><path d="M-20 420 C 90 350, 130 410, 220 300 S 320 260, 430 170" fill="none" stroke="currentColor" strokeWidth="1" opacity=".45"/><circle cx="190" cy="250" r="5" fill="currentColor" className="data-point"/><circle cx="310" cy="160" r="4" fill="currentColor" className="data-point"/><rect x="58" y="62" width="284" height="330" fill="none" stroke="currentColor" opacity=".2"/><text x="72" y="110" fill="currentColor" fontSize="62" fontFamily="Syne" fontWeight="600">AR</text><text x="74" y="138" fill="currentColor" fontSize="9" fontFamily="DM Mono">DATA / QUESTIONS / IMPACT</text></svg><div className="absolute bottom-24 right-5 font-mono text-[9px] uppercase text-muted-foreground [writing-mode:vertical-rl]">Profile image ready</div></div>;
}

function ProjectVisual({ type, number }: { type: string; number: string }) {
  return <div className="group relative aspect-[4/3] overflow-hidden bg-foreground text-background lg:aspect-auto lg:min-h-[510px]"><div className="absolute inset-0 editorial-grid opacity-15" /><span className="absolute left-6 top-6 z-10 font-mono text-[10px] text-primary">VISUAL STUDY / {number}</span>{type === "health" && <svg viewBox="0 0 700 520" className="absolute inset-0 h-full w-full"><path d="M30 390 C100 380 105 220 160 270S240 410 290 290 370 120 430 250s80 170 110 40 80-100 140-180" fill="none" stroke="currentColor" opacity=".25"/><path d="M30 410 C100 320 140 350 190 300S250 220 320 260 390 350 470 240 590 170 680 220" fill="none" stroke="var(--signal)" strokeWidth="3" className="data-path"/><g fill="var(--signal)">{[130,270,410,550].map((x,i)=><circle key={x} cx={x} cy={[333,243,326,204][i]} r="5"/>)}</g><text x="48" y="475" fill="currentColor" opacity=".55" fontSize="12" fontFamily="DM Mono">2004</text><text x="610" y="475" fill="currentColor" opacity=".55" fontSize="12" fontFamily="DM Mono">2026</text></svg>}{type === "energy" && <div className="absolute inset-12 flex items-end gap-3">{["h-1/4","h-1/2","h-2/3","h-1/3","h-4/5","h-3/5","h-full","h-2/5","h-3/4"].map((height,index)=><div key={index} className={`flex-1 ${height} border-t border-primary bg-primary/20 transition-all duration-500 group-hover:bg-primary/40`} />)}<span className="absolute bottom-0 left-0 font-mono text-[10px] text-background/50">CONSUMPTION / OPERATING CYCLES</span></div>}{type === "roads" && <svg viewBox="0 0 700 520" className="absolute inset-0 h-full w-full"><path d="M40 500 C170 360 120 260 320 170 S510 160 680 20" fill="none" stroke="currentColor" strokeWidth="46" opacity=".12"/><path d="M40 500 C170 360 120 260 320 170 S510 160 680 20" fill="none" stroke="var(--signal)" strokeWidth="2" strokeDasharray="14 15"/><path d="M0 150 C180 190 300 400 700 360" fill="none" stroke="currentColor" strokeWidth="28" opacity=".08"/><g fill="var(--signal)"><circle cx="160" cy="355" r="8"/><circle cx="318" cy="171" r="8"/><circle cx="508" cy="130" r="8"/></g><text x="52" y="92" fill="currentColor" fontFamily="DM Mono" fontSize="12" opacity=".55">SEVERITY FACTORS / ROAD CONDITIONS / ENVIRONMENT</text></svg>}</div>;
}
