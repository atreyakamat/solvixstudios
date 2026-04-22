"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="py-32 relative" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Investment for <span className="text-blue-500">Growth.</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Choose the system that matches your current scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all hover:scale-[1.02] ${
                tier.popular 
                ? "bg-gradient-to-b from-blue-600/20 to-black border-2 border-blue-500/50 shadow-2xl shadow-blue-500/10" 
                : "bg-white/5 border border-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-white tracking-tight">{tier.price}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="h-5 w-5 text-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.popular ? "default" : "secondary"} 
                className="w-full h-12 text-md"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
