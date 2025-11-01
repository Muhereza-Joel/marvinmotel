import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function BookingCTA() {
    return (
        <section className="relative py-24 bg-blue-600 text-white text-center overflow-hidden">
            {/* Subtle decorative background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-amber-700/30 to-amber-800/40"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 px-6 max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Experience the Warmth of Katunguru?
                </h2>
                <p className="text-lg md:text-xl text-amber-50 mb-10 leading-relaxed">
                    Escape to comfort, adventure, and breathtaking nature. Book
                    your stay at Marvin Motel Katunguru today and create
                    memories that will last a lifetime.
                </p>

                <Link
                    href="#booking"
                    className="inline-block bg-white text-amber-700 font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-amber-100 transition-all"
                >
                    Book Now
                </Link>
            </motion.div>
        </section>
    );
}
