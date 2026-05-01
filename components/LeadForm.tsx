"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, N8N_WEBHOOK_URL, WHATSAPP_NUMBER } from "@/lib/constants";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    phone: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    
    setStatus("loading");
    setErrorMessage(null);

    try {
      let sent = false;
      const errors: string[] = [];

      // 1. Send via EmailJS if configured
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        try {
          const result = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
              user_name: formData.name,
              business_type: formData.businessType,
              user_phone: formData.phone,
              user_email: formData.email,
              source: "Solvix Website",
            },
            EMAILJS_PUBLIC_KEY
          );
          if (result.status === 200) {
            sent = true;
          } else {
            errors.push(`EmailJS returned status ${result.status}`);
          }
        } catch (emailError: any) {
          console.error("EmailJS Error:", emailError);
          errors.push(emailError?.text || emailError?.message || "EmailJS failed");
        }
      }

      // 2. Send via N8N if configured
      if (N8N_WEBHOOK_URL && N8N_WEBHOOK_URL.startsWith("http")) {
        try {
          const response = await fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...formData,
              source: "Solvix Website",
              timestamp: new Date().toISOString(),
            }),
          });
          if (response.ok) {
            sent = true;
          } else {
            errors.push(`Webhook returned status ${response.status}`);
          }
        } catch (fetchError: any) {
          console.error("Webhook Error:", fetchError);
          errors.push(fetchError?.message || "Webhook connection failed");
        }
      }

      // Fallback: If no external services are configured, allow submission in dev
      const noServicesConfigured = !EMAILJS_SERVICE_ID && (!N8N_WEBHOOK_URL || !N8N_WEBHOOK_URL.startsWith("http"));
      
      if (!sent && noServicesConfigured) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        sent = true;
      }

      if (sent) {
        setStatus("success");
      } else {
        const finalError = errors.length > 0 
          ? `Submission failed: ${errors.join(". ")}` 
          : "No submission service is configured correctly.";
        throw new Error(finalError);
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setErrorMessage(error.message || "Something went wrong.");
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
          <p className="mt-2 text-zinc-400">We&apos;ll reach out to you on WhatsApp within 24 hours.</p>
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
        <div className="space-y-2 text-center">
          <p className="text-sm text-red-400">
            {errorMessage || "Something went wrong. Please try again or WhatsApp us."}
          </p>
          <Button 
            variant="ghost" 
            className="text-xs text-zinc-500 hover:text-white"
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
          >
            Contact via WhatsApp
          </Button>
        </div>
      )}
    </form>
  );
}
