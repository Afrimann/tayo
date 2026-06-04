"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Award } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

const fanImages = [
    { src: "/tayo-nysc.jpg", alt: "Tayo at NYSC" },
    { src: "/tayo.jpeg", alt: "Omotosho Temitayo" },
    { src: "/hero-image.png", alt: "Tayo – creative portrait" },
];

const skills = [
    "Social Media Management",
    "Content Creation (Design, Copywriting, Video Editing)",
    "Social Media Strategy & Planning",
    "Audience Engagement & Growth",
    "Paid Advertising Campaigns",
    "Analytics & Performance Reporting",
    "SEO & Hashtag Research",
    "Influencer Outreach & Collaboration",
    "Mobile Photography & Videography",
];

const values = [
    {
        title: "Intentional",
        desc: "Every post, caption, and frame is crafted with purpose.",
    },
    {
        title: "Results-Driven",
        desc: "Strategy rooted in data and audience behavior.",
    },
    {
        title: "Human-Centered",
        desc: "Content that connects because it's made for real people.",
    },
];

const clients = [
    { name: "Daniel Iloh Limited",                    category: "Social Media Management" },
    { name: "Languages for Growth & Impact",          category: "Project Officer & Social Media" },
    { name: "Ashewa Beauty Clinic",                   category: "Page Revamp & Strategy" },
    { name: "shopmittee",                             category: "Content Creation" },
    { name: "zeffron.ai",                             category: "Digital Marketing" },
    { name: "danieliloh.com",                         category: "Brand Strategy" },
    { name: "Falling Walls Lab Ibadan",               category: "Event Coverage" },
];

