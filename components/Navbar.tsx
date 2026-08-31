/*
  NAVIGATION
  ==========

  This component provides navigation for desktop and mobile.

  Important design decision:

  The mobile menu uses the browser's native <details>
  element instead of React state.

  This means the navigation can open even if JavaScript
  fails to load or React hydration has a problem.

  Navigation is essential functionality, so it should not
  depend on JavaScript.
*/

export default function Navbar() {
  return (
    /*
      Main navigation container.

      "relative" allows us to position the mobile menu
      underneath the navigation bar.

      "z-50" keeps the navigation above other content.
    */
    <nav className="navbar-entrance relative z-50 mx-auto max-w-7xl px-6 py-6 md:px-10">
      {/* 
        ======================================================
        MAIN NAVIGATION ROW
        ======================================================
      */}
      <div className="flex items-center justify-between">

        {/* 
          Portfolio name / logo.

          Clicking this takes the visitor back to the top.
        */}
        <a
          href="/"
          className="text-sm font-semibold tracking-widest text-white"
        >
          MANI KRISHANA SHIVANSH SHARMA<span className="text-zinc-500">.</span>
        </a>


        {/* 
          ====================================================
          DESKTOP NAVIGATION
          ====================================================

          Hidden on mobile.

          "md:flex" makes it visible on medium-sized screens
          and larger.
        */}
        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">

          <a
            href="#about"
            className="transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-white"
          >
            Contact
          </a>

        </div>


        {/* 
          ====================================================
          DESKTOP GITHUB BUTTON
          ====================================================

          Only visible on medium and larger screens.
        */}
        <a
          href="https://github.com/MkShivansh"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-zinc-800 px-4 py-2 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white md:block"
        >
          GitHub ↗
        </a>


        {/* 
          ====================================================
          MOBILE NAVIGATION
          ====================================================

          <details> is a native HTML element.

          The browser itself handles opening and closing it.

          Therefore:

          JavaScript ❌
          React state ❌
          Motion ❌
          Hydration ❌

          The menu simply works.
        */}
        <details className="group md:hidden">

            {/*
                The summary element acts as the mobile menu button.

                "list-none" removes the browser's default disclosure
                triangle so our hamburger icon is the only visible control.
            */}
            <summary
                className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-zinc-800 text-lg text-zinc-300 marker:hidden transition-colors hover:border-zinc-600 hover:text-white"
                aria-label="Open navigation menu"
            >
                ☰
            </summary>


          {/* 
            ==================================================
            MOBILE MENU PANEL
            ==================================================

            This appears when <details> is opened.
          */}
          <div className="absolute left-6 right-6 top-[76px] rounded-2xl border border-zinc-800 bg-[#0d0d0d] p-5 shadow-2xl">

            <div className="flex flex-col">

              <a
                href="#about"
                className="border-b border-zinc-900 py-4 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#projects"
                className="border-b border-zinc-900 py-4 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                Projects
              </a>

              <a
                href="#vision"
                className="transition-colors hover:text-white"
              >
                Vision
              </a>
              
              <a
                href="#contact"
                className="border-b border-zinc-900 py-4 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                Contact
              </a>

              <a
                href="https://github.com/MkShivansh"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </details>

      </div>

    </nav>
  );
}