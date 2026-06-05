"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

export interface Review {
    id: string;
    name: string;
    role: string;
    rating: number;
    quote: string;
    createdAt: string;
}

export async function getReviews(): Promise<Review[]> {
    const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("getReviews error:", error.message);
        return [];
    }

    return (data ?? []).map((row) => ({
        id: String(row.id),
        name: row.name,
        role: row.role ?? "",
        rating: row.rating,
        quote: row.quote,
        createdAt: row.created_at,
    }));
}

export async function submitReview(formData: {
    name: string;
    role: string;
    rating: number;
    quote: string;
}): Promise<{ success: boolean; review?: Review; error?: string }> {
    if (!formData.name.trim() || !formData.quote.trim()) {
        return { success: false, error: "Name and review text are required." };
    }

    if (formData.quote.trim().length < 20) {
        return { success: false, error: "Review must be at least 20 characters." };
    }

    const { data, error } = await supabase
        .from("reviews")
        .insert({
            name: formData.name.trim().slice(0, 100),
            role: formData.role.trim().slice(0, 150),
            rating: Math.min(5, Math.max(1, Math.round(formData.rating))),
            quote: formData.quote.trim().slice(0, 1000),
        })
        .select()
        .single();

    if (error) {
        console.error("submitReview error:", error.message);
        return { success: false, error: "Failed to submit review. Please try again." };
    }

    revalidatePath("/reviews");

    return {
        success: true,
        review: {
            id: String(data.id),
            name: data.name,
            role: data.role ?? "",
            rating: data.rating,
            quote: data.quote,
            createdAt: data.created_at,
        },
    };
}
