"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft } from "@/lib/motion";
import Link from "next/link";
import { FEATURED_BLOGS } from "@/constants";
import { MdOutlineArrowOutward } from "react-icons/md";

export const FeaturedBlogs = () => {
  return (
    <section id="blogs" className=" py-20 w-full lg:w-[80%] mx-auto px-3">
      <div className="w-full flex flex-col items-center justify-center mb-10">
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <span className="Welcome-text text-[13px]">
            Community contribution
          </span>
        </div>

        <h2 className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
          Technical Writing
        </h2>
        <p className="text-[#9ca3af] text-base">
          I write technical articles and guides to share knowledge with the
          developer community covering topics on software development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center py-5">
        {FEATURED_BLOGS.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border border-[#7042f88b] rounded-lg p-5 h-full"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {blog.title}
                </h3>
                <Link
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Read more on the article"
                  className="text-[#7042f88b] text-2xl"
                >
                  <MdOutlineArrowOutward />
                </Link>
              </div>
              <p className="text-gray-300 text-base mb-4">{blog.description}</p>
            </div>
            <div className="text-xs text-gray-400 mb-3">
              Published on {blog.publisher}
            </div>
            <ul className="flex flex-wrap gap-3 mt-auto text-sm">
              {blog.technologies.map((technology, index) => (
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
      {/* <motion.div
        variants={slideInFromLeft(1)}
        className="w-full flex justify-center pt-10"
      >
        <Link
          href="/projects"
          className="button-primary  py-2 px-5 text-center text-white cursor-pointer rounded-lg "
        >
          View All Projects
        </Link>
      </motion.div> */}
    </section>
  );
};
