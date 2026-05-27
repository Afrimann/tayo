"use client";

import { motion, Variants } from "framer-motion";
import { Search, Lightbulb, PenTool, TrendingUp } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 48, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const card: Variants = {
    hidden: { opacity: 0, y: 44, scale: 0.95 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const steps = [
    { number: "01", title: "Discovery & Audit", description: "We dive deep into your brand's current performance, audience, and goals to identify key opportunities for growth.", icon: Search },
    { number: "02", title: "Strategy Development", description: "I craft a tailored roadmap including content pillars, platform selection, and key performance indicators.", icon: Lightbulb },
    { number: "03", title: "Content Creation", description: "Bringing the strategy to life with high-quality visuals, compelling copy, and scheduled posts that resonate.", icon: PenTool },
    { number: "04", title: "Analysis & Optimisation", description: "Continuous monitoring of campaign performance, refining tactics based on data to ensure maximum ROI.", icon: TrendingUp },
];

export default function Process() {
    return (
        <section id="process" className="py-20 md:py-28 bg-[#f7f7f7] overflow-hidden">
            <div className="container">

                {/* Header */}
                <div className="text-center mb-14 md:mb-16">
                    <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#8B5E3C" }}>
                        Process
                    </motion.p>
                    <motion.h2 {...fadeUp(0.06)} className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0d0d0d] leading-tight mb-4">
                        How We Work Together
                    </motion.h2>
                    <motion.p {...fadeUp(0.12)} className="text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "#555555" }}>
                        A transparent, collaborative process designed to take your brand from where it is to where it needs to be.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="relative">

                    {/* Connecting line — draws left to right */}
                    <motion.div
                        className="hidden lg:block absolute top-11 left-0 right-0 h-px origin-left"
                        style={{ background: "linear-gradient(to right, transparent, rgba(139,94,60,0.25), rgba(139,94,60,0.25), transparent)" }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
                    />

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {steps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.number}
                                    variants={card}
                                    whileHover={{ y: -7, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: { type: "spring", stiffness: 280, damping: 22 } }}
                                    className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-5 cursor-default"
                                >
                                    <motion.div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: "rgba(139,94,60,0.10)" }}
                                        whileHover={{ scale: 1.12, rotate: 8, transition: { type: "spring", stiffness: 300 } }}
                                    >
                                        <Icon size={20} style={{ color: "#8B5E3C" }} />
                                    </motion.div>

                                    <div className="flex flex-col gap-2">
                                        <span className="text-xs font-bold tabular-nums" style={{ color: "#8B5E3C" }}>
                                            {step.number}
                                        </span>
                                        <h3 className="text-lg font-bold text-[#0d0d0d]">{step.title}</h3>
                                        <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
