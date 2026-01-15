"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion, Variants } from "framer-motion";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseMe from "../components/WhyChooseMe";
import Work from "../components/Work";
import Contact from "../components/Contact";
import HeroBackground from "../components/HeroBackground";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4,
        },
    },
};

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 min-h-[90vh] flex items-center justify-center overflow-hidden">
                <HeroBackground />

                <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Text Content */}
                    <motion.div
                        className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                            Building Digital <br />
                            <span className="text-gradient">Experiences That Convert</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                            I help brands tell their story and grow their audience through strategic social media management, data-driven digital marketing, and premium aesthetics.
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40">
                                Work With Me
                            </a>
                            <a href="#work" className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-transparent px-8 text-base font-semibold text-foreground transition-all hover:bg-white/5 hover:border-foreground">
                                View Portfolio
                            </a>
                        </motion.div>

                        {/* Social Proof / Stats */}
                        <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-border">
                            <div>
                                <div className="text-3xl font-bold">50+</div>
                                <div className="text-sm text-muted-foreground">Clients Served</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">1M+</div>
                                <div className="text-sm text-muted-foreground">Reach Generated</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image / Graphic */}
                    <motion.div
                        className="relative h-[400px] md:h-[600px] w-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Image
                            src="/tayo.jpeg"
                            alt="Digital Marketer Portrait"
                            fill
                            className="object-cover object-top hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </section>

            <About />
            <Services />
            <WhyChooseMe />
            <Work />
            <Contact />
        </main>
    );
}
