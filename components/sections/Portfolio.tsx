"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    client: "Antarman Clinic",
    industry: "Healthcare",
    result: "Unified Patient Booking",
    features: ["AI Receptionist", "WhatsApp Automation"],
    image: "bg-zinc-100 dark:bg-zinc-900/50",
    accent: "text-blue-500"
  },
  {
    client: "Amthane Valley",
    industry: "Real Estate",
    result: "Automated Lead Funnel",
    features: ["Virtual Tour Booking", "CRM Integration"],
    image: "bg-zinc-100 dark:bg-zinc-900/50",
    accent: "text-purple-500"
  },
  {
    client: "Pixel & Purpose",
    industry: "Creative Agency",
    result: "SaaS Workflow Sync",
    features: ["n8n Architecture", "Project Dashboard"],
    image: "bg-zinc-100 dark:bg-zinc-900/50",
    accent: "text-pink-500"
  },
  {
    client: "TrackNow",
    industry: "Logistics",
    result: "Fleet Data Automation",
    features: ["API Connectivity", "Custom Reports"],
    image: "bg-zinc-100 dark:bg-zinc-900/50",
    accent: "text-emerald-500"
  },
  {
    client: "Bilton Tech",
    industry: "Enterprise IT",
    result: "24/7 AI Support",
    features: ["AI Voice Agent", "Incident Ticketing"],
    image: "bg-zinc-100 dark:bg-zinc-900/50",
    accent: "text-indigo-500"
  }
];

export function Portfolio() {
  return (
    <section className="py-32 relative overflow-hidden bg-dot-pattern" id="portfolio">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[0.7rem] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-6"
            >
              <Trophy size={12} />
              Case Studies
            </motion.div>
            <h2 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-6xl">
              Systems built for <span className="text-purple-500 italic">scale.</span>
            </h2>
            <p className="mt-8 text-lg font-medium text-zinc-500 max-w-xl">
              We engineer authoritative digital platforms that dominate their respective markets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-[var(--glass-border)] bg-[var(--card-bg)] p-2 transition-all duration-300 hover:border-purple-500/30">
                <div className={`h-48 w-full rounded-xl ${project.image} relative flex items-center justify-center overflow-hidden border border-[var(--glass-border)]`}>
                  <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest opacity-20 group-hover:opacity-40 transition-opacity">
                    {project.client}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="h-8 w-8 rounded-lg bg-[var(--background)] border border-[var(--glass-border)] flex items-center justify-center text-zinc-400 group-hover:text-purple-500 group-hover:border-purple-500/50 transition-all">
                       <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-zinc-400">{project.industry}</span>
                    <h3 className="text-xl font-bold text-[var(--foreground)] mt-1 tracking-tight">{project.client}</h3>
                  </div>
                  
                  <div className="bg-purple-500/[0.03] border border-purple-500/10 rounded-xl p-4 mb-6">
                     <span className="block text-[0.6rem] font-black text-purple-500/60 uppercase tracking-widest mb-1">Impact</span>
                     <span className="text-md font-bold text-[var(--foreground)] tracking-tight">{project.result}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-[0.75rem] font-semibold text-zinc-500">
                        <CheckCircle2 className="h-3 w-3 text-purple-500/40" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
