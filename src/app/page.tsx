
import fetchAPI, { MEDIA_URL } from '@/lib/api.js';
import Image from 'next/image';


type skills = {
  skills: string;
  status: boolean;
  sort_order: number;
}


type projects = {
  title: string;
  description: string;
  skills: string[];
  media_path: string;
  media_alt: string;
  project_link: string;
  github_link: string;
  status: boolean;
  sort_order: number;
}

export default async function Home() {
  // If fetching from an API, you can do it here
  const { data, error } = await fetchAPI('web');
  if (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data</div>;
  }

  console.log(data)

  const { cms, projects, skills } = data;


  return (
    <div>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/10 dark:border-white/10">
        <nav className="container flex items-center justify-between h-16">
          <a href="#home" className="font-semibold">Nikhil Goovind OV</a>
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
              <p className="text-sm uppercase tracking-wide opacity-70">{cms?.super_title ? cms.super_title : "MERN Stack Developer"}</p>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2">{cms?.title ? cms.title : "Building performant web apps with clean UX"}</h1>
              <p className="mt-4 opacity-80">{cms?.description ? cms.description : "I specialize in React, Next.js, Node.js, Express, and MongoDB. I love crafting intuitive interfaces and reliable APIs."}</p>
              <div className="mt-6 flex gap-3">
                <a href={cms?.btn_one_link ? cms.btn_one_link : "#projects"} className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium">{cms?.btn_one_text ? cms.btn_one_text : "View Projects"}</a>
                <a href={cms?.btn_two_link ? cms.btn_two_link : "#contact"} className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm">{cms?.btn_two_text ? cms.btn_two_text : "Contact Me"}</a>
              </div>
            </div>
              <Image
                src={cms?.media_path ? `${MEDIA_URL}${cms.media_path}` : "/default-image.jpg"}
                alt={cms?.media_alt ? cms.media_alt : "Default Image"}
                width={600}
                height={400}
              />
          </div>
        </section>

        <section id="projects" className="container py-20">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects?.map((project: projects, index: number) => (
              <div key={index} className="rounded-lg border border-black/10 dark:border-white/15 p-4 hover:shadow-sm transition-shadow">
                  <Image
                    src={project?.media_path ? `${MEDIA_URL}${project.media_path}` : "/default-image.jpg"}
                    alt={project?.media_alt ? project.media_alt : "Default Image"}
                    width={600}
                    height={400}
                  />
                <h3 className="font-medium">{project?.title ? project.title : `Project ${index}`}</h3>
                <p className="text-sm opacity-75 mt-1">{project?.description ? project.description : "Brief description of a MERN project highlighting the problem and solution."}</p>
                <div className="mt-3 flex gap-2 text-xs opacity-75">
                  <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">{project?.skills?.[0]}</span>
                  <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">{project?.skills?.[1]}</span>
                  <span className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">{project?.skills?.[2]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="container py-20">
          <h2 className="text-2xl font-semibold">{cms?.skills_title ? cms.skills_title : "Skills"}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-sm">
            {skills?.map((skill: skills, index: number) => (
              <div key={index} className="rounded-md border border-black/10 dark:border-white/15 p-3 opacity-90">{skill?.skills}</div>
            ))}
          </div>
        </section>

        <section id="about" className="container py-20">
          <h2 className="text-2xl font-semibold">{cms?.about_title ? cms.about_title : "About"}</h2>
          <p className="mt-4 max-w-2xl opacity-85">{cms?.about_description ? cms.about_description : "I build full‑stack apps with a focus on performance and developer experience. I enjoy translating product requirements into accessible, maintainable UI and robust backend services."}</p>
        </section>

        <section id="contact" className="container py-20">
          <h2 className="text-2xl font-semibold">{cms?.contact_title ? cms.contact_title : "Contact"}</h2>
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
