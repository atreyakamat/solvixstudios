"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";

import { WHATSAPP_NUMBER } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function CTA() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");

  const whatsappLink = useMemo(() => {
    const text = `Hi Solvix Studios, I'm ${name || "a business owner"}. Business: ${business || "N/A"}, Phone: ${phone || "N/A"}. I want a free audit.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [business, name, phone]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="lead-form" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Card className="grid gap-8 p-8 lg:grid-cols-2 lg:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Final Step</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Start getting customers in 7 days</h2>
            <p className="mt-4 text-zinc-300">Book a free growth audit and get a custom website plan tailored to your business niche.</p>
            <Button asChild className="mt-8" size="lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-1 block text-xs text-zinc-300">
                Name
              </label>
              <Input id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="business-type" className="mb-1 block text-xs text-zinc-300">
                Business Type
              </label>
              <Input
                id="business-type"
                placeholder="Business Type"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-xs text-zinc-300">
                Phone
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <Button className="w-full" size="lg" type="submit">
              Submit & Continue on WhatsApp
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
