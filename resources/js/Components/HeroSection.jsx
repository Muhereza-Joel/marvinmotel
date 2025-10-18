import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function HeroSection({
    titles = [],
    subtitle,
    image,
    bgImage,
    bgColor = "bg-gray-100 dark:bg-gray-800",
    textColor = "text-gray-900 dark:text-gray-100",
    typingSpeed = 150,
    rotationSpeed = 3000,
    animationDirection = "top",
    titleGradient = "",
    animationMode = "fade",
    // NEW BUTTON PROPS
    buttonText = "",
    buttonLink = "",
    buttonColor = "bg-blue-600 text-white hover:bg-blue-700",
}) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    const computedTextColor = bgImage ? "text-white" : textColor;

    // Typing Animation
    useEffect(() => {
        if (animationMode !== "typing" || !titles.length) return;
        const word = titles[index % titles.length] || "";
        let i = 0;
        setText("");
        setIsTyping(true);
        const typeInt = setInterval(() => {
            setText(word.slice(0, ++i));
            if (i === word.length) {
                clearInterval(typeInt);
                setIsTyping(false);
                if (titles.length > 1)
                    setTimeout(
                        () => setIndex((p) => (p + 1) % titles.length),
                        rotationSpeed
                    );
            }
        }, typingSpeed);
        return () => clearInterval(typeInt);
    }, [index, titles, typingSpeed, rotationSpeed, animationMode]);

    // Fade Animation
    useEffect(() => {
        if (animationMode === "fade" && titles.length)
            setTimeout(
                () => setIndex((p) => (p + 1) % titles.length),
                rotationSpeed
            );
    }, [index, titles, rotationSpeed, animationMode]);

    const variants = {
        hidden: {
            opacity: 0,
            y:
                animationDirection === "top"
                    ? -40
                    : animationDirection === "bottom"
                    ? 40
                    : 0,
        },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section
            className={`${!bgImage && bgColor} relative pt-10`}
            style={
                bgImage
                    ? { background: `url(${bgImage}) center/cover no-repeat` }
                    : {}
            }
        >
            {bgImage && (
                <div className="absolute inset-0 bg-black/65 dark:bg-black/70" />
            )}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className="flex flex-col"
                >
                    <h1
                        className={`font-extrabold text-5xl sm:text-7xl mb-6 min-h-[4.5rem] ${
                            titleGradient
                                ? `bg-clip-text text-transparent ${titleGradient}`
                                : computedTextColor
                        }`}
                    >
                        {animationMode === "typing" ? (
                            <>
                                {text}
                                {titles.length > 0 && (
                                    <span
                                        className={`ml-1 w-1 ${
                                            isTyping
                                                ? "opacity-100"
                                                : "opacity-0"
                                        } bg-current inline-block animate-pulse`}
                                    />
                                )}
                            </>
                        ) : (
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {titles[index % titles.length] || ""}
                                </motion.span>
                            </AnimatePresence>
                        )}
                    </h1>
                    {subtitle && (
                        <p
                            className={`text-lg font-extralight max-w-lg mb-6 ${
                                bgImage
                                    ? "text-gray-200"
                                    : "text-gray-600 dark:text-gray-300"
                            }`}
                        >
                            {subtitle}
                        </p>
                    )}

                    {/* Optional Button */}
                    {buttonText && buttonLink && (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {buttonLink.startsWith("#") ? (
                                // Internal anchor scroll
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const target =
                                            document.querySelector(buttonLink);
                                        if (target) {
                                            target.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start",
                                            });
                                        }
                                    }}
                                    className={`inline-flex max-w-fit items-center gap-2 font-semibold px-6 py-3 rounded-full shadow-lg ${buttonColor} transition-all duration-300`}
                                >
                                    {buttonText}
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            ) : (
                                // External/Internal SPA navigation using Inertia Link
                                <Link
                                    href={buttonLink}
                                    className={`inline-flex max-w-fit items-center gap-2 font-semibold px-6 py-3 rounded-full shadow-lg ${buttonColor} transition-all duration-300`}
                                >
                                    {buttonText}
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                            )}
                        </motion.div>
                    )}
                </motion.div>

                {image && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 0.6, delay: 0.2 },
                            },
                        }}
                        className="flex justify-center"
                    >
                        <img
                            src={image}
                            alt={titles[index % titles.length] || "Hero image"}
                            className="rounded-lg shadow-lg max-h-96 w-full object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                )}
            </div>
        </section>
    );
}
