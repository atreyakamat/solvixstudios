"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Solvix helped us double appointment inquiries in the first week. The WhatsApp integration is a game changer.",
    author: "Dr. Sharma",
    role: "Founder, Cliniq+",
  },
  {
    quote: "The site looks world-class and closes leads faster. We stopped losing potential gym members.",
    author: "Rahul V.",
    role: "Manager, IronFit",
  },
  {
    quote: "Our coaching inquiries became consistent. The n8n automation saves my team hours every day.",
    author: "Sneha K.",
    role: "Director, EduPeak",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black tracking-tighter text-[var(--foreground)] sm:text-7xl italic">
            LOVED BY <span className="text-purple-500">GROWTH LEADERS.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-[var(--glass-border)] bg-[var(--glass-bg)] p-10 relative overflow-hidden group">
                <Quote className="absolute -top-4 -right-4 h-24 w-24 text-purple-500/5 group-hover:text-purple-500/10 transition-colors" />
                
                <div className="flex gap-1 text-purple-500 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-current" />
                  ))}
                </div>
                
                <p className="text-xl font-bold text-zinc-500 italic leading-relaxed mb-10 group-hover:text-[var(--foreground)] transition-colors">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-black text-white text-xl shadow-xl italic">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-[var(--foreground)] text-lg tracking-tight uppercase">{testimonial.author}</p>
                    <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">{testimonial.role}</p>
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
