import { ArrowRight } from "lucide-react";

const stats = [
  { num: "4,200+", label: "Active Members" },
  { num: "98%", label: "Satisfaction" },
  { num: "150+", label: "Weekly Classes" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#0d0d0d] overflow-hidden">
      {/* Text panel */}
      <div className="flex flex-col justify-end pb-14 pt-36 px-8 lg:px-16 xl:px-20 relative z-10">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#c8f135] mb-7">
          Est. 2019 &nbsp;·&nbsp; New York City
        </p>

        <h1 className="font-display text-[clamp(5.5rem,12vw,9.5rem)] leading-[0.86] font-black text-white uppercase mb-9">
          Push<br />Your<br />Limits
        </h1>

        <p className="text-[15px] text-white/40 max-w-xs mb-10 leading-relaxed font-light">
          Expert coaching, elite facilities, and a community that pushes you further than you thought possible.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#join"
            className="inline-flex items-center gap-2 bg-[#c8f135] text-black text-[11px] uppercase tracking-[0.18em] px-8 py-4 font-medium hover:bg-white transition-colors duration-200"
          >
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 border border-white/15 text-white text-[11px] uppercase tracking-[0.18em] px-8 py-4 hover:border-white/40 transition-colors duration-200"
          >
            View Programs
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/[0.08] pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-black text-white">{s.num}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image panel */}
      <div className="relative h-[55vw] lg:h-auto bg-[#1a1a1a]">
        <img
          src="https://images.unsplash.com/photo-1649789248266-ef1c7f744f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dCUyMHBlb3BsZXxlbnwxfHx8fDE3ODE4OTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Athlete training at FitCore"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* left fade to match dark panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent lg:from-[#0d0d0d]/60 lg:via-transparent" />
      </div>
    </section>
  );
}
