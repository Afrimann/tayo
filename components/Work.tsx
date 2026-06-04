"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    hidden: { opacity: 0, y: 48, scale: 0.96 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.65, ease: "easeOut" },
    },
};

const projects = [
    { title: "Daniel Iloh Limited", category: "Senior Social Media Manager", stats: "+150% Engagement", link: "https://www.instagram.com/langlopact", image: "/images/work/daniel-iloh.png" },
    { title: "Languages for Growth & Impact", category: "Project Officer & Social Media Manager", stats: "3M+ Impressions", link: "https://www.instagram.com/langlopact", image: "/images/work/languages-foundation.png" },
    { title: "Digifigs", category: "Digital Marketing Intern", stats: "50k New Followers", link: "https://www.instagram.com/langlopact", image: "/images/work/digifigs.png" },
    { title: "PostPaddy", category: "Digital Marketing Intern", stats: "20% Conversion Increase", link: "https://www.instagram.com/langlopact", image: "/images/work/postpaddy.png" },
];

export default function Work() {
    return (
        <section id="work" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
                    <div>
                        <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#7D4A3F" }}>
                            Portfolio
                        </motion.p>
                        <motion.h2 {...fadeUp(0.06)} className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] leading-tight">
                            Selected Work
                        </motion.h2>
                    </div>
                    <motion.p {...fadeUp(0.12)} className="text-base md:text-lg leading-relaxed max-w-sm md:text-right" style={{ color: "#555555" }}>
                        A glimpse into the results delivered for diverse brands across industries.
                    </motion.p>
                </div>

                {/* 2×2 Grid — stagger */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {projects.map((project) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={card}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 260, damping: 22 } }}
                            className="group relative block aspect-4/3 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                style={{ backgroundColor: "#7D4A3F" }}
                            />

                            <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-bold uppercase tracking-[0.18em] mb-2 block" style={{ color: "#C4844A" }}>
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-black text-white mb-1.5 leading-snug">{project.title}</h3>
                                    <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>{project.stats}</p>
                                </div>
                            </div>

                            <motion.div
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white"
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <ArrowUpRight size={18} />
                            </motion.div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Footer link */}
                <motion.div {...fadeUp(0.2)} className="mt-10 text-center">
                    <Link href="/work" className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: "#7D4A3F" }}>
                        See Full Portfolio <ArrowUpRight size={14} />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
