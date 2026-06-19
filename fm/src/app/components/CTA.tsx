import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section id="join" className="bg-[#c8f135] py-24 px-8 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-black/40 mb-5">Limited Time</p>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.88] font-black text-black uppercase">
            First Week<br />Free
          </h2>
          <p className="text-[13px] text-black/50 mt-6 max-w-xs leading-relaxed">
            No credit card. No contracts. Just show up and train. Cancel anytime after your trial.
          </p>
        </div>

        <div>
          {submitted ? (
            <div className="border border-black/15 p-8">
              <p className="font-display text-3xl font-black text-black uppercase">You're In.</p>
              <p className="text-[13px] text-black/50 mt-2">Check your inbox — we'll send your trial details within the hour.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-black/10 text-black placeholder-black/30 text-[13px] px-5 py-4 outline-none border border-black/10 focus:border-black/30 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-black text-[#c8f135] text-[11px] uppercase tracking-[0.18em] px-7 py-4 font-medium hover:bg-[#0d0d0d] transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
                >
                  Start Trial <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-black/35">
                No credit card &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; 7-day free trial
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
