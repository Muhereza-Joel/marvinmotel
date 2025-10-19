import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function HeroSection({
    titles = [],
    images = [], // NEW: Array of images to sync with titles
    subtitle,
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
    // NEW IMAGE PROPS
    imageWidth = "100%",
    imageHeight = "24rem",
    imageObjectFit = "cover",
    imageShape = "rectangle", // "rectangle", "oval", "circle", "pentagon", "hexagon", "diamond", "morph"
    imageAnimationDirection = "right", // "left", "right", "top", "bottom"
    enableMorph = false,
}) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    const computedTextColor = bgImage ? "text-white" : textColor;

    // Ensure images is always an array and handle single image case
    const imageArray = Array.isArray(images) ? images : images ? [images] : [];
    const hasMultipleImages = imageArray.length > 1;

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

    // Morphing animation variants
    const morphVariants = {
        animate: {
            borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "50% 50% 60% 40% / 50% 60% 40% 50%",
                "40% 60% 70% 30% / 40% 70% 30% 60%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
            transition: {
                borderRadius: {
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                },
            },
        },
    };

    // Get slide animation variants based on direction
    const getSlideVariants = (direction) => {
        const distance = 100;
        switch (direction) {
            case "left":
                return {
                    hidden: { opacity: 0, x: -distance },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.8, ease: "easeOut" },
                    },
                };
            case "right":
                return {
                    hidden: { opacity: 0, x: distance },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.8, ease: "easeOut" },
                    },
                };
            case "top":
                return {
                    hidden: { opacity: 0, y: -distance },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: "easeOut" },
                    },
                };
            case "bottom":
                return {
                    hidden: { opacity: 0, y: distance },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: "easeOut" },
                    },
                };
            default:
                return {
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.6, delay: 0.2 },
                    },
                };
        }
    };

    // Get shape classes based on imageShape prop
    const getShapeClass = () => {
        switch (imageShape) {
            case "oval":
                return "rounded-[50%]";
            case "circle":
                return "rounded-full";
            case "pentagon":
                return "clip-pentagon";
            case "hexagon":
                return "clip-hexagon";
            case "diamond":
                return "clip-diamond rotate-45";
            case "morph":
                return "rounded-lg"; // Morph effect will be handled by animation
            case "rectangle":
            default:
                return "rounded-lg";
        }
    };

    // Image container with conditional styling and animations
    const ImageContainer = ({ children, currentIndex }) => {
        const shapeClass = getShapeClass();
        const baseClasses = `relative overflow-hidden shadow-lg ${shapeClass}`;

        const isMorphShape = imageShape === "morph" || enableMorph;
        const slideVariants = getSlideVariants(imageAnimationDirection);

        if (isMorphShape) {
            return (
                <motion.div
                    className={baseClasses}
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                        maxHeight: imageHeight,
                    }}
                    variants={morphVariants}
                    animate="animate"
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                    }}
                >
                    {children}
                </motion.div>
            );
        }

        return (
            <motion.div
                className={baseClasses}
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    maxHeight: imageHeight,
                }}
                variants={slideVariants}
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                }}
            >
                {children}
            </motion.div>
        );
    };

    const textVariants = {
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

    // Get current image based on index
    const getCurrentImage = () => {
        if (imageArray.length === 0) return null;
        if (hasMultipleImages) {
            return imageArray[index % imageArray.length];
        }
        return imageArray[0];
    };

    const currentImage = getCurrentImage();

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
                    variants={textVariants}
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

                {currentImage && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="flex justify-center"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="w-full"
                            >
                                <ImageContainer currentIndex={index}>
                                    <img
                                        src={currentImage}
                                        alt={
                                            titles[index % titles.length] ||
                                            "Hero image"
                                        }
                                        className={`w-full h-full ${
                                            imageShape === "diamond"
                                                ? "-rotate-45"
                                                : ""
                                        }`}
                                        style={{ objectFit: imageObjectFit }}
                                        loading="lazy"
                                    />
                                    {/* Subtle gradient overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                                </ImageContainer>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            {/* Add CSS for custom shapes */}
            <style jsx>{`
                .clip-pentagon {
                    clip-path: polygon(
                        50% 0%,
                        100% 38%,
                        82% 100%,
                        18% 100%,
                        0% 38%
                    );
                }
                .clip-hexagon {
                    clip-path: polygon(
                        25% 0%,
                        75% 0%,
                        100% 50%,
                        75% 100%,
                        25% 100%,
                        0% 50%
                    );
                }
                .clip-diamond {
                    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                }
            `}</style>
        </section>
    );
}
