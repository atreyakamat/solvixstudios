"use client";

import { motion } from "framer-motion";
import { Layout, MessageCircle, ArrowRight, Zap, Mic, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AI Voice Agents",
    description: "24/7 Human-like receptionist systems that handle inquiries and book appointments without human intervention.",
    icon: Mic,
    accent: "text-purple-500",
    bg: "bg-purple-500/[0.03]"
  },
  {
    title: "Business Automation",
    description: "Enterprise-grade workflows connecting your entire stack. Lead syncing, CRM management, and auto-reporting.",
    icon: Bot,
    accent: "text-blue-500",
    bg: "bg-blue-500/[0.03]"
  },
  {
    title: "Conversion Platforms",
    description: "High-performance digital platforms engineered specifically to dominate local search and drive high-intent leads.",
    icon: Layout,
    accent: "text-zinc-500",
    bg: "bg-zinc-500/[0.03]"
  },
  {
    title: "WhatsApp Ecosystems",
    description: "Direct conversion funnels built inside WhatsApp. Automated qualifying and instant customer connectivity.",
    icon: MessageCircle,
    accent: "text-emerald-500",
    bg: "bg-emerald-500/[0.03]"
  },
];

export function Services() {
  return (
    <section className="py-32 relative" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
             <div className="w-8 h-[1px] bg-purple-500" />
             <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-purple-500">Core Expertise</span>
          </motion.div>
          <h2 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-6xl max-w-3xl leading-[1.1]">
            Digital systems designed for <br />
            <span className="text-zinc-400">absolute market authority.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full border-[var(--glass-border)] bg-[var(--card-bg)] p-8 hover:border-purple-500/20 transition-all duration-300">
                <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--background)] ${service.accent}`}>
                  <service.icon size={24} />
                </div>
                
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 tracking-tight uppercase">{service.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed text-sm font-medium">{service.description}</p>
                
                <Button variant="ghost" className="p-0 h-auto hover:bg-transparent group/btn text-purple-600 dark:text-purple-400 text-xs font-black uppercase tracking-widest">
                  Explore Solution
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
