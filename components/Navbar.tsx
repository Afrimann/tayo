"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Reviews", href: "/reviews" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F4]/95 backdrop-blur-sm border-b border-[#1C1C1C]/5"
        >
            <div className="container h-16 md:h-20 flex items-center justify-between">

                <Link
                    href="/"
                    className="text-lg md:text-xl font-black text-[#1C1C1C] tracking-tight shrink-0 hover:text-[#7D4A3F] transition-colors duration-200"
                >
                    TheDigitalTee
                </Link>

                <nav className="hidden md:flex items-center flex-1 justify-center">
                    <ul className="flex items-center gap-7 lg:gap-9">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-[#1C1C1C] hover:text-[#7D4A3F] transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:flex items-center shrink-0">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold text-white bg-[#7D4A3F] transition-all duration-200 hover:bg-[#6B3F35] active:scale-95 shadow-sm"
                    >
                        Let&apos;s Work Together
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-[#1C1C1C]"
                    aria-label="Toggle menu"
                >
                    <Menu size={22} />
                </button>

            </div>

            <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </motion.header>
    );
}
