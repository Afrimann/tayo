"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";

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
    hidden: { opacity: 0, y: 44, scale: 0.95 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const articles = [
    {
        title: "A Christmas Reflection — What 2025 Gave Me That I Didn't Start With",
        category: "Reflection",
        excerpt: "As the year winds down, I've been looking back on 2025 with a full heart. Some wins looked small at first, but in hindsight, they were everything.",
        date: "Dec 2025",
        readTime: "5 min read",
        image: "/hero-bg-6.jpeg",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7410279574380474368/?originTrackingId=QGqBMkzsdi42gRH7voZqxg%3D%3D",
    },
    {
        title: "I Obeyed the Clarion's Call and Now I Am Officially...",
        category: "Leadership",
        excerpt: "Leadership has a way of finding you, even when you're not trying to find it. Impact attracts responsibility.",
        date: "Dec 2023",
        readTime: "4 min read",
        image: "/tayo-nysc.jpg",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7404411312958521346/?originTrackingId=QfOSl%2F1JUKyuTautxRA5rA%3D%3D",
    },
    {
        title: "Why Your Brand Needs a Consistent Visual Identity",
        category: "Branding",
        excerpt: "Visual consistency builds trust. Here is how to create a cohesive look across all your digital touchpoints.",
        date: "Nov 2023",
        readTime: "6 min read",
        image: "/hero-bg-1.jpg",
        link: "#",
    },
];

export default function Articles() {
    return (
        <section id="articles" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
                    <div>
                        <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#8B5E3C" }}>
                            Insights
                        </motion.p>
                        <motion.h2 {...fadeUp(0.06)} className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0d0d0d] leading-tight">
                            Latest Articles
                        </motion.h2>
                    </div>
                    <motion.p {...fadeUp(0.12)} className="text-base md:text-lg leading-relaxed max-w-sm md:text-right" style={{ color: "#555555" }}>
                        Thoughts, strategies, and deep dives into digital marketing and brand growth.
                    </motion.p>
                </div>

                {/* Cards — stagger */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {articles.map((article) => (
                        <motion.article
                            key={article.title}
                            variants={card}
                            whileHover={{ y: -7, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: { type: "spring", stiffness: 280, damping: 22 } }}
                            className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden cursor-default"
                        >
                            {/* Image */}
                            <div className="relative h-48 w-full overflow-hidden shrink-0">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <span
                                    className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                                    style={{ backgroundColor: "#6B3F1F" }}
                                >
                                    {article.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-3 flex-1">
                                <h3 className="text-base font-bold text-[#0d0d0d] leading-snug line-clamp-2">{article.title}</h3>
                                <p className="text-sm leading-relaxed flex-1 line-clamp-3" style={{ color: "#666666" }}>{article.excerpt}</p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                    <div className="flex items-center gap-1.5 text-xs" style={{ color: "#999999" }}>
                                        <Clock size={12} />
                                        {article.readTime}
                                    </div>
                                    <a
                                        href={article.link}
                                        target={article.link.startsWith("http") ? "_blank" : undefined}
                                        rel={article.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="inline-flex items-center gap-1 text-xs font-semibold transition-colors"
                                        style={{ color: "#8B5E3C" }}
                                    >
                                        Read Article <ArrowUpRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
