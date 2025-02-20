import React, { useState } from "react";
import HeroSection from "./home/hero-section";
import ProjectSection from "./home/projects-section";
import { Switch } from "radix-ui";
import LearningSection from "./home/learning-section";
import Footer from "./home/footer";

export default function Home() {
  const [designMode, setDesignMode] = useState(false);
  React.useLayoutEffect(() => {
    if (designMode) window.document.designMode = "on";
    else window.document.designMode = "off";
  }, [designMode]);
  return (
    <React.Fragment>
      <div className="sticky top-10 z-50 flex justify-between">
        <div className="flex items-center gap-x-3 bg-black/10 px-5 h-10 backdrop-blur-sm">
          <span className="font-medium">Aditya Sharma</span>
          <div className="border-l-2 border-neutral-400 h-full" />
          <span className="font-medium">Freelancer</span>
        </div>
        <div onClick={()=>setDesignMode(!designMode)} className="gap-x-2 bg-amber-200 cursor-pointer md:inline-flex hidden rounded-full my-auto pl-2 text-neutral-900 text-sm items-center">
          Design mode{" "}
          <Switch.Root
            checked={designMode}
            onCheckedChange={setDesignMode}
            className="SwitchRoot my-auto"
            id="airplane-mode"
          >
            <Switch.Thumb className="SwitchThumb" />
          </Switch.Root>
        </div>
      </div>
      <HeroSection />
      <ProjectSection />
      <LearningSection />
      <Footer />
    </React.Fragment>
  );
}
