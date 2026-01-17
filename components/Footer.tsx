"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 pt-20 pb-10">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block relative h-10 w-32 md:h-12 md:w-36 mb-6">
                            <Image
                                src="/logo-new.jpg"
                                alt="TDT Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Elevating brands through strategic storytelling and data-driven digital marketing.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                            <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#work" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
                            <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Social Media Strategy</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Content Creation</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Paid Advertising</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Brand Consulting</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Email Marketing</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <Mail className="shrink-0 mt-1 text-primary" size={18} />
                                <span>hello@thedigitaltee.com</span>
                            </li>
                            <li className="text-muted-foreground">
                                Lagos, Nigeria<br />
                                Available Worldwide
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} The Digital Tee. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
