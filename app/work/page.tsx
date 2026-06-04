import Navbar from "../../components/Navbar";
import Work from "../../components/Work";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work | TheDigitalTee",
    description: "Portfolio of social media management, content creation, and brand strategy work by TheDigitalTee.",
};

const stats = [
    { value: "54,915+", label: "Total Video Views" },
    { value: "174K+",   label: "Post Views" },
    { value: "9,260",   label: "Likes" },
    { value: "421+",    label: "New Followers" },
    { value: "99.7%",   label: "For You Traffic" },
    { value: "582",     label: "Comments" },
];

const analyticsScreenshots = [
    { src: "/images/analytics/metrics-1.png",       alt: "TikTok key metrics — 32,575 video views, 189 new followers" },
    { src: "/images/analytics/metrics-2.png",       alt: "TikTok key metrics — 22,340 video views, 232 new followers" },
    { src: "/images/analytics/traffic-source.png",  alt: "Traffic source — 99.7% For You page" },
    { src: "/images/analytics/post-views.png",      alt: "Post views 174K, Likes 9,260, Comments 582" },
];

export default function WorkPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#FAF7F4] overflow-x-hidden">
            <Navbar />
            <div className="pt-16 md:pt-20">

                {/* Hero */}
                <section className="py-20 md:py-24 bg-[#FAF7F4]">
                    <div className="container">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#7D4A3F" }}>Portfolio</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1C1C1C] leading-tight mb-10">
                            Results That Speak
                        </h1>

                        {/* Stats row */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 text-center"
                                >
                                    <p className="text-2xl font-black mb-1" style={{ color: "#7D4A3F" }}>{stat.value}</p>
                                    <p className="text-xs text-[#5C5C5C]">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Client work grid */}
                <Work />

                {/* Analytics Showcase */}
                <section className="py-20 md:py-28 bg-[#1C1C1C]">
                    <div className="container">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#C9A87C" }}>
                            Analytics
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                            The Numbers Behind the Work
                        </h2>
                        <p className="text-base mb-12" style={{ color: "rgba(255,255,255,0.5)" }}>
                            Real dashboard screenshots from managed accounts.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {analyticsScreenshots.map((img) => (
                                <div
                                    key={img.src}
                                    className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-square"
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Before & After */}
                <section className="py-20 md:py-28 bg-[#FAF7F4]">
                    <div className="container">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#7D4A3F" }}>
                            Case Study
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] leading-tight mb-4">
                            Ashewa Beauty Clinic
                        </h2>
                        <p className="text-base mb-10" style={{ color: "#5C5C5C" }}>
                            A full Instagram profile revamp — from an unnamed page with no strategy to a branded, conversion-ready presence.
                        </p>

                        <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                            <Image
                                src="/images/work/ashewa-revamp.png"
                                alt="Ashewa Beauty Clinic — before and after page revamp by TheDigitalTee"
                                width={1200}
                                height={700}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </section>

            </div>
            <FinalCTA />
            <Footer />
        </main>
    );
}
