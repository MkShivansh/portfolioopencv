// "use client";

/*
  The Hero contains important introductory content, so its
  visibility should not depend on JavaScript animations.

  The actual visual interaction is handled separately by
  HeroVisual.tsx.
*/
import HeroVisual from "./HeroVisual"
// import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 md:px-10">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
        <HeroVisual />
      <div className="relative z-10 max-w-5xl">
        {/*
            Small introductory label.

            The CSS animation gives it a subtle entrance effect while
            keeping the actual content independent from JavaScript.
        */}
        <p className="hero-eyebrow mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Software Engineer · AI · GenAI
        </p>

        {/*
            Main portfolio headline.

            This is one of the most important pieces of content on the
            entire website, so it is rendered as normal HTML.

            Each line receives a small animation delay so the text still
            has the same sequential reveal effect we had with Motion.
        */}
        <h1 className="text-5xl font-semibold leading-[0.95 tracking-tight sm:text-7xl md:text-8xl">

            <span className="hero-line hero-line-1 block">
                I build
            </span>

            <span className="hero-line hero-line-2 block text-zinc-500">
                intelligent
            </span>

            <span className="hero-line hero-line-3 block">
                software.
            </span>

        </h1>

        {/*
            Short description explaining what you build.

            Again, this is normal HTML so it remains readable even if
            JavaScript animations fail.
        */}
        <p className="hero-description mt-8 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            I&apos;m Shivansh — a software engineer focused on building
            practical systems across AI, Generative AI, backend
            engineering, and machine learning.
        </p>

        {/*
            Primary and secondary calls-to-action.

            The buttons themselves use normal CSS hover transitions,
            so they don't require Motion.
        */}
        <div className="hero-buttons mt-10 flex flex-wrap gap-4">

        <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
        >
            Explore my work →
        </a>

        <a
            href="#contact"
            className="rounded-full border border-zinc-800 px-6 py-3 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
        >
            Get in touch
        </a>

        </div>
      </div>

        {/*
            Small status information displayed in the bottom-right
            corner of the hero.

            "hidden md:block" means:
            - Hidden on small/mobile screens.
            - Visible from medium-sized screens upward.

            We're keeping this as a normal <div> because it is
            supporting information and doesn't need JavaScript-based
            animation.
        */}
        <div className="hero-status absolute bottom-10 right-6 hidden text-right text-xs text-zinc-600 md:block">
            <p>BASED IN INDIA</p>

            <p className="mt-1">
                BUILDING WITH AI + SOFTWARE
            </p>
        </div>
    </section>
  );
}