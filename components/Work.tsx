"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Eco-Friendly Brand Launch",
        category: "Social Media Strategy",
        stats: "+150% Engagement",
        color: "from-amber-500/20 to-orange-700/20",
    },
    {
        title: "Tech Startup Growth",
        category: "Paid Advertising & SEO",
        stats: "3M+ Impressions",
        color: "from-amber-900/40 to-orange-950/40",
    },
    {
        title: "Luxury Fashion Campaign",
        category: "Content Creation",
        stats: "50k New Followers",
        color: "from-rose-500/20 to-pink-700/20",
    },
    {
        title: "Fitness App Community",
        category: "Community Management",
        stats: "20% Conversion Increase",
        color: "from-orange-500/20 to-red-700/20",
    },
];

export default function Work() {
    return (
        <section id="work" className="py-20 md:py-32">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Selected <span className="text-gradient">Work</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            A glimpse into the results I've delivered for diverse brands.
                        </p>
                    </motion.div>

                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                        View All Projects <ArrowUpRight size={20} />
                    </motion.a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-video md:aspect-4/3 rounded-3xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
                        >
                            {/* Background Placeholder (Gradient) */}
                            <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/40 to-transparent">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/80 font-medium">{project.stats}</p>
                                </div>
                            </div>

                            {/* Hover Effect Icon */}
                            <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <ArrowUpRight size={24} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
                        View All Projects <ArrowUpRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}
