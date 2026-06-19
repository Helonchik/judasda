const programs = [
  {
    title: "Strength Training",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwd2VpZ2h0c3xlbnwxfHx8fDE3ODE4OTY1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    level: "All Levels",
    duration: "45–60 min",
  },
  {
    title: "Yoga & Wellness",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc4MTg5NjU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    level: "Beginner",
    duration: "60 min",
  },
  {
    title: "Cardio Blast",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBydW5uaW5nJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzgxODk2NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    level: "Intermediate",
    duration: "30–45 min",
  },
  {
    title: "Personal Training",
    image: "https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3ODE4OTY1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    level: "Customized",
    duration: "60 min",
  },
  {
    title: "Group Classes",
    image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzc3xlbnwxfHx8fDE3ODE4OTY1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    level: "All Levels",
    duration: "45 min",
  },
];

function ProgramCard({ program, tall = false }: { program: typeof programs[0]; tall?: boolean }) {
  return (
    <div className={`relative group overflow-hidden bg-[#1a1a1a] ${tall ? "h-full min-h-[26rem]" : "h-60 lg:h-72"}`}>
      <img
        src={program.image}
        alt={program.title}
        className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
      />
      {/* Bottom fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">
              {program.level} &nbsp;·&nbsp; {program.duration}
            </p>
            <h3 className="font-display text-2xl lg:text-3xl font-black text-white uppercase leading-none">
              {program.title}
            </h3>
          </div>
          <a
            href="#contact"
            className="shrink-0 ml-4 text-[10px] uppercase tracking-[0.18em] bg-[#c8f135] text-black px-4 py-2 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200"
          >
            Book
          </a>
        </div>
      </div>
    </div>
  );
}

export function Programs() {
  return (
    <section id="programs" className="bg-[#0d0d0d] py-24 px-8 lg:px-16 xl:px-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none font-black text-white uppercase">
            Our Programs
          </h2>
          <a
            href="#contact"
            className="self-start md:self-end text-[11px] uppercase tracking-[0.2em] border border-white/15 text-white/60 px-6 py-3 hover:border-white/40 hover:text-white transition-colors duration-200"
          >
            View Full Schedule →
          </a>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {/* Left: tall card spanning 2 rows */}
          <div className="lg:row-span-2 lg:col-span-1">
            <ProgramCard program={programs[0]} tall />
          </div>
          {/* Right top: two side-by-side */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-1">
            <ProgramCard program={programs[1]} />
            <ProgramCard program={programs[2]} />
          </div>
          {/* Right bottom: two side-by-side */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-1">
            <ProgramCard program={programs[3]} />
            <ProgramCard program={programs[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
