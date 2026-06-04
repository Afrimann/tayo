import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans",
});

export const metadata: Metadata = {
    title: "TheDigitalTee | Social Media Management & Brand Strategy",
    description: "Omotosho Temitayo — Results-driven social media management, content creation & brand strategy for businesses that mean business.",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "TheDigitalTee | Social Media Management & Brand Strategy",
        description: "Content that connects. Strategy that converts.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${playfair.variable} ${dmSans.variable} font-sans antialiased bg-[#FAF7F4] text-[#1C1C1C]`}>
                {children}
            </body>
        </html>
    );
}
