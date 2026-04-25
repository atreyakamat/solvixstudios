"use client";

import { motion } from "framer-motion";
import { Bot, Database, Globe, Smartphone, ArrowRight, Zap } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "User Inquiry",
    description: "Visitor lands on your site or calls your business number.",
    color: "purple",
    glow: "shadow-purple-500/20",
  },
  {
    icon: Bot,
    title: "AI Receptionist",
    description: "Our AI answers questions and captures lead data instantly.",
    color: "blue",
    glow: "shadow-blue-500/20",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Alert",
    description: "You get notified on your phone with full context.",
    color: "pink",
    glow: "shadow-pink-500/20",
  },
  {
    icon: Database,
    title: "Data Synced",
    description: "Automations push data to your CRM and Google Sheets.",
    color: "indigo",
    glow: "shadow-indigo-500/20",
  },
];

export function AutomationFlow() {
  return (
    <section className="relative py-32 overflow-hidden bg-dot-pattern" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-2 text-sm font-extrabold text-purple-500 mb-6 tracking-tight skeuo cursor-pointer active:skeuo-inset transition-shadow"
          >
            <Zap className="h-4 w-4 fill-current text-purple-500" />
            THE SOLVIX ENGINE
          </motion.div>
          <h2 className="text-5xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-7xl">
            A system that works <span className="text-zinc-500 opacity-50">while you sleep.</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Animated Background Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-2 rounded-full skeuo-inset bg-[var(--glass-bg)] hidden lg:block -translate-y-1/2 overflow-hidden border border-[var(--glass-border)]">
             <motion.div 
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="h-full w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent" 
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", damping: 15 }}
                className="relative group cursor-pointer"
                whileHover={{ y: -15, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative z-10 flex flex-col items-center text-center p-10 rounded-[2.5rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-3xl skeuo group-active:skeuo-inset transition-all duration-300">
                  <motion.div 
                    className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 text-white shadow-2xl skeuo`}
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon size={36} />
                  </motion.div>
                  <h3 className="text-2xl font-extrabold text-[var(--foreground)] mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <motion.div 
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute -right-4 top-1/2 -translate-y-1/2 text-purple-500/50 hidden lg:block"
                    >
                      <ArrowRight size={24} />
                    </motion.div>
                  )}
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 -z-10 bg-purple-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="mt-20 mx-auto max-w-2xl p-8 rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] text-center backdrop-blur-xl skeuo cursor-default"
        >
          <p className="text-purple-500 font-bold uppercase tracking-widest text-xs mb-2">Efficiency Boost</p>
          <p className="text-2xl font-extrabold text-[var(--foreground)]">
            Response time reduced from <span className="text-red-500 drop-shadow-sm">4 hours</span> to <span className="text-emerald-500 text-glow-purple drop-shadow-md">4 seconds.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
