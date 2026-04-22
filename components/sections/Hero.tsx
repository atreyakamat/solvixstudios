"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="hero-gradient absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] opacity-20" />
        
        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-[100px]" 
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
          className="mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-medium text-zinc-300">Next-Gen Growth Automation</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl"
        >
          Websites & AI <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            that bring customers.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          We build high-converting systems for clinics, gyms, and local businesses. 
          Stop chasing leads and start closing them automatically.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <Button size="lg" className="h-14 px-8 text-lg group">
            Get Free Audit
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="secondary" className="h-14 px-8 text-lg group">
            <Play className="mr-2 h-5 w-5 fill-current transition-transform group-hover:scale-110" />
            See How It Works
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <div className="h-12 w-6 rounded-full border border-white/20 p-1">
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-full rounded-full bg-blue-500" 
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
