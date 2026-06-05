"use client";

import { useOptimistic, useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, CheckCircle, AlertCircle, PenLine } from "lucide-react";
import { Review, submitReview } from "../actions/reviews";

/* ─── helpers ─── */

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

/* ─── star components ─── */

function Stars({ value, size = 14 }: { value: number; size?: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
                <Star
                    key={s}
                    size={size}
                    fill={s <= value ? "#C9A87C" : "none"}
                    stroke={s <= value ? "#C9A87C" : "#d4d4d4"}
                    strokeWidth={1.5}
                />
            ))}
        </div>
    );
}

function StarPicker({
    value,
    onChange,
}: {
    value: number;
    onChange: (v: number) => void;
}) {
    const [hover, setHover] = useState(0);
    const active = hover || value;

    return (
        <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
                <button
                    key={s}
                    type="button"
                    onMouseEnter={() => setHover(s)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => onChange(s)}
                    className="transition-transform duration-100 hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label={`${s} star${s !== 1 ? "s" : ""}`}
                >
                    <Star
                        size={32}
                        fill={s <= active ? "#C9A87C" : "none"}
                        stroke={s <= active ? "#C9A87C" : "#d4d4d4"}
                        strokeWidth={1.5}
                    />
                </button>
            ))}
        </div>
    );
}

/* ─── review card ─── */

function ReviewCard({ review, isNew }: { review: Review; isNew?: boolean }) {
    const initials = review.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <motion.div
            layout
            initial={isNew ? { opacity: 0, y: -16, scale: 0.98 } : false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 overflow-hidden"
        >
            {/* Decorative background quote */}
            <span
                className="absolute -top-2 -right-1 text-[96px] font-serif leading-none select-none pointer-events-none"
                style={{ color: "rgba(125,74,63,0.05)" }}
            >
                &ldquo;
            </span>

            {/* Top row: stars + new badge */}
            <div className="flex items-center justify-between gap-2 relative">
                <Stars value={review.rating} size={14} />
                {isNew && (
                    <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "rgba(125,74,63,0.10)", color: "#7D4A3F" }}
                    >
                        Just posted
                    </span>
                )}
            </div>

            {/* Quote */}
            <p className="text-sm leading-relaxed text-[#3a3a3a] flex-1 relative">
                &ldquo;{review.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0"
                    style={{ backgroundColor: "#7D4A3F" }}
                >
                    {initials}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#1C1C1C] truncate">{review.name}</p>
                    {review.role && (
                        <p className="text-xs truncate" style={{ color: "#999" }}>{review.role}</p>
                    )}
                </div>
                <p className="text-[11px] shrink-0" style={{ color: "#bbb" }}>
                    {formatDate(review.createdAt)}
                </p>
            </div>
        </motion.div>
    );
}

/* ─── review form ─── */

