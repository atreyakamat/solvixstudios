"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    client: "SmileCare Dental",
    industry: "Clinic",
    result: "+140% Bookings",
    features: ["WhatsApp Booking", "Lead Notification"],
    image: "from-blue-600/30 to-purple-600/30",
  },
  {
    client: "Titan Fitness",
    industry: "Gym",
    result: "45 New Members/mo",
    features: ["Automated Funnel", "Member Portal"],
    image: "from-purple-600/30 to-pink-600/30",
  },
  {
    client: "Peak Academy",
    industry: "Education",
    result: "Instant Lead Sync",
    features: ["n8n Workflow", "CRM Sync"],
    image: "from-emerald-600/30 to-blue-600/30",
  },
];

export function Portfolio() {
  return (
    <section className="py-32 relative overflow-hidden" id="portfolio">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-black text-purple-500 mb-6 tracking-tighter"
            >
              <Trophy size={14} className="fill-current" />
              CASE STUDIES
            </motion.div>
            <h2 className="text-5xl font-black tracking-tighter text-[var(--foreground)] sm:text-7xl">
              Engineered for <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent italic">Results.</span>
            </h2>
            <p className="mt-8 text-xl font-bold text-zinc-500 italic leading-relaxed">
              We don&apos;t just build websites; we build growth engines. 
              See the transformation for yourself.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-[var(--glass-border)] bg-[var(--glass-bg)] p-3 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className={`h-72 w-full rounded-2xl bg-gradient-to-br ${project.image} relative flex items-center justify-center overflow-hidden`}>
                   <div className="absolute inset-0 bg-dot-pattern opacity-30" />
                  <span className="text-3xl font-black uppercase tracking-tighter text-white/5 group-hover:text-white/20 group-hover:scale-110 transition-all duration-700 italic">
                    {project.client}
                  </span>
                  
                  {/* Floating Result Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-2xl">
                       <span className="block text-xs font-black text-white/60 uppercase tracking-widest mb-1">Key Outcome</span>
                       <span className="text-xl font-black text-white italic tracking-tight">{project.result}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="rounded-lg bg-purple-500/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-purple-500 border border-purple-500/20">
                      {project.industry}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-[var(--glass-border)] flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                      <ArrowUpRight className="h-5 w-5 text-[var(--foreground)] group-hover:text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-[var(--foreground)] mb-6 tracking-tight italic">{project.client}</h3>
                  
                  <div className="space-y-4">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-zinc-500 dark:text-zinc-400">
                        <CheckCircle2 className="h-5 w-5 text-purple-500/50 shrink-0" />
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
