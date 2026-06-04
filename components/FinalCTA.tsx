"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

export default function FinalCTA() {
    return (
        <section className="py-20 md:py-28 bg-[#1C1C1C] overflow-hidden">
            <div className="container text-center max-w-2xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
                    style={{ color: "#C9A87C" }}
                >
                    Ready to Grow?
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: "easeOut", delay: 0.06 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4"
                >
                    Ready to grow your brand?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
                    className="text-base md:text-lg mb-10"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                >
                    Let&apos;s build something that works.
                </motion.p>
                <MotionLink
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-bold text-white"
                    style={{ backgroundColor: "#7D4A3F" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
                    whileHover={{ scale: 1.05, y: -2, boxShadow: "0 14px 32px rgba(125,74,63,0.45)" }}
                    whileTap={{ scale: 0.97 }}
                >
                    Start a Conversation with TEE <ArrowUpRight size={18} />
                </MotionLink>
            </div>
        </section>
    );
}
