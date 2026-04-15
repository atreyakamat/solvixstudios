"use client";

import { Activity, Camera, Dumbbell, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare",
    description: "Get more patient bookings with trust-focused medical websites.",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness",
    description: "Increase memberships using conversion-first offers and landing pages.",
  },
  {
    icon: Activity,
    title: "Coaching Institutes",
    description: "Boost enrollments through clear outcomes and social proof sections.",
  },
  {
    icon: Camera,
    title: "Creators",
    description: "Attract premium inquiries with portfolio-driven experiences.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Services built around revenue outcomes</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="group h-full transition-all hover:-translate-y-1 hover:border-blue-400/40">
                <CardHeader>
                  <service.icon className="h-6 w-6 text-blue-300" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
