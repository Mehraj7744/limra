"use client";

import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";

const WHATSAPP_NUMBER = "910000000000";

const whatsappMessage = encodeURIComponent(
  "Hello LIMRA INDUSTRY, I would like to enquire about your ceiling fans."
);

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3">
      {/* Enquiry Button */}
      <Link
        href="/contact"
        aria-label="Make an enquiry"
        className="group flex items-center gap-3 rounded-full border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
      >
        <span className="hidden sm:block">Enquire Now</span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-6">
          <Send className="h-4 w-4" />
        </span>
      </Link>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with LIMRA INDUSTRY on WhatsApp"
        className="group flex items-center gap-3 rounded-full border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
      >
        <span className="hidden sm:block">WhatsApp</span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="h-5 w-5" />
        </span>
      </a>
    </div>
  );
}