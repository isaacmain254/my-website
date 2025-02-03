"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.addEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    isVisible && (
      <div
        className="fixed z-30 bottom-3 right-3 flex flex-row items-center p-2 text-white text-2xl bg-[#7042f88b] rounded-full animate-bounce"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </div>
    )
  );
};

export default BackToTop;
