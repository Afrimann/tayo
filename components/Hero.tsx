"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];
const smooth = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const lines = [
    { text: "Your brand",  delay: 0.35 },
    { text: "deserves to", delay: 0.47 },
    { text: "be seen and", delay: 0.59 },
];

const bars = [
    { label: "Reach",       val: 89 },
    { label: "Clicks",      val: 64 },
    { label: "Conversions", val: 45 },
];

export default function Hero() {
    const { scrollY } = useScroll();
    const photoY = useTransform(scrollY, [0, 600], [0, 70]);

    return (
        <section className="relative min-h-screen bg-white overflow-hidden">

            {/* Gradient blob */}
            <div
                className="absolute bottom-0 left-0 pointer-events-none"
                style={{
                    width: "900px",
                    height: "700px",
                    background: "radial-gradient(ellipse at 0% 100%, rgba(107,63,31,0.20) 0%, rgba(139,94,60,0.07) 50%, transparent 72%)",
                    filter: "blur(80px)",
                    transform: "translate(-15%, 20%)",
                }}
            />

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* ── Left column ── */}
                <div className="flex flex-col justify-center gap-8 py-32 lg:py-24 text-center lg:text-left items-center lg:items-start">

                    {/* Mobile photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.1 }}
                        className="flex lg:hidden"
                    >
                        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-amber-100 shadow-xl">
                            <Image src="/tayo-nysc.jpg" alt="Digitaltee" fill className="object-cover object-top" priority />
                        </div>
                    </motion.div>

                    {/* Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.7, ease: smooth, delay: 0.2 }}
                        className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-[0.2em]"
                    >
                        Content that connects. Strategy that converts.
                    </motion.p>

                    {/* Headline — line-by-line reveal */}
                    <h1 className="text-5xl sm:text-6xl lg:text-[3.6rem] xl:text-[4.8rem] font-black text-[#1C1C1C] leading-[0.93] tracking-tight">
                        {lines.map(({ text, delay }) => (
                            <span key={text} className="block overflow-hidden pb-1">
                                <motion.span
                                    className="block"
                                    initial={{ y: "110%" }}
                                    animate={{ y: "0%" }}
                                    transition={{ duration: 0.8, ease, delay }}
                                >
                                    {text}
                                </motion.span>
                            </span>
                        ))}
                        <span className="block overflow-hidden pb-1">
                            <motion.span
                                className="block text-gradient"
                                initial={{ y: "110%" }}
                                animate={{ y: "0%" }}
                                transition={{ duration: 0.8, ease, delay: 0.71 }}
                            >
                                remembered.
                            </motion.span>
                        </span>
                    </h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: smooth, delay: 0.85 }}
                        className="text-[#5C5C5C] text-base md:text-[17px] leading-relaxed max-w-md"
                    >
                        Social media management, content creation &amp; brand strategy for businesses that mean business.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: smooth, delay: 0.95 }}
                        className="flex flex-wrap items-center gap-5 justify-center lg:justify-start"
                    >
                        <MotionLink
                            href="/work"
                            className="inline-flex h-12 items-center rounded-full px-8 text-sm font-semibold text-white"
                            style={{ backgroundColor: "#7D4A3F" }}
                            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 14px 30px rgba(125,74,63,0.35)" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            View My Work
                        </MotionLink>
                        <MotionLink
                            href="/contact"
                            className="inline-flex h-12 items-center rounded-full px-8 text-sm font-semibold text-[#7D4A3F] border-2 border-[#7D4A3F] hover:bg-[#7D4A3F] hover:text-white transition-colors duration-200"
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            Let&apos;s Talk
                        </MotionLink>
                    </motion.div>
                </div>

                {/* ── Right column ── */}
                <motion.div
                    className="hidden lg:block relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: smooth, delay: 0.4 }}
                >
                    {/* Photo with parallax + scale-in */}
                    <div className="absolute top-16 md:top-20 inset-x-0 bottom-0 overflow-hidden">
                        <motion.div
                            className="absolute inset-0"
                            style={{ y: photoY }}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.4, ease: smooth, delay: 0.4 }}
                        >
                            <Image
                                src="/tayo-nysc.jpg"
                                alt="Digitaltee — Digital Marketing Expert"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </motion.div>
                        <div className="absolute inset-y-0 left-0 w-36 bg-linear-to-r from-white via-white/55 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-52 bg-linear-to-t from-white via-white/45 to-transparent" />
                    </div>

                    {/* Floating analytics card */}
                    <motion.div
                        className="absolute top-[35%] -left-24 z-20 rounded-2xl shadow-2xl overflow-hidden"
                        style={{ width: "215px", background: "linear-gradient(145deg, #1c1c2e 0%, #16213e 100%)" }}
                        initial={{ opacity: 0, x: -60, y: 30 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ type: "spring", stiffness: 180, damping: 24, delay: 1.0 }}
                    >
                        {/* Idle float loop */}
                        <motion.div
                            animate={{ y: [0, -7, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
                            className="p-5"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Analytics</span>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-[9px] text-white/30">Live</span>
                                </div>
                            </div>
                            <p className="text-[11px] text-white/40 mb-0.5">Campaign Performance</p>
                            <motion.p
                                className="text-[2rem] font-black text-white leading-none mb-4"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.5, ease: smooth }}
                            >
                                +24.5%
                            </motion.p>
                            <div className="flex flex-col gap-3">
                                {bars.map((item, i) => (
                                    <div key={item.label}>
                                        <div className="flex justify-between text-[9px] text-white/40 mb-1">
                                            <span>{item.label}</span>
                                            <span>{item.val}%</span>
                                        </div>
                                        <div className="h-1 rounded-full bg-white/10">
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: "#7D4A3F" }}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.val}%` }}
                                                transition={{ duration: 1.1, ease: smooth, delay: 1.45 + i * 0.18 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Instagram icon — spring pop */}
                    <motion.div
                        className="absolute z-30 w-12 h-12 rounded-2xl shadow-2xl flex items-center justify-center"
                        style={{
                            top: "calc(35% + 188px)",
                            left: "-4px",
                            background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                        }}
                        initial={{ opacity: 0, scale: 0, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18, delay: 1.25 }}
                    >
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
