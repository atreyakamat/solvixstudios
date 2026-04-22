"use client";

import { motion } from "framer-motion";

const logos = [
  "CLINIQ+", "GYMVERSE", "EDUPEAK", "NOVA STUDIO", "WELLNEST", "DENTASMILE"
];

export function TrustStrip() {
  return (
    <section className="border-y border-[var(--glass-border)] bg-[var(--glass-bg)] py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-10">
          Trusted by growing businesses
        </p>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex min-w-full shrink-0 items-center justify-around gap-20 py-4"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center">
                <span className="text-3xl font-black text-zinc-300 dark:text-zinc-800 hover:text-purple-500 transition-colors cursor-default italic uppercase tracking-tighter">
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
