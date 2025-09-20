export default function Home() {
  return (
    <div>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/10 dark:border-white/10">
        <nav className="container flex items-center justify-between h-16">
          <a href="#home" className="font-semibold">Nikhil Govind</a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
            <a href="#skills" className="opacity-80 hover:opacity-100">Skills</a>
            <a href="#about" className="opacity-80 hover:opacity-100">About</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="container py-24 sm:py-32">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-wide opacity-70">MERN Stack Developer</p>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2">Building performant web apps with clean UX</h1>
              <p className="mt-4 opacity-80">I specialize in React, Next.js, Node.js, Express, and MongoDB. I love crafting intuitive interfaces and reliable APIs.</p>
              <div className="mt-6 flex gap-3">
                <a href="#projects" className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium">View Projects</a>
                <a href="#contact" className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm">Contact Me</a>
              </div>
            </div>
            <div className="h-56 sm:h-72 rounded-xl border border-black/10 dark:border-white/15 bg-gradient-to-br from-purple-500/15 via-foreground/10 to-transparent"></div>
          </div>
        </section>

        <section id="projects" className="container py-20">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-lg border border-black/10 dark:border-white/15 p-4 hover:shadow-sm transition-shadow">
                <div className="h-36 rounded-md bg-gradient-to-br from-foreground/10 to-transparent mb-3" />
                <h3 className="font-medium">Project {i}</h3>
                <p className="text-sm opacity-75 mt-1">Brief description of a MERN project highlighting the problem and solution.</p>
                <div className="mt-3 flex gap-2 text-xs opacity-75">
                  <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Next.js</span>
                  <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">Express</span>
                  <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">MongoDB</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="container py-20">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-sm">
            {[
              "React / Next.js",
              "Node.js / Express",
              "MongoDB / Mongoose",
              "REST / JWT / Auth",
              "Tailwind CSS / UI",
              "TypeScript",
              "Testing / Jest",
              "CI/CD / Git"
            ].map((s) => (
              <div key={s} className="rounded-md border border-black/10 dark:border-white/15 p-3 opacity-90">{s}</div>
            ))}
          </div>
        </section>

        <section id="about" className="container py-20">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 max-w-2xl opacity-85">I build full‑stack apps with a focus on performance and developer experience. I enjoy translating product requirements into accessible, maintainable UI and robust backend services.</p>
        </section>

        <section id="contact" className="container py-20">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <form className="mt-6 grid sm:grid-cols-2 gap-4 max-w-xl">
            <input aria-label="Name" placeholder="Your name" className="rounded-md border border-black/10 dark:border-white/15 px-3 py-2 bg-transparent" />
            <input aria-label="Email" placeholder="Your email" type="email" className="rounded-md border border-black/10 dark:border-white/15 px-3 py-2 bg-transparent" />
            <textarea aria-label="Message" placeholder="Tell me about your project" className="sm:col-span-2 rounded-md border border-black/10 dark:border-white/15 px-3 py-2 bg-transparent h-28" />
            <button className="sm:col-span-2 inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium w-max">Send</button>
          </form>
        </section>
      </main>

      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="container h-14 flex items-center justify-between text-sm">
          <span className="opacity-70">© {new Date().getFullYear()} Your Name</span>
          <a href="#home" className="opacity-80 hover:opacity-100">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
