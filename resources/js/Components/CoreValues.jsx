import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, ShieldCheck, Target } from "lucide-react";

const coreValues = [
    {
        icon: <Heart className="w-8 h-8 text-red-500" />,
        title: "Comfort And Tranquility",
        description:
            "We offer a serene retreat where quests can unwind, reconnect with nature, and experience true Ugandan hospitality.",
        height: "h-48", // Short
        color: "bg-gradient-to-br from-red-50 to-red-100",
        borderColor: "border-l-4 border-red-400",
    },
    {
        icon: <Users className="w-8 h-8 text-blue-500" />,
        title: "Integrity",
        description:
            "We conduct our business with honest, reliability and respect for guests, staff and partners.",
        height: "h-64", // Medium
        color: "bg-gradient-to-br from-blue-50 to-blue-100",
        borderColor: "border-l-4 border-blue-400",
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
        title: "Excellence In Service",
        description:
            "We strive for consistency, professionalism and attention to detail in every quest interaction.",
        height: "h-56", // Medium-short
        color: "bg-gradient-to-br from-yellow-50 to-yellow-100",
        borderColor: "border-l-4 border-yellow-400",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
        title: "Community Empowerment",
        description:
            "We believe in creating opportunities for local employment, partnerships and skill development.",
        height: "h-72", // Tall
        color: "bg-gradient-to-br from-green-50 to-green-100",
        borderColor: "border-l-4 border-green-400",
    },
    {
        icon: <Target className="w-8 h-8 text-purple-500" />,
        title: "Innovation",
        description:
            "We continously seek creative ways to enhance the quest experience through thoughtful design and service improvement.",
        height: "h-60", // Medium-tall
        color: "bg-gradient-to-br from-purple-50 to-purple-100",
        borderColor: "border-l-4 border-purple-400",
    },
];

export default function CoreValues() {
    return (
        <section className="py-16 mt-12 relative overflow-hidden">
            {/* Faded Blue Wish Circle in Center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
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
                    className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
                >
                    The guiding principles that shape our culture, actions, and
                    success.
                </motion.p>

                {/* Values Grid with varying heights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                delay: index * 0.15,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 100,
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3 },
                            }}
                            className={`${value.height} ${value.color} ${value.borderColor} rounded-xl shadow-lg p-6 flex flex-col justify-between text-left relative overflow-hidden group cursor-pointer backdrop-blur-sm`}
                        >
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                {value.icon}
                            </div>

                            {/* Content Container */}
                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className="mr-4 p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                </div>

                                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                    {value.description}
                                </p>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
