import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function WelcomeSection() {
    return (
        <section className="relative py-20 bg-white text-gray-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-700 leading-tight">
                        Welcome to Marvin Motel Katunguru
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At Marvin Motel Katunguru, we pride ourselves on
                        offering a sanctuary of peace and comfort near the
                        gateway of{" "}
                        <strong>Queen Elizabeth National Park</strong>. Our
                        atmosphere, elegant rooms, and warm hospitality make us
                        the perfect destination for travelers seeking both
                        relaxation and adventure.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Whether you’re winding down after a thrilling game drive
                        or waking up to the sounds of nature, you’ll find every
                        moment at Marvin Motel filled with warmth, beauty, and
                        Ugandan charm.
                    </p>
                    <Link
                        href="/about-us"
                        className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
                    >
                        Read More About Us
                    </Link>
                </motion.div>

                {/* Image Side */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src="/assets/images/entrance1.jpg"
                            alt="Marvin Motel Katunguru"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-2xl shadow-lg">
                        <p className="text-2xl font-bold">10+</p>
                        <p className="text-sm uppercase">Years of Service</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
