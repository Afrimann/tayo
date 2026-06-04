"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Send, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 48, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const services = [
    "Social Media Management",
    "Content Creation",
    "Photography & Videography",
    "Brand Consultation & Strategy",
    "Other",
];

const referralSources = [
    "Instagram",
    "Google Search",
    "Referral from a friend",
    "LinkedIn",
    "Other",
];

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        brand: "",
        service: "",
        message: "",
        referral: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const result = await sendContactEmail(form);
        setLoading(false);
        if (result.success) {
            setSubmitted(true);
        } else {
            setError(result.error ?? "Something went wrong. Please try again.");
        }
    }

    return (
        <section id="contact" className="py-20 md:py-28 overflow-hidden bg-[#FAF7F4]">
            <div className="container">

                {/* Header */}
                <div className="mb-14 md:mb-16 text-center max-w-2xl mx-auto">
                    <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#7D4A3F" }}>
                        Contact
                    </motion.p>
                    <motion.h2 {...fadeUp(0.06)} className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] leading-tight mb-4">
                        Let&apos;s build something great together.
                    </motion.h2>
                    <motion.p {...fadeUp(0.12)} className="text-base md:text-lg leading-relaxed" style={{ color: "#5C5C5C" }}>
                        Fill in the form below and I&apos;ll get back to you within 24–48 hours.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-start">

                    {/* Left: Form */}
                    <motion.div {...fadeUp(0.1)}>
                        {submitted ? (
                            <div className="rounded-3xl p-12 text-center" style={{ backgroundColor: "rgba(125,74,63,0.07)", border: "1px solid rgba(125,74,63,0.2)" }}>
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "#7D4A3F" }}>
                                    <Send size={24} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-black text-[#1C1C1C] mb-2">Inquiry Sent!</h3>
                                <p className="text-[#5C5C5C]">Thank you for reaching out. I&apos;ll be in touch within 24–48 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-[#1C1C1C] mb-1.5">Full Name <span style={{ color: "#7D4A3F" }}>*</span></label>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your full name"
                                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:border-[#7D4A3F] focus:ring-2 focus:ring-[#7D4A3F]/10 transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#1C1C1C] mb-1.5">Email Address <span style={{ color: "#7D4A3F" }}>*</span></label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:border-[#7D4A3F] focus:ring-2 focus:ring-[#7D4A3F]/10 transition"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-[#1C1C1C] mb-1.5">Phone Number <span className="text-gray-400 font-normal">(optional)</span></label>
                                        <input
                                            name="phone"
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+234 000 000 0000"
                                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:border-[#7D4A3F] focus:ring-2 focus:ring-[#7D4A3F]/10 transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#1C1C1C] mb-1.5">Business / Brand Name <span className="text-gray-400 font-normal">(optional)</span></label>
                                        <input
                                            name="brand"
                                            value={form.brand}
                                            onChange={handleChange}
                                            placeholder="Your brand name"
                                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:border-[#7D4A3F] focus:ring-2 focus:ring-[#7D4A3F]/10 transition"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#1C1C1C] mb-1.5">Service of Interest</label>
                                    <select
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#7D4A3F] focus:ring-2 focus:ring-[#7D4A3F]/10 transition"
                                    >
                                        <option value="">Select a service...</option>
                                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#1C1C1C] mb-1.5">Tell me about your project <span style={{ color: "#7D4A3F" }}>*</span></label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Share a bit about your brand, goals, and what you're looking for..."
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:border-[#7D4A3F] focus:ring-2 focus:ring-[#7D4A3F]/10 transition resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#1C1C1C] mb-1.5">How did you hear about TheDigitalTee? <span className="text-gray-400 font-normal">(optional)</span></label>
                                    <select
                                        name="referral"
                                        value={form.referral}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#7D4A3F] focus:ring-2 focus:ring-[#7D4A3F]/10 transition"
                                    >
                                        <option value="">Select an option...</option>
                                        {referralSources.map((s) => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>

                                {error && (
                                    <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                                        Something went wrong sending your message. Please try again or reach out directly at{" "}
                                        <a href="mailto:Temitayoomotosho50@gmail.com" className="underline font-semibold">Temitayoomotosho50@gmail.com</a>.
                                    </p>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-10 py-3.5 text-sm font-bold text-white disabled:opacity-60 disabled:cursor-not-allowed"
                                    style={{ backgroundColor: "#7D4A3F" }}
                                    whileHover={!loading ? { scale: 1.03, y: -2, boxShadow: "0 14px 30px rgba(125,74,63,0.35)" } : {}}
                                    whileTap={!loading ? { scale: 0.97 } : {}}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {loading ? (
                                        <><Loader2 size={15} className="animate-spin" /> Sending...</>
                                    ) : (
                                        <>Send Inquiry <Send size={15} /></>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>

                    {/* Right: Contact info + Calendly */}
                    <motion.div {...fadeUp(0.2)} className="flex flex-col gap-6">

                        <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm space-y-5">
                            <h3 className="text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Alternative Contact</h3>

                            <a href="mailto:Temitayoomotosho50@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(125,74,63,0.10)" }}>
                                    <Mail size={17} style={{ color: "#7D4A3F" }} />
                                </div>
                                <div>
                                    <p className="text-xs text-[#5C5C5C] mb-0.5">Email</p>
                                    <p className="text-sm font-semibold text-[#1C1C1C] group-hover:text-[#7D4A3F] transition-colors break-all">Temitayoomotosho50@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://wa.me/2348082028739" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(125,74,63,0.10)" }}>
                                    <Phone size={17} style={{ color: "#7D4A3F" }} />
                                </div>
                                <div>
                                    <p className="text-xs text-[#5C5C5C] mb-0.5">WhatsApp</p>
                                    <p className="text-sm font-semibold text-[#1C1C1C] group-hover:text-[#7D4A3F] transition-colors">+234 808 202 8739</p>
                                </div>
                            </a>

                            <a href="https://www.instagram.com/_thedigitaltee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(125,74,63,0.10)" }}>
                                    <Instagram size={17} style={{ color: "#7D4A3F" }} />
                                </div>
                                <div>
                                    <p className="text-xs text-[#5C5C5C] mb-0.5">Instagram</p>
                                    <p className="text-sm font-semibold text-[#1C1C1C] group-hover:text-[#7D4A3F] transition-colors">@_thedigitaltee</p>
                                </div>
                            </a>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm">
                            <h3 className="text-sm font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">Book a Discovery Call</h3>
                            <p className="text-sm text-[#5C5C5C] mb-4">Schedule a free 30-minute call to discuss your goals.</p>
                            <a
                                href="https://calendly.com/thedigitalltee/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold text-white transition-all hover:opacity-90"
                                style={{ backgroundColor: "#7D4A3F" }}
                            >
                                Book on Calendly
                            </a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
