"use client";

// Motion is used for the small interactions and animations
// inside each project card.
import { motion } from "motion/react";

/*
  This interface defines the data that a ProjectCard receives.

  TypeScript uses this to make sure we don't accidentally
  pass the wrong type of information to our component.
*/
interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  github?: string;
  live?: string;
}

interface ProjectCardProps {
  /*
    Basic project identification.
  */
  number: string;
  title: string;
  category: string;

  /*
    Short explanation shown to visitors.
  */
  description: string;

  /*
    Technology tags displayed below the description.
  */
  technologies: string[];

  /*
    Optional external links.

    They are optional because not every project needs
    both a GitHub repository and a live deployment.
  */
  github?: string;
  live?: string;

  /*
    Current project state.

    Examples:
    - Completed
    - Ongoing
  */
  status?: string;
}

export default function ProjectCard({
  number,
  title,
  description,
  category,
  technologies,
  github,
  live,
  status,
}: ProjectCardProps) {
  return (
    /*
      "group" is a Tailwind utility that allows child elements
      to react when the user hovers over the entire card.

      Example:
      group-hover:text-white
      means "make this text white when the card is hovered".
    */
    <motion.article
        /*
            We keep the project card visible by default.

            This is important because the portfolio must remain usable
            even if a browser/device does not trigger viewport-based
            animations correctly.

            We can add more advanced entrance animations later once
            the responsive layout is fully stable.
        */
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="group border-t border-zinc-800 py-8"
    >
      {/* 
        Top row containing:
        - project number
        - project category
        - animated arrow
      */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-zinc-600">
          {number}
        </span>

        <div className="flex items-center gap-4">
            {/*
                Project metadata.

                The category describes what the project is about,
                while the status tells the visitor whether the project
                is completed or still being developed.
            */}
            <div className="flex items-center gap-4">

            <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                {category}
            </span>

            {status && (
                <span
                className={`text-[10px] uppercase tracking-[0.15em] ${
                    status === "Ongoing"
                    ? "text-zinc-400"
                    : "text-zinc-600"
                }`}
                >
                {status}
                </span>
            )}

            </div>

          {/*
            The arrow starts slightly to the left and becomes
            visible when the user hovers over the project.
          */}
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="hidden text-zinc-400 md:block"
          >
            ↗
          </motion.span>
        </div>
      </div>

      {/* Project title */}
      <h3 className="mt-5 text-2xl font-medium tracking-tight text-zinc-100 transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
        {title}
      </h3>

      {/* 
        Project description.

        "leading-7" controls the line height, making the
        paragraph easier to read.
      */}
      <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
        {description}
      </p>

      {/* Technology tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-zinc-800 px-3 py-1.5 text-[11px] text-zinc-500 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-400"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Project links */}
      {(github || live) && (
        <div className="mt-7 flex gap-5 text-xs">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 underline decoration-zinc-800 underline-offset-4 transition-colors hover:text-white"
            >
              GitHub ↗
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 underline decoration-zinc-800 underline-offset-4 transition-colors hover:text-white"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      )}

      {/* 
        Bottom hover indicator.

        This is deliberately subtle. We don't want every
        element on the page to move dramatically.

        "scale-x-0" means the line starts with zero width.

        "group-hover:scale-x-100" expands it to full width
        when the project card is hovered.
      */}
      <div className="mt-8 h-px origin-left scale-x-0 bg-zinc-700 transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  );
}