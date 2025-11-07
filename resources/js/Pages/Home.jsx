import AmenitiesSection from "@/Components/AmenitiesSection";
import BookingCTA from "@/Components/BookingCTA";
import BookingForm from "@/Components/BookingForm";
import FeaturedRooms from "@/Components/FeaturedRooms";
import Hero from "@/Components/Hero";
import HomeHeroFull from "@/Components/HomeHeroFull";
import NearbyAttractions from "@/Components/NearbyAttractions";
import SEOTemplate from "@/Components/SEOTemplate";
import TestimonialsSection from "@/Components/TestimonialsSection";
import WelcomeSection from "@/Components/WelcomeSection";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Home() {
    return (
        <PublicLayout>
            <Head title="Welcome" />
            <SEOTemplate
                title="Comfort Stay Near Queen Elizabeth National Park"
                description="Marvin Motel Katunguru is a few kilometers from Queen Elizabeth National Park, we offer peaceful and affordable accommodation overlooking the Kazinga Channel. Perfect stay for safari travelers, boat cruise visitors, and nature lovers."
                keywords="Marvin Motel, Katunguru Hotels, Kazinga Channel Lodges, Queen Elizabeth National Park Accommodation, Safari Lodge in Katunguru, Budget Lodge Queen Elizabeth National Park, Hotels near Kazinga Channel, Safari Hotels Western Uganda, Wildlife Boat Cruise Kazinga Channel, Kasese Accommodation, Safari Travel Uganda, Hippo and Elephant Viewing Uganda, Nature Friendly Lodge, Eco Stay Uganda, Affordable Motel near Queen Elizabeth Park"
                url="https://marvinmotel.com"
            />

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
