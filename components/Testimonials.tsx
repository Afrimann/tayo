"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Mr. Daniel",
        role: "CEO, Daniel Iloh Limited",
        type: "Client",
        quote: "Working with TheDigitalTee transformed how our brand shows up online. The consistency, creativity, and results have been outstanding. Our engagement and reach grew significantly under her management.",
    },
    {
        name: "Mr. Moses",
        role: "Founder, Languages for Growth and Impact Foundation",
        type: "Client",
        quote: "Temitayo brought both professionalism and genuine passion to our social media. She understood our mission deeply and created content that truly resonated with our audience and amplified our reach.",
    },
    {
        name: "Ashewa Beauty Clinic",
        role: "Beauty & Wellness Brand",
        type: "Client",
        quote: "The page revamp was a game-changer for us. TheDigitalTee completely overhauled our online presence — from the visuals to the strategy — and the difference was visible almost immediately.",
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 48, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="w-80 md:w-96 shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-5 whitespace-normal">
            {/* Quote icon */}
            <Quote size={20} style={{ color: "#7D4A3F" }} className="shrink-0" />

            <p className="text-sm md:text-base leading-relaxed flex-1" style={{ color: "#444444" }}>
                &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {/* Avatar placeholder */}
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: testimonial.type === "Client" ? "#7D4A3F" : "#555555" }}
                >
                    {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#1C1C1C] truncate">{testimonial.name}</p>
                    <p className="text-xs truncate" style={{ color: "#999999" }}>{testimonial.role}</p>
                </div>
                <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                    style={
                        testimonial.type === "Client"
                            ? { backgroundColor: "rgba(125,74,63,0.10)", color: "#7D4A3F" }
                            : { backgroundColor: "#f0f0f0", color: "#666666" }
                    }
                >
                    {testimonial.type}
                </span>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 md:py-28 bg-[#f7f7f7] overflow-hidden">

            {/* Header */}
            <div className="container mb-14 md:mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <motion.p
                            {...fadeUp()}
                            className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                            style={{ color: "#7D4A3F" }}
                        >
                            Testimonials
                        </motion.p>
                        <motion.h2
                            {...fadeUp(0.05)}
                            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] leading-tight"
                        >
                            What People Say
                        </motion.h2>
                    </div>
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-base md:text-lg leading-relaxed max-w-sm md:text-right"
                        style={{ color: "#555555" }}
                    >
                        Hear from the clients and colleagues who&apos;ve experienced the work firsthand.
                    </motion.p>
                </div>
            </div>

            {/* Scrolling marquee */}
            <div className="relative w-full overflow-hidden">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to right, #f7f7f7, transparent)" }} />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to left, #f7f7f7, transparent)" }} />

                <motion.div
                    className="flex gap-5 py-2 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                >
                    {[...testimonials, ...testimonials].map((testimonial, i) => (
                        <TestimonialCard key={i} testimonial={testimonial} />
                    ))}
                </motion.div>
            </div>

        </section>
    );
}
