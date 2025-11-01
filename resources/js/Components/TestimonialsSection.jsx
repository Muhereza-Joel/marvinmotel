import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah W.",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
        comment:
            "Marvin Motel Katunguru was the highlight of our safari trip! The staff were incredibly welcoming, the rooms were spotless, and the view of the Kazinga Channel each morning was unforgettable.",
        rating: 5,
        location: "Nairobi, Kenya",
    },
    {
        name: "James & Emily K.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        comment:
            "We loved every moment! Delicious food, peaceful atmosphere, and such warm Ugandan hospitality. Perfect spot for couples exploring Queen Elizabeth National Park.",
        rating: 5,
        location: "London, UK",
    },
    {
        name: "Michael B.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        comment:
            "The location is amazing — close to wildlife, yet so calm and relaxing. The team helped us organize a boat cruise and safari with ease. Highly recommended!",
        rating: 4,
        location: "Kigali, Rwanda",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-white text-gray-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-amber-700 mb-4"
                >
                    What Our Guests Say
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
                >
                    Real stories from real guests who’ve experienced the
                    comfort, care, and beauty of Marvin Motel Katunguru.
                </motion.p>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all text-left relative"
                        >
                            {/* Quote */}
                            <p className="text-gray-700 leading-relaxed mb-6 italic">
                                “{t.comment}”
                            </p>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                {Array.from({ length: t.rating }).map(
                                    (_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-amber-500 fill-amber-500"
                                        />
                                    )
                                )}
                            </div>

                            {/* Guest Info */}
                            <div className="flex items-center space-x-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-600"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {t.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {t.location}
                                    </p>
                                </div>
                            </div>

                            {/* Accent Shape */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-600/10 rounded-bl-3xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
