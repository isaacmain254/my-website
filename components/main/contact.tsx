"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import React, { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { SOCIALS } from "@/constants";
import { sendMessage } from "@/app/actions/send-email";

const initialState = {
  type: "",
  message: "",
};

const Contact = () => {
  const [state, formAction] = useFormState(sendMessage, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  // Effect to clear the form on successful submission
  useEffect(() => {
    if (state?.type === "SUCCESS" && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <section
      id="contact-me"
      className=" py-20 w-full lg:w-[80%] mx-auto text-white px-3"
    >
      <div className="w-full flex flex-col items-center justify-center mb-10">
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <span className="Welcome-text text-[13px]">Let&apos; connect</span>
        </div>

        <h2 className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
          Contact Me
        </h2>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5 ">
        <div className="w-full md:w-1/2 border border-[#7042f88b] rounded-lg px-3  py-7">
          <p>
            If you have any questions or concerns, please don&apos;t hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests.
          </p>
          <form ref={formRef} action={formAction} className="flex flex-col">
            {state?.type && (
              <div
                className={`bg-[#2A0E61] p-2 rounded-lg mt-3
                  ${
                    state?.type === "ERROR" ? "text-red-600 " : "text-green-500"
                  }`}
              >
                {state?.message}
              </div>
            )}
            <div className="w-full flex flex-col gap-1 my-4">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className=" text-white bg-[#2A0E61] p-2 rounded-lg opacity-[0.6]"
              />
            </div>
            <div className="w-full flex flex-col gap-1 my-4">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className=" text-white bg-[#2A0E61] p-2 rounded-lg opacity-[0.6]"
              />
            </div>
            <div className="w-full flex flex-col gap-1 my-4">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className=" text-white bg-[#2A0E61] p-2 rounded-lg opacity-[0.6]"
              />
            </div>

            <input
              type="submit"
              value="Send message"
              className="button-primary  py-2 px-5 text-center text-white cursor-pointer rounded-lg justify-self-center"
            />
          </form>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-around">
          <Image
            src="/email-illustration-removebg-preview.png"
            alt=""
            width={350}
            height={350}
          />

          <div>
            <div className="flex items-center gap-2">
              <MdOutlineEmail className="text-2xl" />
              <span>isaacmain72@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 py-3">
              <MdLocalPhone className="text-2xl" />
              <span>+254 748923894</span>
            </div>
          </div>
          <div className="flex gap-4">
            {SOCIALS.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social["aria-label"]}
                className="flex flex-row items-center p-2 text-2xl bg-[#7042f88b] rounded-full mb-5 md:mb-0"
              >
                {social.icon && <social.icon />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
