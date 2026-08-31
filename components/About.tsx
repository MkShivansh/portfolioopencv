/*
  This component intentionally uses normal React/HTML elements
  rather than Motion's whileInView.

  The reason is reliability: the About section contains
  important information and should always be accessible,
  regardless of how a particular browser handles JavaScript
  viewport detection.
*/

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32 md:px-10"
    >
      {/* 
        Section label.

        Small labels like "01 — About" are used throughout
        the portfolio to create a consistent visual hierarchy.
      */}
        <p className="animate-fade-up text-xs uppercase tracking-[0.3em]  text-zinc-600">
        01 — About </p>

      {/* 
        Main heading.

        "whileInView" means the animation starts when this
        element becomes visible in the browser viewport.

        "once: true" means it only animates once instead of
        replaying every time the user scrolls past it.
      */}
      <h2
        className="animate-fade-up mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight [animation-delay:100ms] md:text-6xl"
      >
      
        I like building software that{" "}
        <span className="text-zinc-500">
          actually does something.
        </span>
      </h2>

      {/* 
        Content area.

        On larger screens we use two columns:
        - Left: introduction
        - Right: the areas we work in

        On smaller screens everything automatically stacks.
      */}
    <div className="mt-16 grid gap-12 md:grid-cols-2">

        {/* Introduction */}
        <div className="animate-from-left max-w-xl [animation-delay:200ms]">

          <p className="text-base leading-8 text-zinc-400 md:text-lg">
            I&apos;m Shivansh, a software engineer focused on
            building practical systems across software
            engineering, Generative AI, backend development,
            and machine learning.
          </p>

          <p className="mt-6 text-base leading-8 text-zinc-500">
            I enjoy taking an idea from a problem statement to
            a working application — designing the architecture,
            writing the code, connecting the pieces, and
            evaluating the result.
          </p>

        {/* Areas of interest */}
        <div className="animate-from-right grid grid-cols-2 gap-x-8 gap-y-10 [animation-delay:300ms]"></div>
          {/* 
            Each item represents an area of your technical
            focus. These will later connect naturally to your
            projects section.
          */}

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-600">
              01
            </p>
            <h3 className="mt-2 text-sm font-medium text-zinc-200">
              Software Engineering
            </h3>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-600">
              02
            </p>
            <h3 className="mt-2 text-sm font-medium text-zinc-200">
              Generative AI
            </h3>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-600">
              03
            </p>
            <h3 className="mt-2 text-sm font-medium text-zinc-200">
              Backend Systems
            </h3>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-600">
              04
            </p>
            <h3 className="mt-2 text-sm font-medium text-zinc-200">
              Machine Learning
            </h3>
          </div>
      </div>
    </div>

      {/* 
        Small technology strip.

        This isn't meant to replace the Skills section.
        It is simply a visual hint about the technologies
        behind the work.
      */}
      <div className="animate-fade-in mt-20 border-y border-zinc-900 py-5 [animation-delay:400ms]"></div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-zinc-600">
          <span>Python</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>RAG</span>
          <span>LLMs</span>
          <span>Machine Learning</span>
          <span>Flutter</span>
        </div>
    </section>
  );
}