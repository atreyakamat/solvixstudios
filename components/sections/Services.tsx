"use client";

import { motion } from "framer-motion";
import { Layout, MessageCircle, ArrowRight, Zap, Mic, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AI Receptionist & Voice",
    description: "Never miss a call again. Our 24/7 AI voice agents handle inquiries, book appointments, and answer FAQs with a human-like voice.",
    icon: Mic,
    color: "from-purple-500 to-blue-500",
    shadow: "shadow-purple-500/20",
    benefits: ["24/7 Call handling", "Human-like voice", "Automated booking"],
  },
  {
    icon: Bot,
    title: "Automation-Based Solutions",
    description: "We use smart workflows to connect your tools. Automated lead capture, data syncing, and internal notifications on autopilot.",
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
    benefits: ["Zero-lead leakage", "Instant n8n triggers", "Automated workflows"],
  },
  {
    title: "High-Converting Websites",
    description: "Designed specifically to turn visitors into paying customers. Optimized for speed, trust, and conversions.",
    icon: Layout,
    color: "from-purple-600 to-pink-600",
    shadow: "shadow-pink-500/20",
    benefits: ["Clinic-specific UX", "Speed optimized", "Trust-driven design"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp AI Funnels",
    description: "Direct communication systems for instant conversion where your customers actually are. Powered by AI chat.",
    color: "from-green-500 to-emerald-500",
    shadow: "shadow-green-500/20",
    benefits: ["One-click chat", "AI auto-replies", "High open rates"],
  },
];

export function Services() {
  return (
    <section className="py-32 relative overflow-hidden" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-2 text-sm font-black text-purple-500 mb-6 skeuo cursor-pointer transition-shadow active:skeuo-inset"
          >
            <Zap size={16} className="fill-current text-purple-500" />
            ELITE SOLUTIONS
          </motion.div>
          <h2 className="text-5xl font-black tracking-tighter text-[var(--foreground)] sm:text-7xl">
            Everything you need <br />
            to <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">dominate locally.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              <Card className={`h-full relative overflow-hidden p-10 border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl skeuo group-active:skeuo-inset transition-all duration-300`}>
                <motion.div 
                  className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${service.color} text-white shadow-xl skeuo`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon size={36} />
                </motion.div>
                
                <h3 className="text-3xl font-black text-[var(--foreground)] mb-4 tracking-tight">{service.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed text-lg">{service.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-zinc-500 dark:text-zinc-500">
                      <div className="h-3 w-3 rounded-full bg-purple-500/50 skeuo-inset" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="p-0 hover:bg-transparent group/btn active:scale-95 transition-transform">
                  <span className="text-lg font-black tracking-tight group-hover/btn:text-purple-500 transition-colors">
                    LEARN MORE
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2 group-hover/btn:text-purple-500" />
                </Button>

                {/* Decorative Background Icon */}
                <service.icon size={200} className="absolute -right-20 -bottom-20 text-[var(--foreground)] opacity-[0.02] dark:opacity-[0.03] group-hover:text-purple-500 group-hover:opacity-10 transition-all duration-500 pointer-events-none group-hover:rotate-12" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
