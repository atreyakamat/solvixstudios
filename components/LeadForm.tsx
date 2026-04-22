"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { N8N_WEBHOOK_URL } from "@/lib/constants";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      if (N8N_WEBHOOK_URL) {
        await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            source: "Solvix Website",
            timestamp: new Date().toISOString(),
          }),
        });
      } else {
        // Simulate delay if no webhook is provided
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
      setStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center space-y-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
          <CheckCircle2 className="h-6 w-6 text-emerald-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Audit Request Sent!</h3>
          <p className="mt-2 text-zinc-400">We'll reach out to you on WhatsApp within 24 hours.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={status === "loading"}
        />
        <Input
          placeholder="Business Type (e.g. Dental Clinic)"
          required
          value={formData.businessType}
          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
          disabled={status === "loading"}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          placeholder="Phone Number"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          disabled={status === "loading"}
        />
        <Input
          placeholder="Email Address"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={status === "loading"}
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Get Free Audit
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again or WhatsApp us.
        </p>
      )}
    </form>
  );
}
