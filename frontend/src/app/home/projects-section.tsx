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
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

function Project(props: PropsWithChildren<ProjectT>) {
  return (
    <article className="w-smp-1 flex flex-col bg-[#181C14] group pb-3">
      <div className="relative">
        <img src={props.thumbnail} />
        {props.openSource ? (
          <span className="text-neutral-200 absolute right-1 bottom-1 bg-black/50 px-2 text-sm">
            open-source
          </span>
        ) : null}
        <a
          target="_blank"
          href={props.url}
          className="absolute group-hover:opacity-100 cursor-pointer inset-0 text-white bg-black/70 flex opacity-0 transition-opacity justify-center items-center"
        >
          <span>Visit</span>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-2"
          >
            <path
              d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305 1.506 1.512 1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062"
              stroke="#fff"
              strokeWidth={1.5}
              strokeLinecap="round"
            />
            <path
              d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305-1.506-1.512-1.37-4.1.303-5.78l2.424-2.433"
              stroke="#fff"
              strokeWidth={1.5}
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
      <div className="p-3 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-medium my-1 mt-2">{props.name}</h3>
          <h4
            style={{
              fontFamily: "Poppins-Regular, sans-serif",
            }}
            className="text-sm text-neutral-400 text-justify"
          >
            {props.about}
          </h4>
        </div>
        <div className="flex gap-2 mt-2 flex-wrap text-xs py-1 px-2">
          {props.tools.map((tool, idx) => (
            <img
              key={idx}
              src={`/icons/${tool}.png`}
              alt={tool}
              className="h-5 w-5 object-contain bg-neutral"
            />
          ))}
        </div>
      </div>
    </article>
  );
}
