"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Play, Bot, Mic, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="hero-gradient absolute inset-0 opacity-40 dark:opacity-60" />
        <div className="bg-dot-pattern absolute inset-0 opacity-10" />
        
        {/* Authoritative Minimalist Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary),transparent_80%)] opacity-[0.03] pointer-events-none" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-10 flex max-w-fit items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--background)] px-4 py-1.5 shadow-sm"
        >
          <Sparkles size={14} className="text-purple-600 dark:text-purple-400" />
          <span className="text-[0.65rem] font-bold text-zinc-500 uppercase tracking-[0.2em]">Solvix by StixNVibes</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-7xl lg:text-9xl"
        >
          Engineering <br className="hidden md:block" />
          <span className="text-purple-600 dark:text-purple-400 italic">Conversations.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-10 max-w-2xl text-lg font-medium leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-2xl"
        >
          We build high-converting AI Receptionists and business automations that turn visitors into long-term customers.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Button size="lg" className="h-16 px-10 text-sm font-bold tracking-widest uppercase shadow-xl shadow-purple-500/10">
            Get Free Audit
            <ArrowRight size={16} className="ml-2" />
          </Button>
          
          <Button size="lg" variant="secondary" className="h-16 px-10 text-sm font-bold tracking-widest uppercase border border-[var(--glass-border)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all">
            See Automations
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating Indicators (Authoritative) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none opacity-20">
         <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
         <span className="text-[0.6rem] font-black uppercase tracking-[0.5em] text-purple-500">Scroll</span>
      </div>
    </section>
  );
}
