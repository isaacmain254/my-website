// import { Encryption } from "@/components/main/encryption";
import Experience from "@/components/main/Experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { AboutMe } from "../components/main/about-me";
import ProjectPhase from "@/components/main/project-phase";

export default function Home() {
  return (
    <main className="h-full w-full" role="main">
      <div className="flex flex-col gap-20">
        <Hero />
        <AboutMe />
        <ProjectPhase />
        <Skills />
        <Experience />
        {/* <Encryption /> */}
        <Projects />
        {/* <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Have a gig for me in mind..? Let's build something together</div> */}
      </div>
    </main>
  );
}
