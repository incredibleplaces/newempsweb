import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { waLink } from "./contactInfo";

export const WhatsAppWidget: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div
      data-testid="whatsapp-floating-widget"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Tooltip bubble (can be dismissed) */}
      {!dismissed && (
        <div className="relative flex items-center gap-2 border border-zinc-700 bg-[#111620] px-3.5 py-2 shadow-2xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-2 w-2 rounded-full bg-emerald-500" />
            <span className="animate-ping absolute h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
          </span>
          <p className="font-mono text-[11px] text-[#F4F6F8]">
            Chat with an electrical engineer
          </p>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss message"
            className="ml-1 text-zinc-400 hover:text-white"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={waLink("Hello EMPS, I am browsing your website and have an electrical project inquiry.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact EMPS via WhatsApp"
        data-testid="whatsapp-floating-button"
        className="group relative flex h-14 w-14 items-center justify-center bg-[#25D366] text-[#0A0D12] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a]"
      >
        <MessageCircle className="h-7 w-7 fill-current" />
      </a>
    </div>
  );
};
