"use client";

import { motion } from "framer-motion";
import { User, Briefcase } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marketing Director @ TechFlow",
        type: "Client",
        quote: "Tayo's strategic approach to our social media completely transformed our online presence. Engagement is up 200%!",
    },
    {
        name: "David Chen",
        role: "Content Strategist",
        type: "Colleague",
        quote: "I've worked with Tayo on several campaigns. His eye for design and understanding of viral trends is unmatched.",
    },
    {
        name: "Emily Davis",
        role: "Founder, Glow Up Skincare",
        type: "Client",
        quote: "Professional, creative, and data-driven. Tayo didn't just post content; he built a community around our brand.",
    },
    {
        name: "Michael Brown",
        role: "Senior Copywriter",
        type: "Colleague",
        quote: "A true team player who brings fresh ideas to every brainstorming session. It's always a pleasure collaborating with him.",
    },
    {
        name: "Jessica Lee",
        role: "CEO, Urban Eats",
        type: "Client",
        quote: "The ROI we've seen since working with The Digital Tee has been incredible. Highly recommended for any growing business.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 md:py-32 overflow-hidden bg-background">
            <div className="container mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    What People <span className="text-gradient">Say</span>
                </motion.h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Hear from the clients I've helped grow and the colleagues I've collaborated with.
                </p>
            </div>

            <div className="relative flex w-full overflow-hidden mask-gradient-x">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-8 whitespace-nowrap py-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Adjust speed here
                    }}
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[450px] p-8 rounded-3xl bg-white/5 border border-white/10 shrink-0 whitespace-normal hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${testimonial.type === 'Client' ? 'bg-primary/20 text-primary' : 'bg-secondary/40 text-white'
                                    }`}>
                                    {testimonial.type === 'Client' ? <User size={24} /> : <Briefcase size={24} />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                                <span className={`ml-auto px-3 py-1 rounded-full text-xs font-medium border ${testimonial.type === 'Client'
                                        ? 'border-primary/30 text-primary bg-primary/10'
                                        : 'border-white/20 text-muted-foreground bg-white/5'
                                    }`}>
                                    {testimonial.type}
                                </span>
                            </div>
                            <p className="text-muted-foreground italic leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
