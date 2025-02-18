import React from "react";
import HeroSection from "./home/hero-section";
import ProjectSection from "./home/projects-section";
import { Switch } from "radix-ui";
import LearningSection from "./home/learning-section";

export default function Home() {
  return (
    <React.Fragment>
      <div className="sticky top-10 flex justify-end">
        <div className="gap-x-2 bg-amber-200 inline-flex rounded-full pl-2 text-neutral-900 text-sm items-center">
          Design mode{" "}
          <Switch.Root
            onCheckedChange={(checked) => {
              if (checked) document.designMode = "on";
              else document.designMode = "off";
            }}
            className="SwitchRoot my-auto"
            id="airplane-mode"
          >
            <Switch.Thumb className="SwitchThumb" />
          </Switch.Root>
        </div>
      </div>
      <HeroSection />
      <ProjectSection />
      <LearningSection/>
    </React.Fragment>
  );
}
