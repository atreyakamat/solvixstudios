import { AlertTriangle, BadgeCheck, BriefcaseBusiness, ShieldCheck } from "lucide-react";

import { CTA } from "@/components/sections/CTA";
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Services } from "@/components/sections/Services";

const trustLogos = ["CLINIQ+", "GYMVERSE", "EDUPEAK", "NOVA STUDIO", "WELLNEST"];
const testimonials = [
  "“Solvix helped us double appointment inquiries in the first week.”",
  "“The site looks world-class and closes leads faster on WhatsApp.”",
  "“Our coaching inquiries became consistent after launch.”",
];

export default function Home() {
  return (
    <div className="relative bg-[#050507] text-zinc-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <a href="#hero" className="text-lg font-semibold tracking-wide text-white">
            Solvix Studios
          </a>
          <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#pricing">Pricing</a>
            <a href="#lead-form" className="rounded-lg bg-white/10 px-3 py-2 text-white">
              Get Audit
            </a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />

        <section className="border-y border-white/10 bg-white/[0.02] px-6 py-5 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-zinc-400 sm:justify-between">
            <span>Trusted by growing local businesses</span>
            {trustLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
            {[
              { icon: AlertTriangle, title: "No bookings", body: "Your website gets traffic but no qualified leads." },
              { icon: BriefcaseBusiness, title: "Weak online presence", body: "Outdated design erodes trust in seconds." },
              { icon: ShieldCheck, title: "Losing customers", body: "Competitors with better funnels win local demand." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <item.icon className="h-5 w-5 text-amber-300" />
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-8 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/8 to-purple-500/8 p-8">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">The Solvix Conversion System</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "Conversion-focused design",
                "WhatsApp & lead capture integration",
                "Fast launch for immediate pipeline impact",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-zinc-200">
                  <BadgeCheck className="h-4 w-4 text-blue-300" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
        <Portfolio />

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">How it works</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                "1. We audit your business",
                "2. We design your system",
                "3. You get more customers",
              ].map((step) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-zinc-200">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Client results</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {testimonials.map((quote) => (
                <div key={quote} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-zinc-200">
                  {quote}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-zinc-400 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Solvix Studios. Growth-first digital systems.</p>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              WhatsApp
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
