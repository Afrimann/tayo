"use client";

import { motion } from "framer-motion";
import { Palette, Share2, TrendingUp, Users } from "lucide-react";

const services = [
    {
        title: "Social Media Management",
        description: "Comprehensive management of social media platforms, including content scheduling, audience engagement, and account growth.",
        icon: Users,
    },
    {
        title: "Content Creation",
        description: "Crafting high-quality visual and written content aligned with your brand’s tone, including graphics, videos, and carousels designed to engage your target audience.",
        icon: Palette,
    },
    {
        title: "Social Media Strategy",
        description: "Custom social media strategies tailored to your business goals, incorporating audience analysis, competitor insights, and long-term growth planning.",
        icon: TrendingUp,
    },
    {
        title: "Brand Consultation",
        description: "I help businesses and personal brands discover, define, and develop a unique identity that aligns with their goals and speaks directly to their target audience.",
        icon: Share2,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-32 bg-secondary/5">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        My <span className="text-gradient">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        I offer a comprehensive suite of digital marketing services designed to elevate your brand and drive real results.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
