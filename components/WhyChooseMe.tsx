"use client";

import { useRef, useEffect, useState } from "react";
import { motion, Variants, useInView, animate } from "framer-motion";
import { CheckCircle2, Target, Zap } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 48, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const card: Variants = {
    hidden: { opacity: 0, y: 48, scale: 0.95 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const stats = [
    { to: 2,  suffix: "+", label: "Years Experience" },
    { to: 50, suffix: "+", label: "Projects Delivered" },
    { to: 30, suffix: "+", label: "Happy Clients" },
];

const reasons = [
    {
        title: "Proven Expertise",
        description: "With over 2 years of experience, I've helped businesses across various industries build strong social media presences and achieve measurable results.",
        icon: CheckCircle2,
    },
    {
        title: "Personalised Solutions",
        description: "I design strategies that reflect your unique brand and business goals, ensuring every solution is tailored to your specific needs and audience.",
        icon: Target,
    },
    {
        title: "Results-Oriented Approach",
        description: "My focus is on delivering real, sustainable growth and engagement that leads to long-term success and measurable ROI.",
        icon: Zap,
    },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(0, to, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate(v) { setValue(Math.round(v)); },
        });
        return controls.stop;
    }, [isInView, to]);

    return <span ref={ref}>{value}{suffix}</span>;
}

export default function WhyChooseMe() {
    return (
        <section className="py-20 md:py-28 bg-[#f7f7f7] overflow-hidden">
            <div className="container">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-16">
                    <div>
                        <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#8B5E3C" }}>
                            Why Me
                        </motion.p>
                        <motion.h2 {...fadeUp(0.06)} className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0d0d0d] leading-tight">
                            Why Choose<br className="hidden sm:block" /> TheDigitalTee?
                        </motion.h2>
                    </div>

                    {/* Stats with count-up */}
                    <motion.div {...fadeUp(0.12)} className="flex gap-8 md:gap-12 shrink-0">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-3xl md:text-4xl font-black text-[#0d0d0d]">
                                    <CountUp to={stat.to} suffix={stat.suffix} />
                                </p>
                                <p className="text-xs font-medium mt-0.5" style={{ color: "#999999" }}>{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Cards — stagger */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {reasons.map((reason) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={reason.title}
                                variants={card}
                                whileHover={{ y: -7, transition: { type: "spring", stiffness: 280, damping: 22 } }}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5 cursor-default"
                            >
                                <motion.div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: "rgba(139,94,60,0.10)" }}
                                    whileHover={{ scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 300 } }}
                                >
                                    <Icon size={22} style={{ color: "#8B5E3C" }} />
                                </motion.div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">{reason.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{reason.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}
