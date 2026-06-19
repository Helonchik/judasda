import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Programs", "Pricing", "About", "Contact"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <span className="font-display text-2xl font-black tracking-widest text-white uppercase">
            Fit<span className="text-[#c8f135]">Core</span>
          </span>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.22em] text-white/50 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
            <a
              href="#join"
              className="text-[11px] uppercase tracking-[0.2em] bg-[#c8f135] text-black px-7 py-3 font-medium hover:bg-white transition-colors duration-200"
            >
              Join Now
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 border-t border-white/[0.06]">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[11px] uppercase tracking-[0.22em] text-white/50 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="#join"
                className="text-[11px] uppercase tracking-[0.2em] bg-[#c8f135] text-black px-6 py-3 text-center font-medium"
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
