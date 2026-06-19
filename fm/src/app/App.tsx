import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Programs } from "./components/Programs";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
