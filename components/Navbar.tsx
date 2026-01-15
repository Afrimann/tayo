"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 h-20 z-50 border-b border-white/5 bg-black/60 backdrop-blur-2xl supports-backdrop-filter:bg-black/40 transition-all duration-300"
        >
            <div className="container h-full flex justify-between items-center">
                {/* Brand Logo */}
                <div className="relative z-50 h-10 w-32 md:h-12 md:w-40 shrink-0">
                    <Image
                        src="/logo-new.jpg"
                        alt="TDT Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-10">
                        {["About", "Services", "Work"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 before:absolute before:left-0 before:bottom-[-4px] before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-primary/90 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary hover:scale-105 hover:shadow-primary/40 active:scale-95">
                                Let's Talk
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden z-50 p-2 text-foreground relative"
                    aria-label="Toggle menu"
                >
                    <Menu size={24} />
                </button>

                <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </div>
        </motion.header>
    );
}
