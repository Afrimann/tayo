import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | TheDigitalTee",
    description: "Social media tips, content strategy, and brand-building insights from TheDigitalTee.",
};

const articles = [
    {
        slug: "5-signs-your-business-needs-a-social-media-manager",
        title: "5 Signs Your Business Needs a Social Media Manager",
        category: "Social Media Tips",
        date: "Coming Soon",
        excerpt: "If you're spending more time thinking about what to post than actually running your business, this one's for you.",
    },
    {
        slug: "how-i-grew-a-clients-tiktok-to-1k-followers-in-one-week",
        title: "How I Grew a Client's TikTok to over 1K Followers in One Week",
        category: "Content Strategy",
        date: "Coming Soon",
        excerpt: "The exact strategy I used — no tricks, no gimmicks. Just intentional content and smart timing.",
    },
    {
        slug: "the-difference-between-posting-and-strategy",
        title: "The Difference Between Posting and Strategy",
        category: "Brand Building",
        date: "Coming Soon",
        excerpt: "Showing up on social media isn't enough. Here's what separates brands that grow from those that just exist.",
    },
    {
        slug: "why-your-brand-voice-matters-more-than-your-logo",
        title: "Why Your Brand Voice Matters More Than Your Logo",
        category: "Behind the Brand",
        date: "Coming Soon",
        excerpt: "People remember how you made them feel. Your visual identity catches eyes — your voice builds trust.",
    },
];

const categoryColors: Record<string, string> = {
    "Social Media Tips": "rgba(125,74,63,0.10)",
    "Content Strategy": "rgba(201,168,124,0.15)",
    "Brand Building": "rgba(125,74,63,0.07)",
    "Behind the Brand": "rgba(201,168,124,0.10)",
};

export default function BlogPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#FAF7F4] overflow-x-hidden">
            <Navbar />
            <div className="pt-16 md:pt-20">

                <section className="py-20 md:py-28">
                    <div className="container">
                        <div className="max-w-3xl mb-16">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#7D4A3F" }}>Blog</p>
                            <h1 className="text-4xl md:text-5xl font-black text-[#1C1C1C] leading-tight mb-4">
                                Insights & Strategy
                            </h1>
                            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#5C5C5C" }}>
                                Social media tips, content strategy, and brand-building advice for businesses that mean business.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {articles.map((article) => (
                                <article
                                    key={article.slug}
                                    className="group rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="h-40 flex items-center justify-center" style={{ backgroundColor: categoryColors[article.category] || "rgba(125,74,63,0.07)" }}>
                                        <span className="text-4xl font-black opacity-20" style={{ color: "#7D4A3F" }}>
                                            {article.title.charAt(0)}
                                        </span>
                                    </div>
                                    <div className="p-7">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(125,74,63,0.10)", color: "#7D4A3F" }}>
                                                {article.category}
                                            </span>
                                            <span className="text-xs" style={{ color: "#5C5C5C" }}>{article.date}</span>
                                        </div>
                                        <h2 className="text-lg font-black text-[#1C1C1C] mb-3 leading-snug group-hover:text-[#7D4A3F] transition-colors">
                                            {article.title}
                                        </h2>
                                        <p className="text-sm leading-relaxed" style={{ color: "#5C5C5C" }}>
                                            {article.excerpt}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <div className="inline-flex items-center gap-3 rounded-2xl px-8 py-5 bg-white border border-gray-100 shadow-sm">
                                <span className="text-sm text-[#5C5C5C]">Full articles publishing soon.</span>
                                <span className="text-sm font-semibold" style={{ color: "#7D4A3F" }}>Stay tuned.</span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
