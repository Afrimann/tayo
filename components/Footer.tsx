"use client";

import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

const serviceLinks = [
    { label: "Social Media Management", href: "/services" },
    { label: "Content Creation", href: "/services" },
    { label: "Mobile Videography & Photography", href: "/services" },
    { label: "Brand Consultation & Strategy", href: "/services" },
];

const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/_thedigitaltee", label: "Instagram" },
    { icon: Mail, href: "mailto:Temitayoomotosho50@gmail.com", label: "Email" },
    { icon: Phone, href: "https://wa.me/2348082028739", label: "WhatsApp" },
];

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#1C1C1C" }} className="pt-20 pb-10">
            <div className="container">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-block text-xl font-black text-white tracking-tight mb-3 hover:text-[#C9A87C] transition-colors duration-200">
                            TheDigitalTee
                        </Link>
                        <p className="text-xs font-medium mb-1" style={{ color: "#C9A87C" }}>
                            Content that connects. Strategy that converts.
                        </p>
                        <p className="text-sm leading-relaxed mt-4 mb-7" style={{ color: "rgba(255,255,255,0.45)" }}>
                            Social media management, content creation & brand strategy for businesses that mean business.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                                    style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.50)" }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(201,168,124,0.25)";
                                        (e.currentTarget as HTMLAnchorElement).style.color = "#C9A87C";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)";
                                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.50)";
                                    }}
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-white mb-6">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:Temitayoomotosho50@gmail.com" className="flex items-start gap-3 text-sm transition-colors duration-200 hover:text-white group" style={{ color: "rgba(255,255,255,0.45)" }}>
                                    <Mail size={15} className="mt-0.5 shrink-0" style={{ color: "#C9A87C" }} />
                                    Temitayoomotosho50@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/2348082028739" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm transition-colors duration-200 hover:text-white group" style={{ color: "rgba(255,255,255,0.45)" }}>
                                    <Phone size={15} className="mt-0.5 shrink-0" style={{ color: "#C9A87C" }} />
                                    +234 808 202 8739 (WhatsApp)
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_thedigitaltee" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm transition-colors duration-200 hover:text-white group" style={{ color: "rgba(255,255,255,0.45)" }}>
                                    <Instagram size={15} className="mt-0.5 shrink-0" style={{ color: "#C9A87C" }} />
                                    @_thedigitaltee
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div
                    className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t text-xs"
                    style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.30)" }}
                >
                    <p>&copy; {new Date().getFullYear()} TheDigitalTee. All rights reserved.</p>
                    <p>Omotosho Temitayo Elizabeth</p>
                </div>

            </div>
        </footer>
    );
}
