"use client";

import { MessageSquare } from "lucide-react";
import WhatsappIcon from "@mui/icons-material/WhatsApp";

const WHATSAPP_NUMBER = "910000000000";

const getGeneralWhatsAppUrl = () => {
  const message = encodeURIComponent(
    "Hello LIMRA INDUSTRY, I would like to enquire about your ceiling fans."
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export default function FloatingActions() {
  return (
    <>
      {/* Sticky Floating WhatsApp Contact Button on Mobile & Desktop */}
      <aside
        className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2"
        aria-label="Direct trade quick contacts"
      >
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full bg-emerald-600 p-3 text-white shadow-lg transition-all duration-200 hover:bg-emerald-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:px-4 sm:py-3"
          aria-label="Direct WhatsApp Enquiry"
        >
          <WhatsappIcon className="h-5 w-5 fill-current" />

          <span className="hidden text-xs font-bold tracking-wide sm:inline">
            WhatsApp Us
          </span>
        </a>
      </aside>
    </>
  );
}

