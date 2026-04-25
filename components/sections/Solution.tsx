"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, MousePointerClick, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Solution() {
  return (
    <section className="relative overflow-hidden py-32" id="system">
      <div className="absolute inset-0 bg-purple-500/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-extrabold text-purple-500 mb-6 uppercase tracking-tight"
          >
            <Zap className="h-4 w-4 fill-current" />
            THE SOLVIX DIFFERENCE
          </motion.div>
          <h2 className="text-5xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-7xl">
            We turn traffic into <span className="text-purple-500">conversations.</span>
          </h2>
          <p className="mt-8 text-xl font-bold text-zinc-500 leading-relaxed">
            A seamless bridge between your website and your phone. We build systems that capture attention and instantly connect you with customers.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="relative h-full overflow-hidden p-10 group hover:border-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500 text-white shadow-xl rotate-3 group-hover:rotate-6 transition-transform">
                  <MousePointerClick size={32} />
                </div>
                <h3 className="text-3xl font-extrabold text-[var(--foreground)] mb-4 uppercase tracking-tight">Conversion Engines</h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed mb-8">
                  Beautiful, fast loading sites engineered specifically to make visitors take action.
                </p>
                <ul className="space-y-4">
                  {['Optimized for mobile', 'Clear calls to action', 'Trust-building design'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-zinc-400 dark:text-zinc-500">
                      <CheckCircle2 className="h-5 w-5 text-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="relative h-full overflow-hidden p-10 group hover:border-blue-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-xl -rotate-3 group-hover:-rotate-6 transition-transform">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-3xl font-extrabold text-[var(--foreground)] mb-4 uppercase tracking-tight">WhatsApp Instant</h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed mb-8">
                  The moment a lead fills out your form, you get a WhatsApp message with their details.
                </p>
                <ul className="space-y-4">
                  {['Automated capture via n8n', 'Instant team alerts', 'Higher close rates'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-zinc-400 dark:text-zinc-500">
                      <CheckCircle2 className="h-5 w-5 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
