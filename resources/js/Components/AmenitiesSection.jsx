import React from "react";
import { motion } from "framer-motion";
import {
    Wifi,
    Coffee,
    Car,
    Sun,
    Utensils,
    MapPin,
    Users,
    BedDouble,
} from "lucide-react";
import BookingCTA from "./BookingCTA";

const amenities = [
    {
        icon: BedDouble,
        title: "Comfortable Rooms",
        description:
            "Relax in beautifully furnished rooms designed to provide warmth, peace, and complete comfort during your stay.",
    },
    {
        icon: Utensils,
        title: "Restaurant & Bar",
        description:
            "Enjoy delicious local and international meals prepared fresh every day, along with refreshing drinks in our cozy bar.",
    },
    {
        icon: Wifi,
        title: "Free Wi-Fi",
        description:
            "Stay connected with fast, reliable internet access across all guest rooms and public areas.",
    },
    {
        icon: Car,
        title: "Secure Parking",
        description:
            "We provide ample, secure parking space for all guests so you can explore worry-free.",
    },
    {
        icon: MapPin,
        title: "Close to Nature",
        description:
            "Located near Queen Elizabeth National Park your adventure starts right outside our gates.",
    },
    {
        icon: Users,
        title: "Friendly Staff",
        description:
            "Our dedicated team ensures that every guest feels at home with service rooted in Ugandan hospitality.",
    },
    {
        icon: Coffee,
        title: "Complimentary Breakfast",
        description:
            "Start each morning with freshly brewed coffee and a hearty breakfast, included with every stay.",
    },
    {
        icon: Sun,
        title: "Scenic Views",
        description:
            "Wake up to stunning sunrise views over the Kazinga Channel and the beautiful Katunguru landscape.",
    },
];

export default function AmenitiesSection() {
    return (
        <section className="py-20 pb-0 bg-blue-800 text-gray-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-slate-100 mb-4"
                >
                    Amenities & Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-50 max-w-2xl mx-auto mb-16 text-lg"
                >
                    At Marvin Motel Katunguru, we combine comfort, convenience,
                    and authentic Ugandan hospitality to make every moment of
                    your stay memorable.
                </motion.p>

                {/* Amenities Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-lg transition border border-gray-100"
                        >
                            <div className="flex justify-center mb-6">
                                <item.icon className="w-12 h-12 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gay-700 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <BookingCTA />
        </section>
    );
}
