const features = [
  { num: "01", title: "Modern Equipment", description: "State-of-the-art machines and free weights updated annually, for every level." },
  { num: "02", title: "Expert Trainers", description: "Certified coaches with proven track records. Not salespeople. Not hobbyists." },
  { num: "03", title: "Flexible Schedule", description: "Over 150 classes per week, 5 AM through 11 PM, seven days. Your schedule, not ours." },
  { num: "04", title: "Results Driven", description: "Programming built around measurable outcomes — strength, endurance, body composition." },
  { num: "05", title: "24/7 Access", description: "Premium members get keycard entry any hour. No crowds, no waiting, no excuses." },
  { num: "06", title: "Wellness Focus", description: "Holistic programming: strength, mobility, nutrition, and recovery in one ecosystem." },
];

export function Features() {
  return (
    <section id="about" className="bg-[#0d0d0d] py-24 px-8 lg:px-16 xl:px-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none font-black text-white uppercase">
            Why Train<br />With Us
          </h2>
          <p className="text-[13px] text-white/35 max-w-[22rem] leading-relaxed">
            Six reasons members choose FitCore and stay for years, not months.
          </p>
        </div>

        <div className="divide-y divide-white/[0.06]">
          {features.map((f) => (
            <div
              key={f.num}
              className="group grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_14rem_1fr] gap-x-6 gap-y-1 py-6 items-start hover:bg-white/[0.025] transition-colors duration-150 -mx-3 px-3"
            >
              <span className="font-display text-xs font-black text-[#c8f135]/50 pt-0.5">{f.num}</span>
              <span className="text-[12px] uppercase tracking-[0.18em] text-white font-medium">{f.title}</span>
              <span className="col-start-2 md:col-start-3 text-[13px] text-white/35 leading-relaxed font-light">{f.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
