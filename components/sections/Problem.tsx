"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: TrendingDown,
    title: "No consistent leads",
    description: "You're relying on word-of-mouth while your competitors dominate local search and social media.",
  },
  {
    icon: XCircle,
    title: "Missed inquiries",
    description: "Every minute a lead waits for a reply, the chance of conversion drops by 80%. You're losing money in real-time.",
  },
  {
    icon: Clock,
    title: "Manual follow-ups",
    description: "Wasting hours chasing people who aren't interested. Your team should be closing, not chasing.",
  },
  {
    icon: AlertTriangle,
    title: "Weak online presence",
    description: "A website that looks like it's from 2015 erodes trust in seconds. Professional clients expect professional sites.",
  },
];

export function Problem() {
  return (
    <section className="py-32" id="problem">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="text-red-500 font-bold tracking-widest uppercase text-xs mb-4">The Reality</div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Running a business is hard. <br />
              <span className="text-zinc-500">Generating leads shouldn't be.</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Most local businesses have a "leaky bucket" problem. 
              They spend time and money on marketing, only for leads to 
              disappear because of poor design and slow systems.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <p className="text-sm text-red-200/80 font-medium">
                The average business loses 60% of potential customers due to slow response times.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04]">
                  <problem.icon className="h-6 w-6 text-red-500/50 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{problem.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
