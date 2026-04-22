"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Solvix helped us double appointment inquiries in the first week. The WhatsApp integration is a game changer for our clinic.",
    author: "Dr. Sharma",
    role: "Founder, Cliniq+",
  },
  {
    quote: "The site looks world-class and closes leads faster. We stopped losing potential gym members to competitors.",
    author: "Rahul V.",
    role: "Manager, IronFit",
  },
  {
    quote: "Our coaching inquiries became consistent after launch. The n8n automation saves my team hours every single day.",
    author: "Sneha K.",
    role: "Director, EduPeak",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Don't just take our word for it
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-white/10 bg-white/[0.03]">
                <CardContent className="pt-6">
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-zinc-300 mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                      <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
