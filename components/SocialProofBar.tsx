"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Eye, Heart, Award } from "lucide-react";

const stats = [
    { icon: Eye,       value: "50,000+",  label: "Video Views Delivered" },
    { icon: TrendingUp, value: "174K+",   label: "Post Views" },
    { icon: Star,      value: "5-Star",   label: "Client Reviews" },
    { icon: Award,     value: "Rising Star", label: "Award 2025" },
    { icon: Heart,     value: "Best Employee", label: "of the Month Oct 2025" },
];

export default function SocialProofBar() {
    return (
        <section className="bg-[#7D4A3F] py-6 overflow-hidden">
            <motion.div
                className="flex gap-12 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
            >
                {[...stats, ...stats].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={i} className="flex items-center gap-3 shrink-0">
                            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                                <Icon size={15} className="text-white" />
                            </div>
                            <div>
                                <span className="text-white font-bold text-sm">{stat.value}</span>
                                <span className="text-white/70 text-sm ml-1.5">{stat.label}</span>
                            </div>
                            <span className="text-white/30 text-lg ml-4">·</span>
                        </div>
                    );
                })}
            </motion.div>
        </section>
    );
}