function ReviewForm({
    onSubmit,
    isPending,
}: {
    onSubmit: (d: { name: string; role: string; rating: number; quote: string }) => Promise<{ success: boolean; error?: string }>;
    isPending: boolean;
}) {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [rating, setRating] = useState(5);
    const [quote, setQuote] = useState("");
    const [done, setDone] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        if (!name.trim()) { setError("Please enter your name."); return; }
        if (quote.trim().length < 20) { setError("Review must be at least 20 characters."); return; }

        const result = await onSubmit({ name, role, rating, quote });
        if (result.success) {
            setDone(true);
            setName(""); setRole(""); setRating(5); setQuote("");
        } else {
            setError(result.error ?? "Something went wrong. Please try again.");
        }
    }

    if (done) {
        return (
            <motion.div {...fadeUp()} className="flex flex-col items-center gap-5 py-12 text-center">
                <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(125,74,63,0.10)" }}
                >
                    <CheckCircle size={32} style={{ color: "#7D4A3F" }} />
                </div>
                <div>
                    <p className="text-lg font-black text-[#1C1C1C]">Thank you!</p>
                    <p className="text-sm mt-1" style={{ color: "#5C5C5C" }}>
                        Your review is now live on this page.
                    </p>
                </div>
                <button
                    onClick={() => setDone(false)}
                    className="text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
                    style={{ color: "#7D4A3F" }}
                >
                    Write another review
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name + Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#5C5C5C" }}>
                        Name <span style={{ color: "#7D4A3F" }}>*</span>
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        maxLength={100}
                        className="w-full rounded-xl border border-gray-200 bg-[#FAF7F4] px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-gray-400 outline-none focus:border-[#7D4A3F] focus:ring-2 focus:ring-[#7D4A3F]/10 transition-all"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#5C5C5C" }}>
                        Role / Company
                        <span className="ml-1 normal-case font-normal text-gray-400">(optional)</span>
                    </label>
                    <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="CEO, Acme Inc."
                        maxLength={150}
                        className="w-full rounded-xl border border-gray-200 bg-[#FAF7F4] px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-gray-400 outline-none focus:border-[#7D4A3F] focus:ring-2 focus:ring-[#7D4A3F]/10 transition-all"
                    />
                </div>
            </div>

            {/* Star picker */}
            <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#5C5C5C" }}>
                    Your Rating <span style={{ color: "#7D4A3F" }}>*</span>
                </label>
                <StarPicker value={rating} onChange={setRating} />
            </div>

            {/* Review text */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#5C5C5C" }}>
                    Your Review <span style={{ color: "#7D4A3F" }}>*</span>
                </label>
                <textarea
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="Share your experience working with TheDigitalTee — what did we do well, and what impact did it have on your brand?"
                    rows={5}
                    maxLength={1000}
                    className="w-full rounded-xl border border-gray-200 bg-[#FAF7F4] px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-gray-400 outline-none focus:border-[#7D4A3F] focus:ring-2 focus:ring-[#7D4A3F]/10 transition-all resize-none leading-relaxed"
                />
                <p className="text-xs text-right" style={{ color: "#bbb" }}>{quote.length} / 1000</p>
            </div>

            {/* Error */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3"
                    >
                        <AlertCircle size={14} className="shrink-0" />
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>

            {/* Submit */}
            <button
                type="submit"
                disabled={isPending}
                className="self-start inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white bg-[#7D4A3F] hover:bg-[#6B3F35] active:scale-[0.97] transition-all duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
            >
                {isPending ? (
                    <>
                        <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Submitting…
                    </>
                ) : (
                    <>
                        <PenLine size={15} />
                        Submit Review
                    </>
                )}
            </button>
        </form>
    );
}

/* ─── stats hero strip ─── */

function HeroStats({ reviews }: { reviews: Review[] }) {
    const count = reviews.length;
    const avg = count
        ? reviews.reduce((s, r) => s + r.rating, 0) / count
        : 5;
    const avgFixed = avg.toFixed(1);

    return (
        <div className="flex flex-wrap items-center gap-3 mt-8">
            {/* Average */}
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 border border-gray-100 shadow-sm">
                <Star size={15} fill="#C9A87C" stroke="#C9A87C" strokeWidth={1.5} />
                <span className="text-sm font-bold text-[#1C1C1C]">{avgFixed}</span>
                <span className="text-sm" style={{ color: "#999" }}>average</span>
            </div>
            {/* Count */}
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 border border-gray-100 shadow-sm">
                <Quote size={14} style={{ color: "#7D4A3F" }} />
                <span className="text-sm font-bold text-[#1C1C1C]">{count}</span>
                <span className="text-sm" style={{ color: "#999" }}>{count === 1 ? "review" : "reviews"}</span>
            </div>
            {/* 5-star */}
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 border border-gray-100 shadow-sm">
                <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={11} fill="#C9A87C" stroke="#C9A87C" strokeWidth={1.5} />
                    ))}
                </div>
                <span className="text-sm font-bold text-[#1C1C1C]">
                    {reviews.filter((r) => r.rating === 5).length}
                </span>
                <span className="text-sm" style={{ color: "#999" }}>five-star</span>
            </div>
        </div>
    );
}

/* ─── main export ─── */

