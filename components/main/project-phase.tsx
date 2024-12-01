"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import Image from "next/image";
import AnimatedDiv from "../sub/AnimatedDiv";

const ProjectPhase = () => {
  return (
    <section className="w-full lg:w-[75%] mx-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <span className="Welcome-text text-[13px]">
          I offer full-stack development services
        </span>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        <h2>Project Phase</h2>
      </motion.div>
      <AnimatedDiv className="flex flex-col md:flex-row justify-between  gap-8 mt-20 max-lg:px-3">
        <div className="w-full p-5 border border-[#7042f88b] opacity-[0.9] rounded-md">
          <Image src="/research.png" alt="" width={60} height={60} />
          <h3 className="text-white text-2xl py-3 leading-8">Research</h3>
          <p className="text-[#9ca3af] text-base">
            Delving into your requirements, analyzing target audiences, and
            gathering insights to craft the perfect solution
          </p>
        </div>
        <div className="w-full p-5 border border-[#7042f88b] opacity-[0.9] rounded-md">
          <Image src="/design.png" alt="" width={60} height={60} />
          <h3 className="text-white text-2xl py-3 leading-8">Design</h3>
          <p className="text-[#9ca3af] text-base">
            Transforming ideas into visually engaging and user-friendly
            interfaces tailored to your goals.
          </p>
        </div>
        <div className="w-full p-5 border border-[#7042f88b] opacity-[0.9] rounded-md">
          <Image src="/development.png" alt="" width={60} height={60} />
          <h3 className="text-white text-2xl py-3 leading-8">Development</h3>
          <p className="text-[#9ca3af] text-base">
            Building robust, scalable, and high-performance applications using
            modern technologies.
          </p>
        </div>
      </AnimatedDiv>
    </section>
  );
};

export default ProjectPhase;
