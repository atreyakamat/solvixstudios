import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Services } from "@/components/sections/Services";
import { AutomationFlow } from "@/components/sections/AutomationFlow";
import { Portfolio } from "@/components/sections/Portfolio";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-purple-500/30">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Solution />
        <Services />
        <AutomationFlow />
        <Portfolio />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
