"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft } from "@/lib/motion";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/constants";

export const FeaturedProjects = () => {
  return (
    <section id="projects" className=" py-20 w-full lg:w-[80%] mx-auto px-3">
      <div className="w-full flex flex-col items-center justify-center mb-10">
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <span className="Welcome-text text-[13px]">
            Projects I have contributed to
          </span>
        </div>

        <h2 className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
          Featured Projects
        </h2>
        <p className="text-[#9ca3af] text-base">
          Here is a selection of projects I have worked on that highlight my
          expertise in web development and creating impactful digital solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-5">
        {FEATURED_PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border border-[#7042f88b] rounded-lg p-5 h-full"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-200 bg-[#7042f88b] px-2 py-1 rounded-full">
                  {project.label}
                </span>
              </div>
              <p className="text-gray-300 text-base mb-4">
                {project.description}
              </p>
            </div>
            <ul className="flex flex-wrap gap-3 mt-auto text-sm">
              {project.technologies.map((technology, index) => (
                <li
                  key={index}
                  className="text-[#9ca3af] border border-[#9ca3af] px-5 py-1 rounded-full opacity-[0.9]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <motion.div
        variants={slideInFromLeft(1)}
        className="w-full flex justify-center pt-10"
      >
        <Link
          href="/projects"
          className="button-primary  py-2 px-5 text-center text-white cursor-pointer rounded-lg "
        >
          View All Projects
        </Link>
      </motion.div>
    </section>
  );
};
