import Navbar from "../../components/Navbar";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | TheDigitalTee",
    description: "Social media management, content creation, mobile videography & photography, and brand consultation services by TheDigitalTee.",
};

const services = [
    {
        num: "01",
        title: "Social Media Management",
        tagline: "Taking the stress out of your online presence.",
        description: "Full-service management of your social media platforms so you can focus on running your business. From content scheduling and community engagement to brand voice consistency — your pages stay active, intentional, and growth-focused.",
        includes: [
            "Page setup & optimization",
            "Daily/weekly content posting",
            "Community & DM management",
            "Hashtag strategy & trend integration",
            "Monthly performance reporting",
        ],
    },
    {
        num: "02",
        title: "Content Creation",
        tagline: "Visuals that stop the scroll. Captions that close the sale.",
        description: "Professional content tailored to your brand — shot on-site or in-studio. Covers personal brand shoots, product photography, and on-location content creation for businesses and creators who need consistent, high-quality media assets.",
        includes: [
            "Personal brand professional shoot",
            "Product photography & styling",
            "On-site content creation sessions",
            "Branded graphic design & templates",
            "Short-form video editing (Reels, TikToks, Stories)",
            "Content calendars",
        ],
    },
    {
        num: "03",
        title: "Mobile Videography & Photography",
        tagline: "Every moment deserves to be captured beautifully.",
        description: "Professional-grade mobile videography and photography for events, launches, and campaigns. Whether it's a product launch, brand activation, new collection reveal, or live event — every frame is captured with intention and edited for impact.",
        includes: [
            "Event coverage (corporate, lifestyle, brand activations)",
            "Launch & product shoot photography",
            "New collection shoots",
            "Behind-the-scenes content",
            "Edited deliverables for multi-platform use",
        ],
    },
    {
        num: "04",
        title: "Brand Consultation & Strategy",
        tagline: "A clear brand identity is your most valuable business asset.",
        description: "For businesses and personal brands ready to define who they are and how they show up. This service combines brand discovery, voice development, and a custom social media strategy — giving you a clear roadmap to grow with purpose.",
        includes: [
            "Brand audit & identity development",
            "Voice & tone definition",
            "Visual identity guidance",
            "Audience & competitor analysis",
            "Platform-specific social media strategy",
            "Content pillars & themes",
            "Growth roadmap",
            "Bonus: 30-Day content ideas document",
        ],
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#FAF7F4] overflow-x-hidden">
            <Navbar />
            <div className="pt-16 md:pt-20">

                {/* Hero */}
                <section className="py-20 md:py-28 bg-[#FAF7F4]">
                    <div className="container max-w-3xl">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#7D4A3F" }}>Services</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1C1C1C] leading-tight mb-6">
                            Services Built to<br />Grow Your Brand
                        </h1>
                        <p className="text-base md:text-xl leading-relaxed" style={{ color: "#5C5C5C" }}>
                            A full suite of creative and strategic services designed to elevate your presence and drive measurable results.
                        </p>
                    </div>
                </section>

                {/* Services detail */}
                <section className="pb-20 md:pb-28 bg-[#FAF7F4]">
                    <div className="container space-y-12">
                        {services.map((service, i) => (
                            <div
                                key={service.num}
                                className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 rounded-3xl p-8 md:p-12 bg-white border border-gray-100 shadow-sm"
                            >
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#7D4A3F" }}>{service.num}</span>
                                    <h2 className="text-2xl md:text-3xl font-black text-[#1C1C1C] mb-2">{service.title}</h2>
                                    <p className="text-sm font-medium italic mb-5" style={{ color: "#7D4A3F" }}>{service.tagline}</p>
                                    <p className="text-base leading-relaxed mb-8" style={{ color: "#5C5C5C" }}>{service.description}</p>
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold text-white transition-all hover:opacity-90"
                                        style={{ backgroundColor: "#7D4A3F" }}
                                    >
                                        Inquire About This Service
                                    </a>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#5C5C5C" }}>What&apos;s Included</p>
                                    <ul className="space-y-3">
                                        {service.includes.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#7D4A3F" }} />
                                                <span className="text-sm text-[#1C1C1C]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
            <FinalCTA />
            <Footer />
        </main>
    );
}