export default function ReviewsClient({ initialReviews }: { initialReviews: Review[] }) {
    const [optimisticReviews, addOptimisticReview] = useOptimistic(
        initialReviews,
        (state: Review[], newReview: Review) => [newReview, ...state]
    );
    const [isPending, startTransition] = useTransition();
    const [newIds, setNewIds] = useState<Set<string>>(new Set());

    async function handleSubmit(data: { name: string; role: string; rating: number; quote: string }) {
        const tempId = Date.now().toString();
        const optimistic: Review = {
            id: tempId,
            name: data.name.trim(),
            role: data.role.trim(),
            rating: data.rating,
            quote: data.quote.trim(),
            createdAt: new Date().toISOString(),
        };

        return new Promise<{ success: boolean; error?: string }>((resolve) => {
            startTransition(async () => {
                addOptimisticReview(optimistic);
                setNewIds((prev) => new Set(prev).add(tempId));
                const result = await submitReview(data);
                resolve(result);
            });
        });
    }

    return (
        <div className="min-h-screen bg-[#FAF7F4]">

            {/* ── Hero ── */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-24 container">
                <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#7D4A3F" }}>
                    Client Reviews
                </motion.p>
                <motion.h1
                    {...fadeUp(0.05)}
                    className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#1C1C1C] leading-[1.1] mb-5"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    What People Say
                </motion.h1>
                <motion.p {...fadeUp(0.1)} className="text-base md:text-lg max-w-lg leading-relaxed" style={{ color: "#5C5C5C" }}>
                    Real words from real clients. Worked with TheDigitalTee? Drop your experience below — it goes live instantly.
                </motion.p>
                <motion.div {...fadeUp(0.15)}>
                    <HeroStats reviews={optimisticReviews} />
                </motion.div>
            </section>

            {/* ── Divider ── */}
            <div className="container">
                <div className="h-px bg-gray-200" />
            </div>

            {/* ── Content: form + reviews side by side ── */}
            <section className="py-20 container">
                <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 xl:gap-16 items-start">

                    {/* Form panel */}
                    <motion.div
                        {...fadeUp(0.05)}
                        className="lg:sticky lg:top-28"
                    >
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-9">
                            {/* Form header */}
                            <div className="mb-7">
                                <div
                                    className="inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-4"
                                    style={{ backgroundColor: "rgba(125,74,63,0.10)" }}
                                >
                                    <PenLine size={20} style={{ color: "#7D4A3F" }} />
                                </div>
                                <h2
                                    className="text-xl font-black text-[#1C1C1C] mb-1"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    Share Your Experience
                                </h2>
                                <p className="text-sm leading-relaxed" style={{ color: "#5C5C5C" }}>
                                    Your review appears instantly on this page for everyone to see.
                                </p>
                            </div>

                            <ReviewForm onSubmit={handleSubmit} isPending={isPending} />
                        </div>
                    </motion.div>

                    {/* Reviews panel */}
                    <div>
                        {optimisticReviews.length === 0 ? (
                            <motion.div
                                {...fadeUp(0.1)}
                                className="flex flex-col items-center justify-center py-24 text-center gap-4"
                            >
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: "rgba(125,74,63,0.08)" }}
                                >
                                    <Quote size={24} style={{ color: "#7D4A3F", opacity: 0.5 }} />
                                </div>
                                <div>
                                    <p className="font-bold text-[#1C1C1C]">No reviews yet</p>
                                    <p className="text-sm mt-1" style={{ color: "#999" }}>Be the first to share your experience.</p>
                                </div>
                            </motion.div>
                        ) : (
                            <>
                                <motion.div {...fadeUp(0.1)} className="flex items-center justify-between mb-6">
                                    <h2 className="text-lg font-black text-[#1C1C1C]">
                                        All Reviews
                                        <span className="ml-2 text-sm font-semibold rounded-full px-2.5 py-0.5 align-middle" style={{ backgroundColor: "rgba(125,74,63,0.10)", color: "#7D4A3F" }}>
                                            {optimisticReviews.length}
                                        </span>
                                    </h2>
                                </motion.div>

                                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <AnimatePresence initial={false}>
                                        {optimisticReviews.map((review) => (
                                            <ReviewCard
                                                key={review.id}
                                                review={review}
                                                isNew={newIds.has(review.id)}
                                            />
                                        ))}
                                    </AnimatePresence>
                                </motion.div>
                            </>
                        )}
                    </div>

                </div>
            </section>

        </div>
    );
}
