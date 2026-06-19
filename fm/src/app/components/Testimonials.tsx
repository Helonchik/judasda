const testimonials = [
  {
    quote: "The trainers pushed me to achieve goals I never thought possible. I lost 30 lbs in four months and I actually enjoy coming in every morning.",
    name: "Sarah Johnson",
    role: "Lost 30 lbs · Member since 2023",
    initials: "SJ",
  },
  {
    quote: "As a marathon runner I needed a gym that understood my specific needs. The cardio programs and recovery facilities are genuinely world-class.",
    name: "Mike Chen",
    role: "Marathon Runner · Member since 2022",
    initials: "MC",
  },
  {
    quote: "With 24/7 access and flexible class times, I finally maintain a consistent fitness routine despite my schedule. Game changer is an understatement.",
    name: "Emily Rodriguez",
    role: "VP of Operations · Member since 2024",
    initials: "ER",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#0d0d0d] py-24 px-8 lg:px-16 xl:px-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none font-black text-white uppercase">
            Success Stories
          </h2>
        </div>

        <div className="divide-y divide-white/[0.06]">
          {testimonials.map((t, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_18rem] gap-8 py-10 items-start">
              <div>
                <span className="font-display text-6xl text-[#c8f135]/20 leading-none font-black block mb-4">"</span>
                <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/75 leading-relaxed font-light max-w-2xl">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-4 md:justify-end md:pt-16">
                <div className="w-10 h-10 rounded-full bg-[#c8f135] flex items-center justify-center shrink-0">
                  <span className="font-display text-sm font-black text-black">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{t.name}</p>
                  <p className="text-[11px] text-white/35 mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
