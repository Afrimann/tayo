"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";

const articles = [
    {
        title: 'A Christmas Reflection What 2025 Gave Me That I Didn’t Start With',
        category: "Reflection",
        excerpt: "As the year winds down and Christmas reminds us of the gift of reflection, I’ve been looking back on 2025 with a full heart. Some wins looked small at first, but in hindsight, they were everything.",
        date: "Dec, 2025",
        readTime: "5 min read",
        image: "/hero-bg-6.jpeg",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7410279574380474368/?originTrackingId=QGqBMkzsdi42gRH7voZqxg%3D%3D"
    },
    {
        title: "I obeyed the clarion’s call and now I am officially...",
        category: "Copywriting",
        excerpt: "Leadership has a way of finding you, even when you’re not trying to find it. Impact attracts responsibility.",
        date: "Dec, 2023",
        readTime: "4 min read",
        image: "/tayo-nysc.jpg",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7404411312958521346/?originTrackingId=QfOSl%2F1JUKyuTautxRA5rA%3D%3D"
    },
    {
        title: "Why Your Brand Needs a Consistent Visual Identity",
        category: "Branding",
        excerpt: "Visual consistency builds trust. Here is how to create a cohesive look across all your digital touchpoints.",
        date: "Nov 25, 2023",
        readTime: "6 min read",
        image: "/hero-bg-1.jpg",
        link: "#"
    }
];

export default function Articles() {
    return (
        <section id="articles" className="py-20 md:py-32 bg-secondary/5">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Latest <span className="text-gradient">Insights</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Thoughts, strategies, and deep dives into the world of digital marketing.
                        </p>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        href="#"
                        className="group flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                        View All Articles
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                    </motion.a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 w-full relative overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover object-top w-full transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                            </div>

                            <div className="p-8 flex flex-col grow">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary">
                                        {article.category}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {article.date}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                                    <a href={article.link} className="focus:outline-none">
                                        {article.title}
                                    </a>
                                </h3>

                                <p className="text-muted-foreground line-clamp-3 mb-6 grow">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-sm font-medium pt-6 border-t border-white/10 mt-auto">
                                    <span className="text-muted-foreground">{article.readTime}</span>
                                    <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform text-white">
                                        Read Article <ArrowUpRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
