import { Metadata } from "next";
import { getReviews } from "../actions/reviews";
import ReviewsClient from "./ReviewsClient";
import Navbar from "@/components/Navbar";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Client Reviews | TheDigitalTee",
    description:
        "Read real reviews from clients of TheDigitalTee — social media management, content creation & brand strategy. Share your own experience.",
    openGraph: {
        title: "Client Reviews | TheDigitalTee",
        description: "Real words from real clients. See what people say about TheDigitalTee.",
    },
};

export default async function ReviewsPage() {
    const reviews = await getReviews();

    const sorted = [...reviews].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return ( 
        <div>
            <Navbar />
            <ReviewsClient initialReviews={sorted} />;
        </div>
    )
}
