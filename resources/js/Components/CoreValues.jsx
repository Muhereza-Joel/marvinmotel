import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, ShieldCheck, Target } from "lucide-react";

const coreValues = [
    {
        icon: <Heart className="w-8 h-8 text-red-500" />,
        title: "Comfort And Tranquility",
        description:
            "We offer a serene retreat where quests can unwind, reconnect with nature, and experience true Ugandan hospitality.",
    },
    {
        icon: <Users className="w-8 h-8 text-blue-500" />,
        title: "Integrity",
        description:
            "We conduct our business with honest, reliability and respect for guests, staff and partners.",
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
        title: "Excellence In Service",
        description:
            "We strive for consistency, professionalism and attention to detail in every quest interaction.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
        title: "Community Empowerment",
        description:
            "We believe in creating opportunities for local employment, partnerships and skill development.",
    },
    {
        icon: <Target className="w-8 h-8 text-purple-500" />,
        title: "Innovation",
        description:
            "We continously seek creative ways to enhance the quest experience through thoughtful design and service improvement.",
    },
];

export default function CoreValues() {
    return (
        <section className="py-16 bg-white mt-12">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                >
                    Our Core Values
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 max-w-2xl mx-auto mb-12"
                >
                    The guiding principles that shape our culture, actions, and
                    success.
                </motion.p>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="mb-4">{value.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
