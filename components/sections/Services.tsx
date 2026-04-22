"use client";

import { motion } from "framer-motion";
import { Layout, MessageCircle, Settings, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "High-Converting Websites",
    description: "Designed specifically to turn visitors into paying customers. Optimized for speed, trust, and conversions.",
    icon: Layout,
    color: "blue",
    benefits: ["Clinic-specific UX", "Speed optimized", "Trust-driven design"],
  },
  {
    icon: Settings,
    title: "AI Automation Systems",
    description: "We use n8n to connect your site to your phone. Automated lead capture, storage, and notifications.",
    color: "purple",
    benefits: ["Zero-lead leakage", "Instant n8n triggers", "Automated workflows"],
  },
  {
    icon: Users,
    title: "Lead Generation Funnels",
    description: "Structured flows that capture, track, and manage leads from first click to final booking.",
    color: "emerald",
    benefits: ["High-intent capture", "Segmented lead lists", "ROI tracking"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Funnels",
    description: "Direct communication systems for instant conversion where your customers actually are.",
    color: "green",
    benefits: ["One-click chat", "Automated welcomes", "High open rates"],
  },
];

export function Services() {
  return (
    <section className="py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <div className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">Our Services</div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need <br />
            to <span className="text-blue-500">dominate locally.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full relative overflow-hidden border-white/10 bg-black/40 p-8 hover:border-blue-500/30 transition-all">
                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-${service.color}-500/10 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-8 w-8 text-${service.color}-400`} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-500">
                      <div className={`h-1.5 w-1.5 rounded-full bg-${service.color}-500/50`} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="inline-flex items-center text-sm font-bold text-white group/link">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>

                {/* Background Accent */}
                <div className={`absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-${service.color}-500/5 blur-3xl group-hover:bg-${service.color}-500/10 transition-colors`} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
