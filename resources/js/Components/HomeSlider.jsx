import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        image: "/images/entrance.webp",
        title: "Fortbreeze Hotel Fort Portal",
        subtitle: "Comfortable Stay in Western Uganda",
        description:
            "Experience quality accommodation in Fort Portal with modern amenities and authentic Ugandan hospitality. Perfectly situated for exploring Kibale National Park and the Rwenzori Mountains.",
        buttonText: "Book Your Stay",
        buttonLink: "#book",
    },
    {
        id: 2,
        image: "/images/newbuilding.webp",
        title: "Modern Rooms in Fort Portal",
        subtitle: "Spacious accommodation with premium amenities",
        description:
            "Our well-appointed rooms feature comfortable bedding, modern facilities, and beautiful views. Ideal for both business travelers and tourists exploring Fort Portal's attractions.",
        buttonText: "View Room Options",
        buttonLink: "#rooms",
    },
    {
        id: 3,
        image: "/images/roomtable.webp",
        title: "Hotel Near Kibale National Park",
        subtitle: "Your base for Uganda adventures",
        description:
            "Stay at Fortbreeze for convenient access to chimpanzee tracking in Kibale Forest, crater lake exploration, and Rwenzori Mountain adventures. We offer comfortable accommodations and reliable services.",
        buttonText: "Explore Local Attractions",
        buttonLink: "#amenities",
    },
];

// Text animation variants
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

export default function HomeSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => setCurrent(index);

    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            <AnimatePresence mode="wait">
                {slides.map((slide, index) =>
                    index === current ? (
                        <motion.div
                            key={slide.id}
                            className="absolute inset-0 w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/70"></div>

                            {/* Animated Text Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                                <motion.h1
                                    className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={1}
                                >
                                    {slide.title}
                                </motion.h1>
                                <motion.h2
                                    className="text-xl md:text-2xl mb-4 drop-shadow-md font-semibold"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={2}
                                >
                                    {slide.subtitle}
                                </motion.h2>
                                <motion.p
                                    className="text-md md:text-lg max-w-2xl drop-shadow-sm mb-6"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={3}
                                >
                                    {slide.description}
                                </motion.p>

                                <motion.a
                                    href={slide.buttonLink}
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={4}
                                    className="mt-6 inline-block bg-blue-900 text-gray-100 font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg"
                                >
                                    {slide.buttonText}
                                </motion.a>
                            </div>
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>

            {/* Dots navigation */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === current ? "bg-white" : "bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Hidden SEO content for search engines */}
            <div className="hidden">
                <h1>Fortbreeze Hotel - Accommodation in Fort Portal Uganda</h1>
                <h2>Hotel Near Kibale National Park with Modern Amenities</h2>
                <p>
                    Fortbreeze Hotel offers quality accommodation in Fort Portal
                    Uganda with convenient access to Kibale Forest chimpanzee
                    tracking, crater lakes, and Rwenzori Mountains. Our hotel
                    features comfortable rooms, dining options, and reliable
                    service for travelers.
                </p>
            </div>
        </div>
    );
}
