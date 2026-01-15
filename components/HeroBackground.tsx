"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
    "/hero-bg-1.jpg",
    "/hero-bg-2.jpeg",
    "/hero-bg-3.jpeg",
    "/hero-bg-4.jpeg",
    "/hero-bg-5.jpeg",
    "/hero-bg-6.jpeg",
];

export default function HeroBackground() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[index]}
                        alt="Hero Background"
                        fill
                        className="object-cover object-center opacity-40"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay to ensure text readability & blending */}
            <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background/90" />

            {/* Warm gradient overlay for brand consistency */}
            <div className="absolute inset-0 bg-linear-to-br from-amber-900/10 via-transparent to-orange-950/20 mix-blend-overlay" />
        </div>
    );
}
