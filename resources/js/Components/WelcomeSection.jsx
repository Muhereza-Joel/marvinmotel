import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";

const serif = {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1];

const textGroup = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14 } },
};

const rise = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function WelcomeSection() {
    return (
        <MotionConfig reducedMotion="user">
            <section
                aria-labelledby="welcome-heading"
                className="relative overflow-hidden bg-white py-24 text-stone-800 sm:py-32"
            >
                {/* Warm sunlight washing in from the corner */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-orange-100/70 blur-3xl"
                />

                <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-10 lg:grid-cols-12 lg:gap-20 lg:px-12">
                    {/* Text */}
                    <motion.div
                        variants={textGroup}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        className="lg:col-span-6"
                    >
                        <motion.h2
                            variants={rise}
                            id="welcome-heading"
                            style={serif}
                            className="text-5xl font-semibold leading-[1.05] tracking-tight text-stone-900 md:text-6xl"
                        >
                            Welcome to Marvin Motel Katunguru
                        </motion.h2>

                        <motion.span
                            variants={rise}
                            aria-hidden="true"
                            className="mt-7 block h-[3px] w-16 rounded-full bg-gradient-to-r from-orange-600 to-orange-300"
                        />

                        <motion.p
                            variants={rise}
                            className="mt-7 max-w-xl text-lg leading-relaxed text-stone-700"
                        >
                            At Marvin Motel Katunguru, we pride ourselves on
                            offering a sanctuary of peace and comfort near the
                            gateway of{" "}
                            <strong className="font-semibold text-stone-900">
                                Queen Elizabeth National Park
                            </strong>
                            . Our atmosphere, elegant rooms, and warm
                            hospitality make us the perfect destination for
                            travelers seeking both relaxation and adventure.
                        </motion.p>

                        <motion.p
                            variants={rise}
                            className="mt-5 max-w-xl leading-relaxed text-stone-600"
                        >
                            Whether you’re winding down after a thrilling game
                            drive or waking up to the sounds of nature, you’ll
                            find every moment at Marvin Motel filled with
                            warmth, beauty, and Ugandan charm.
                        </motion.p>

                        <motion.div variants={rise} className="mt-10">
                            <Link
                                href={route("about")}
                                className="group inline-flex items-center gap-3 rounded-full bg-orange-600 py-3 pl-8 pr-3 text-base font-semibold text-white shadow-lg shadow-orange-600/25 transition-colors duration-300 hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                            >
                                Read More About Us
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-12">
                                    <ArrowUpRight
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Image: arched like a doorway, with an offset outline behind it */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, ease }}
                        className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-lg"
                    >
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 translate-x-5 translate-y-5 rounded-t-[999px] rounded-b-3xl border-2 border-orange-300"
                        />

                        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-stone-200 shadow-2xl shadow-stone-900/15">
                            <motion.img
                                src="/assets/images/entrance1.jpg"
                                alt="The welcoming entrance of Marvin Motel Katunguru, near Queen Elizabeth National Park"
                                loading="lazy"
                                initial={{ scale: 1.15 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.8, ease }}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Experience badge */}
                        <div className="absolute -left-4 bottom-12 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-orange-600 text-center text-white shadow-xl shadow-orange-900/25 ring-4 ring-white sm:-left-10">
                            <span
                                style={serif}
                                className="text-5xl font-bold leading-none"
                            >
                                10+
                            </span>
                            <span className="mt-1 text-sm font-medium leading-tight">
                                Years of
                                <br />
                                Service
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </MotionConfig>
    );
}
