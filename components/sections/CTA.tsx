"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden" id="contact">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-full max-w-5xl bg-gradient-to-t from-blue-600/20 to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-6">
              <Sparkles className="h-4 w-4" />
              Scale your business
            </div>
            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-8">
              Start getting customers <br />
              <span className="text-blue-500">automatically.</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Stop losing leads to outdated websites and slow follow-ups. 
              Our systems capture, track, and notify you of every opportunity 
              the second it happens.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-emerald-400">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Prefer WhatsApp?</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    Click here to chat instantly →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-black/40 p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Request a Free Audit</h3>
              <p className="text-zinc-400">We'll analyze your current site and show you the gaps.</p>
            </div>
            <LeadForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
