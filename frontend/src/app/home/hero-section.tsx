export default function HeroSection() {
  return (
    <section className="h-[80%] px-20 flex flex-row w-full">
      <div className="w-full h-full">
        <div className="h-full flex flex-col justify-center gap-y-4">
          <h1 className="text-6xl font-semibold text-neutral-100">Hi, I am <span className="text-stone-200">Aditya</span></h1>
          <h2 className="text-2xl">I love to build useful Web & Android applications.</h2>
          <div className="flex flex-row gap-x-4">
            <button className="relative px-8 group py-1.5 cursor-pointer text-neutral-900">
              <span className="bg-amber-300 group-hover:bg-amber-300/90 absolute top-0 left-0 right-0 bottom-0 -z-10"/>
              <span className="bg-amber-500 group-hover:-translate-1 absolute transition top-0.5 left-0.5 -right-0.5 -bottom-0.5 -z-20"/>
              Say hi!
            </button>
            <button className="relative px-8 group py-1.5 cursor-pointer text-neutral-100">
              <span className="bg-neutral-900 group-hover:bg-neutral-700 absolute top-0 left-0 right-0 bottom-0 -z-10"/>
              <span className="bg-neutral-800 group-hover:-translate-1 absolute transition top-0.5 left-0.5 -right-0.5 -bottom-0.5 -z-20"/>
              My best projects
            </button>
          </div>
        </div>
      </div>
      <div className="w-[45%]">
        <img src="/rounded-icon.png" className="h-full w-full object-contain"/>
      </div>
    </section>
  )
}
