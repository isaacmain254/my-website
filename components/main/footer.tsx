import Link from "next/link";

import { SOCIALS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center bg-transparent text-gray-200 shadow-lg p-[15px]">
        <div className=" text-[15px] text-center">
          &copy; Isaac Maina {new Date().getFullYear()} Inc. All rights reserved.
        </div>
        <div className="flex gap-4">
          {SOCIALS.map((social, index) => (
             <Link
             key={index}
             href={social.link}
             target="_blank"
             rel="noreferrer noopener"
             className="flex flex-row items-center p-2 text-2xl bg-[#7042f88b] rounded-full mb-5 md:mb-0"
           >
             {social.icon && <social.icon />}
           </Link>
          ))}
        </div>
    </footer>
  );
};
