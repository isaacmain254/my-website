"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex items-center gap-2 text-white border border-[#9ca3af] px-5 py-1 rounded-full opacity-[0.9]"
    >
      <Image src={`/skills/${src}`} width={30} height={30} alt={name} />
      <p className="text-[#9ca3af] text-base">{name}</p>
    </motion.div>
  );
};
