"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹6K–₹8K",
    popular: false,
    features: ["High-converting one-page site", "WhatsApp CTA integration", "3-day launch"],
  },
  {
    name: "Growth",
    price: "₹8K–₹15K",
    popular: true,
    features: ["Multi-section conversion funnel", "Lead capture form", "Basic analytics setup"],
  },
  {
    name: "Premium",
    price: "₹15K+",
    popular: false,
    features: ["Advanced strategy build", "Automation-ready architecture", "Priority support"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Simple pricing. Fast outcomes.</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <Card className={plan.popular ? "border-blue-400/45" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.popular ? (
                      <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-200">Most Popular</span>
                    ) : null}
                  </div>
                  <p className="text-2xl font-bold text-white">{plan.price}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 text-emerald-300" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button asChild className="mt-4 w-full">
                    <a href="#lead-form">Choose {plan.name}</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
