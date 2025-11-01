import AmenitiesSection from "@/Components/AmenitiesSection";
import BookingCTA from "@/Components/BookingCTA";
import BookingForm from "@/Components/BookingForm";
import FeaturedRooms from "@/Components/FeaturedRooms";
import Hero from "@/Components/Hero";
import HomeHeroFull from "@/Components/HomeHeroFull";
import NearbyAttractions from "@/Components/NearbyAttractions";
import TestimonialsSection from "@/Components/TestimonialsSection";
import WelcomeSection from "@/Components/WelcomeSection";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Home() {
    return (
        <PublicLayout>
            <Head title="Welcome" />
            <HomeHeroFull />
            <WelcomeSection />
            <FeaturedRooms />
            <AmenitiesSection />
            <NearbyAttractions />
            <TestimonialsSection />
            <BookingForm />
        </PublicLayout>
    );
}

export default Home;
