"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tiers = [
  {
    name: "Starter",
    price: "₹6K–₹8K",
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
  },
  {
    name: "Growth",
    price: "₹8K–₹15K",
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
  },
  {
    name: "Premium",
    price: "₹15K+",
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
  },
];

export function Pricing() {
  return (
    <section className="py-32 relative overflow-hidden" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-24">
           <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
             <div className="w-8 h-[1px] bg-purple-500" />
             <span className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-purple-500">Tiered Investment</span>
          </motion.div>
          <h2 className="text-5xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-7xl">
            Choose your <span className="text-purple-600 dark:text-purple-400">Scale.</span>
          </h2>
          <p className="mt-8 text-lg font-medium text-zinc-500">
            Authoritative systems designed for every stage of business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative flex h-full"
            >
              <Card className={`relative flex flex-col w-full p-10 transition-all duration-300 ${
                tier.popular 
                ? "border-purple-500 bg-[var(--foreground)] text-[var(--background)] shadow-2xl shadow-purple-500/10" 
                : "bg-[var(--card-bg)] hover:border-purple-500/30"
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-500 px-4 py-1 text-[0.6rem] font-black uppercase tracking-widest text-white shadow-xl shadow-purple-500/20">
                    Recommended
                  </div>
                )}
                
                <div className="mb-10 text-center">
                  <h3 className={`text-sm font-black mb-4 tracking-[0.2em] uppercase ${tier.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-6">
                    <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                  </div>
                  <p className={`text-xs font-bold leading-relaxed ${tier.popular ? 'text-zinc-300' : 'text-zinc-500'}`}>{tier.description}</p>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-4 text-xs font-bold">
                      <Check className={`h-4 w-4 shrink-0 ${tier.popular ? 'text-purple-400' : 'text-purple-500'}`} strokeWidth={3} />
                      <span className={tier.popular ? 'text-zinc-200' : 'text-zinc-500'}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={tier.popular ? "default" : "secondary"} 
                  className={`w-full h-14 text-xs font-black tracking-widest uppercase transition-all ${
                    tier.popular ? "bg-white text-black hover:bg-zinc-200 border-none" : ""
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
