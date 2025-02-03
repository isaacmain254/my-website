"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center w-full px-2 lg:px-20 mt-28 lg:mt-40"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <span className="Welcome-text text-[13px]">
            Fullstack Software Developer
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl text-bold text-white"
        >
          <h1>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            project experience.
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5"
        >
          I&apos;m a Full Stack Software Engineer with experience in Web
          applications, Mobile applications, and Software development. I help
          businesses streamline operations and achieve their goals through
          innovative technology. Explore my projects and discover the skills
          that bring ideas to life.
        </motion.p>
        <motion.div variants={slideInFromLeft(1)} className="flex gap-4">
          <a
            className="py-2  px-5 text-center text-white cursor-pointer rounded-lg border  border-[#7042f88b] opacity-[0.9] hover:border-white"
            href="#projects"
            aria-label="View Projects"
            title="Explore My Projects"
          >
            Learn more
          </a>
          <a
            className="button-primary  py-2 px-5 text-center text-white cursor-pointer rounded-lg "
            href="#contact-me"
          >
            Book a call
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 hidden lg:flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="Web application development"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
