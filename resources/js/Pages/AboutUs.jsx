import CoreValues from "@/Components/CoreValues";
import HeroSection from "@/Components/HeroSection";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function AboutUs({ entranceImage, diningImage, bedImage }) {
    return (
        <PublicLayout>
            <Head title="About Us" />
            <HeroSection
                titles={[
                    "Know More About Marvin motel katunguru",
                    "Delightful Dining Experience You Deserve",
                    "Comfortable And Affordable Rooms",
                ]}
                rotationSpeed={5000} // keep smooth rotation
                subtitle="We have well furnished rooms, including stardard suites and twin doubles, all
                equipped with bathrooms, hot and cold water, DSTV and free Wifi."
                images={[entranceImage, diningImage, bedImage]}
                bgColor="bg-blue-800"
                buttonText="Learn More"
                buttonLink="#about"
                buttonColor="bg-amber-600 text-white hover:bg-amber-700"
                imageAnimationDirection="bottom"
                pattern="topography"
                glowEffect={true}
                particleEffect={true}
                titleGradient="text-gray-50"
            />

            <section className="text-justify mt-10 max-w-7xl mx-auto px-4">
                <h2
                    id="about"
                    className="text-4xl font-bold text-gray-800 mb-6"
                >
                    Who We Are
                </h2>

                <p className="text-lg text-gray-700 mb-4">
                    Marvin Motel Katunguru is a high way gem in the heart of
                    Queen Elizabeth National Park. Located along the{" "}
                    <span className="text-orange-700">
                        Kasese Mbarara Highway just 221 kilometers from Mbarara
                        City and 111 kilometers from Fort Portal Tourism City
                    </span>
                    , We Offer Confortable and Affordable accomodations with a
                    perfect blend of modern ammenities and traditional
                    hospitality.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                    Marvin Motel Katunguru is a community centered haven where
                    you can connect with others and create lasting memories.
                    Engage in local culture with music, dance and drama events.
                    We also provide 24 hour security to ensure the safety of our
                    guests and their belongings.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                    With stunning park views and the serene Kazinga Chanel right
                    at your doorstep, this motel offers a unique and picturesque
                    setting. Imagine waking up to the sound of nature with
                    hippos and elephants roaming just 20 meters away. Whether
                    you are a foreigner or a local. Marvin Motel is a great
                    place to stay, dine, unwind, explore and meet new people,
                    creating unforgatable memories.
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mb-4 mt-6">
                    Our Vision
                </h3>

                <p className="text-lg text-gray-700 mb-4">
                    Redefine the hospitality experience in by blending nature,
                    comfort and culture into one seamless encounter.
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mb-4 mt-6">
                    Our Mission
                </h3>

                <p className="text-lg text-gray-700 mb-4">
                    Provide Authentic, Confortable and Eco-conscious hospitality
                    that reflects the warmth of Uganda.
                </p>

                <CoreValues />
            </section>
        </PublicLayout>
    );
}

export default AboutUs;
