"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Send } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-dot-pattern" id="contact">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-full max-w-7xl bg-gradient-to-t from-purple-600/20 to-transparent blur-[120px] opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-black text-purple-500 mb-8 tracking-tighter uppercase">
              <Sparkles className="h-4 w-4" />
              Scale your business
            </div>
            <h2 className="text-6xl font-black tracking-tighter text-[var(--foreground)] sm:text-8xl mb-8 leading-[0.9]">
              Start getting <br />
              customers <br />
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent italic">automatically.</span>
            </h2>
            <p className="text-xl font-bold text-zinc-500 italic mb-12 leading-relaxed max-w-lg">
              Stop losing leads to outdated systems. We engineer the future of your business growth while you focus on what you do best.
            </p>

            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-6">
                <motion.div 
                   whileHover={{ scale: 1.1, rotate: 10 }}
                   className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500 text-white shadow-2xl shadow-emerald-500/20"
                >
                  <MessageCircle size={32} />
                </motion.div>
                <div>
                  <p className="text-lg font-black text-[var(--foreground)] uppercase tracking-tight">Prefer WhatsApp?</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-zinc-500 hover:text-purple-500 transition-colors italic border-b-2 border-transparent hover:border-purple-500"
                  >
                    Chat with us instantly →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-10 md:p-14 backdrop-blur-3xl shadow-2xl shadow-purple-500/10 relative"
          >
            {/* Decorative Icon */}
             <div className="absolute -top-8 -right-8 h-20 w-20 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-2xl rotate-12">
                <Send size={32} />
             </div>

            <div className="mb-10">
              <h3 className="text-3xl font-black text-[var(--foreground)] mb-3 tracking-tight uppercase">Request Free Audit</h3>
              <p className="text-lg font-bold text-zinc-500 italic">We'll identify every leak in your current funnel.</p>
            </div>
            <LeadForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
