import HeroSection from "@/Components/HeroSection";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function RestaurantAndBar({ dining2Image, barImage, barImage2 }) {
    return (
        <PublicLayout>
            <Head title="Restaurant & Bar" />
            <HeroSection
                titles={[
                    "Refresh Your Mind in Our Fantastic Bar",
                    "Enjoy The Delightful Dining Experience",
                ]}
                rotationSpeed={5000}
                subtitle="Enjoy mouth watering snacks and a variety of local and international cuisines in our tasteful restaurant. Our menu features the most beloved dish in the area, the delicious tilapia fish prepared to perfection."
                images={[barImage, dining2Image]}
                bgColor="bg-blue-800"
                buttonText="Explore Now"
                buttonLink="#about"
                buttonColor="bg-amber-600 text-white hover:bg-amber-700"
                imageAnimationDirection="bottom"
                titleGradient="text-gray-50"
            />

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Taste The Best Of Uganda
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Our restaurant brings you the finest local
                                flavors and international dishes. Every meal is
                                made with fresh ingredients and care.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Try our special tilapia fish a local favorite
                                that keeps guests coming back. Cooked just right
                                with traditional spices and herbs.
                            </p>
                            <p className="text-gray-600">
                                Whether you want a quick snack or a full meal,
                                we have something for everyone.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={dining2Image}
                                alt="Restaurant dining area"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bar Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={barImage2}
                                    alt="Bar area"
                                    className="w-full h-80 object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Relax At Our Bar
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Unwind after a long day with your favorite
                                drink. Our bar has a warm and friendly
                                atmosphere.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Choose from local beers, international wines,
                                cocktails, and soft drinks. Our bartenders know
                                how to make the perfect drink for you.
                            </p>
                            <p className="text-gray-600">
                                Great music, good company, and refreshing drinks
                                - the perfect way to relax.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Highlights */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        Popular Choices
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🐟</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Grilled Tilapia
                            </h3>
                            <p className="text-gray-600">
                                Fresh fish from Lake Victoria, grilled with
                                local spices
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🍖</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Local Specials
                            </h3>
                            <p className="text-gray-600">
                                Traditional Ugandan dishes made with love and
                                care
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🍹</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Fresh Drinks
                            </h3>
                            <p className="text-gray-600">
                                Cocktails, juices, and local beverages to
                                refresh you
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hours & Location */}
            {/* <section className="py-16 bg-blue-800 text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Visit Us Today
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Opening Hours
                                    </h3>
                                    <p>Restaurant: 7:00 AM - 10:00 PM</p>
                                    <p>Bar: 12:00 PM - 11:00 PM</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Location
                                    </h3>
                                    <p>Main Hotel Building</p>
                                    <p>Ground Floor</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Special Offers
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-blue-700 p-4 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Happy Hour
                                    </h3>
                                    <p>5:00 PM - 7:00 PM Daily</p>
                                    <p>50% off on all drinks</p>
                                </div>
                                <div className="bg-blue-700 p-4 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Weekend Special
                                    </h3>
                                    <p>Friday - Sunday</p>
                                    <p>Free dessert with main course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </PublicLayout>
    );
}

export default RestaurantAndBar;
