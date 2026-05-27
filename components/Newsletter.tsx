"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 48, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export default function Newsletter() {
    return (
        <section className="py-20 md:py-28 bg-[#f7f7f7] overflow-hidden">
            <div className="container">

                <div className="max-w-2xl mx-auto text-center">
                    <motion.p
                        {...fadeUp()}
                        className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                        style={{ color: "#8B5E3C" }}
                    >
                        Newsletter
                    </motion.p>
                    <motion.h2
                        {...fadeUp(0.05)}
                        className="text-3xl md:text-4xl font-black text-[#0d0d0d] leading-tight mb-4"
                    >
                        Stay Ahead of the Curve
                    </motion.h2>
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-base md:text-lg leading-relaxed mb-10"
                        style={{ color: "#555555" }}
                    >
                        Join 5,000+ marketers and business owners receiving weekly tips on digital strategy, content trends, and brand growth.
                    </motion.p>

                    <motion.form
                        {...fadeUp(0.15)}
                        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-white text-sm text-[#0d0d0d] placeholder:text-gray-400 focus:outline-none transition-shadow"
                            style={{ boxShadow: "none" }}
                            onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 3px rgba(139,94,60,0.25)"; }}
                            onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shrink-0 transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                            style={{ backgroundColor: "#6B3F1F" }}
                        >
                            Subscribe
                            <Send size={14} />
                        </button>
                    </motion.form>

                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-5 text-xs"
                        style={{ color: "#999999" }}
                    >
                        No spam, ever. Unsubscribe at any time.
                    </motion.p>
                </div>

            </div>
        </section>
    );
}
