import { PropsWithChildren } from "react";
import { learners } from "../../lib/constants";
import { LearnerT } from "../../lib/types";

export default function LearningSection() {
  return (
    <section className="flex flex-col items-center w-full min-h-[40vh]">
      <div className="flex justify-center">
        <span className="text-3xl">Where am I learning from? (Best combination)</span>
      </div>
      <div className="grid grid-cols-4 py-10 gap-x-5">
        {
          learners.map((learner)=>(
            <LearningCard key={learner.id} {...learner}/>
          ))
        }
      </div>
    </section>
  );
}


function LearningCard(props: PropsWithChildren<LearnerT>) {
  return (
    <a href={props.url} target="_blank" className="flex hover:bg-neutral-800 p-2 items-center gap-x-4">
      <div>
        <img className="h-14 w-14 rounded-full object-cover" src={props.profilePicture} alt={props.name}/>
      </div>
      <div className="flex flex-col">
        <span className="text-neutral-100 text-lg">{props.name}</span>
        <span className="text-neutral-400 text-sm">best: {props.best}</span>
      </div>
    </a>
  )
}