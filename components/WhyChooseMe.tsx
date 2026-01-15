"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Zap } from "lucide-react";

const reasons = [
    {
        title: "Proven Expertise",
        description: "With over 2 years of experience, I’ve helped businesses across various industries build strong social media presences and achieve measurable results.",
        icon: CheckCircle2,
    },
    {
        title: "Personalized Solutions",
        description: "I design strategies that reflect your unique brand and business goals, ensuring every solution is tailored to your needs.",
        icon: Target,
    },
    {
        title: "Results-Oriented Approach",
        description: "My focus is on delivering real, sustainable growth and engagement that lead to long-term success.",
        icon: Zap,
    },
];

export default function WhyChooseMe() {
    return (
        <section className="py-20 md:py-32">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Why Choose <span className="text-gradient">Me?</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                            className="text-center p-8 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/5"
                        >
                            <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <reason.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
