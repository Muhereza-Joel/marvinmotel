import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function Hero({
    title = "Your Hero Title",
    description = "This is the description text under the hero heading.",
    buttonText = "Get Started",
    buttonLink = "#",
    backgroundImages = [
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80",
        "https://karangurapeakcoffee.org/next-uploads/drying13.jpg",
        "https://karangurapeakcoffee.org/next-uploads/savingscheme.jpg",
        "https://karangurapeakcoffee.org/next-uploads/drying8.jpg",
        "https://karangurapeakcoffee.org/next-uploads/exhibition.jpg",
    ],
    slideInterval = 5000,
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, slideInterval);

        return () => clearInterval(interval);
    }, [backgroundImages.length, slideInterval]);

    const goToSlide = (index) => {
        setCurrentImageIndex(index);
    };

    const goToPrevSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="w-full relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Background Images with Fade Effect */}
            {backgroundImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex
                            ? "opacity-100"
                            : "opacity-0"
                    }`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            ))}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

            {/* Content */}
            <div className="relative z-10 px-6 sm:px-16 max-w-5xl">
                <h1 className="font-extrabold text-5xl sm:text-7xl mb-6 text-white bg-gradient-to-r from-white via-white/90 to-gray-200 bg-clip-text text-transparent">
                    {title}
                </h1>

                {description && (
                    <p className="max-w-2xl text-xl sm:text-2xl text-gray-200 my-6 mx-auto">
                        {description}
                    </p>
                )}

                {buttonLink.startsWith("#") ? (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            const target = document.querySelector(buttonLink);
                            if (target) {
                                target.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }
                        }}
                        className="inline-block px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition text-lg font-medium mt-4"
                    >
                        {buttonText}
                    </button>
                ) : (
                    <Link
                        href={buttonLink}
                        className="inline-block px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition text-lg font-medium mt-4"
                    >
                        {buttonText}
                    </Link>
                )}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevSlide}
                className="absolute left-4 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 transition text-white"
                aria-label="Previous slide"
            >
                <svg
                    className="w-8 h-8"
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
                onClick={goToNextSlide}
                className="absolute right-4 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 transition text-white"
                aria-label="Next slide"
            >
                <svg
                    className="w-8 h-8"
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

            {/* Slide Indicators */}
            <div className="absolute bottom-6 z-10 flex space-x-2">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition ${
                            index === currentImageIndex
                                ? "bg-white"
                                : "bg-white/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
