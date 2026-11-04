import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const serif = {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
};

// Fades the photo in from nothing at the top edge, so the section above flows into it
const fadeMask = "linear-gradient(to bottom, transparent 0%, black 70%)";

export default function BookingCTA() {
    return (
        <MotionConfig reducedMotion="user">
            <section
                aria-labelledby="booking-cta-heading"
                className="relative overflow-hidden"
            >
                {/* Photo, dissolving upward into the amenities background */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center opacity-30"
                    style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
                />

                {/* Green wash: starts as the exact amenities colour, deepens toward the bottom */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-white-950 via-white-950/70 to-white-900/90"
                />

                {/* Warm sunset glow at the base */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[44rem] max-w-full -translate-x-1/2 rounded-full bg-orange-500/25 blur-3xl"
                />

                <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                    {/* Same hairline as the amenity dividers above */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-10 border-t border-white-100/15 py-24 sm:py-28 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
                    >
                        <div className="max-w-2xl">
                            <h2
                                id="booking-cta-heading"
                                style={serif}
                                className="text-4xl font-semibold leading-[1.08] tracking-tight text-black md:text-6xl"
                            >
                                Ready to Experience the Warmth of Katunguru?
                            </h2>
                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white-100/80">
                                Escape to comfort, adventure, and breathtaking
                                nature. Book your stay at Marvin Motel Katunguru
                                today and create memories that will last a
                                lifetime.
                            </p>
                            <a
                                href="#booking"
                                className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-orange-600 py-3.5 pl-8 pr-4 mt-6 text-lg font-semibold text-white shadow-xl shadow-orange-950/40 transition-colors duration-300 hover:bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white-950 lg:self-auto"
                            >
                                Book Now
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-12">
                                    <ArrowUpRight
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </MotionConfig>
    );
}
