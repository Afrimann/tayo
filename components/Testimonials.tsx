import { getReviews } from "@/app/actions/reviews";
import TestimonialsMarquee from "./TestimonialsMarquee";
import type { Review } from "@/app/actions/reviews";

const FALLBACK_REVIEWS: Review[] = [
    {
        id: "f1",
        name: "Mr. Daniel",
        role: "CEO, Daniel Iloh Limited",
        rating: 5,
        quote: "Working with TheDigitalTee transformed how our brand shows up online. The consistency, creativity, and results have been outstanding. Our engagement and reach grew significantly under her management.",
        createdAt: "2025-01-15T00:00:00.000Z",
    },
    {
        id: "f2",
        name: "Mr. Moses",
        role: "Founder, Languages for Growth and Impact Foundation",
        rating: 5,
        quote: "Temitayo brought both professionalism and genuine passion to our social media. She understood our mission deeply and created content that truly resonated with our audience and amplified our reach.",
        createdAt: "2025-02-10T00:00:00.000Z",
    },
    {
        id: "f3",
        name: "Ashewa Beauty Clinic",
        role: "Beauty & Wellness Brand",
        rating: 5,
        quote: "The page revamp was a game-changer for us. TheDigitalTee completely overhauled our online presence — from the visuals to the strategy — and the difference was visible almost immediately.",
        createdAt: "2025-03-05T00:00:00.000Z",
    },
];

export default async function Testimonials() {
    const reviews = await getReviews();
    const displayReviews = reviews.length > 0 ? reviews : FALLBACK_REVIEWS;
    return <TestimonialsMarquee reviews={displayReviews} />;
}
