import React from "react";
import { motion, MotionConfig } from "framer-motion";
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

const serif = {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
};

const list = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function AmenitiesSection() {
    return (
        <MotionConfig reducedMotion="user">
            <section
                aria-labelledby="amenities-heading"
                className="relative overflow-hidden bg-emerald-950 pb-0 pt-24 text-emerald-50 sm:pt-28"
            >
                {/* Soft light from the corner, like sun through leaves */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-emerald-500/15 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-32 bottom-1/3 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
                />

                <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                    <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
                        {/* Intro: stays in view while the list scrolls on large screens */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="lg:col-span-4"
                        >
                            <div className="lg:sticky lg:top-40">
                                <h2
                                    id="amenities-heading"
                                    style={serif}
                                    className="text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl"
                                >
                                    Amenities & Services
                                </h2>

                                <span
                                    aria-hidden="true"
                                    className="mt-6 block h-[3px] w-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-300"
                                />

                                <p className="mt-6 max-w-md text-lg leading-relaxed text-emerald-100/80">
                                    At Marvin Motel Katunguru, we combine
                                    comfort, convenience, and authentic Ugandan
                                    hospitality to make every moment of your
                                    stay memorable.
                                </p>
                            </div>
                        </motion.div>

                        {/* Amenities: a list with hairline dividers, not a wall of cards */}
                        <motion.ul
                            variants={list}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-60px" }}
                            className="grid gap-x-14 sm:grid-cols-2 lg:col-span-8"
                        >
                            {amenities.map(
                                ({ icon: Icon, title, description }) => (
                                    <motion.li
                                        key={title}
                                        variants={item}
                                        className="group flex gap-5 border-t border-emerald-100/15 py-8"
                                    >
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-300/40 text-emerald-300 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                                            <Icon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <div>
                                            <h3
                                                style={serif}
                                                className="text-2xl font-semibold text-white"
                                            >
                                                {title}
                                            </h3>
                                            <p className="mt-2 leading-relaxed text-emerald-100/75">
                                                {description}
                                            </p>
                                        </div>
                                    </motion.li>
                                ),
                            )}
                        </motion.ul>
                    </div>
                </div>
            </section>
        </MotionConfig>
    );
}
