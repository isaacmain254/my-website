import { LINKS } from "@/constants";
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { FaStar } from "react-icons/fa";

export const Footer = ({ currentYear }: { currentYear: number }) => {
  return (
    <footer className="w-full lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center bg-transparent text-gray-200 shadow-lg p-[15px] border-t border-[#7042f88b]">
      <div className=" text-[15px] text-center">
        &copy; Isaac Maina {currentYear} Inc. All rights reserved.
      </div>
      <div className="flex gap-4  mb-5 md:mb-0">
        <Link
          href={LINKS.sourceCode}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Star this repository"
          className="flex gap-1 items-center"
        >
          <span className="flex flex-row items-center p-1 text-2xl bg-[#7042f88b] rounded-full">
            <FaStar />
          </span>
          STAR
        </Link>
        <Link
          href={LINKS.fork}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="fork this repository"
          className="flex gap-1 items-center"
        >
          <span className="flex flex-row items-center p-1 text-2xl bg-[#7042f88b] rounded-full">
            <CgGitFork />
          </span>
          FORK
        </Link>
      </div>
    </footer>
  );
};
