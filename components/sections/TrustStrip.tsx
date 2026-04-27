"use client";

import { motion } from "framer-motion";

const logos = [
  "Antarman Clinic", "Amthane Valley", "Pixel & Purpose", "TrackNow", "Bilton Tech", "StixNVibes"
];

export function TrustStrip() {
  return (
    <section className="border-y border-[var(--glass-border)] bg-[var(--background)] py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black 20%,black 80%,transparent)]">
          <motion.div
            className="flex min-w-full shrink-0 items-center justify-around gap-20 py-2"
            animate={{ x: [0, -1200] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center whitespace-nowrap">
                <span className="text-xl font-extrabold text-zinc-300 dark:text-zinc-800 hover:text-purple-500/50 transition-colors cursor-default uppercase tracking-tight">
                  {logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
