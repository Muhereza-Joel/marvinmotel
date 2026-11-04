import { Link } from "@inertiajs/react";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const serif = {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
};

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};

const rise = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

function CtaLink({ href, className, children }) {
    // Hash links must be plain anchors; Inertia's Link is for page visits.
    if (href.startsWith("#")) {
        return (
            <a href={href} className={className}>
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}

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
    const [paused, setPaused] = useState(false);
    const reduceMotion = useReducedMotion();

    const total = slides.length;
    const slide = slides[current];
    const upNext = slides[(current + 1) % total];

    const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
    const prev = useCallback(
        () => setCurrent((c) => (c - 1 + total) % total),
        [total],
    );

    // Preload every slide image so cross-fades never flash empty
    useEffect(() => {
        slides.forEach((s) => {
            const img = new Image();
            img.src = s.image;
        });
    }, [slides]);

    const onKeyDown = (e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
    };

    return (
        <section
            aria-roledescription="carousel"
            aria-label="Marvin Motel Katunguru highlights"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="relative h-screen min-h-[640px] w-full overflow-hidden bg-stone-900 text-white focus:outline-none"
        >
            {/* Progress animation used by the segment indicators */}
            <style>{`@keyframes hero-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>

            {/* Background: slow push-in, cross-faded */}
            <AnimatePresence>
                <motion.div
                    key={slide.image}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                >
                    <motion.img
                        src={slide.image}
                        alt=""
                        className="h-full w-full object-cover"
                        initial={{ scale: reduceMotion ? 1 : 1.14 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: reduceMotion
                                ? 0
                                : (slideInterval + 2000) / 1000,
                            ease: "linear",
                        }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Legibility: dark on the text side, open on the right so the photo breathes */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/45 to-stone-950/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/40" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end justify-between gap-12 px-6 pb-40 pt-52 sm:px-10 lg:px-12">
                <motion.div
                    key={current}
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-3xl"
                    aria-live="polite"
                >
                    <motion.h1
                        variants={rise}
                        style={serif}
                        className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
                    >
                        {slide.title}
                    </motion.h1>

                    <motion.p
                        variants={rise}
                        className="mt-6 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg"
                    >
                        {slide.subtitle}
                    </motion.p>

                    <motion.div variants={rise} className="mt-9">
                        <CtaLink
                            href={slide.buttonLink}
                            className="group inline-flex items-center gap-3 rounded-full bg-orange-600 py-3.5 pl-8 pr-4 text-base font-semibold text-white shadow-xl shadow-orange-900/30 transition-colors duration-300 hover:bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                        >
                            {slide.buttonText}
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-12">
                                <ArrowUpRight className="h-5 w-5" />
                            </span>
                        </CtaLink>
                    </motion.div>
                </motion.div>

                {/* Next slide preview */}
                <button
                    type="button"
                    onClick={next}
                    aria-label={`Show next slide: ${upNext.title}`}
                    className="group hidden w-60 shrink-0 text-left lg:block"
                >
                    <div className="relative h-36 overflow-hidden rounded-2xl ring-1 ring-white/30 transition-all duration-300 group-hover:ring-orange-400">
                        <img
                            src={upNext.image}
                            alt=""
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
                        <span className="absolute bottom-3 left-4 text-sm font-medium text-white/90">
                            Next
                        </span>
                    </div>
                    <p
                        style={serif}
                        className="mt-3 line-clamp-2 text-lg font-semibold leading-snug text-white/90"
                    >
                        {upNext.title}
                    </p>
                </button>
            </div>

            {/* Bottom bar: position, timed progress, arrows */}
            <div className="absolute inset-x-0 bottom-0 z-10">
                <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/20 px-6 pb-8 pt-5 sm:px-10 lg:px-12">
                    <div className="flex items-center gap-5">
                        <span
                            style={serif}
                            className="text-xl font-semibold tabular-nums text-white"
                        >
                            {String(current + 1).padStart(2, "0")}
                            <span className="text-white/50">
                                {" "}
                                / {String(total).padStart(2, "0")}
                            </span>
                        </span>

                        <div className="flex items-center gap-2">
                            {slides.map((s, i) => (
                                <button
                                    key={s.image}
                                    type="button"
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    aria-current={i === current}
                                    className="group py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    <span className="relative block h-[3px] w-10 overflow-hidden rounded-full bg-white/30 transition-all duration-300 group-hover:bg-white/50 sm:w-16">
                                        {i === current && (
                                            <span
                                                key={current}
                                                onAnimationEnd={next}
                                                className="absolute inset-0 origin-left bg-orange-400"
                                                style={
                                                    reduceMotion
                                                        ? undefined
                                                        : {
                                                              animation: `hero-fill ${slideInterval}ms linear forwards`,
                                                              animationPlayState:
                                                                  paused
                                                                      ? "paused"
                                                                      : "running",
                                                          }
                                                }
                                            />
                                        )}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={prev}
                            aria-label="Previous slide"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-orange-400 hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next slide"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-orange-400 hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
