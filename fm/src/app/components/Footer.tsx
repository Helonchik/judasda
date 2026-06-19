import { Instagram, Youtube } from "lucide-react";

const links = {
  Train: ["Programs", "Schedule", "Pricing", "Personal Training"],
  Company: ["About Us", "Careers", "Press", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/35 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-xl font-black tracking-widest text-white uppercase block mb-4">
              Fit<span className="text-[#c8f135]">Core</span>
            </span>
            <p className="text-[12px] leading-relaxed max-w-[18rem]">
              Transform your body and mind with world-class fitness programs, elite trainers, and a community built around results.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-5">{group}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[12px] hover:text-white transition-colors duration-150">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[11px]">© 2026 FitCore. All rights reserved.</p>
          <p className="text-[11px]">123 Fitness Street, New York, NY 10001 &nbsp;·&nbsp; (555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
}
