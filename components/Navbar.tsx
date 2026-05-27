"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
];

const pagesLinks = [
    { label: "Articles", href: "#articles" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [pagesOpen, setPagesOpen] = useState(false);
    const pagesRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        function onClickOutside(e: MouseEvent) {
            if (pagesRef.current && !pagesRef.current.contains(e.target as Node)) {
                setPagesOpen(false);
            }
        }
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white"
        >
            <div className="container h-16 md:h-20 flex items-center justify-between">

                {/* Left: bold text logo */}
                <a
                    href="#"
                    className="text-lg md:text-xl font-black text-[#0d0d0d] tracking-tight shrink-0 hover:text-[#8B5E3C] transition-colors duration-200"
                >
                    TheDigitalTee
                </a>

                {/* Center: nav links */}
                <nav className="hidden md:flex items-center flex-1 justify-center">
                    <ul className="flex items-center gap-7 lg:gap-9">

                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-[#0d0d0d] hover:text-[#8B5E3C] transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}

                        {/* Pages dropdown */}
                        <li ref={pagesRef} className="relative">
                            <button
                                onClick={() => setPagesOpen((v) => !v)}
                                className="flex items-center gap-1 text-sm font-medium text-[#0d0d0d] hover:text-[#8B5E3C] transition-colors duration-200 cursor-pointer"
                            >
                                Pages
                                <ChevronDown
                                    size={13}
                                    className={`mt-px transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {pagesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -6, scale: 0.97 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-36 bg-white rounded-xl border border-gray-100 shadow-xl shadow-black/6 py-1.5"
                                    >
                                        {pagesLinks.map((link) => (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                onClick={() => setPagesOpen(false)}
                                                className="block px-4 py-2.5 text-sm text-[#0d0d0d] hover:text-[#8B5E3C] hover:bg-gray-50 transition-colors duration-150"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>

                    </ul>
                </nav>

                {/* Right: outlined Contact us pill */}
                <div className="hidden md:flex items-center shrink-0">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full border-[1.5px] border-[#0d0d0d] px-6 py-2 text-sm font-semibold text-[#0d0d0d] bg-transparent transition-all duration-200 hover:bg-[#0d0d0d] hover:text-white active:scale-95"
                    >
                        Contact us
                    </a>
                </div>

                {/* Mobile: hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-[#0d0d0d]"
                    aria-label="Toggle menu"
                >
                    <Menu size={22} />
                </button>

            </div>

            <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </motion.header>
    );
}
