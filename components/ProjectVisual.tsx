/*
  AI MEETING SUMMARIZER — PROJECT VISUAL
  ======================================

  This component creates a visual representation of the
  Meeting Summarizer's processing pipeline.

  We intentionally use normal React + CSS animations here.

  Why?

  This visualization is important content, so we don't want
  its visibility to depend on JavaScript viewport detection.

  CSS animations are handled directly by the browser and work
  consistently on desktop, tablet and mobile devices.
*/

const pipeline = [
  {
    label: "MEETING AUDIO",
    value: "00:42:18",
  },
  {
    label: "WHISPER",
    value: "TRANSCRIBING",
  },
  {
    label: "GEMINI",
    value: "ANALYZING",
  },
];

export default function ProjectVisual() {
  return (
    /*
      Main visualization container.

      "relative" allows us to position elements such as the
      grid, status indicator and pipeline inside this box.

      "overflow-hidden" prevents decorative elements from
      extending outside the visual panel.
    */
    <div className="relative h-[360px] w-full overflow-hidden border border-zinc-900 bg-[#0d0d0d]">

      {/* 
        ------------------------------------------------------
        BACKGROUND GRID
        ------------------------------------------------------

        We create the grid using CSS gradients instead of
        loading an image.

        This keeps the visualization lightweight and sharp
        at any screen resolution.
      */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 
        Small technical label.

        This makes the visualization feel like a system
        interface rather than a normal decorative image.
      */}
      <div className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.2em] text-zinc-600">
        AI PIPELINE / 01
      </div>

      {/* 
        ------------------------------------------------------
        PIPELINE
        ------------------------------------------------------

        The pipeline is centered inside the visualization.

        On mobile, the width automatically shrinks because
        the container uses "w-full".
      */}
      <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-8">
        <div className="w-full max-w-md">

          {/* 
            The three processing stages.

            .map() creates one node for each object in the
            pipeline array.
          */}
          <div className="flex items-start justify-between">

            {pipeline.map((stage, index) => (
              /*
                Each stage takes equal available width.

                The animation delay is calculated from its
                position in the array:

                index 0 → 0.2 seconds
                index 1 → 0.5 seconds
                index 2 → 0.8 seconds
              */
              <div
                key={stage.label}
                className="pipeline-node flex w-[30%] flex-col items-center"
                style={{
                  animationDelay: `${0.2 + index * 0.3}s`,
                }}
              >
                {/* 
                  Node circle.

                  This represents a processing stage in the
                  AI pipeline.
                */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-[#0d0d0d] sm:h-14 sm:w-14">

                  {/* Small center point */}
                  <div className="h-2 w-2 rounded-full bg-zinc-300" />
                </div>

                {/* Stage name */}
                <p className="mt-4 text-center font-mono text-[8px] tracking-[0.12em] text-zinc-500 sm:text-[9px] sm:tracking-[0.15em]">
                  {stage.label}
                </p>

                {/* Stage status */}
                <p className="mt-1 text-center text-[8px] text-zinc-700 sm:text-[9px]">
                  {stage.value}
                </p>
              </div>
            ))}

          </div>

          {/* 
            --------------------------------------------------
            CONNECTING LINE
            --------------------------------------------------

            Instead of using SVG animation, we use a simple
            horizontal CSS line.

            This is much easier to keep responsive.
          */}
          <div className="relative mx-auto -mt-[58px] flex w-[60%] items-center justify-between">

            {/* First connector */}
            <div
              className="pipeline-line h-px w-[42%] origin-left bg-zinc-800"
              style={{ animationDelay: "0.5s" }}
            />

            {/* Second connector */}
            <div
              className="pipeline-line h-px w-[42%] origin-right bg-zinc-800"
              style={{ animationDelay: "0.8s" }}
            />

          </div>

          {/* 
            --------------------------------------------------
            OUTPUTS
            --------------------------------------------------

            These represent the structured information produced
            after the AI analysis stage.
          */}
          <div className="mt-14 grid grid-cols-2 gap-3">

            {/* Summary output */}
            <div
              className="pipeline-output border border-zinc-900 bg-black/30 p-3 sm:p-4"
              style={{ animationDelay: "1.1s" }}
            >
              <p className="font-mono text-[8px] tracking-[0.15em] text-zinc-600 sm:text-[9px]">
                OUTPUT / 01
              </p>

              <p className="mt-3 text-xs text-zinc-300 sm:text-sm">
                Summary generated
              </p>

              <p className="mt-1 text-[10px] text-zinc-600 sm:text-xs">
                Structured meeting overview
              </p>
            </div>

            {/* Actions output */}
            <div
              className="pipeline-output border border-zinc-900 bg-black/30 p-3 sm:p-4"
              style={{ animationDelay: "1.3s" }}
            >
              <p className="font-mono text-[8px] tracking-[0.15em] text-zinc-600 sm:text-[9px]">
                OUTPUT / 02
              </p>

              <p className="mt-3 text-xs text-zinc-300 sm:text-sm">
                Actions extracted
              </p>

              <p className="mt-1 text-[10px] text-zinc-600 sm:text-xs">
                Tasks and decisions identified
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 
        ------------------------------------------------------
        STATUS INDICATOR
        ------------------------------------------------------

        This little pulsing dot makes the visualization feel
        like a live processing system.
      */}
      <div className="absolute bottom-5 left-5 flex items-center gap-2">

        <span className="pipeline-pulse h-1.5 w-1.5 rounded-full bg-zinc-400" />

        <span className="font-mono text-[8px] tracking-[0.15em] text-zinc-600 sm:text-[9px]">
          PROCESSING PIPELINE
        </span>

      </div>

      {/* Version number */}
      <div className="absolute bottom-5 right-5 font-mono text-[9px] text-zinc-700">
        v1.0
      </div>

    </div>
  );
}