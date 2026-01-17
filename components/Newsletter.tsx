"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="py-20 md:py-24 relative overflow-hidden">
            <div className="container max-w-5xl relative z-10">
                <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light" />
                    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/10 to-transparent pointer-events-none" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-[80px]" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Stay Ahead of the Curve
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Join 5,000+ marketers and business owners receiving my weekly tips on digital strategy, content trends, and brand growth.
                        </p>

                        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-full bg-white text-background placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-white/25 transition-shadow"
                            />
                            <button className="px-8 py-4 rounded-full bg-secondary text-white font-bold hover:bg-secondary/90 transition-colors shadow-lg flex items-center justify-center gap-2 group">
                                Subscribe
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>

                        <p className="text-white/60 text-sm mt-6">
                            No spam, ever. Unsubscribe at any time.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
