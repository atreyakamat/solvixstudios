"use client";

import { motion } from "framer-motion";
import { Layout, MessageCircle, Settings, Users, ArrowRight, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "High-Converting Websites",
    description: "Designed specifically to turn visitors into paying customers. Optimized for speed, trust, and conversions.",
    icon: Layout,
    color: "from-purple-500 to-blue-500",
    shadow: "shadow-purple-500/20",
    benefits: ["Clinic-specific UX", "Speed optimized", "Trust-driven design"],
  },
  {
    icon: Settings,
    title: "AI Automation Systems",
    description: "We use n8n to connect your site to your phone. Automated lead capture, storage, and notifications.",
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
    benefits: ["Zero-lead leakage", "Instant n8n triggers", "Automated workflows"],
  },
  {
    icon: Users,
    title: "Lead Generation Funnels",
    description: "Structured flows that capture, track, and manage leads from first click to final booking.",
    color: "from-purple-600 to-pink-600",
    shadow: "shadow-pink-500/20",
    benefits: ["High-intent capture", "Segmented lead lists", "ROI tracking"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Funnels",
    description: "Direct communication systems for instant conversion where your customers actually are.",
    color: "from-green-500 to-emerald-500",
    shadow: "shadow-green-500/20",
    benefits: ["One-click chat", "Automated welcomes", "High open rates"],
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
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-bold text-purple-500 mb-6"
          >
            <Zap size={14} className="fill-current" />
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
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className={`h-full relative overflow-hidden p-10 hover:border-purple-500/50 hover:${service.shadow} transition-all duration-500`}>
                <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${service.color} text-white shadow-xl rotate-3 group-hover:rotate-6 transition-transform`}>
                  <service.icon size={36} />
                </div>
                
                <h3 className="text-3xl font-black text-[var(--foreground)] mb-4 tracking-tight">{service.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed text-lg">{service.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-zinc-400 dark:text-zinc-500">
                      <div className="h-2 w-2 rounded-full bg-purple-500/50" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="p-0 hover:bg-transparent group/btn">
                  <span className="text-lg font-black tracking-tight group-hover/btn:text-purple-500 transition-colors">
                    LEARN MORE
                  </span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2 group-hover/btn:text-purple-500" />
                </Button>

                {/* Decorative Background Icon */}
                <service.icon size={200} className="absolute -right-20 -bottom-20 text-purple-500/5 group-hover:text-purple-500/10 transition-colors pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
