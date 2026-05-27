import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Omotosho Temitayo | Digital Marketer & Strategist",
    description: "Results-driven Digital Marketer, Social Media Manager, and Brand Strategist helping brands grow their audience and convert.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${bricolage.className} antialiased bg-background text-foreground`}>
                {children}
            </body>
        </html>
    );
}
