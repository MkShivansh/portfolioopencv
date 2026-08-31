"use client";

// import VaultVisual from "./VaultVisual";

// Visual representation of the AI Meeting Summarizer pipeline.
import ProjectVisual from "./ProjectVisual";

// Motion is used to animate the featured project as it
// enters the visitor's viewport.
import { motion } from "motion/react";

// Import the reusable card component.
// We will use the same component for all five projects.
import ProjectCard from "./ProjectCard";

/*
  PROJECT DATA
  ============

  All links below point to the actual repositories/deployment
  for the projects.

  Empty links are intentional:
  The Enterprise AI Knowledge Control Plane is still ongoing
  and currently does not have a public repository listed.
*/

const projects = [
  {
    number: "01",
    title: "AI Meeting Summarizer",
    category: "AI · GenAI · Speech",
    description:
      "AI-powered meeting analysis application that converts recordings into transcripts, summaries, key decisions, and actionable tasks.",
    technologies: [
      "Python",
      "Groq Whisper",
      "Google Gemini",
      "Streamlit",
      "SQLite",
    ],

    // Actual GitHub repository for the Meeting Summarizer.
    github: "https://github.com/MkShivansh/meetingSummarizer",

    // No public deployment currently listed.
    live: "",

    status: "Completed",
  },



  {
    number: "02",
    title: "Secure Vault System",
    category: "Backend · Security",
    description:
      "Secure software system focused on authentication, protected data handling, and backend security mechanisms.",
    technologies: [
      "Python",
      "Backend",
      "Authentication",
      "Security",
      "Database",
    ],

    // Actual GitHub repository.
    github: "https://github.com/MkShivansh/secure-vault-system",

    live: "",
    status: "Completed",
  },

  {
    number: "03",
    title: "Enterprise AI Knowledge Control Plane",
    category: "AI · RAG · Enterprise",
    description:
      "An ongoing AI knowledge platform designed to manage, retrieve, and control enterprise knowledge through intelligent retrieval and AI-assisted workflows.",
    technologies: [
      "Python",
      "RAG",
      "LLMs",
      "AI",
      "Backend",
    ],

    /*
      No public repository has been provided for this project.

      We intentionally leave this empty instead of adding a
      guessed or private repository link.
    */
    github: "",

    live: "",
    status: "Ongoing",
  },

  {
    number: "04",
    title: "IoT Anomaly Detection",
    category: "IoT · Machine Learning",
    description:
      "Machine learning system for identifying abnormal patterns in IoT sensor data and supporting automated anomaly detection.",
    technologies: [
      "Python",
      "Machine Learning",
      "IoT",
      "Data Analysis",
    ],

    // Actual GitHub repository.
    github: "https://github.com/MkShivansh/iot-anomaly-detection",

    live: "",
    status: "Completed",
  },

  {
    number: "05",
    title: "Flutter To-Do App",
    category: "Mobile · Flutter",
    description:
      "Task management application built with Flutter, designed around simple task creation, organization, and tracking.",
    technologies: [
      "Flutter",
      "Dart",
      "Mobile Development",
    ],

    // Actual GitHub repository.
    github: "https://github.com/MkShivansh/todo",

    // Actual deployed application.
    live: "https://todo-ten-ebon.vercel.app/",

    status: "Completed",
  },

  {
    number: "06",
    title: "Expense Tracker",
    category: "Application · Finance",
    description:
      "Personal expense tracking application for recording, organizing, and monitoring day-to-day expenses.",
    technologies: [
      "Flutter",
      "Dart",
      "Application Development",
    ],

    // Actual GitHub repository.
    github: "https://github.com/MkShivansh/expensetracker",

    live: "",
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32 md:px-10"
    >
      {/* Section label */}
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
        02 — Selected Work
      </p>

      {/* Section heading */}
      <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
        Things I&apos;ve{" "}
        <span className="text-zinc-500">built.</span>
      </h2>

      {/* 
        Short introduction.

        This helps the visitor understand that these aren't
        simply academic assignments.
      */}
      <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500">
        A selection of software, AI and machine-learning systems
        I&apos;ve designed and built while exploring different
        ways of solving practical problems.
      </p>

      {/* ---------------- */}

      {/* 
        Project list.

        We use .map() to generate a ProjectCard for every
        project in our projects array.
      */}
      {/* 
    FEATURED PROJECT

    The first project gets a larger layout because it is one
    of the strongest demonstrations of your AI/GenAI work.

    Instead of treating every project identically, we can use
    visual hierarchy to guide the visitor toward the work
    we most want them to notice.
    */}
    <motion.article
    /*
        Keep the featured project visible even if viewport-based
        animation does not fire on a particular mobile browser.

        Content visibility is more important than animation.
    */
    initial={{ opacity: 1, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="border-t border-zinc-800 pt-8"
    >
    {/* Project number and category */}
    <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-zinc-600">
        01
        </span>

        <div className="flex items-center gap-4">

            {/* Project category */}
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                AI · GenAI · Speech
            </span>

            {/* Project status */}
            <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                Completed
            </span>

        </div>
    </div>

    {/* Project title */}
    <h3 className="mt-5 text-3xl font-medium tracking-tight text-zinc-100 md:text-5xl">
        AI Meeting Summarizer
    </h3>

    {/*
        Two-column layout.

        Left side:
        The actual visual representation of the AI pipeline.

        Right side:
        Explanation and technology stack.

        On mobile devices the columns automatically stack.
    */}
    <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

        {/* Project visualization */}
        <ProjectVisual />

        {/* Project information */}
        <div>
            <p className="text-sm leading-7 text-zinc-500 md:text-base">
                An AI-powered application that transforms meeting
                recordings into transcripts, summaries, key decisions
                and actionable tasks using speech recognition and
                Generative AI.
            </p>

            {/* Technology list */}
            <div className="mt-7 flex flex-wrap gap-2">
                {[
                "Python",
                "Groq Whisper",
                "Google Gemini",
                "Streamlit",
                "SQLite",
                ].map((technology) => (
                <span
                    key={technology}
                    className="rounded-full border border-zinc-800 px-3 py-1.5 text-[11px] text-zinc-500"
                >
                    {technology}
                </span>
                ))}
            </div>

            {/* Project links */}
            <div className="mt-8 flex gap-5 text-xs">
                <a
                href="https://github.com/MkShivansh/meetingSummarizer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 underline decoration-zinc-800 underline-offset-4 transition-colors hover:text-white"
                >
                GitHub ↗
                </a>
            </div>
        </div>
    </div>
    </motion.article>

    {/* 
    REMAINING PROJECTS

    The other projects continue using our reusable
    ProjectCard component.

    We skip the first project because it has already been
    displayed above as the featured project.
    */}
    <div className="mt-20">
    {projects.slice(1).map((project) => (
        <ProjectCard
        key={project.number}
        number={project.number}
        title={project.title}
        category={project.category}
        description={project.description}
        technologies={project.technologies}
        github={project.github}
        live={project.live}
        status={project.status}
        />
    ))}
    </div>
    </section>
  );
}