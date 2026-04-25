"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Play, Bot, Mic, PhoneCall, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="hero-gradient absolute inset-0 opacity-60" />
        <div className="bg-dot-pattern absolute inset-0 opacity-10" />
        
        {/* Subtle Background Blurs for SaaS feel */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" 
        />
        
        {/* Floating Icons (More Subtle) */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[15%] hidden lg:flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md shadow-lg text-purple-500"
        >
          <Mic size={24} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-[15%] hidden lg:flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md shadow-lg text-blue-500"
        >
          <Bot size={32} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[25%] hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md shadow-lg text-cyan-500"
        >
          <Workflow size={20} />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 backdrop-blur-md shadow-sm"
        >
          <Sparkles className="h-4 w-4 text-purple-500" />
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-300">Solvix by StixNVibes</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-7xl lg:text-8xl"
        >
          Work less. <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Convert more.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-xl"
        >
          Enterprise-grade AI Receptionists, smart business automations, and high-converting platforms. 
          Your business growth, engineered.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-purple-500/20 group">
            <PhoneCall className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Get Your AI Agent
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button size="lg" variant="secondary" className="h-14 px-8 text-base group bg-[var(--background)]">
            <Play className="mr-2 h-4 w-4 fill-current transition-transform group-hover:scale-110" />
            See Automations
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
    </section>
  );
}
