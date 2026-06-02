import { LINKS } from "@/constants";
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { FaStar } from "react-icons/fa";

export const Footer = ({ currentYear }: { currentYear: number }) => {
  return (
    <footer className="mx-auto mt-8 w-full border-t border-[#7042f88b] bg-transparent px-6 py-10 text-gray-200 lg:w-[90%]">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Isaac Maina</h3>
          <p className="mt-3 text-sm text-gray-300">
            Full-stack developer and Zoho consultant helping businesses automate
            and scale with better systems.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Navigation
          </h4>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/">Home</Link>
            <Link href="/zoho-consulting">Zoho Consulting</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/#projects">Projects</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h4>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="mailto:isaacmain72@gmail.com">isaacmain72@gmail.com</Link>
            <Link href="tel:+254748923894">+254 748 923 894</Link>
            <p>Kenya · Serving clients globally</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Social
          </h4>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="https://www.linkedin.com/in/isaac-maina-wambui/" target="_blank" rel="noreferrer noopener">
              LinkedIn
            </Link>
            <Link href="https://github.com/isaacmain254" target="_blank" rel="noreferrer noopener">
              GitHub
            </Link>
            <Link href="https://wa.me/254748923894" target="_blank" rel="noreferrer noopener">
              WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-[#7042f84a] pt-5 md:flex-row">
        <div className="text-center text-[15px]">
          &copy; Isaac Maina {currentYear} Inc. All rights reserved.
        </div>
        <div className="flex gap-4">
          <Link
            href={LINKS.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Star this repository"
            className="flex items-center gap-1"
          >
            <span className="flex items-center rounded-full bg-[#7042f88b] p-1 text-2xl">
              <FaStar />
            </span>
            STAR
          </Link>
          <Link
            href={LINKS.fork}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="fork this repository"
            className="flex items-center gap-1"
          >
            <span className="flex items-center rounded-full bg-[#7042f88b] p-1 text-2xl">
              <CgGitFork />
            </span>
            FORK
          </Link>
        </div>
      </div>
    </footer>
  );
};
