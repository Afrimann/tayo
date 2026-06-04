import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialProofBar from "../components/SocialProofBar";
import Services from "../components/Services";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col bg-[#FAF7F4] overflow-x-hidden">
            <Navbar />
            <Hero />
            <SocialProofBar />
            <Services />
            <Work />
            <Testimonials />
            <FinalCTA />
            <Footer />
        </main>
    );
}
