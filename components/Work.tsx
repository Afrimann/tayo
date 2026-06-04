"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ImageIcon, X } from "lucide-react";
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
    {
        title: "Daniel Iloh Limited",
        category: "Senior Social Media Manager",
        stats: "56.5K views in 30 days · 1,615 followers",
        description: "Full social media management for a leading digital marketing & automation agency. Grew presence through consistent content strategy and community engagement.",
        link: "https://www.instagram.com/danielilohlimited",
        image: "/images/work/daniel-iloh.jpg",
        tag: "Social Media",
    },
    {
        title: "Languages for Growth & Impact",
        category: "Project Officer & Social Media Manager",
        stats: "1,879 TikTok followers · 273 Instagram followers",
        description: "Managed social media across Instagram and TikTok for a non-profit advancing SDGs through language learning. Built an engaged multilingual community from scratch.",
        link: "https://www.instagram.com/langlopact",
        image: "/images/work/languages-foundation.jpg",
        tag: "Social Media",
    },
    {
        title: "shopmittee",
        category: "Content Creation & Social Media",
        stats: "54.6K video views · 939 followers",
        description: "Created scroll-stopping wellness and healthy living content for a TikTok brand, driving organic reach through strategic video production and community engagement.",
        link: "https://www.tiktok.com/@shopmittee",
        image: "/images/work/shopmittee.jpg",
        tag: "Content Creation",
    },
    {
        title: "Ashewa Beauty Clinic",
        category: "Mini Page Revamp",
        stats: "Complete profile transformation",
        description: "Delivered a full Instagram profile overhaul — rebranding from an unnamed personal page to a professional, conversion-ready beauty salon presence with clear bio, highlights, and brand identity.",
        link: null,
        image: "/images/work/ASHEWA CASE STUDY.png",
        tag: "Strategy",
    },
];

export default function Work() {
    const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

    return (
        <section id="work" className="py-20 md:py-28 bg-white overflow-hidden">

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-200 flex items-center justify-center bg-black/85 p-4 cursor-zoom-out"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 320, damping: 28 }}
                            className="relative max-h-[90vh] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightbox.src}
                                alt={lightbox.alt}
                                width={900}
                                height={1200}
                                className="w-full h-auto object-contain max-h-[90vh]"
                            />
                            <button
                                onClick={() => setLightbox(null)}
                                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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

                {/* Cards grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={card}
                            className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Card top accent bar */}
                            <div className="h-1 w-full" style={{ backgroundColor: "#7D4A3F" }} />

                            <div className="flex flex-col flex-1 p-7 md:p-8 gap-5">

                                {/* Tag + category */}
                                <div className="flex items-center gap-3">
                                    <span
                                        className="text-xs font-semibold px-3 py-1 rounded-full"
                                        style={{ backgroundColor: "rgba(125,74,63,0.10)", color: "#7D4A3F" }}
                                    >
                                        {project.tag}
                                    </span>
                                    <span className="text-xs text-[#5C5C5C]">{project.category}</span>
                                </div>

                                {/* Title */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-black text-[#1C1C1C] leading-snug mb-2">
                                        {project.title}
                                    </h3>
                                    <p
                                        className="text-xs font-semibold"
                                        style={{ color: "#7D4A3F" }}
                                    >
                                        {project.stats}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-sm leading-relaxed flex-1" style={{ color: "#5C5C5C" }}>
                                    {project.description}
                                </p>

                                {/* Actions */}
                                <div className="flex items-center gap-4 pt-2 border-t border-gray-100">

                                    {/* View Image */}
                                    {project.image && (
                                        <button
                                            onClick={() => setLightbox({ src: project.image!, alt: project.title })}
                                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95"
                                            style={{ backgroundColor: "#7D4A3F" }}
                                        >
                                            <ImageIcon size={13} />
                                            View Image
                                        </button>
                                    )}

                                    {/* External link */}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:opacity-70"
                                            style={{ color: "#5C5C5C" }}
                                        >
                                            Visit Profile <ArrowUpRight size={13} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
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
