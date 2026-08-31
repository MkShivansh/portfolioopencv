import VisionLab from "@/components/VisionLab";

// Projects section containing your featured work.
import Projects from "@/components/Projects";

// About section containing your introduction and technical focus.
import About from "@/components/About";

// Import the reusable navigation component.
import Navbar from "@/components/Navbar";

// Import the hero section of our portfolio.
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      {/* 
        Navbar is now a reusable component.
        
        Keeping it separate from this page makes our application
        easier to maintain as the portfolio becomes larger.
      */}
      <Navbar />

      <Hero />

      {/* Placeholder sections */}
      <About />

      <Projects />

      <VisionLab />

      <section id="contact" className="mx-auto max-w-7xl px-6 py-32 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
          03 — Contact
        </p>
        <h2 className="mt-4 text-4xl font-semibold">Let&apos;s talk.</h2>
      </section>
    </main>
  );
}