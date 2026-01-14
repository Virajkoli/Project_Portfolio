import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Hero Section with Meteors */}
      <section
        id="home"
        className="relative flex min-h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      >
        {/* Meteors Background */}
        <Meteors number={30} />

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-6xl lg:text-9xl font-bold text-white mb-4 animate-fade-in">
            Hi, Viraj Here
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto animate-fade-in-delay">
            Welcome to my portfolio
          </p>
        </div>
      </section>

      {/* Placeholder sections for navigation */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <h2 className="text-3xl font-bold text-white">About Section</h2>
      </section>

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-4 bg-zinc-900"
      >
        <h2 className="text-3xl font-bold text-white">Skills Section</h2>
      </section>

      <section
        id="experience"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <h2 className="text-3xl font-bold text-white">Experience Section</h2>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 bg-zinc-900"
      >
        <h2 className="text-3xl font-bold text-white">Projects Section</h2>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <h2 className="text-3xl font-bold text-white">Contact Section</h2>
      </section>
    </main>
  );
}
