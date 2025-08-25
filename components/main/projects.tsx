"use client";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import AnimatedDiv from "../sub/AnimatedDiv";

export const Projects = () => {
  const [filter, setFilter] = useState<"all" | "webflow" | "web">("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : filter === "webflow"
        ? PROJECTS.filter((project) => project.technologies.includes("Webflow"))
        : PROJECTS.filter(
            (project) => !project.technologies.includes("Webflow")
          );

  return (
    <section className=" py-20 w-full lg:w-[80%] mx-auto">
      <div className="w-full flex flex-col items-center justify-center mb-10">
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <span className="Welcome-text text-[13px]">
            Projects I have contributed to
          </span>
        </div>

        <h2 className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
          See My Work
        </h2>
      </div>
      <div className="w-full flex gap-5 justify-center py-5">
        <button
          className={`py-2 px-5 text-center text-white cursor-pointer rounded-lg ${
            filter === "all"
              ? "button-primary "
              : "border border-[#7042f88b] opacity-[0.9]"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`py-2 px-5 text-center text-white cursor-pointer rounded-lg ${
            filter === "web"
              ? "button-primary "
              : "border border-[#7042f88b] opacity-[0.9]"
          }`}
          onClick={() => setFilter("web")}
        >
          Web
        </button>
        <button
          className={`py-2 px-5 text-center text-white cursor-pointer rounded-lg ${
            filter === "webflow"
              ? "button-primary "
              : "border border-[#7042f88b] opacity-[0.9]"
          }`}
          onClick={() => setFilter("webflow")}
        >
          Webflow
        </button>
      </div>
      <AnimatedDiv className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            alt_text={project.alt_text}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            source={project.source}
            technologies={project.technologies}
          />
        ))}
      </AnimatedDiv>
    </section>
  );
};
