import Navbar from "../../components/Navbar";
import About from "../../components/About";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | TheDigitalTee",
    description: "Learn about Omotosho Temitayo — social media manager, content creator, and brand strategist with a multilingual edge.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#FAF7F4] overflow-x-hidden">
            <Navbar />
            <div className="pt-16 md:pt-20">
                <About />
            </div>
            <FinalCTA />
            <Footer />
        </main>
    );
}
