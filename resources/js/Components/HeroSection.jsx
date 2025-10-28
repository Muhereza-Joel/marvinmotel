import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles, Zap, Target } from "lucide-react";

export default function HeroSection({
    titles = [],
    images = [],
    subtitle,
    bgImage,
    bgColor = "bg-gray-100 dark:bg-gray-800",
    textColor = "text-gray-900 dark:text-gray-100",
    typingSpeed = 150,
    rotationSpeed = 3000,
    animationDirection = "top",
    titleGradient = "",
    animationMode = "fade",
    buttonText = "",
    buttonLink = "",
    buttonColor = "bg-blue-600 text-white hover:bg-blue-700",
    imageWidth = "100%",
    imageHeight = "24rem",
    imageObjectFit = "cover",
    imageShape = "rectangle",
    imageAnimationDirection = "right",
    enableMorph = false,
    // NEW DESIGN PROPS
    pattern = "none", // "none", "grid", "dots", "circuit", "topography"
    glowEffect = false,
    particleEffect = false,
    focusRing = "hover", // "none", "hover", "always", "pulse"
    decorativeElements = true,
}) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const computedTextColor = bgImage ? "text-white" : textColor;

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

    // Pattern background styles
    const getPatternStyle = () => {
        switch (pattern) {
            case "grid":
                return {
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                };
            case "dots":
                return {
                    backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                };
            case "circuit":
                return {
                    backgroundImage: `
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                };
            case "topography":
                return {
                    backgroundImage: `
                        linear-gradient(90deg, transparent 79px, rgba(255,255,255,0.1) 79px, rgba(255,255,255,0.1) 81px, transparent 81px),
                        linear-gradient(rgba(255,255,255,0.02) 79px, transparent 79px)
                    `,
                    backgroundSize: "100% 80px",
                };
            default:
                return {};
        }
    };

    // Focus ring styles
    const getFocusRingClass = () => {
        switch (focusRing) {
            case "hover":
                return "focus-ring-hover";
            case "always":
                return "focus-ring-always";
            case "pulse":
                return "focus-ring-pulse";
            default:
                return "";
        }
    };

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

    // Enhanced slide animation variants with spring physics
    const getSlideVariants = (direction) => {
        const distance = 100;
        switch (direction) {
            case "left":
                return {
                    hidden: { opacity: 0, x: -distance, scale: 0.95 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 0.8,
                        },
                    },
                };
            case "right":
                return {
                    hidden: { opacity: 0, x: distance, scale: 0.95 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 0.8,
                        },
                    },
                };
            case "top":
                return {
                    hidden: { opacity: 0, y: -distance, scale: 0.95 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 0.8,
                        },
                    },
                };
            case "bottom":
                return {
                    hidden: { opacity: 0, y: distance, scale: 0.95 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 0.8,
                        },
                    },
                };
            default:
                return {
                    hidden: { opacity: 0, scale: 0.9, rotateY: 10 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        transition: {
                            type: "spring",
                            stiffness: 120,
                            damping: 12,
                            duration: 0.6,
                        },
                    },
                };
        }
    };

    // Get shape classes with enhanced styling
    const getShapeClass = () => {
        const baseClass = "relative overflow-hidden shadow-2xl";
        switch (imageShape) {
            case "oval":
                return `${baseClass} rounded-[50%] border-4 border-white/20`;
            case "circle":
                return `${baseClass} rounded-full border-4 border-white/20`;
            case "pentagon":
                return `${baseClass} clip-pentagon border-4 border-white/20`;
            case "hexagon":
                return `${baseClass} clip-hexagon border-4 border-white/20`;
            case "diamond":
                return `${baseClass} clip-diamond rotate-45 border-4 border-white/20`;
            case "morph":
                return `${baseClass} rounded-3xl border-4 border-white/20`;
            case "rectangle":
            default:
                return `${baseClass} rounded-3xl border-4 border-white/20 ${getFocusRingClass()}`;
        }
    };

    // Enhanced Image Container with glow and particle effects
    const ImageContainer = ({ children, currentIndex }) => {
        const shapeClass = getShapeClass();
        const isMorphShape = imageShape === "morph" || enableMorph;
        const slideVariants = getSlideVariants(imageAnimationDirection);

        if (isMorphShape) {
            return (
                <motion.div
                    className={`${shapeClass} relative group`}
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                        maxHeight: imageHeight,
                    }}
                    variants={morphVariants}
                    animate="animate"
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.4, type: "spring" },
                    }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    {glowEffect && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    )}
                    {children}
                    {particleEffect && (
                        <div className="absolute inset-0 overflow-hidden rounded-3xl">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                                    animate={{
                                        x: [0, 100, 0],
                                        y: [0, 50, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.6,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        left: `${20 + i * 15}%`,
                                        top: `${10 + i * 10}%`,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>
            );
        }

        return (
            <motion.div
                className={`${shapeClass} relative group`}
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    maxHeight: imageHeight,
                }}
                variants={slideVariants}
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4, type: "spring" },
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                {glowEffect && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                )}
                {children}
                {particleEffect && (
                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-white/30 rounded-full"
                                animate={{
                                    x: [0, 100, 0],
                                    y: [0, 50, 0],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.6,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    left: `${20 + i * 15}%`,
                                    top: `${10 + i * 10}%`,
                                }}
                            />
                        ))}
                    </div>
                )}
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
            x:
                animationDirection === "left"
                    ? -40
                    : animationDirection === "right"
                    ? 40
                    : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

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
            className={`${!bgImage && bgColor} relative pt-10 overflow-hidden`}
            style={
                bgImage
                    ? {
                          background: `url(${bgImage}) center/cover no-repeat`,
                          ...getPatternStyle(),
                      }
                    : getPatternStyle()
            }
        >
            {bgImage && (
                <div className="absolute inset-0 bg-black/65 dark:bg-black/70" />
            )}

            {/* Animated background elements - INCREASED SIZE */}
            {decorativeElements && (
                <>
                    <motion.div
                        className="absolute top-10 left-24 text-blue-400/20"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ width: "100px", height: "100px" }} // Increased from 40px to 80px
                    >
                        <Sparkles size={300} /> {/* Increased from 40 to 80 */}
                    </motion.div>
                    <motion.div
                        className="absolute bottom-20 right-20 text-purple-400/20"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        style={{ width: "80px", height: "80px" }} // Increased from 30px to 60px
                    >
                        <Zap size={60} /> {/* Increased from 30 to 60 */}
                    </motion.div>
                </>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8 grid lg:grid-cols-2 gap-10 items-center relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="flex flex-col relative"
                >
                    {/* Text background glow */}
                    {glowEffect && (
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-2xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    )}

                    <h1
                        className={`font-extrabold text-white text-5xl sm:text-8xl mb-6 min-h-[4.5rem] relative ${
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
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 1.05 }}
                                    transition={{
                                        duration: 0.6,
                                        type: "spring",
                                    }}
                                    className="inline-block"
                                >
                                    {titles[index % titles.length] || ""}
                                </motion.span>
                            </AnimatePresence>
                        )}
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className={`text-lg font-extralight max-w-lg mb-6 relative z-10 ${
                                bgImage
                                    ? "text-gray-200"
                                    : "text-gray-300 dark:text-gray-300"
                            }`}
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {/* Enhanced Button with better styling */}
                    {buttonText && buttonLink && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group/btn"
                        >
                            {buttonLink.startsWith("#") ? (
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
                                    className={`relative inline-flex max-w-fit items-center gap-2 font-semibold px-8 py-4 rounded-2xl shadow-2xl ${buttonColor} transition-all duration-300 overflow-hidden group`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    {buttonText}
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            ) : (
                                <Link
                                    href={buttonLink}
                                    className={`relative inline-flex max-w-fit items-center gap-2 font-semibold px-8 py-4 rounded-2xl shadow-2xl ${buttonColor} transition-all duration-300 overflow-hidden group`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    {buttonText}
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                            )}
                        </motion.div>
                    )}
                </motion.div>

                {currentImage && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="flex justify-center relative"
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
                                        className={`w-full h-full transition-all duration-500 ${
                                            imageShape === "diamond"
                                                ? "-rotate-45"
                                                : ""
                                        } ${
                                            isHovered
                                                ? "brightness-110"
                                                : "brightness-100"
                                        }`}
                                        style={{ objectFit: imageObjectFit }}
                                        loading="lazy"
                                    />
                                    {/* Enhanced gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 group-hover:to-black/10 transition-all duration-500"></div>
                                    {/* Shine effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                </ImageContainer>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            {/* Enhanced CSS for custom shapes and effects */}
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

                /* Focus ring effects */
                .focus-ring-hover {
                    transition: all 0.3s ease;
                }
                .focus-ring-hover:hover {
                    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5);
                }

                .focus-ring-always {
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
                    animation: gentle-pulse 3s infinite;
                }

                .focus-ring-pulse {
                    animation: gentle-pulse 2s infinite;
                }

                @keyframes gentle-pulse {
                    0%,
                    100% {
                        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
                    }
                    50% {
                        box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.1);
                    }
                }

                /* Enhanced pattern backgrounds */
                .pattern-grid {
                    background-image: linear-gradient(
                            rgba(255, 255, 255, 0.05) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255, 255, 255, 0.05) 1px,
                            transparent 1px
                        );
                    background-size: 50px 50px;
                }

                .pattern-dots {
                    background-image: radial-gradient(
                        rgba(255, 255, 255, 0.1) 1px,
                        transparent 1px
                    );
                    background-size: 30px 30px;
                }
            `}</style>
        </section>
    );
}
