"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16">
      <div className="hero-gradient absolute inset-0 -z-10 opacity-45" />
      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-5 w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300"
        >
          Premium Growth Partner
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Websites that bring you customers, not just traffic.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-zinc-300 sm:text-lg"
        >
          We help clinics, gyms, and local businesses grow with high-converting digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <a href="#lead-form">Get Free Audit</a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#portfolio">View Demo</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
