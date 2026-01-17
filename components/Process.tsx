"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, TrendingUp } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discovery & Audit",
        description: "We dive deep into your brand's current performance, audience, and goals to identify key opportunities for growth.",
        icon: Search
    },
    {
        number: "02",
        title: "Strategy Development",
        description: "I craft a tailored roadmap including content pillars, platform selection, and key performance indicators (KPIs).",
        icon: Lightbulb
    },
    {
        number: "03",
        title: "Content Creation",
        description: "Bringing the strategy to life with high-quality visuals, compelling copy, and scheduled posts that resonate.",
        icon: PenTool
    },
    {
        number: "04",
        title: "Analysis & Optimization",
        description: "Continuous monitoring of campaign performance, refining tactics based on data to ensure maximum ROI.",
        icon: TrendingUp
    }
];

export default function Process() {
    return (
        <section id="process" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Texture similar to Hero */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        How We <span className="text-gradient">Work Together</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg">
                        A seamless, transparent process designed to take your brand from where it is to where it needs to be.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary/20 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative group"
                        >
                            <div className="bg-background border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 h-full z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <step.icon size={26} />
                                    </div>
                                    <span className="text-4xl font-bold text-white/5 group-hover:text-primary/10 transition-colors duration-300 font-sans">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
