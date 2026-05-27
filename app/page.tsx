import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseMe from "../components/WhyChooseMe";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import Articles from "../components/Articles";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <WhyChooseMe />
            <Work />
            <Testimonials />
            <Articles />
            <Process />
            <FAQ />
            <Contact />
            <Newsletter />
            <Footer />
        </main>
    );
}
