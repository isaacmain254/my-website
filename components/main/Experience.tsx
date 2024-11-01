"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "@/style";
import { experiences } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { slideInFromTop, textVariant } from "@/lib/motion";
import { Fragment } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { RxCode } from "react-icons/rx";
interface ExperienceProps {
    date: string;
    title: string;
    company_name: string;
    iconBg: string;
    points: string[];
}
const ExperienceCard = ({ experience }: {experience: ExperienceProps}) => (
  <VerticalTimelineElement
    visible={true}
    contentStyle={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}
    contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={<RxCode />}
  >
    <div>
      <h3 className=" text-[24px] font-bold">{experience.title}</h3>
      <p className=" text-[16px] font-semibold">{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2 ">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className=" text-[14px] pl-1 tracking-wider "
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant(0.5)} className="flex justify-center flex-col items-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
          What I have done so far
          </h1>
        </motion.div>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </Fragment>
  );
};

export default Experience;
