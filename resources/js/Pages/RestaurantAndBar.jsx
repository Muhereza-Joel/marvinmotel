import HeroSection from "@/Components/HeroSection";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function RestaurantAndBar({ dining2Image, barImage }) {
    return (
        <PublicLayout>
            <Head title="Restaurant & Bar" />
            <HeroSection
                titles={[
                    "Refresh Your Mind in Our Fantastic Bar",
                    "Enjoy The Delightful Dining Experience",
                ]}
                rotationSpeed={5000} // keep smooth rotation
                subtitle="Enjoy mounth watering snacks and a variety of local and international cuisines in our tasteful restaurant. Our menu features the most beloved disth in the area, the delicious tilapia fisth prepared to perfection."
                images={[barImage, dining2Image]}
                bgColor="bg-purple-50"
                buttonText="Explore Now"
                buttonLink="#about"
                buttonColor="bg-amber-600 text-white hover:bg-amber-700"
                imageAnimationDirection="bottom"
            />
        </PublicLayout>
    );
}

export default RestaurantAndBar;
