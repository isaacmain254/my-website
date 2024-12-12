"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import Image from "next/image";
import MyProfile from "@/public/mainawambui.jpg";

export const AboutMe = () => {
  return (
    <section>
      <div
        id="about-me"
        className="w-full h-auto flex flex-col items-center justify-center"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <span className="Welcome-text text-[13px]">
            What you should know about me
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center mb-[10px]"
        >
          <h2>About Me</h2>
        </motion.div>
      </div>
      <div className="w-full lg:w-[80%]  mx-auto">
        <div className="w-full px-3 lg:px-0 flex justify-between items-center flex-col lg:flex-row gap-5">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="w-full lg:w-1/2 h-full mx-auto"
          >
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-lg md:rounded-full overflow-hidden mx-auto  border border-[#7042f88b]">
              <Image
                src={MyProfile}
                alt="Isaac Maina - fullstack software developer"
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full lg:w-1/2 h-full text-lg text-gray-400 self-center"
          >
            <p>
              I’m a full-stack software developer from Kenya with a degree in
              Computer Science, specializing in custom web and mobile
              application development. I have hands-on experience with
              technologies like Python, JavaScript, Typescript, and Webflow,
              enabling me to build responsive, user-friendly, and scalable
              digital solutions.
            </p>
            <br />
            <p>
              My passion lies in creating innovative software solutions that
              align with business needs, helping companies enhance their online
              presence and achieve their goals. I excel in understanding client
              requirements, translating them into functional designs, and
              delivering robust, thoroughly tested applications..
            </p>
            <br />
            <p>
              In an ever-changing tech industry, I stay ahead by constantly
              learning new technologies and improving my skills. Whether it’s
              building custom websites, developing full-stack applications, or
              crafting sleek Webflow designs, I’m committed to delivering
              impactful digital products that make a difference.
            </p>
            <br />
            <p>
              If you’re looking for a freelance software developer who combines
              technical expertise with a deep understanding of business needs,
              let’s collaborate to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
