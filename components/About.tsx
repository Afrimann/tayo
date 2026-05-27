"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight, Users, PenLine, ImageIcon, Mic, X } from "lucide-react";

const fanImages = [
    { src: "/tayo-nysc.jpg", alt: "Tayo at NYSC" },
    { src: "/tayo.jpeg", alt: "Omotosho Temitayo" },
    { src: "/hero-image.png", alt: "Tayo – creative portrait" },
];

const skillCards = [
    {
        title: "Social Media Management",
        desc: "Data-driven strategy that grows brands online",
        icon: Users,
        num: "01",
    },
    {
        title: "Copywriting",
        desc: "Words that convert readers into customers",
        icon: PenLine,
        num: "02",
    },
    {
        title: "Content Creation",
        desc: "Engaging content tailored to your brand voice",
        icon: ImageIcon,
        num: "03",
    },
    {
        title: "Voice Acting",
        desc: "Professional recordings that tell your story",
        icon: Mic,
        num: "04",
    },
];

const offerings = [
    {
        title: "Social Media Management",
        body: "Full-cycle social media strategy, content creation, scheduling, and analytics to grow your brand's online presence.",
    },
    {
        title: "Copywriting",
        body: "Persuasive, audience-focused copy for ads, emails, websites, and more that converts readers into customers.",
    },
    {
        title: "Content Creation",
        body: "Engaging written and visual content tailored to your brand voice and target audience.",
    },
    {
        title: "Voice Acting",
        body: "Professional voice recordings for ads, explainer videos, podcasts, and brand storytelling.",
    },
];

