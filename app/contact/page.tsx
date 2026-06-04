import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | TheDigitalTee",
    description: "Get in touch with TheDigitalTee to discuss social media management, content creation, or brand strategy for your business.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#FAF7F4] overflow-x-hidden">
            <Navbar />
            <div className="pt-16 md:pt-20">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
