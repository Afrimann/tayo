"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion, Variants } from "framer-motion";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseMe from "../components/WhyChooseMe";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import Articles from "../components/Articles";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
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
            <section className="relative h-screen w-full flex items-end justify-center overflow-hidden pb-12 md:pb-24">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <HeroBackground />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
                </div>

                {/* Text Content */}
                <motion.div
                    className="container relative z-10 text-center max-w-4xl mx-auto px-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                    >
                        Hi, I am <span className="text-gradient">Digitaltee</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto"
                    >
                        I help brands tell their story and grow their audience through strategic social media management, data-driven digital marketing, and premium aesthetics.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a href="#contact" className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40">
                            Work With Me
                        </a>
                        <a
                            href="https://drive.google.com/drive/folders/1-P-DPm5Kjlw9CMZmTH2qFNytRudduMHa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40"
                        >
                            View Resume
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            <About />
            <Services />
            <WhyChooseMe />
            <Work />
            <Testimonials />
            <Articles />
            <Process />
            <FAQ />
            <Contact />
            <Newsletter />
            <Footer />
        </main>
    );
}
