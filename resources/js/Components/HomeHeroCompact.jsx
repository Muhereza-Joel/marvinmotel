import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function HomeHeroCompact({
    slides = [
        {
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90",
            title: "Stay. Relax. Explore Katunguru.",
            subtitle:
                "Marvin Motel welcomes you to the gateway of Queen Elizabeth National Park — where hospitality meets natural beauty and every stay becomes a story to remember.",
            buttonText: "Reserve Now",
            buttonLink: "/booking",
        },
    ],
}) {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrent((prev) =>
                    prev === slides.length - 1 ? 0 : prev + 1
                ),
            7000
        );
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden text-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slides[current].image})` }}
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 px-6 sm:px-10 text-white max-w-3xl mx-auto">
                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    {slides[current].title}
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-200 text-lg md:text-xl mb-6"
                >
                    {slides[current].subtitle}
                </motion.p>

                <Link
                    href={slides[current].buttonLink}
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md transition"
                >
                    {slides[current].buttonText}
                </Link>
            </div>
        </section>
    );
}
