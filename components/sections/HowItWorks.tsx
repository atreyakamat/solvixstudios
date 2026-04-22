"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Analysis",
    description: "We audit your current online presence and identify where you are losing customers.",
  },
  {
    number: "02",
    title: "Engineering",
    description: "We design a high-converting website and set up the AI-powered backend (n8n, Webhooks).",
  },
  {
    number: "03",
    title: "Growth",
    description: "Launch the system and watch leads flow directly into your WhatsApp and CRM automatically.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 relative overflow-hidden" id="how-it-works-simple">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black tracking-tighter text-[var(--foreground)] sm:text-7xl">
            The Blueprint to <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent italic">Scale.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-[10rem] font-black text-purple-500/5 absolute -top-20 -left-10 select-none group-hover:text-purple-500/10 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-[var(--foreground)] mb-6 tracking-tight uppercase italic">{step.title}</h3>
                <p className="text-xl font-bold text-zinc-500 italic leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
