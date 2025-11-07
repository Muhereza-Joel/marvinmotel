import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeHeroFull({
    slides = [
        {
            image: "/assets/images/behind.jpg",
            title: "Experience Comfort & Serenity at Marvin Motel Katunguru",
            subtitle:
                "Nestled near the heart of Queen Elizabeth National Park, Marvin Motel Katunguru offers a peaceful retreat surrounded by breathtaking wildlife, tranquil scenery, and authentic Ugandan hospitality.",
            buttonText: "Book Your Stay",
            buttonLink: "#booking",
        },
        {
            image: "/assets/images/lakeview2.jfif",
            title: "Discover Nature’s Beauty from Your Window",
            subtitle:
                "Wake up to the sounds of birds and the gentle whispers of the Kazinga Channel. Enjoy our modern rooms designed for both comfort and relaxation, blending elegance with nature.",
            buttonText: "View Rooms",
            buttonLink: "#booking",
        },
        {
            image: "/assets/images/bed4.jpg",
            title: "Your Gateway to Adventure and Relaxation",
            subtitle:
                "Whether you’re here for a safari, a family getaway, or a romantic escape, Marvin Motel Katunguru is the perfect base for exploring the wonders of Western Uganda while enjoying personalized care.",
            buttonText: "Explore Nearby Attractions",
            buttonLink: "#booking",
        },
    ],
    slideInterval = 7000,
}) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrent((prev) =>
                    prev === slides.length - 1 ? 0 : prev + 1
                ),
            slideInterval
        );
        return () => clearInterval(interval);
    }, [slides.length, slideInterval]);

    const nextSlide = () =>
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center font-sans">
            {/* Background */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].image}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${slides[current].image})`,
                    }}
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative z-10 px-6 sm:px-16 max-w-4xl mx-auto text-white">
                <motion.h1
                    key={slides[current].title}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="font-bold text-4xl sm:text-6xl md:text-7xl mb-6 tracking-tight"
                >
                    {slides[current].title}
                </motion.h1>

                <motion.p
                    key={slides[current].subtitle}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-200 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8"
                >
                    {slides[current].subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        href={slides[current].buttonLink}
                        className="inline-block px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg transition text-lg font-semibold"
                    >
                        {slides[current].buttonText}
                    </Link>
                </motion.div>
            </div>

            {/* Navigation */}
            <button
                onClick={prevSlide}
                className="absolute left-6 md:left-10 z-10 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white transition"
            >
                <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 md:right-10 z-10 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white transition"
            >
                <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 flex space-x-3 z-10">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            current === i ? "bg-white scale-110" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