const logos = [
    { name: "BrandAlpha",   category: "Brand Strategy",    highlight: false },
    { name: "Nexus Co.",    category: "Social Media",       highlight: false },
    { name: "CreativeHub",  category: "Content Creation",   highlight: true  },
    { name: "MediaFlow",    category: "Copywriting",        highlight: false },
    { name: "BrandScale",   category: "Growth Marketing",   highlight: false },
    { name: "VisualPros",   category: "Visual Content",     highlight: false },
    { name: "ContentKing",  category: "Content Strategy",   highlight: false },
    { name: "SocialEdge",   category: "Social Media",       highlight: false },
    { name: "VoiceCraft",   category: "Voice Acting",       highlight: false },
    { name: "TrendMark",    category: "Brand Identity",     highlight: false },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 48, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const skillContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const skillCard = {
    hidden: { opacity: 0, y: 44, scale: 0.94 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

const fanConfigs = [
    { rotation: -22, z: 1 },
    { rotation: 0,   z: 3 },
    { rotation: 22,  z: 1 },
];

export default function About() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);
    const [hoveredFan, setHoveredFan] = useState<number | null>(null);

    return (
        <section id="about" className="bg-[#f7f7f7] py-20 md:py-28 overflow-hidden">

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {lightboxImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
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
                            <Image
                                src={lightboxImg.src}
                                alt={lightboxImg.alt}
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover"
                            />
                            <button
                                onClick={() => setLightboxImg(null)}
                                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/55 flex items-center justify-center text-white hover:bg-black/75 transition-colors"
                            >
                                <X size={15} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container">

                {/* ─── Block 1: Eyebrow + Profile + Bio ─── */}
                <div className="mb-24 md:mb-32">
                    <motion.p
                        {...fadeUp()}
                        className="text-xs font-bold uppercase tracking-[0.2em] mb-8"
                        style={{ color: "#8B5E3C" }}
                    >
                        About me
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-12 lg:gap-16 items-center">

                        {/* Fanned profile photos */}
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
                                        style={{
                                            left: "50%",
                                            x: "-50%",
                                            rotate: cfg.rotation,
                                            transformOrigin: "bottom center",
                                            zIndex: isHovered ? 10 : cfg.z,
                                        }}
                                        whileHover={{ y: -12, scale: 1.04 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                        onHoverStart={() => setHoveredFan(idx)}
                                        onHoverEnd={() => setHoveredFan(null)}
                                        onClick={() => setLightboxImg(img)}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover object-top"
                                        />
                                        {/* subtle dark vignette so cards feel distinct */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Bio text — 60% column */}
                        <motion.div {...fadeUp(0.15)} className="space-y-6">

                            {/* Name + role */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-[#0d0d0d] leading-tight mb-2">
                                    Omotosho Temitayo
                                </h2>
                                <p
                                    className="text-xs font-bold uppercase tracking-[0.2em]"
                                    style={{ color: "#8B5E3C" }}
                                >
                                    Creative Marketing &amp; Communications Strategist
                                </p>
                            </div>

                            {/* Accent rule */}
                            <div className="w-10 h-[3px] rounded-full" style={{ backgroundColor: "#8B5E3C" }} />

                            {/* Bio */}
                            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#555555" }}>
                                Your creative partner in building brands that resonate. With a multilingual
                                background and a sharp eye for audience psychology, I craft content that
                                connects — and converts.
                            </p>

                            {/* Specialty tags */}
                            <div className="flex flex-wrap gap-2 pt-1">
                                {["Copywriting", "Voice Acting", "Social Media", "Sales Strategy"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide"
                                        style={{
                                            backgroundColor: "rgba(139,94,60,0.10)",
                                            color: "#8B5E3C",
                                            border: "1px solid rgba(139,94,60,0.18)",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </motion.div>
                    </div>
                </div>

                {/* ─── Block 2: Skills Grid ─── */}
                <div className="mb-24 md:mb-32">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
                        <div>
                            <motion.p
                                {...fadeUp()}
                                className="text-xs font-bold uppercase tracking-[0.2em] mb-2"
                                style={{ color: "#8B5E3C" }}
                            >
                                Skills
                            </motion.p>
                            <motion.h2
                                {...fadeUp(0.05)}
                                className="text-3xl md:text-4xl font-black text-[#0d0d0d] leading-tight"
                            >
                                My Core Expertise
                            </motion.h2>
                        </div>
                        <motion.a
                            {...fadeUp(0.1)}
                            href="#services"
                            className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full px-5 py-2.5 text-sm font-semibold text-white shrink-0 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15"
                            style={{ backgroundColor: "#6B3F1F" }}
                        >
                            View All Services <ArrowUpRight size={14} />
                        </motion.a>
                    </div>

                    {/* 2×2 dark cards */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        variants={skillContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {skillCards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={card.title}
                                    variants={skillCard}
                                    whileHover={{ y: -6, scale: 1.01, transition: { type: "spring", stiffness: 280, damping: 22 } }}
                                    className="relative rounded-2xl overflow-hidden p-7 md:p-8 flex flex-col justify-between min-h-47.5 group cursor-default"
                                    style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #262626 100%)" }}
                                >
                                    {/* Brown circle bg accent */}
                                    <div
                                        className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-15"
                                        style={{ backgroundColor: "#8B5E3C" }}
                                    />

                                    {/* Top: number + icon */}
                                    <div className="flex items-start justify-between relative z-10">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                                            {card.num}
                                        </span>
                                        <div
                                            className="w-9 h-9 rounded-xl flex items-center justify-center"
                                            style={{ backgroundColor: "rgba(139,94,60,0.20)" }}
                                        >
                                            <Icon size={16} style={{ color: "#8B5E3C" }} />
                                        </div>
                                    </div>

                                    {/* Bottom: title + desc */}
                                    <div className="relative z-10 mt-auto">
                                        <h3 className="text-lg font-bold text-white mb-1.5">{card.title}</h3>
                                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{card.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* ─── Block 3: Accordion + Floating Card ─── */}
                <div className="mb-24 md:mb-32">
                    <motion.h2
                        {...fadeUp()}
                        className="text-2xl md:text-4xl font-black text-[#0d0d0d] text-center mb-12 md:mb-16"
                    >
                        My Unique Offering Just for You
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

                        {/* Accordion — 3 cols */}
                        <div className="lg:col-span-3">
                            {offerings.map((item, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <motion.div
                                        key={item.title}
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
                                                {item.title}
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
                                                        {item.body}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Floating visual card — 2 cols */}
                        <motion.div
                            {...fadeUp(0.2)}
                            className="lg:col-span-2 hidden lg:flex flex-col gap-4"
                        >
                            {/* Dark stats card */}
                            <div
                                className="rounded-2xl p-7 text-white"
                                style={{ background: "linear-gradient(145deg, #1c1c1c, #2a1a0a)" }}
                            >
                                <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
                                    What you get
                                </p>
                                <div className="space-y-3 mb-7">
                                    {["Strategic brand insight", "Creative execution", "Measurable results", "Multilingual reach"].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <span
                                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                                style={{ backgroundColor: "#8B5E3C" }}
                                            />
                                            <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                                    <p className="text-3xl font-black text-white mb-1">
                                        50+ <span className="text-sm font-normal" style={{ color: "rgba(255,255,255,0.35)" }}>projects delivered</span>
                                    </p>
                                    <p className="text-3xl font-black text-white">
                                        30+ <span className="text-sm font-normal" style={{ color: "rgba(255,255,255,0.35)" }}>happy clients</span>
                                    </p>
                                </div>
                            </div>

                            {/* Brown CTA card */}
                            <div
                                className="rounded-2xl p-5 text-center"
                                style={{ backgroundColor: "#8B5E3C" }}
                            >
                                <p className="text-sm font-medium mb-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                                    Currently available
                                </p>
                                <p className="text-lg font-black text-white">Let&apos;s work together</p>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* ─── Block 4: Logos / Social Proof ─── */}
                <div>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
                        <div>
                            <motion.p
                                {...fadeUp()}
                                className="text-xs font-bold uppercase tracking-[0.2em] mb-2"
                                style={{ color: "#8B5E3C" }}
                            >
                                Clients
                            </motion.p>
                            <motion.h2
                                {...fadeUp(0.05)}
                                className="text-2xl md:text-3xl font-black text-[#0d0d0d]"
                            >
                                Brands I&apos;ve worked with
                            </motion.h2>
                        </div>
                        <motion.p
                            {...fadeUp(0.1)}
                            className="text-sm shrink-0"
                            style={{ color: "#888" }}
                        >
                            Startups &amp; growing businesses across industries
                        </motion.p>
                    </div>

                    {/* Divider */}
                    <motion.div
                        {...fadeUp(0.1)}
                        className="w-full h-px mb-10"
                        style={{ backgroundColor: "#e4e4e4" }}
                    />

                    {/* Brand cards */}
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
                        variants={skillContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        {logos.map((logo) => (
                            <motion.div
                                key={logo.name}
                                variants={skillCard}
                                whileHover={{ y: -3, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                                className="group relative bg-white rounded-xl p-4 flex items-center gap-3 border transition-all duration-200 cursor-default overflow-hidden"
                                style={{ borderColor: "#ebebeb", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(139,94,60,0.3)";
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(139,94,60,0.10)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = "#ebebeb";
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                                }}
                            >
                                {/* Left accent bar on hover */}
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-0.75 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    style={{ backgroundColor: "#8B5E3C" }}
                                />

                                {/* Monogram badge */}
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-xs font-black"
                                    style={
                                        logo.highlight
                                            ? { backgroundColor: "#8B5E3C", color: "#fff" }
                                            : { backgroundColor: "rgba(139,94,60,0.10)", color: "#8B5E3C" }
                                    }
                                >
                                    {logo.name[0]}
                                </div>

                                {/* Name + category */}
                                <div className="min-w-0">
                                    <p className="text-xs font-bold text-[#0d0d0d] truncate">{logo.name}</p>
                                    <p className="text-[10px] truncate mt-0.5" style={{ color: "#aaa" }}>{logo.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
