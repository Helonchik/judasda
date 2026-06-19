import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "29",
    tag: "Get started",
    features: [
      "Gym equipment access",
      "Locker room access",
      "Mobile app",
      "Free fitness assessment",
    ],
  },
  {
    name: "Premium",
    price: "59",
    tag: "Most popular",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "24/7 gym access",
      "Nutrition consultation",
      "2 guest passes/month",
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "99",
    tag: "Serious athletes",
    features: [
      "Everything in Premium",
      "4 PT sessions/month",
      "Priority class booking",
      "Massage therapy discount",
      "Free merchandise",
      "Dedicated locker",
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-[#0d0d0d] py-24 px-8 lg:px-16 xl:px-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none font-black text-white uppercase">
            Membership<br />Plans
          </h2>
          {/* Billing toggle */}
          <div className="flex items-center gap-4">
            <span className={`text-[11px] uppercase tracking-[0.18em] ${!annual ? "text-white" : "text-white/35"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${annual ? "bg-[#c8f135]" : "bg-white/10"}`}
              aria-label="Toggle annual billing"
            >
              <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${annual ? "translate-x-6" : ""}`} />
            </button>
            <span className={`text-[11px] uppercase tracking-[0.18em] ${annual ? "text-white" : "text-white/35"}`}>
              Annual <span className="text-[#c8f135]">–20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07] border border-white/[0.07]">
          {plans.map((plan) => {
            const price = annual ? Math.round(Number(plan.price) * 0.8) : plan.price;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 lg:p-10 ${plan.highlight ? "bg-white/[0.04]" : ""}`}
              >
                {plan.highlight && (
                  <span className="absolute top-0 right-0 text-[9px] uppercase tracking-[0.25em] bg-[#c8f135] text-black px-3 py-1.5">
                    Popular
                  </span>
                )}
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 mb-3">{plan.tag}</p>
                  <p className="font-display text-6xl font-black text-white leading-none">
                    ${price}
                    <span className="text-lg font-normal text-white/30 ml-1">/mo</span>
                  </p>
                  <p className="font-display text-2xl font-black text-white uppercase mt-2">{plan.name}</p>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[13px] text-white/50">
                      <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#c8f135]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#join"
                  className={`block text-center text-[11px] uppercase tracking-[0.18em] py-4 font-medium transition-colors duration-200 ${
                    plan.highlight
                      ? "bg-[#c8f135] text-black hover:bg-white"
                      : "border border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
