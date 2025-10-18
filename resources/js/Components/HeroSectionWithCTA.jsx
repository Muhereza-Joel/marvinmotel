import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react"; // Import Inertia's Link

export default function HeroSectionWithCTA({
    title,
    subtitle,
    description,
    buttonText,
    buttonLink = "#",
    image,
    imagePosition = "right", // "left" or "right"
    bgImage = "",
    bgColor = "bg-gray-100 dark:bg-gray-800",
    textColor = "text-gray-900 dark:text-gray-100",
    titleGradient = "",
    enableMorph = false, // New prop to control morph animation
}) {
    const isImageRight = imagePosition === "right";

    const containerStyle = bgImage
        ? { background: `url(${bgImage}) center/cover no-repeat` }
        : {};

    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, delay: 0.2 },
        },
    };

    // Morphing animation variants (only used if enableMorph is true)
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

    // Image container with conditional morphing
    const ImageContainer = ({ children }) => {
        if (enableMorph) {
            return (
                <motion.div
                    className="relative rounded-lg overflow-hidden shadow-lg max-h-[28rem] w-full"
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
            <div className="relative rounded-lg overflow-hidden shadow-lg max-h-[28rem] w-full">
                {children}
            </div>
        );
    };

    return (
        <section
            className={`${!bgImage && bgColor} relative`}
            style={containerStyle}
        >
            {bgImage && <div className="absolute inset-0 bg-black/60" />}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                {/* Conditional layout */}
                {!isImageRight && image && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                        className="flex justify-center"
                    >
                        <ImageContainer>
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            {/* Subtle gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                        </ImageContainer>
                    </motion.div>
                )}

                {/* Text content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={textVariants}
                >
                    <h2
                        className={`text-4xl sm:text-5xl font-extrabold mb-4 ${
                            titleGradient
                                ? `bg-clip-text text-transparent ${titleGradient}`
                                : textColor
                        }`}
                    >
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-xl font-light text-gray-500 dark:text-gray-300 mb-3">
                            {subtitle}
                        </p>
                    )}
                    {description && (
                        <p className="text-md text-gray-600 dark:text-gray-400 max-w-xl mb-6">
                            {description}
                        </p>
                    )}

                    {buttonText && (
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link
                                href={buttonLink}
                                className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full font-medium shadow hover:bg-blue-700 transition duration-300"
                            >
                                {buttonText}
                            </Link>
                        </motion.div>
                    )}
                </motion.div>

                {/* Right image (if applicable) */}
                {isImageRight && image && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                        className="flex justify-center"
                    >
                        <ImageContainer>
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            {/* Subtle gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                        </ImageContainer>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
