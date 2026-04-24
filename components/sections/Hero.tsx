"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Play, Bot, Mic, PhoneCall, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, type: "spring", bounce: 0.4 } 
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="hero-gradient absolute inset-0 opacity-80" />
        <div className="bg-dot-pattern absolute inset-0 opacity-[0.15]" />
        
        {/* Flashy Floating Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" 
        />
        
        {/* Floating Skeuomorphic Icons */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[10%] hidden lg:flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 text-white skeuo shadow-2xl"
        >
          <Mic size={40} className="drop-shadow-lg" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -15, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[10%] hidden lg:flex h-28 w-28 items-center justify-center rounded-[2rem] bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-xl skeuo text-purple-500 shadow-2xl"
        >
          <Bot size={50} className="drop-shadow-md" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 20, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[20%] hidden lg:flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white skeuo shadow-2xl"
        >
          <Workflow size={32} className="drop-shadow-lg" />
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-2 backdrop-blur-xl skeuo cursor-pointer transition-shadow active:skeuo-inset"
        >
          <Sparkles className="h-5 w-5 text-purple-500" />
          <span className="text-sm font-black text-zinc-600 dark:text-zinc-300 uppercase tracking-widest">AI Receptionists & Automations</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl font-black tracking-tight text-[var(--foreground)] sm:text-8xl lg:text-9xl drop-shadow-sm"
        >
          Work less. <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient text-glow-purple italic drop-shadow-md">
            Convert more.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-8 max-w-3xl text-lg font-bold leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-2xl"
        >
          We engineer friendly AI Receptionists, smart business automations, and high-converting websites. 
          Your business, on autopilot.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="h-16 px-10 text-lg group shadow-2xl shadow-purple-500/20 skeuo">
              <PhoneCall className="mr-2 h-5 w-5 animate-pulse" />
              Get Your AI Agent
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="secondary" className="h-16 px-10 text-lg group skeuo">
              <Play className="mr-2 h-5 w-5 fill-current transition-transform group-hover:scale-110" />
              See Automations
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}
