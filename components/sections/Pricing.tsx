"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tiers = [
  {
    name: "Starter",
    price: "₹8K–₹15K",

    description: "Ideal for new businesses needing a professional digital presence.",
    features: [
      "Custom 1-page high-converting website",
      "Mobile & Tablet optimized",
      "Basic lead capture form",
      "Speed & SEO optimization",
      "1-week rapid delivery",
    ],
    cta: "Start Basic",
    popular: false,
    color: "from-zinc-500 to-zinc-700",
  },
  {
    name: "Growth",
    price: "₹15K–₹25K",
    description: "Our signature growth system with AI automation.",
    features: [
      "Multi-page custom design",
      "Advanced lead capture funnels",
      "Instant WhatsApp lead alerts",
      "Basic n8n automation sync",
      "24/7 Lead tracking dashboard",
    ],
    cta: "Get the Growth System",
    popular: true,
    color: "from-purple-600 to-blue-600",
  },
  {
    name: "Premium",
    price: "₹25K+",
    description: "Fully custom enterprise-grade automation systems.",
    features: [
      "Custom web application",
      "Full n8n workflow engineering",
      "CRM & API integrations",
      "Automated follow-up sequences",
      "Priority maintenance & updates",
    ],
    cta: "Go Premium",
    popular: false,
    color: "from-blue-600 to-cyan-600",
  },
];

export function Pricing() {
  return (
    <section className="py-32 relative overflow-hidden" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-24">
           <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-black text-purple-500 mb-6 tracking-tighter"
          >
            <Zap size={14} className="fill-current" />
            INVESTMENT
          </motion.div>
          <h2 className="text-5xl font-black tracking-tighter text-[var(--foreground)] sm:text-7xl">
            Investment for <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Growth.</span>
          </h2>
          <p className="mt-6 text-lg font-bold text-zinc-500 italic">
            Choose the system that matches your current scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex h-full"
            >
              <Card className={`relative flex flex-col w-full p-10 transition-all duration-500 hover:scale-[1.02] glass-morphism ${
                tier.popular 
                ? "border-purple-500/50 dark:border-purple-500 bg-gradient-to-b from-purple-500/[0.05] to-transparent shadow-2xl shadow-purple-500/10 ring-1 ring-purple-500/50" 
                : "border-[var(--glass-border)] hover:border-purple-500/30"
              }`}>
                {tier.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-purple-500/20">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-10 text-center lg:text-left">
                  <h3 className="text-2xl font-black text-[var(--foreground)] mb-4 tracking-tight uppercase">{tier.name}</h3>
                  <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-6">
                    <span className="text-5xl font-black text-[var(--foreground)] tracking-tighter italic">{tier.price}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-500 font-medium leading-relaxed">{tier.description}</p>
                </div>

                <div className="space-y-5 mb-12 flex-grow">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-4 text-sm font-bold text-zinc-500 dark:text-zinc-500">
                      <div className="h-5 w-5 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-purple-500" strokeWidth={4} />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={tier.popular ? "default" : "secondary"} 
                  className={`w-full h-16 text-lg font-black tracking-widest uppercase transition-all ${
                    tier.popular ? "shadow-xl shadow-purple-500/20" : ""
                  }`}
                >
                  {tier.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
