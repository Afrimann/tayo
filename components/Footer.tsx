"use client";

import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#work" },
    { label: "Contact", href: "#contact" },
];

const serviceLinks = [
    { label: "Social Media Management", href: "#services" },
    { label: "Content Creation", href: "#services" },
    { label: "Copywriting", href: "#services" },
    { label: "Voice Acting", href: "#services" },
    { label: "Brand Consultation", href: "#services" },
];

const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/langlopact", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:omotoshotemitayo@gmail.com", label: "Email" },
];

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#0d0d0d" }} className="pt-20 pb-10">
            <div className="container">

                {/* Main grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a href="#" className="inline-block text-xl font-black text-white tracking-tight mb-5 hover:text-[#8B5E3C] transition-colors duration-200">
                            TheDigitalTee
                        </a>
                        <p className="text-sm leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.45)" }}>
                            Elevating brands through strategic storytelling and data-driven digital marketing.
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
                                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(139,94,60,0.25)";
                                        (e.currentTarget as HTMLAnchorElement).style.color = "#8B5E3C";
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

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm transition-colors duration-200 hover:text-white"
                                        style={{ color: "rgba(255,255,255,0.45)" }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm transition-colors duration-200 hover:text-white"
                                        style={{ color: "rgba(255,255,255,0.45)" }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Get In Touch */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-6">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:omotoshotemitayo@gmail.com"
                                    className="flex items-start gap-3 text-sm transition-colors duration-200 hover:text-white group"
                                    style={{ color: "rgba(255,255,255,0.45)" }}
                                >
                                    <Mail size={15} className="mt-0.5 shrink-0 group-hover:text-[#8B5E3C] transition-colors" style={{ color: "#8B5E3C" }} />
                                    omotoshotemitayo@gmail.com
                                </a>
                            </li>
                            <li className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                                Lagos, Nigeria<br />
                                Available Worldwide
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom bar */}
                <div
                    className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t text-xs"
                    style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.30)" }}
                >
                    <p>&copy; {new Date().getFullYear()} TheDigitalTee. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
