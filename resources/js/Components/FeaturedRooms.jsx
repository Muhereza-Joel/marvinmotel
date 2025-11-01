import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Switch } from "@headlessui/react"; // optional, or just use a button toggle

// Real prices from Marvin Motel Katunguru rate cards
const ROOM_PRICES = {
    "Twin Room": {
        UGX: 80000, // average of full board + AC rate
        USD: 30,
    },
    "Double Room": {
        UGX: 80000,
        USD: 30,
    },
    "Single Room": {
        UGX: 60000,
        USD: 20,
    },
};

const rooms = [
    {
        id: 1,
        name: "Twin Room",
        description:
            "Spacious, beautifully furnished, and ideal for friends or families. Enjoy cozy twin beds, air conditioning, and a scenic view of the Katunguru landscape.",
        image: "/assets/images/double.jpg",
        link: "/rooms/deluxe-twin",
    },
    {
        id: 2,
        name: "Double Room",
        description:
            "Perfect for couples seeking relaxation and comfort. Features a king-size bed, private balcony, ensuite bathroom, and complimentary breakfast.",
        image: "/assets/images/double3.jpg",
        link: "/rooms/executive-double",
    },
    {
        id: 3,
        name: "Single Room",
        description:
            "A luxurious suite designed for families, offering ample space, a private living area, and panoramic views of Queen Elizabeth National Park’s natural beauty.",
        image: "/assets/images/double4.jpg",
        link: "/rooms/family-suite",
    },
];

export default function FeaturedRooms() {
    const [currency, setCurrency] = useState("UGX");

    const formatPrice = (roomName) => {
        const price = ROOM_PRICES[roomName][currency];
        return currency === "UGX"
            ? `UGX ${price.toLocaleString()}`
            : `$${price.toLocaleString()}`;
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-amber-700 mb-4"
                >
                    Our Featured Rooms
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
                >
                    Discover elegant rooms designed for your comfort and
                    relaxation blending nature, style, and Ugandan hospitality
                    at Marvin Motel Katunguru.
                </motion.p>

                {/* Currency Toggle */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white border border-gray-200 rounded-full p-1 shadow-sm flex items-center space-x-1">
                        {["UGX", "USD"].map((curr) => (
                            <button
                                key={curr}
                                onClick={() => setCurrency(curr)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition ${
                                    currency === curr
                                        ? "bg-amber-600 text-white shadow"
                                        : "text-gray-600 hover:text-amber-700"
                                }`}
                            >
                                {curr}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Room Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>

                            <div className="p-6 text-left">
                                <h3 className="text-2xl font-semibold text-amber-700 mb-2">
                                    {room.name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {room.description}
                                </p>
                                <p className="text-xl font-semibold text-gray-800 mb-6">
                                    {formatPrice(room.name)}{" "}
                                    <span className="text-sm text-gray-500">
                                        / night
                                    </span>
                                </p>

                                <Link
                                    href="#"
                                    // href={room.link}
                                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
