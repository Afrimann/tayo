"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What industries do you specialize in?",
        answer: "I work with a diverse range of clients, from tech startups and e-commerce brands to lifestyle and wellness businesses. My strategies are adaptable and tailored to each unique market."
    },
    {
        question: "Do you offer custom packages?",
        answer: "Absolutely. While I have standard packages for common needs, I understand every business is different. I'm happy to create a bespoke proposal based on your specific goals and budget."
    },
    {
        question: "What is your typical turnaround time?",
        answer: "For social media management, we work on a monthly retainer basis. For specific projects like strategy audits or web copy, turnaround typically ranges from 1-2 weeks depending on scope."
    },
    {
        question: "How do we get started?",
        answer: "It starts with a free discovery call! Just click the 'Get In Touch' button below to book a time. We'll discuss your needs, and if we're a good fit, I'll send over a proposal within 24 hours."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 md:py-32 bg-secondary/5">
            <div className="container max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg">
                        Got questions? I've got answers. If you don't see what you're looking for, feel free to reach out directly.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            >
                                <span className="text-lg md:text-xl font-bold">{faq.question}</span>
                                <span className={`p-2 rounded-full bg-white/5 transition-colors ${openIndex === index ? 'text-primary bg-primary/20' : 'text-muted-foreground'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
