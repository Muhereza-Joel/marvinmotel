import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SPRING = { type: "spring", stiffness: 90, damping: 18 };

/*
 * The image fills the whole right column, edge to edge, top to bottom.
 * Its inner edge is cut into an arch, and stepped "ripple" bands sit behind
 * it. On mobile the image drops below the text and the arch moves to its top.
 */
const pointEdge = (d) => ({
    lg: `polygon(${d}% 0, 100% 0, 100% 100%, ${d}% 100%, 0 50%)`,
    sm: `polygon(0 ${Math.round(d * 0.8)}%, 50% 0, 100% ${Math.round(
        d * 0.8,
    )}%, 100% 100%, 0 100%)`,
});

const EDGES = {
    arch: {
        lg: "ellipse(100% 70% at 100% 50%)",
        sm: "ellipse(72% 100% at 50% 100%)",
    },
    round: {
        lg: "ellipse(100% 52% at 100% 50%)",
        sm: "ellipse(60% 100% at 50% 100%)",
    },
    pentagon: pointEdge(18),
    hexagon: pointEdge(30),
    diamond: pointEdge(45),
};

const CSS = `
.hx-layer{position:absolute;inset:0;top:var(--o,0px);clip-path:var(--clip-sm);}
.hx-fill{position:absolute;inset:0;background:currentColor;opacity:var(--ro,.1);transition:opacity .5s ease;}
@media (min-width:1024px){
  .hx-layer{top:0;left:var(--o,0px);clip-path:var(--clip-lg);}
}
@media (prefers-reduced-motion:no-preference){
  .hx-layer.hx-ring{transition:transform .7s cubic-bezier(.2,.7,.2,1);}
  .hx-panel-hover:hover .hx-ring{transform:translateY(-.75rem);}
  @media (min-width:1024px){
    .hx-panel-hover:hover .hx-ring{transform:translateX(-.75rem);}
  }
  .hx-pulse .hx-fill{animation:hx-pulse 3.4s ease-in-out infinite;}
  .hx-pulse .hx-ring:nth-of-type(2) .hx-fill{animation-delay:.6s;}
  .hx-morph{animation:hx-morph-sm 9s ease-in-out infinite alternate;}
  @media (min-width:1024px){
    .hx-morph{animation-name:hx-morph-lg;}
  }
}
@keyframes hx-pulse{0%,100%{opacity:var(--ro,.1);}50%{opacity:calc(var(--ro,.1) * 2.4);}}
@keyframes hx-morph-sm{
  from{clip-path:ellipse(62% 100% at 50% 100%);}
  to{clip-path:ellipse(92% 86% at 50% 100%);}
}
@keyframes hx-morph-lg{
  from{clip-path:ellipse(100% 60% at 100% 50%);}
  to{clip-path:ellipse(100% 84% at 100% 50%);}
}
`;

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
    pattern = "none", // "none", "grid", "dots", "circuit", "topography"
    glowEffect = false,
    particleEffect = false,
    focusRing = "hover", // "none", "hover", "always", "pulse"
    decorativeElements = true,
}) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const reduceMotion = useReducedMotion();

    const imageArray = Array.isArray(images) ? images : images ? [images] : [];
    const count = Math.max(titles.length, imageArray.length);
    const computedTextColor = bgImage ? "text-white" : textColor;
    const hasImage = imageArray.length > 0;
    const currentImage = hasImage
        ? imageArray[index % imageArray.length]
        : null;
    const currentTitle = titles.length ? titles[index % titles.length] : "";
    const isMorph = imageShape === "morph" || enableMorph;

    /* ---------- Typing animation ---------- */
    useEffect(() => {
        if (animationMode !== "typing" || !titles.length) return;
        const word = titles[index % titles.length] || "";
        let i = 0;
        let next;
        setText("");
        setIsTyping(true);
        const typeInt = setInterval(() => {
            i += 1;
            setText(word.slice(0, i));
            if (i >= word.length) {
                clearInterval(typeInt);
                setIsTyping(false);
                if (count > 1) {
                    next = setTimeout(
                        () => setIndex((p) => (p + 1) % count),
                        rotationSpeed,
                    );
                }
            }
        }, typingSpeed);
        return () => {
            clearInterval(typeInt);
            clearTimeout(next);
        };
    }, [index, titles, typingSpeed, rotationSpeed, animationMode, count]);

    /* ---------- Fade rotation (titles and/or images) ---------- */
    useEffect(() => {
        const typingDrivesRotation =
            animationMode === "typing" && titles.length > 0;
        if (typingDrivesRotation || count <= 1) return;
        const t = setTimeout(
            () => setIndex((p) => (p + 1) % count),
            rotationSpeed,
        );
        return () => clearTimeout(t);
    }, [index, count, rotationSpeed, animationMode, titles.length]);

    /* ---------- Background pattern (fades out toward the edges) ---------- */
    const patternStyle = (() => {
        switch (pattern) {
            case "grid":
                return {
                    backgroundImage:
                        "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                };
            case "dots":
                return {
                    backgroundImage:
                        "radial-gradient(currentColor 1.2px, transparent 1.2px)",
                    backgroundSize: "28px 28px",
                };
            case "circuit":
                return {
                    backgroundImage:
                        "linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                };
            case "topography":
                return {
                    backgroundImage:
                        "repeating-linear-gradient(0deg, currentColor 0 1px, transparent 1px 22px)",
                };
            default:
                return null;
        }
    })();

    /* ---------- Entrance variants ---------- */
    const offset = 32;
    const textContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    };
    const textItem = {
        hidden: {
            opacity: 0,
            y:
                animationDirection === "top"
                    ? -offset
                    : animationDirection === "bottom"
                      ? offset
                      : 0,
            x:
                animationDirection === "left"
                    ? -offset
                    : animationDirection === "right"
                      ? offset
                      : 0,
        },
        visible: { opacity: 1, x: 0, y: 0, transition: SPRING },
    };

    const imageVariants = (() => {
        const d = 60;
        const axis = {
            left: { x: -d },
            right: { x: d },
            top: { y: -d },
            bottom: { y: d },
        }[imageAnimationDirection] || { scale: 0.92 };
        return {
            hidden: { opacity: 0, ...axis },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: SPRING,
            },
            exit: {
                opacity: 0,
                transition: { duration: 0.5 },
            },
        };
    })();

    /* ---------- Image panel: edge shape + ripple bands ---------- */
    const edge = isMorph ? EDGES.arch : EDGES[imageShape] || EDGES.arch;

    // focusRing drives the ripple bands behind the image
    const ringBoost = focusRing === "always" ? 1.8 : 1;
    const panelClass = [
        focusRing === "hover" ? "hx-panel-hover" : "",
        focusRing === "pulse" ? "hx-pulse" : "",
    ].join(" ");

    const buttonClasses = `group/btn inline-flex max-w-fit items-center gap-3 rounded-full py-2 pl-7 pr-2 font-medium shadow-lg shadow-black/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${buttonColor}`;

    const buttonInner = (
        <>
            {buttonText}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover/btn:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
            </span>
        </>
    );

    const gradientClass = titleGradient
        ? `bg-clip-text text-transparent ${titleGradient}`
        : "";

    return (
        <section
            className={`${bgImage ? "" : bgColor} ${computedTextColor} relative isolate overflow-hidden`}
            style={
                bgImage
                    ? {
                          background: `url(${bgImage}) center/cover no-repeat`,
                      }
                    : undefined
            }
        >
            <style>{CSS}</style>

            {/* Image scrim */}
            {bgImage && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            )}

            {/* Pattern */}
            {patternStyle && (
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
                    style={{
                        ...patternStyle,
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 70% at 50% 40%, #000 30%, transparent 100%)",
                        maskImage:
                            "radial-gradient(ellipse 70% 70% at 50% 40%, #000 30%, transparent 100%)",
                    }}
                />
            )}

            {/* Soft ambient light */}
            {decorativeElements && (
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10"
                >
                    <motion.div
                        className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue-500/25 blur-3xl"
                        animate={
                            reduceMotion
                                ? undefined
                                : { x: [0, 40, 0], y: [0, 30, 0] }
                        }
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-violet-500/20 blur-3xl"
                        animate={
                            reduceMotion
                                ? undefined
                                : { x: [0, -30, 0], y: [0, -40, 0] }
                        }
                        transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            )}

            {/* ---------- Copy ---------- */}
            <div
                className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
                    hasImage
                        ? "pb-12 pt-16 sm:pt-20 lg:flex lg:min-h-[40rem] lg:items-center lg:py-0"
                        : "flex justify-center py-16 text-center sm:py-20 lg:py-28"
                }`}
            >
                <motion.div
                    variants={textContainer}
                    initial="hidden"
                    animate="visible"
                    className={`flex flex-col ${
                        hasImage
                            ? "lg:w-1/2 lg:py-28 lg:pr-14"
                            : "max-w-3xl items-center"
                    }`}
                >
                    <motion.h1
                        variants={textItem}
                        className="mb-6 min-h-[1.1em] text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
                    >
                        {animationMode === "typing" ? (
                            <>
                                <span className={gradientClass}>{text}</span>
                                {titles.length > 0 && (
                                    <span
                                        aria-hidden
                                        className={`ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] rounded-full bg-current ${
                                            isTyping
                                                ? "opacity-100"
                                                : "animate-pulse opacity-60"
                                        }`}
                                    />
                                )}
                            </>
                        ) : (
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -14 }}
                                    transition={{ duration: 0.45 }}
                                    className={`inline-block pb-1 ${gradientClass}`}
                                >
                                    {currentTitle}
                                </motion.span>
                            </AnimatePresence>
                        )}
                    </motion.h1>

                    {subtitle && (
                        <motion.p
                            variants={textItem}
                            className="mb-8 max-w-xl text-lg leading-relaxed opacity-75 sm:text-xl"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {buttonText && buttonLink && (
                        <motion.div variants={textItem}>
                            {buttonLink.startsWith("#") ? (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document
                                            .querySelector(buttonLink)
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start",
                                            });
                                    }}
                                    className={buttonClasses}
                                >
                                    {buttonInner}
                                </button>
                            ) : (
                                <Link
                                    href={buttonLink}
                                    className={buttonClasses}
                                >
                                    {buttonInner}
                                </Link>
                            )}
                        </motion.div>
                    )}

                    {/* Slide indicator */}
                    {count > 1 && (
                        <motion.div
                            variants={textItem}
                            className="mt-10 flex items-center gap-2"
                            role="tablist"
                            aria-label="Hero slides"
                        >
                            {Array.from({ length: count }).map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    role="tab"
                                    aria-selected={i === index % count}
                                    aria-label={`Show slide ${i + 1}`}
                                    onClick={() => setIndex(i)}
                                    className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                                        i === index % count
                                            ? "w-10 bg-current"
                                            : "w-4 bg-current opacity-25 hover:opacity-50"
                                    }`}
                                />
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* ---------- Image: fills the right column edge to edge ---------- */}
            {currentImage && (
                <div
                    className="relative h-[var(--hx-h)] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2"
                    style={{ "--hx-h": imageHeight }}
                >
                    <div
                        className={`relative ml-auto h-full ${panelClass}`}
                        style={{
                            width: imageWidth,
                            maxWidth: "100%",
                            "--clip-lg": edge.lg,
                            "--clip-sm": edge.sm,
                        }}
                    >
                        {glowEffect && (
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-y-10 -left-10 right-10 rounded-full bg-gradient-to-tr from-blue-500/40 to-violet-500/40 blur-3xl"
                            />
                        )}

                        {/* Ripple bands behind the image */}
                        {decorativeElements && (
                            <>
                                <div
                                    aria-hidden
                                    className={`hx-layer hx-ring ${isMorph ? "hx-morph" : ""}`}
                                    style={{ "--o": "0px" }}
                                >
                                    <div
                                        className="hx-fill"
                                        style={{ "--ro": 0.07 * ringBoost }}
                                    />
                                </div>
                                <div
                                    aria-hidden
                                    className={`hx-layer hx-ring ${isMorph ? "hx-morph" : ""}`}
                                    style={{ "--o": "1.5rem" }}
                                >
                                    <div
                                        className="hx-fill"
                                        style={{ "--ro": 0.12 * ringBoost }}
                                    />
                                </div>
                            </>
                        )}

                        {/* The image itself */}
                        <div
                            className={`hx-layer overflow-hidden bg-black/20 ${isMorph ? "hx-morph" : ""}`}
                            style={{
                                "--o": decorativeElements ? "3rem" : "0px",
                            }}
                        >
                            <AnimatePresence initial>
                                <motion.div
                                    key={index}
                                    variants={imageVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="absolute inset-0"
                                >
                                    <motion.img
                                        src={currentImage}
                                        alt={currentTitle || "Hero image"}
                                        loading="lazy"
                                        className="h-full w-full"
                                        style={{ objectFit: imageObjectFit }}
                                        initial={
                                            reduceMotion
                                                ? false
                                                : { scale: 1.12 }
                                        }
                                        animate={{ scale: 1 }}
                                        transition={{
                                            duration: Math.max(
                                                rotationSpeed / 1000 + 1,
                                                4,
                                            ),
                                            ease: "easeOut",
                                        }}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Depth: darken the base and the edge that meets the text */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent lg:bg-gradient-to-r" />

                            {particleEffect && !reduceMotion && (
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0"
                                >
                                    {[...Array(6)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            className="absolute h-1.5 w-1.5 rounded-full bg-white/60"
                                            style={{
                                                left: `${20 + i * 13}%`,
                                                bottom: `${8 + (i % 3) * 10}%`,
                                            }}
                                            animate={{
                                                y: [0, -120, -220],
                                                opacity: [0, 0.9, 0],
                                            }}
                                            transition={{
                                                duration: 4 + (i % 3),
                                                repeat: Infinity,
                                                delay: i * 0.7,
                                                ease: "easeOut",
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
