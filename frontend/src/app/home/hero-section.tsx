import { useRef, useState } from "react";

export default function HeroSection() {
  const [clicked, setCliked] = useState(false);
  const programmerRef = useRef<HTMLSpanElement | null>(null);
  return (
    <section className="h-[80%] md:px-20 px-4 flex md:flex-row flex-col-reverse w-full">
      <div className="w-full h-full md:py-0">
        <div className="h-full flex flex-col justify-center gap-y-4">
          <h1 className="md:text-5xl text-2xl font-semibold text-neutral-100 my-1 cursor-none">
            Hello, I am a{" "}
            <span
              ref={programmerRef}
              onMouseEnter={() => {
                if (!programmerRef.current) return;
                programmerRef.current.textContent = "freelancer";
              }}
              onMouseLeave={() => {
                if (!programmerRef.current) return;
                programmerRef.current.textContent = "programmer";
              }}
              className="bg-amber-200 font-bold text-neutral-800 px-1"
            >
              programmer
            </span>
            .
          </h1>
          <h2 className="md:text-xl text-lg">
            I will try to do anything needed to launch a successful{" "}
            <span className="font-medium underline underline-offset-2">
              product
            </span>{" "}
            in the market except writing code in Assembly.
          </h2>
          <div className="flex flex-row gap-x-4">
            <a
              target="_blank"
              href="https://x.com/AdityaSharmaLve"
              onMouseDown={() => setCliked(true)}
              onMouseUp={() => setCliked(false)}
              className="relative px-8 group py-1.5 cursor-pointer my-5 text-neutral-900"
            >
              <span className="bg-amber-300 group-hover:border-r group-hover:border-b border-amber-500 absolute top-0 left-0 right-0 bottom-0 -z-10" />
              {clicked ? null : (
                <span className="bg-amber-500 group-hover:bg-amber-300 absolute transition top-0.5 left-0.5 -right-0.5 -bottom-0.5 -z-20" />
              )}
              Say hi!
            </a>
            <a
              target="_blank"
              href="https://i.adityasharma.live/github"
              className="relative px-8 group py-1.5 cursor-pointer my-5 text-neutral-100"
            >
              <span className="bg-neutral-800 group-hover:border-r group-hover:border-b border-neutral-500 absolute top-0 left-0 right-0 bottom-0 -z-10" />
        
                <span className="bg-neutral-700 group-hover:bg-neutral-600 absolute transition top-0.5 left-0.5 -right-0.5 -bottom-0.5 -z-20" />
             
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-[45%] md:mb-0 mb-10">
        <img src="/rounded-icon.png" className="h-full w-full object-contain" />
      </div>
    </section>
  );
}
