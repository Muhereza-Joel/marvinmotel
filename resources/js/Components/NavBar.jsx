import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-10 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
                    : "bg-white dark:bg-gray-900 shadow-sm"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    {/* Logo Section */}
                    <Link
                        href={route("root")}
                        className="flex items-center space-x-2 group"
                    >
                        <img
                            src="/assets/images/marvin-motel-logo.jfif"
                            alt="Marvin Motel Katunguru Logo"
                            className={`h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                                scrolled ? "brightness-100" : "brightness-125"
                            }`}
                        />

                        {/* Motel Name / Location stacked */}
                        <div className="hidden sm:flex flex-col leading-tight select-none">
                            <span
                                className={`text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-700 via-orange-900 to-indigo-900 transition-all duration-300 ${
                                    scrolled
                                        ? ""
                                        : "drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                                }`}
                            >
                                Marvin Motel
                            </span>

                            <span
                                className={`text-sm font-medium transition-colors duration-300 ${
                                    scrolled
                                        ? "text-gray-700 dark:text-gray-100"
                                        : "text-slate-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                                }`}
                            >
                                Katunguru
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden sm:flex sm:space-x-6">
                        <NavLink
                            href={route("about")}
                            active={route().current("about")}
                        >
                            About Us
                        </NavLink>

                        <NavLink
                            href={route("restaurantbar")}
                            active={route().current("restaurantbar")}
                        >
                            Restaurant & Bar
                        </NavLink>

                        <NavLink
                            href={route("contact")}
                            active={route().current("contact")}
                        >
                            Contact Us
                        </NavLink>

                        <NavLink
                            href={route("gallery")}
                            active={route().current("gallery")}
                        >
                            Gallery
                        </NavLink>
                    </div>

                    {/* Right: Book Now & Hamburger */}
                    <div className="flex items-center space-x-4">
                        {/* Optional Book Now Button */}
                        <Link
                            href="#booking"
                            className="hidden sm:inline-block px-8 py-2 bg-orange-600 text-white rounded-full shadow hover:bg-orange-700 transition-colors duration-300"
                        >
                            Book Now
                        </Link>

                        {/* Mobile Hamburger */}
                        <button
                            className="sm:hidden p-2 rounded-md focus:outline-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? (
                                <X className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with animation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sm:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex flex-col px-4 py-4 space-y-3">
                            <NavLink
                                href={route("about")}
                                active={route().current("about")}
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                href={route("restaurantbar")}
                                active={route().current("restaurantbar")}
                            >
                                Restaurant & Bar
                            </NavLink>
                            <NavLink
                                href={route("contact")}
                                active={route().current("contact")}
                            >
                                Contact Us
                            </NavLink>
                            <NavLink
                                href={route("gallery")}
                                active={route().current("gallery")}
                            >
                                Gallery
                            </NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
