"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 48, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const linkCard: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

const contactLinks = [
    { label: "Email",     value: "omotoshotemitayo@gmail.com",   href: "mailto:omotoshotemitayo@gmail.com", icon: Mail },
    { label: "LinkedIn",  value: "linkedin.com/in/thedigitaltee", href: "https://linkedin.com",              icon: Linkedin },
    { label: "Instagram", value: "@thedigitaltee",                href: "https://www.instagram.com/langlopact", icon: Instagram },
];

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#0d0d0d" }}>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: CTA text */}
                    <div>
                        <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#8B5E3C" }}>
                            Contact
                        </motion.p>
                        <motion.h2 {...fadeUp(0.06)} className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                            Ready to Scale<br className="hidden sm:block" /> Your Brand?
                        </motion.h2>
                        <motion.p {...fadeUp(0.12)} className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                            Let&apos;s collaborate to build a digital presence that actually converts. Currently accepting new clients — let&apos;s talk about your goals.
                        </motion.p>
                        <motion.div {...fadeUp(0.18)} className="flex items-center gap-4">
                            <motion.a
                                href="mailto:omotoshotemitayo@gmail.com"
                                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white"
                                style={{ backgroundColor: "#6B3F1F" }}
                                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 14px 30px rgba(107,63,31,0.45)" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                Let&apos;s Talk <ArrowUpRight size={15} />
                            </motion.a>
                            <span className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                                </span>
                                Available now
                            </span>
                        </motion.div>
                    </div>

                    {/* Right: contact link cards — slide in from right */}
                    <motion.div
                        className="flex flex-col gap-4"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {contactLinks.map(({ label, value, href, icon: Icon }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                variants={linkCard}
                                whileHover={{ x: 6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                                className="group flex items-center gap-5 rounded-2xl border p-6 transition-colors duration-300 hover:border-[#8B5E3C]/50"
                                style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.03)" }}
                            >
                                <motion.div
                                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: "rgba(139,94,60,0.15)" }}
                                    whileHover={{ scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 300 } }}
                                >
                                    <Icon size={18} style={{ color: "#8B5E3C" }} />
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                                        {label}
                                    </p>
                                    <p className="text-sm font-semibold text-white truncate">{value}</p>
                                </div>
                                <ArrowUpRight
                                    size={16}
                                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ color: "#8B5E3C" }}
                                />
                            </motion.a>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
