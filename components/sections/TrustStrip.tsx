"use client";

import { motion } from "framer-motion";

const logos = [
  "CLINIQ+", "GYMVERSE", "EDUPEAK", "NOVA STUDIO", "WELLNEST", "DENTASMILE"
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/5 bg-white/[0.01] py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Trusted by growing businesses
        </p>
        <div className="mt-8 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex min-w-full shrink-0 items-center justify-around gap-8 py-4"
            animate={{ x: [0, -1035] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center">
                <span className="text-xl font-bold text-zinc-700/80">{logo}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
