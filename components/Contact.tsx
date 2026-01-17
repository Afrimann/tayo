"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 text-center overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-linear-to-br from-primary/20 via-white/5 to-transparent border border-primary/20 overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Ready to Scale Your Brand?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Let's collaborate to build a social media presence that actually converts. I'm currently accepting new clients for the coming quarter.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="mailto:omotoshotemitayo@gmail.com"
                            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-10 text-lg font-bold text-white shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-primary/50 group"
                        >
                            <Mail size={20} className="hidden md:block" />
                            Get In Touch
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform md:block hidden" />
                        </a>
                        <a
                            href="https://linkedin.com" // Placeholder, user can update
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-10 text-lg font-bold text-foreground transition-all hover:bg-white/10 hover:border-white/20"
                        >
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
