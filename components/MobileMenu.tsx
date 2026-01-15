"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

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
            const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
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
                className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                onClick={onClose}
            />

            {/* Slide-over Panel */}
            <div
                className={`absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-black border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-end p-6">
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/5 transition-colors text-foreground/80 hover:text-foreground"
                        aria-label="Close menu"
                    >
                        <X size={28} />
                    </button>
                </div>

                <nav className="flex-1 px-8 py-4 flex flex-col gap-2">
                    {["About", "Services", "Work"].map((item, index) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={onClose}
                            className={`text-2xl font-semibold py-4 border-b border-white/5 text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {item}
                        </a>
                    ))}
                    <div className="mt-8">
                        <a
                            href="#contact"
                            onClick={onClose}
                            className="flex w-full items-center justify-center rounded-full bg-primary py-4 text-lg font-bold text-white shadow-lg shadow-primary/25 active:scale-95 transition-all"
                        >
                            Let's Talk
                        </a>
                    </div>
                </nav>

                <div className="p-8 text-center text-sm text-muted-foreground border-t border-white/5">
                    <p>© {new Date().getFullYear()} TDT.</p>
                </div>
            </div>
        </div>,
        document.body
    );
}
