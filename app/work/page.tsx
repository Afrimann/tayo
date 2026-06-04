import Navbar from "../../components/Navbar";
import Work from "../../components/Work";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work | TheDigitalTee",
    description: "Portfolio of social media management, content creation, and brand strategy work by TheDigitalTee.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#FAF7F4] overflow-x-hidden">
            <Navbar />
            <div className="pt-16 md:pt-20">

                <section className="py-20 md:py-24 bg-[#FAF7F4]">
                    <div className="container max-w-3xl">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#7D4A3F" }}>Portfolio</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1C1C1C] leading-tight mb-6">
                            Results That Speak
                        </h1>
                        <div className="flex flex-wrap gap-6 mt-6">
                            {[
                                { value: "50,612", label: "Video Views" },
                                { value: "174K+", label: "Post Views" },
                                { value: "9,260", label: "Likes" },
                                { value: "911", label: "New Followers" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-3xl font-black text-[#7D4A3F]">{stat.value}</p>
                                    <p className="text-sm text-[#5C5C5C]">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Work />
            </div>
            <FinalCTA />
            <Footer />
        </main>
    );
}
