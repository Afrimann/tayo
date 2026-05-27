"use client";

import { motion, Variants } from "framer-motion";
import {
  Users,
  Palette,
  TrendingUp,
  Share2,
  PenLine,
  Mic,
  ArrowUpRight,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 48, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const services = [
  {
    num: "01",
    title: "Social Media Management",
    description:
      "Comprehensive management of your social platforms — content scheduling, audience engagement, and consistent account growth.",
    icon: Users,
  },
  {
    num: "02",
    title: "Content Creation",
    description:
      "High-quality visual and written content aligned with your brand tone: graphics, carousels, captions, and short-form video.",
    icon: Palette,
  },
  {
    num: "03",
    title: "Copywriting",
    description:
      "Persuasive, audience-focused copy for ads, emails, websites, and landing pages that turns readers into customers.",
    icon: PenLine,
  },
  {
    num: "04",
    title: "Voice Acting",
    description:
      "Professional voice recordings for ads, explainer videos, podcasts, and brand storytelling — multilingual capability included.",
    icon: Mic,
  },
  {
    num: "05",
    title: "Social Media Strategy",
    description:
      "Custom strategies built on audience analysis, competitor insights, and long-term growth planning tailored to your goals.",
    icon: TrendingUp,
  },
  {
    num: "06",
    title: "Brand Consultation",
    description:
      "Helping businesses and personal brands define a unique identity that speaks directly to their target audience.",
    icon: Share2,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
          <div>
            <motion.p
              {...fadeUp()}
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#8B5E3C" }}
            >
              Services
            </motion.p>
            <motion.h2
              {...fadeUp(0.06)}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0d0d0d] leading-tight"
            >
              Services Built to
              <br className="hidden sm:block" /> Grow Your Brand
            </motion.h2>
          </div>
          <motion.p
            {...fadeUp(0.12)}
            className="text-base md:text-lg leading-relaxed max-w-sm md:text-right"
            style={{ color: "#555555" }}
          >
            A full suite of digital marketing services designed to elevate your
            presence and drive measurable results.
          </motion.p>
        </div>

        {/* Cards — stagger */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={card}
                whileHover={{
                  y: -7,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  transition: { type: "spring", stiffness: 280, damping: 22 },
                }}
                className="group flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm cursor-default"
              >
                <div className="flex items-start justify-between">
                  <motion.div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(139,94,60,0.10)" }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 6,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <Icon size={20} style={{ color: "#8B5E3C" }} />
                  </motion.div>
                  <span
                    className="text-xs font-bold tabular-nums"
                    style={{ color: "#8B5E3C" }}
                  >
                    {service.num}
                  </span>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-bold text-[#0d0d0d]">
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#666666" }}
                  >
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-colors self-start"
                  style={{ color: "#8B5E3C" }}
                >
                  Get started
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          {...fadeUp(0.15)}
          className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8"
          style={{ backgroundColor: "#f7f7f7" }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-[#0d0d0d] mb-2">
              Ready to grow your brand?
            </h3>
            <p className="text-base" style={{ color: "#666666" }}>
              Let&apos;s build something great together — your audience is
              waiting.
            </p>
          </div>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white shrink-0"
            style={{ backgroundColor: "#6B3F1F" }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 14px 28px rgba(107,63,31,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Let&apos;s Talk <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
