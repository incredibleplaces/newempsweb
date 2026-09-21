import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  Zap,
} from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  REG_ADDRESS,
  ADMIN_ADDRESS,
  waLink,
} from "./contactInfo";

const SERVICES_OPTIONS = [
  "LT & HT Panel Manufacturing",
  "Turnkey Substation Erection",
  "DG Sets & Backup Power",
  "Testing, Commissioning & Maintenance",
  "Other / General Technical Inquiry",
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: SERVICES_OPTIONS[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = `New Inquiry from ${formData.name || "Client"}${
    formData.company ? ` (${formData.company})` : ""
  }:
Service: ${formData.service}
Phone: ${formData.phone || "Not provided"}
Email: ${formData.email || "Not provided"}
Details: ${formData.message || "Requesting technical consultation."}`;

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-[#0A0D12] pt-24 sm:pt-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF5500]">
            // 05 — Direct Engineer Line
          </p>
          <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-[#F4F6F8] sm:text-5xl">
            Initiate Technical Discussion
          </h2>
          <p className="mt-4 text-base text-[#9AA3B2]">
            Connect directly with our senior electrical engineering desk for tenders,
            custom panel fabrication drawings, or emergency site visits.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Contacts */}
          <div className="space-y-8 lg:col-span-5">
            {/* Phone & Email Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${PHONE_TEL}`}
                data-testid="contact-phone-link"
                className="group flex items-start gap-4 border border-zinc-800 bg-[#111620] p-6 transition-all duration-300 hover:border-[#FF5500]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-zinc-800/80 text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-[#0A0D12]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#9AA3B2]">
                    Direct Phone / Hotline
                  </span>
                  <p className="mt-1 font-display text-2xl font-bold tracking-wide text-[#F4F6F8]">
                    {PHONE_DISPLAY}
                  </p>
                  <p className="text-xs text-[#9AA3B2]">Available Monday to Saturday, 9 AM – 7 PM IST</p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                data-testid="contact-email-link"
                className="group flex items-start gap-4 border border-zinc-800 bg-[#111620] p-6 transition-all duration-300 hover:border-[#FF5500]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-zinc-800/80 text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-[#0A0D12]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#9AA3B2]">
                    Technical Desk Email
                  </span>
                  <p className="mt-1 font-mono text-base font-semibold text-[#F4F6F8]">
                    {EMAIL}
                  </p>
                  <p className="text-xs text-[#9AA3B2]">Send drawings, RFPs and single line diagrams (SLDs)</p>
                </div>
              </a>

              <a
                href={waLink("Hello EMPS, I would like to discuss a project with an engineer.")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-link"
                className="group flex items-center justify-between border border-[#FF5500]/40 bg-[#FF5500]/10 p-6 transition-all duration-300 hover:bg-[#FF5500] hover:text-[#0A0D12]"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-[#FF5500] group-hover:text-[#0A0D12]" />
                  <div>
                    <p className="font-display text-lg font-bold uppercase tracking-wider text-[#F4F6F8] group-hover:text-[#0A0D12]">
                      Instant WhatsApp Connect
                    </p>
                    <p className="font-mono text-xs text-[#9AA3B2] group-hover:text-[#0A0D12]/80">
                      Fastest response from duty engineer
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#FF5500] group-hover:text-[#0A0D12]" />
              </a>
            </div>

            {/* Offices */}
            <div className="border border-zinc-800 bg-[#111620] p-6">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold uppercase tracking-wider text-[#F4F6F8]">
                <MapPin className="h-4 w-4 text-[#FF5500]" />
                <span>Office Locations</span>
              </h3>

              <div className="mt-4 space-y-4 text-xs leading-relaxed text-[#9AA3B2]">
                <div>
                  <strong className="block font-mono text-[10px] uppercase tracking-wider text-[#F4F6F8]">
                    Registered Office:
                  </strong>
                  <span>{REG_ADDRESS}</span>
                </div>
                <div className="border-t border-zinc-800/80 pt-4">
                  <strong className="block font-mono text-[10px] uppercase tracking-wider text-[#F4F6F8]">
                    Administrative & Technical Office:
                  </strong>
                  <span>{ADMIN_ADDRESS}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-zinc-800/80 pt-4 text-xs text-[#9AA3B2]">
                <Clock className="h-4 w-4 text-[#FF5500]" />
                <span>24/7 Rapid Response for Contracted Industrial Facilities</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive RFP / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="border border-zinc-800 bg-[#111620] p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F4F6F8]">
                Submit Project Specification
              </h3>
              <p className="mt-1 text-xs text-[#9AA3B2]">
                Provide your scope details below. We typically return with initial technical feedback
                within 24 business hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  data-testid="contact-form-success"
                  className="mt-8 border border-green-500/30 bg-green-950/20 p-8 text-center"
                >
                  <CheckCircle2 className="mx-auto h-12 w-12 text-green-400" />
                  <h4 className="mt-4 font-display text-2xl font-bold uppercase text-[#F4F6F8]">
                    Inquiry Recorded Successfully
                  </h4>
                  <p className="mt-2 text-sm text-[#9AA3B2]">
                    Thank you, {formData.name || "Sir/Madam"}. Our engineering desk has received
                    your project requirements.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <a
                      href={waLink(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#FF5500] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#0A0D12] transition-colors hover:bg-[#F4F6F8]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Send via WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          phone: "",
                          email: "",
                          service: SERVICES_OPTIONS[0],
                          message: "",
                        });
                      }}
                      className="border border-zinc-700 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#F4F6F8] hover:border-zinc-500"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  data-testid="contact-form"
                  className="mt-8 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-[#9AA3B2]">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Subhashish Roy"
                        data-testid="contact-input-name"
                        className="mt-1.5 w-full border border-zinc-800 bg-[#0A0D12] px-4 py-3 text-sm text-[#F4F6F8] placeholder-zinc-600 focus:border-[#FF5500] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-[#9AA3B2]">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. Eastern Steel Works Ltd."
                        data-testid="contact-input-company"
                        className="mt-1.5 w-full border border-zinc-800 bg-[#0A0D12] px-4 py-3 text-sm text-[#F4F6F8] placeholder-zinc-600 focus:border-[#FF5500] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-[#9AA3B2]">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98300 XXXXX"
                        data-testid="contact-input-phone"
                        className="mt-1.5 w-full border border-zinc-800 bg-[#0A0D12] px-4 py-3 text-sm text-[#F4F6F8] placeholder-zinc-600 focus:border-[#FF5500] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-[#9AA3B2]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="engineer@company.com"
                        data-testid="contact-input-email"
                        className="mt-1.5 w-full border border-zinc-800 bg-[#0A0D12] px-4 py-3 text-sm text-[#F4F6F8] placeholder-zinc-600 focus:border-[#FF5500] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-[#9AA3B2]">
                      Required Service Area
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      data-testid="contact-input-service"
                      className="mt-1.5 w-full border border-zinc-800 bg-[#0A0D12] px-4 py-3 text-sm text-[#F4F6F8] focus:border-[#FF5500] focus:outline-none"
                    >
                      {SERVICES_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0A0D12] text-[#F4F6F8]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-[#9AA3B2]">
                      Scope Summary / Ratings / Voltage Level
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="e.g. Need quotation for 11kV/415V 1.6 MVA outdoor transformer and Form 4b 3200A PCC panel with 4 incoming sources..."
                      data-testid="contact-input-message"
                      className="mt-1.5 w-full border border-zinc-800 bg-[#0A0D12] px-4 py-3 text-sm text-[#F4F6F8] placeholder-zinc-600 focus:border-[#FF5500] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      data-testid="contact-submit-btn"
                      className="flex w-full items-center justify-center gap-3 bg-[#FF5500] py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0A0D12] transition-colors duration-300 hover:bg-[#F4F6F8]"
                    >
                      <span>Transmit Specification to Engineering Desk</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 border-t border-zinc-800/80 bg-[#050709] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center bg-[#FF5500]">
              <Zap className="h-4 w-4 text-[#0A0D12]" fill="currentColor" />
            </div>
            <div>
              <p className="font-display text-lg font-black uppercase text-[#F4F6F8]">
                EMPS — Electro Mechanical Power Solutions
              </p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#9AA3B2]">
                Kolkata, West Bengal · ISO 9001:2015 Registered
              </p>
            </div>
          </div>

          <div className="font-mono text-xs text-[#9AA3B2]">
            © {new Date().getFullYear()} Electro Mechanical Power Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};
