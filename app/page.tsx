import { BackToTop } from "@/components/layout/back-to-top";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Toolbox } from "@/components/sections/toolbox";
import { Writing } from "@/components/sections/writing";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <Experience />
      <Toolbox />
      <Writing />
      <Contact />
      <BackToTop />
    </>
  );
}
