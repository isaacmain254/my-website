"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

import { LINKS, NAV_LINKS } from "@/constants";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header role="banner" className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-2 lg:px-10">
      <nav aria-label="Main Navigation" className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin"
          />
          <div className="font-bold text-gray-300">
            Isaac Maina
          </div>
        </Link>

        {/* Mobile menu starts here */}
        <div
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {mobileMenuOpen && (
          <div className="flex flex-col w-full absolute z-50 top-14 right-0 left-0 py-4 px-2 bg-[#1e1e1e] text-white  leading-9 ">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer border-b border-gray-400 py-2 hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}

            {/* source code */}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer border-b border-gray-400 py-2 hover:text-[rgb(112,66,248)] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Source Code
            </Link>
          <Link
            href="https://www.upwork.com/freelancers/~01466943c42b35dcd4"
            target="_blank"
            rel="noreferrer noopener"
             className="flex gap-2 cursor-pointer border-b border-gray-400 py-2 hover:text-[rgb(112,66,248)] transition"
             onClick={() => setMobileMenuOpen(false)}
          >
            Upwork
          </Link>
          <Link
            href="https://www.fiverr.com/isaac_maina"
            target="_blank"
            rel="noreferrer noopener"
             className="flex gap-2 cursor-pointer border-b border-gray-400 py-2 hover:text-[rgb(112,66,248)] transition"
             onClick={() => setMobileMenuOpen(false)}
          >
            Fiverr
          </Link>
          </div>
        )}
        <div className="w-[500px] h-full hidden lg:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}

            {/* source code */}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
            >
              Source Code
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-row gap-3">
          <Link
            href="https://www.upwork.com/freelancers/~01466943c42b35dcd4"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Hire me on Upwork"
             className="cursor-pointer hover:scale-125"
          >
            <Image
              src="/upwork.png"
              alt="Isaac Maina Upwork profile"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://www.fiverr.com/isaac_maina"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Hire me on Fiverr"
             className="cursor-pointer hover:scale-125"
          >
            <Image
              src="/fiverr.png"
              alt="Isaac Maina Fiverr profile"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};
