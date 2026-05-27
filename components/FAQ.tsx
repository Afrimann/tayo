"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What industries do you specialise in?",
        answer: "I work with a diverse range of clients, from tech startups and e-commerce brands to lifestyle and wellness businesses. My strategies are adaptable and tailored to each unique market.",
    },
    {
        question: "Do you offer custom packages?",
        answer: "Absolutely. While I have standard packages for common needs, I understand every business is different. I'm happy to create a bespoke proposal based on your specific goals and budget.",
    },
    {
        question: "What is your typical turnaround time?",
        answer: "For social media management, we work on a monthly retainer basis. For specific projects like strategy audits or web copy, turnaround typically ranges from 1–2 weeks depending on scope.",
    },
    {
        question: "How do we get started?",
        answer: "It starts with a free discovery call. Just click the 'Contact us' button and we'll discuss your needs. If we're a good fit, I'll send over a tailored proposal within 24 hours.",
    },
    {
        question: "Do you offer voice acting in multiple languages?",
        answer: "Yes! My multilingual background allows me to deliver professional voice recordings in English and other languages. Reach out to discuss your specific language requirements.",
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 48, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
                    <div>
                        <motion.p
                            {...fadeUp()}
                            className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                            style={{ color: "#8B5E3C" }}
                        >
                            FAQ
                        </motion.p>
                        <motion.h2
                            {...fadeUp(0.05)}
                            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0d0d0d] leading-tight"
                        >
                            Frequently Asked<br className="hidden sm:block" /> Questions
                        </motion.h2>
                    </div>
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-base md:text-lg leading-relaxed max-w-sm md:text-right"
                        style={{ color: "#555555" }}
                    >
                        Got questions? I&apos;ve got answers. Don&apos;t see yours? Feel free to reach out directly.
                    </motion.p>
                </div>

                {/* Accordion */}
                <div className="max-w-3xl">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={faq.question}
                                {...fadeUp(i * 0.06)}
                                className={`border-b transition-colors ${isOpen ? "border-[#8B5E3C]/30" : "border-gray-200"}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between py-5 text-left"
                                >
                                    <span
                                        className="text-base md:text-lg font-semibold pr-4 transition-colors"
                                        style={{ color: isOpen ? "#0d0d0d" : "#444444" }}
                                    >
                                        {faq.question}
                                    </span>
                                    <span
                                        className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center border-[1.5px] transition-colors"
                                        style={
                                            isOpen
                                                ? { backgroundColor: "#8B5E3C", borderColor: "#8B5E3C" }
                                                : { backgroundColor: "transparent", borderColor: "#d1d5db" }
                                        }
                                    >
                                        {isOpen
                                            ? <Minus size={12} color="#ffffff" />
                                            : <Plus size={12} color="#6b7280" />
                                        }
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p
                                                className="pb-6 text-sm md:text-base leading-relaxed border-l-2 pl-4"
                                                style={{ color: "#666666", borderColor: "#8B5E3C" }}
                                            >
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
