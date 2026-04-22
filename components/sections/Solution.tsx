"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, MousePointerClick, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Solution() {
  return (
    <section className="relative overflow-hidden py-24" id="system">
      <div className="absolute inset-0 bg-blue-900/10 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400"
          >
            <Zap className="h-4 w-4" />
            The Solvix System
          </motion.div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            We turn traffic into <span className="text-blue-400">conversations</span>.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A seamless bridge between your website and your phone. We build systems that capture attention and instantly connect you with ready-to-buy customers.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="relative h-full overflow-hidden border-white/10 bg-black/40">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
              <CardContent className="relative flex flex-col justify-center h-full p-8">
                <MousePointerClick className="mb-4 h-8 w-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Conversion-focused websites</h3>
                <p className="mt-2 text-zinc-400">
                  Beautiful, fast loading sites engineered specifically to make visitors take action.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Optimized for mobile', 'Clear calls to action', 'Trust-building design'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="relative h-full overflow-hidden border-white/10 bg-black/40">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
              <CardContent className="relative flex flex-col justify-center h-full p-8">
                <MessageSquare className="mb-4 h-8 w-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Instant WhatsApp notifications</h3>
                <p className="mt-2 text-zinc-400">
                  The moment a lead fills out your form, you get a WhatsApp message with their details.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Automated capture via n8n', 'Instant team alerts', 'Higher close rates'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle2 className="h-5 w-5 text-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
