"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Articles", href: "#articles" },
    { label: "FAQ", href: "#faq" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = "unset";
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!mounted || (!isVisible && !isOpen)) return null;

    return createPortal(
        <div
            className={`fixed inset-0 z-100 md:hidden transition-all duration-300 ${isOpen ? "visible" : "invisible delay-300"}`}
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                onClick={onClose}
            />

            {/* Slide-over panel — white */}
            <div
                className={`absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white border-l border-gray-100 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <span className="text-lg font-black text-[#0d0d0d] tracking-tight">TheDigitalTee</span>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors text-[#0d0d0d]"
                        aria-label="Close menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex-1 px-6 py-4 flex flex-col">
                    {menuLinks.map((link, index) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={onClose}
                            className="text-lg font-semibold py-4 border-b border-gray-100 text-[#0d0d0d] hover:text-[#8B5E3C] hover:pl-2 transition-all duration-200"
                            style={{ transitionDelay: `${index * 40}ms` }}
                        >
                            {link.label}
                        </a>
                    ))}

                    <div className="mt-8">
                        <a
                            href="#contact"
                            onClick={onClose}
                            className="flex w-full items-center justify-center rounded-full border-2 border-[#0d0d0d] py-3.5 text-base font-semibold text-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-white transition-all duration-200 active:scale-95"
                        >
                            Contact us
                        </a>
                    </div>
                </nav>

                <div className="px-6 py-5 border-t border-gray-100 text-sm text-gray-400 text-center">
                    © {new Date().getFullYear()} TheDigitalTee
                </div>
            </div>
        </div>,
        document.body
    );
}
