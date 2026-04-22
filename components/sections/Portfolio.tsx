"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    client: "SmileCare Dental",
    industry: "Clinic",
    result: "140% more bookings",
    features: ["WhatsApp Booking", "Lead Notification"],
    image: "bg-blue-600/20",
  },
  {
    client: "Titan Fitness",
    industry: "Gym",
    result: "45 members/month",
    features: ["Automated Funnel", "Member Portal"],
    image: "bg-purple-600/20",
  },
  {
    client: "Peak Academy",
    industry: "Education",
    result: "Instant Lead Sync",
    features: ["n8n Workflow", "CRM Sync"],
    image: "bg-emerald-600/20",
  },
];

export function Portfolio() {
  return (
    <section className="py-32" id="portfolio">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Engineered for <span className="text-blue-500">Results.</span>
            </h2>
            <p className="mt-6 text-lg text-zinc-400">
              We don't just build websites; we build growth engines. 
              See how we transformed these local businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-white/10 bg-black/40 p-1 hover:border-blue-500/50 transition-all">
                <div className={`h-64 w-full rounded-2xl ${project.image} relative flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <span className="text-2xl font-black uppercase tracking-tighter text-white/10 group-hover:scale-125 transition-transform duration-700">
                    {project.client}
                  </span>
                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                      {project.result}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{project.industry}</span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">{project.client}</h3>
                  
                  <div className="space-y-3">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                        <CheckCircle2 className="h-4 w-4 text-blue-500/50" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
