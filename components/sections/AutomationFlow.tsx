"use client";

import { motion } from "framer-motion";
import { Bot, Database, Globe, Smartphone, ArrowRight, Zap } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "User Visit",
    description: "Visitor lands on your optimized site.",
    color: "blue",
  },
  {
    icon: Bot,
    title: "n8n Trigger",
    description: "AI captures the data instantly.",
    color: "purple",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Alert",
    description: "You get notified on your phone.",
    color: "green",
  },
  {
    icon: Database,
    title: "Lead Saved",
    description: "Data synced to your CRM/Sheets.",
    color: "blue",
  },
];

export function AutomationFlow() {
  return (
    <section className="relative py-32 overflow-hidden" id="automation">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-6"
          >
            <Zap className="h-4 w-4" />
            The Solvix Machine
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            A system that works <span className="text-zinc-500 text-glow">while you sleep.</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Background Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden lg:block -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative z-10 flex flex-col items-center text-center p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all hover:border-blue-500/30 hover:bg-white/[0.05]">
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-${step.color}-500/10 group-hover:scale-110 transition-transform`}>
                    <step.icon className={`h-8 w-8 text-${step.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 text-white/10 hidden lg:block" />
                  )}
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 -z-10 bg-${step.color}-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mx-auto max-w-2xl p-6 rounded-2xl border border-white/5 bg-white/[0.02] text-center"
        >
          <p className="text-zinc-400 text-sm font-medium">
            Result: <span className="text-emerald-400">Response time reduced from 4 hours to 4 seconds.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
