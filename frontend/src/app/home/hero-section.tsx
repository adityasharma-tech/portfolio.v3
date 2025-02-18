import { useState } from "react";

export default function HeroSection() {
  const [clicked, setCliked] = useState(false);
  return (
    <section className="h-[80%] px-20 flex flex-row w-full">
      <div className="w-full h-full">
        <div className="h-full flex flex-col justify-center gap-y-4">
          <h1 className="text-5xl font-semibold text-neutral-100 my-1">
            Hello, I am a <span className="bg-amber-200 text-neutral-800 px-1">programmer</span>.
          </h1>
          <h2 className="text-xl">
            I will try to do anything needed to launch a successful <span className="font-medium underline underline-offset-2">product</span> in the market except writing code in Assembly.
          </h2>
          <div className="flex flex-row gap-x-4">
            <a target="_blank" href="https://i.adityasharma.live/x" onMouseDown={()=>setCliked(true)} onMouseUp={()=>setCliked(false)} className="relative px-8 group py-1.5 cursor-pointer my-5 text-neutral-900">
              <span className="bg-amber-300 group-hover:border-r group-hover:border-b border-amber-500 absolute top-0 left-0 right-0 bottom-0 -z-10" />
              {clicked ? null : <span className="bg-amber-500 group-hover:bg-amber-300 absolute transition top-0.5 left-0.5 -right-0.5 -bottom-0.5 -z-20" />}
              Say hi!
            </a>
          </div>
        </div>
      </div>
      <div className="w-[45%]">
        <img src="/rounded-icon.png" className="h-full w-full object-contain" />
      </div>
    </section>
  );
}
