import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import NavLink from "@/Components/NavLink";
import { useEffect, useState } from "react";
import BackToTop from "@/Components/BackToTop";
import TopBar from "@/Components/TopBar";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CookieBanner from "@/Components/CookieBannar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PublicLayout({ title, children }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-500 select-none">
                {/* Fixed Header (TopBar + Nav) */}
                <header
                    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                        scrolled
                            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
                            : "bg-white dark:bg-gray-900 shadow-sm"
                    }`}
                >
                    <TopBar />

                    {/* Navigation */}
                    <nav className="border-t border-gray-200 dark:border-gray-700">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-24 items-center">
                                {/* Logo */}
                                <Link
                                    className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-700 via-orange-900 to-indigo-900 hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 py-2 px-4"
                                    href={route("root")}
                                >
                                    Marvin Motel
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
                                        active={route().current(
                                            "restaurantbar"
                                        )}
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
                                    {/* <Link
                                        href={route("booking")}
                                        className="hidden sm:inline-block px-8 py-2 bg-orange-600 text-white rounded-full shadow hover:bg-orange-700 transition-colors duration-300"
                                    >
                                        Book Now
                                    </Link> */}

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
                                        {/* <NavLink
                                            href={route("about")}
                                            active={route().current("about")}
                                        >
                                            About Us
                                        </NavLink> */}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </nav>
                </header>

                {/* Page Content - Takes remaining space */}
                <main className="flex-grow bg-white transition-colors duration-500 pt-32 min-h-[calc(100vh-8rem)]">
                    {children}
                </main>

                {/* Footer - Sticks to bottom */}
                <div className="mt-auto">
                    <BackToTop />
                    <CookieBanner />
                    <Footer />
                    <ToastContainer position="bottom-right" autoClose={5000} />
                </div>
            </div>
        </>
    );
}
