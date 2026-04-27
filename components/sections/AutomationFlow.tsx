"use client";

import { motion } from "framer-motion";
import { Bot, Database, Globe, Smartphone, ArrowRight, Zap } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "User Acquisition",
    description: "Multi-channel lead capture via web, calls, or social.",
    color: "zinc",
  },
  {
    icon: Bot,
    title: "AI Triage",
    description: "Autonomous agents qualify and process data instantly.",
    color: "purple",
  },
  {
    icon: Smartphone,
    title: "Instant Sync",
    description: "Notifications pushed to your team in real-time.",
    color: "zinc",
  },
  {
    icon: Database,
    title: "Data Vault",
    description: "Every interaction archived in your private CRM.",
    color: "zinc",
  },
];

export function AutomationFlow() {
  return (
    <section className="py-32 bg-[var(--foreground)] text-[var(--background)] overflow-hidden" id="automation">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-8"
            >
               <div className="w-10 h-[1px] bg-purple-500" />
               <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-purple-500">The Architecture</span>
            </motion.div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-10 leading-none">
              A business that <br />
              <span className="text-zinc-500">runs itself.</span>
            </h2>
            <p className="text-lg font-medium text-zinc-400 max-w-md leading-relaxed mb-12 italic">
              Our engineering team builds custom pipelines that automate the repetitive so you can focus on the strategic.
            </p>
            
            <div className="flex items-center gap-6 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
               <div className="h-12 w-12 rounded-xl bg-purple-500 flex items-center justify-center text-white shadow-xl shadow-purple-500/20">
                  <Zap size={24} fill="currentColor" />
               </div>
               <div>
                  <span className="block text-[0.6rem] font-black text-purple-500 uppercase tracking-widest mb-1">Efficiency Metric</span>
                  <span className="text-xl font-bold text-white tracking-tight italic">4s Response Time Avg.</span>
               </div>
            </div>
          </div>

          <div className="space-y-4">
             {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex items-center gap-6 p-6 rounded-2xl border border-zinc-800 bg-zinc-900 transition-all hover:border-purple-500/30"
                >
                   <div className={`h-12 w-12 rounded-xl border border-zinc-800 flex items-center justify-center transition-colors group-hover:bg-purple-500 group-hover:border-purple-500 ${step.color === 'purple' ? 'bg-purple-500 border-purple-500 text-white' : 'text-zinc-500'}`}>
                      <step.icon size={20} />
                   </div>
                   <div>
                      <h3 className="text-md font-bold text-white uppercase tracking-tight">{step.title}</h3>
                      <p className="text-xs font-medium text-zinc-500 mt-1">{step.description}</p>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
