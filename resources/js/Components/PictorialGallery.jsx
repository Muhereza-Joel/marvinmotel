import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function PictorialGallery({ images = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // --- handle keyboard navigation ---
    useEffect(() => {
        function onKey(e) {
            if (!isOpen) return;
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, index]);

    // --- controls ---
    const open = (i) => {
        setIndex(i);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };
    const close = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    };
    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    // --- animations ---
    const gridItemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.05, duration: 0.4 },
        }),
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
    };

    if (!images || images.length === 0) {
        return (
            <div className="py-12 text-center">
                <p className="text-gray-500">No images to display.</p>
            </div>
        );
    }

    return (
        <div>
            {/* Section Header */}
            <div className="px-10 pt-10">
                <SectionHeading
                    align="center"
                    title="Our Gallery"
                    subtitle="Explore Marvin Motel Katunguru"
                />
            </div>

            {/* Image Grid */}
            <div className="px-10 pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {images.map((src, i) => (
                    <motion.button
                        key={i}
                        custom={i}
                        variants={gridItemVariants}
                        initial="hidden"
                        animate="visible"
                        onClick={() => open(i)}
                        className="group overflow-hidden rounded-md focus:outline-none"
                        aria-label={`Open image ${i + 1}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                        }}
                    >
                        <div className="relative pb-[75%] bg-gray-100">
                            <img
                                src={src}
                                alt={`photo-${i + 1}`}
                                loading="lazy"
                                onError={(e) =>
                                    (e.currentTarget.src =
                                        "/assets/images/fallback.jpg")
                                }
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/70"
                            onClick={close}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative max-w-5xl w-full max-h-[90vh] mx-auto z-10"
                            variants={modalVariants}
                        >
                            {/* Close */}
                            <button
                                onClick={close}
                                className="absolute top-3 right-3 z-20 bg-white/90 rounded-full p-2 shadow focus:outline-none hover:bg-white"
                                aria-label="Close gallery"
                            >
                                ✕
                            </button>

                            {/* Prev / Next */}
                            <button
                                onClick={prev}
                                className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow focus:outline-none hover:bg-white"
                                aria-label="Previous image"
                            >
                                ‹
                            </button>
                            <button
                                onClick={next}
                                className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow focus:outline-none hover:bg-white"
                                aria-label="Next image"
                            >
                                ›
                            </button>

                            {/* Image */}
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-md overflow-hidden"
                            >
                                <div className="w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-gray-100">
                                    <img
                                        src={images[index]}
                                        alt={`photo-${index + 1}`}
                                        className="max-h-full max-w-full object-contain"
                                        onError={(e) =>
                                            (e.currentTarget.src =
                                                "/assets/images/fallback.jpg")
                                        }
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
