"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, User } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-secondary/5 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            About <span className="text-gradient">Omotosho Temitayo</span>
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I am a results-driven marketing and communications professional with expertise in sales, copywriting, voice acting, and social media management.
                            </p>
                            <p>
                                I have developed a deep appreciation for cross-cultural communication, language, and strategic messaging. My multilingual abilities give me an edge in crafting compelling content for diverse audiences.
                            </p>
                            <p>
                                I am committed to continuous growth and mastery in my field, with the goal of achieving a black belt in social media management. My approach is simple: deliver high-quality work that drives measurable results.
                            </p>
                        </div>

                        {/* Education */}
                        <div className="mt-12 space-y-6">
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <BookOpen className="text-primary" /> Education
                            </h3>
                            <div className="pl-6 border-l-2 border-primary/20 space-y-8">
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-primary" />
                                    <h4 className="text-xl font-semibold">Bachelor of Arts in German</h4>
                                    <p className="text-primary/80">University of Ibadan, 2023/24</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-primary/50" />
                                    <h4 className="text-xl font-semibold">Secondary Education</h4>
                                    <p className="text-muted-foreground">Pacesetters Comprehensive College, Ibadan, 2012-2018</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10"
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Award className="text-primary" /> Skills & Expertise
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "Social Media Management",
                                "Content Creation",
                                "Graphic Design",
                                "Copywriting",
                                "Video Editing",
                                "Social Media Strategy",
                                "Audience Engagement",
                                "Paid Advertising",
                                "Analytics & Reporting",
                                "SEO",
                                "Hashtag Research",
                                "Influencer Outreach"
                            ].map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-12 p-6 rounded-2xl bg-linear-to-br from-primary/20 to-transparent border border-primary/20">
                            <h4 className="font-bold text-lg mb-2">My Goal</h4>
                            <p className="text-muted-foreground italic">
                                "Achieving a black belt in social media management."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
