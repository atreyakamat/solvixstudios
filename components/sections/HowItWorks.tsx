"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "We analyze your business",
    description: "We audit your current online presence and identify where you are losing customers.",
  },
  {
    number: "02",
    title: "We build your system",
    description: "We design a high-converting website and set up the AI-powered backend (n8n, Webhooks).",
  },
  {
    number: "03",
    title: "You get more customers",
    description: "Launch the system and watch leads flow directly into your WhatsApp and CRM automatically.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <div className="text-5xl font-extrabold text-white/5 mb-6">{step.number}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-zinc-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
