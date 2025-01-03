import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  MOBILE_APPS_SKILL,
  OTHER_SKILL,
  FRONTEND_SKILL
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />
      <h3 className="text-white text-xl mt-5">Frontend Development</h3>
      <div className="flex flex-row justify-around flex-wrap  gap-5 items-center">
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            index={i}
          />
        ))}
      </div>
      <h3 className="text-white text-xl mt-5">Backend Development</h3>
      <div className="flex flex-row justify-around flex-wrap  gap-5 items-center">
        {BACKEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            index={i}
          />
        ))}
      </div>
      <h3 className="text-white text-xl mt-5">Mobile Application Development</h3>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
        {MOBILE_APPS_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            index={i}
          />
        ))}
      </div>
      <h3 className="text-white text-xl mt-5">Web Design</h3>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
        {OTHER_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            index={i}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
