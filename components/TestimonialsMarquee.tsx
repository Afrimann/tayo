"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import type { Review } from "@/app/actions/reviews";

function TestimonialCard({ review }: { review: Review }) {
    const initials = review.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <div className="w-80 md:w-96 shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-5 whitespace-normal">
            <div className="flex items-center justify-between">
                <Quote size={20} style={{ color: "#7D4A3F" }} className="shrink-0" />
                <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                            key={s}
                            size={13}
                            fill={s <= review.rating ? "#C9A87C" : "none"}
                            stroke={s <= review.rating ? "#C9A87C" : "#ddd"}
                            strokeWidth={1.5}
                        />
                    ))}
                </div>
            </div>

            <p className="text-sm md:text-base leading-relaxed flex-1" style={{ color: "#444444" }}>
                &ldquo;{review.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: "#7D4A3F" }}
                >
                    {initials}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#1C1C1C] truncate">{review.name}</p>
                    {review.role && (
                        <p className="text-xs truncate" style={{ color: "#999999" }}>{review.role}</p>
                    )}
                </div>
                <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                    style={{ backgroundColor: "rgba(125,74,63,0.10)", color: "#7D4A3F" }}
                >
                    Client
                </span>
            </div>
        </div>
    );
}

export default function TestimonialsMarquee({ reviews }: { reviews: Review[] }) {
    const items = reviews.length >= 2 ? reviews : [...reviews, ...reviews];

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 48, scale: 0.97 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.65, ease: "easeOut" as const, delay },
    });

    return (
        <section id="testimonials" className="py-20 md:py-28 bg-[#f7f7f7] overflow-hidden">
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

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to right, #f7f7f7, transparent)" }} />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to left, #f7f7f7, transparent)" }} />

                <motion.div
                    className="flex gap-5 py-2 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                >
                    {[...items, ...items].map((review, i) => (
                        <TestimonialCard key={`${review.id}-${i}`} review={review} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
