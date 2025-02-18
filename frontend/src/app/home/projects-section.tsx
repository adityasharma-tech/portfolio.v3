import { PropsWithChildren } from "react";
import { projects } from "../../lib/constants";
import { ProjectT } from "../../lib/types";

export default function ProjectSection() {
  return (
    <section className="flex flex-col items-center w-full min-h-[70vh]">
      <div className="flex justify-center">
        <span className="text-3xl">My best projects</span>
      </div>
      <div className="grid grid-cols-3 gap-x-6 py-10">
        {projects.map((project)=>(
          <Project key={project.id} {...project}/>
        ))}
      </div>
    </section>
  );
}

function Project(props: PropsWithChildren<ProjectT>) {
  return <article className="w-smp-1 flex flex-col bg-neutral-800 group">
    <div className="relative">
      <img src={props.thumbnail}/>
      {props.openSource ? <span className="text-neutral-200 absolute right-1 bottom-1 bg-black/50 px-2 text-sm">
        open-source
      </span> : null}
      <a target="_blank" href={props.url} className="absolute group-hover:opacity-100 cursor-pointer inset-0 text-white bg-black/70 flex opacity-0 transition-opacity justify-center items-center">
        <span>Visit</span>
      </a>
    </div>
    <div className="p-3">
      <h3 className="text-lg font-medium my-1 mt-2">{props.name}</h3>
      <h4 style={{
        fontFamily: "Poppins-Regular, sans-serif"
      }} className="text-sm text-neutral-400 text-justify">{props.about}</h4>
      <div>
        
      </div>
    </div>
  </article>;
}