const fanConfigs = [
    { rotation: -22, z: 1 },
    { rotation: 0,   z: 3 },
    { rotation: 22,  z: 1 },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 48, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
    hidden: { opacity: 0, y: 44, scale: 0.94 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
    const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);
    const [hoveredFan, setHoveredFan] = useState<number | null>(null);

    return (
        <section id="about" className="bg-[#FAF7F4] py-20 md:py-28 overflow-hidden">

            <AnimatePresence>
                {lightboxImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-200 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
                        onClick={() => setLightboxImg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.82, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.82, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 340, damping: 28 }}
                            className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image src={lightboxImg.src} alt={lightboxImg.alt} width={600} height={800} className="w-full h-auto object-cover" />
                            <button onClick={() => setLightboxImg(null)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/55 flex items-center justify-center text-white hover:bg-black/75 transition-colors">
                                <X size={15} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container">

                {/* ── Block 1: Bio ── */}
                <div className="mb-24 md:mb-32">
                    <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-8" style={{ color: "#7D4A3F" }}>
                        About me
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-16 items-center">

                        {/* Fanned photos */}
                        <motion.div
                            {...fadeUp(0.1)}
                            className="relative mx-auto w-full max-w-60 md:max-w-none"
                            style={{ height: "360px" }}
                        >
                            {fanImages.map((img, idx) => {
                                const cfg = fanConfigs[idx];
                                const isHovered = hoveredFan === idx;
                                return (
                                    <motion.div
                                        key={img.src}
                                        className="absolute bottom-0 w-44 h-64 md:w-48 md:h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                                        style={{ left: "50%", x: "-50%", rotate: cfg.rotation, transformOrigin: "bottom center", zIndex: isHovered ? 10 : cfg.z }}
                                        whileHover={{ y: -12, scale: 1.04 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                        onHoverStart={() => setHoveredFan(idx)}
                                        onHoverEnd={() => setHoveredFan(null)}
                                        onClick={() => setLightboxImg(img)}
                                    >
                                        <Image src={img.src} alt={img.alt} fill className="object-cover object-top" />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Bio text */}
                        <motion.div {...fadeUp(0.15)} className="space-y-6">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] leading-tight mb-2">
                                    Omotosho Temitayo
                                </h2>
                                <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#7D4A3F" }}>
                                    TheDigitalTee — Social Media Manager & Brand Strategist
                                </p>
                            </div>

                            <div className="w-10 h-0.75 rounded-full" style={{ backgroundColor: "#7D4A3F" }} />

                            <p className="text-base md:text-[17px] leading-relaxed" style={{ color: "#5C5C5C" }}>
                                Temitayo Omotosho — known in the digital space as TheDigitalTee — is a results-driven marketing and communications professional specialising in social media management, content creation, and brand strategy. A graduate of the University of Ibadan with a Bachelor of Arts in German, her academic background in language and cross-cultural communication gave her a unique edge: the ability to craft messages that don&apos;t just reach people but resonate with them.
                            </p>
                            <p className="text-base md:text-[17px] leading-relaxed" style={{ color: "#5C5C5C" }}>
                                Multilingual and deeply attuned to how different audiences think and engage, Temitayo brings both creative instinct and strategic precision to every brand she works with. With over two years of hands-on experience across industries, she has helped businesses grow their online presence, build loyal communities, and turn content into a consistent revenue driver.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1">
                                {["Social Media", "Content Creation", "Brand Strategy", "Cross-cultural Communication"].map((tag) => (
                                    <span key={tag} className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide" style={{ backgroundColor: "rgba(125,74,63,0.10)", color: "#7D4A3F", border: "1px solid rgba(125,74,63,0.18)" }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Block 2: Awards ── */}
                <div className="mb-24 md:mb-32">
                    <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#7D4A3F" }}>
                        Recognition
                    </motion.p>
                    <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl font-black text-[#1C1C1C] mb-10">
                        Awards &amp; Recognition
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                            { title: "Rising Star Award 2025", org: "Daniel Iloh Limited" },
                            { title: "Best Employee of the Month", org: "Daniel Iloh Limited — October 2025" },
                        ].map((award, i) => (
                            <motion.div
                                key={award.title}
                                {...fadeUp(i * 0.1)}
                                className="flex items-center gap-5 rounded-2xl p-6 border"
                                style={{ backgroundColor: "rgba(125,74,63,0.05)", borderColor: "rgba(125,74,63,0.15)" }}
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#7D4A3F" }}>
                                    <Award size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-[#1C1C1C] mb-0.5">{award.title}</p>
                                    <p className="text-sm" style={{ color: "#5C5C5C" }}>{award.org}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Block 3: Skills ── */}
                <div className="mb-24 md:mb-32">
                    <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#7D4A3F" }}>
                        Skills &amp; Expertise
                    </motion.p>
                    <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl font-black text-[#1C1C1C] mb-10">
                        What I Bring to Your Brand
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {skills.map((skill) => (
                            <motion.div
                                key={skill}
                                variants={item}
                                className="flex items-center gap-3 rounded-xl p-4 bg-white border border-gray-100 shadow-sm"
                            >
                                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#7D4A3F" }} />
                                <span className="text-sm font-medium text-[#1C1C1C]">{skill}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ── Block 4: Values ── */}
                <div className="mb-24 md:mb-32">
                    <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#7D4A3F" }}>
                        Values
                    </motion.p>
                    <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl font-black text-[#1C1C1C] mb-10">
                        Why I Do This
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                {...fadeUp(i * 0.1)}
                                className="rounded-2xl p-7 text-white"
                                style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 100%)" }}
                            >
                                <h3 className="text-xl font-black mb-3" style={{ color: "#C9A87C" }}>{v.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Block 5: Clients ── */}
                <div>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
                        <div>
                            <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#7D4A3F" }}>
                                Clients
                            </motion.p>
                            <motion.h2 {...fadeUp(0.05)} className="text-2xl md:text-3xl font-black text-[#1C1C1C]">
                                Brands I&apos;ve Worked With
                            </motion.h2>
                        </div>
                        <MotionLink
                            {...fadeUp(0.1)}
                            href="/work"
                            className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full px-5 py-2.5 text-sm font-semibold text-white shrink-0 transition-all hover:-translate-y-0.5"
                            style={{ backgroundColor: "#7D4A3F" }}
                        >
                            View Portfolio <ArrowUpRight size={14} />
                        </MotionLink>
                    </div>

                    <motion.div
                        className="w-full h-px mb-10"
                        {...fadeUp(0.1)}
                        style={{ backgroundColor: "#e4e4e4" }}
                    />

                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        {clients.map((client) => (
                            <motion.div
                                key={client.name}
                                variants={item}
                                whileHover={{ y: -3, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                                className="group relative bg-white rounded-xl p-4 flex items-center gap-3 border transition-all duration-200 cursor-default overflow-hidden"
                                style={{ borderColor: "#ebebeb", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(125,74,63,0.3)";
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(125,74,63,0.10)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = "#ebebeb";
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                                }}
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-0.75 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ backgroundColor: "#7D4A3F" }} />
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-xs font-black" style={{ backgroundColor: "rgba(125,74,63,0.10)", color: "#7D4A3F" }}>
                                    {client.name[0]}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs font-bold text-[#1C1C1C] truncate">{client.name}</p>
                                    <p className="text-[10px] truncate mt-0.5" style={{ color: "#aaa" }}>{client.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
