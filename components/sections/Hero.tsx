"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
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
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-purple-500/5 blur-[150px]" 
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]"
        >
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="text-sm font-medium text-zinc-400 dark:text-zinc-300">Growth-First AI Solutions</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl font-black tracking-tight text-[var(--foreground)] sm:text-8xl lg:text-9xl"
        >
          Websites & AI <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient text-glow-purple">
            that bring customers.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-xl"
        >
          We engineer high-converting digital systems for clinics, gyms, and professional services. 
          The bridge between your brand and your next customer.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <Button size="lg" className="h-16 px-10 text-lg group shadow-2xl shadow-purple-500/20">
            Get Free Audit
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="secondary" className="h-16 px-10 text-lg group">
            <Play className="mr-2 h-5 w-5 fill-current transition-transform group-hover:scale-110" />
            See How It Works
          </Button>
        </motion.div>

        {/* Floating Abstract Element */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-0 h-32 w-32 rounded-3xl bg-gradient-to-br from-purple-500/20 to-transparent blur-2xl lg:block hidden"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}
