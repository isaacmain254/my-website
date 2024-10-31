"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import Image from "next/image";
import MyProfile from "@/public/isaac-maina.png";

export const AboutMe = () => {
  return (
    <>
      <div id="about-me" className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            What you should know about
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
        >
          About Me
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
        >
          With me you are guaranteed project success
        </motion.div>
      </div>
      <div className="w-full lg:w-2/3 h-auto mx-auto">
        <div className="w-full h-auto flex justify-center items-center flex-col lg:flex-row">
          <motion.div variants={slideInFromLeft(0.5)} className="w-1/2 h-full mx-auto">
            <div className="w-full lg:w-3/4 h-3/4 mx-auto overflow-hidden">
              <Image
                src={MyProfile}
                alt="Isaac Maina - fullstack software developer"
                className="w-full h-full object-cover "
              />
            </div>
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.5)}
            className="w-full lg:w-1/2 h-full p-4 lg:p-0 text-xl text-gray-400 self-center"
          >
            <p className="">
              I'm a software developer with a Computer Science degree, offering
              software solutions for web and mobile applications. I’m always
              eager to learn and stay updated with the latest technologies. I’m
              always learning new stuff, especially in an industry that changes
              so rapidly.
            </p>
            <br />
            <p>
              My passion lies in digital products, and through development, I’ve
              found a captivating way to be a part of that world. I'm deeply
              passionate about crafting software solutions that align with
              business needs. My greatest strength is my ability to interpret
              clients’ requirements, design, code, and rigorously test software
              to ensure it meets their needs.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
