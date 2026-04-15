"use client";

import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const demos = ["Clinic", "Gym", "Coaching", "Portfolio"];

export function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Before / after demo transformations</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {demos.map((demo, index) => (
            <motion.div
              key={demo}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{demo} Website Demo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4">
                      <p className="text-xs uppercase tracking-widest text-red-300">Before</p>
                      <p className="mt-2 text-sm text-zinc-300">Slow, outdated, and not generating inquiries.</p>
                    </div>
                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                      <p className="text-xs uppercase tracking-widest text-emerald-300">After</p>
                      <p className="mt-2 text-sm text-zinc-300">Premium UI with clear CTAs and lead capture system.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
