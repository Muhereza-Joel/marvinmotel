import { useEffect, useRef, useState, useCallback } from "react";

export default function TestimonialSlider({
    testimonials = [],
    intervalTime = 4000,
}) {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const total = testimonials.length;

    // Move to a specific slide
    const goToSlide = useCallback(
        (index) => {
            if (!sliderRef.current || total <= 0) return;
            const container = sliderRef.current;
            const testimonial = container.children[index];
            container.scrollTo({
                left: testimonial.offsetLeft - container.offsetLeft,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        },
        [total]
    );

    // Auto-scroll
    useEffect(() => {
        if (isPaused || total <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % total);
        }, intervalTime);

        return () => clearInterval(timer);
    }, [total, isPaused, intervalTime]);

    // Scroll whenever index changes
    useEffect(() => {
        goToSlide(currentIndex);
    }, [currentIndex, goToSlide]);

    // Handlers for hover pause
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <div className="relative w-full">
            {/* Slider */}
            <div
                ref={sliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 py-6"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 snap-start"
                    >
                        <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg h-full border border-gray-100 dark:border-gray-700">
                            <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                “{t.quote}”
                            </p>
                            <div className="flex items-center">
                                {t.avatar && (
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4 border border-gray-200 dark:border-gray-600"
                                    />
                                )}
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                                        {t.name}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation dots */}
            {total > 1 && (
                <div className="flex justify-center mt-6 space-x-3">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                currentIndex === idx
                                    ? "bg-orange-600"
                                    : "bg-gray-300 dark:bg-gray-600 hover:bg-orange-400"
                            }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
