import React from "react";
import { motion } from "framer-motion";
import { MapPin, Camera, Mountain, Ship } from "lucide-react";

const attractions = [
    {
        icon: MapPin,
        title: "Queen Elizabeth National Park",
        image: "/assets/images/queenelizabeth.jfif",
        description:
            "Just minutes from Marvin Motel Katunguru, explore one of Africa’s most famous national parks. Home to elephants, hippos, lions, and over 600 bird species, it’s the perfect destination for a safari adventure.",
    },
    {
        icon: Ship,
        title: "Kazinga Channel Boat Cruise",
        image: "/assets/images/boatcruise.jfif",
        description:
            "Experience a scenic boat cruise along the Kazinga Channel a natural waterway connecting Lake Edward and Lake George. Witness hippos basking, elephants drinking, and crocodiles sunbathing in their natural habitat.",
    },
    {
        icon: Camera,
        title: "Ishasha Tree-Climbing Lions",
        image: "/assets/images/treeclimbinglions.jfif",
        description:
            "A rare sight to behold the tree-climbing lions of Ishasha are just a short drive away. Watch these majestic predators rest high up in the fig trees, a behavior unique to this part of Uganda.",
    },
    {
        icon: Mountain,
        title: "Crater Lakes & Scenic Hills",
        image: "/assets/images/katungurucraterlakes.jfif",
        description:
            "Discover breathtaking crater lakes, rolling hills, and panoramic views of Western Uganda. Perfect for photography, hiking, and peaceful nature walks.",
    },
];

export default function NearbyAttractions() {
    return (
        <section className="py-20 bg-gray-50 text-gray-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-amber-700 mb-4"
                >
                    Explore Nearby Attractions
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
                >
                    From wildlife safaris to peaceful boat cruises, Marvin Motel
                    Katunguru offers easy access to Uganda’s most remarkable
                    natural wonders and unforgettable experiences.
                </motion.p>

                {/* Attractions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {attractions.map((attraction, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                        >
                            <div className="relative h-56">
                                <img
                                    src={attraction.image}
                                    alt={attraction.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute top-4 left-4 bg-amber-600 text-white p-3 rounded-full shadow-md">
                                    <attraction.icon className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold text-amber-700 mb-2">
                                    {attraction.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {attraction.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Explore More CTA */}
                {/* <div className="mt-16">
                    <motion.a
                        href="/attractions"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-semibold transition"
                    >
                        Discover More Adventures
                    </motion.a>
                </div> */}
            </div>
        </section>
    );
}
