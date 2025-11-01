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
import NavBar from "@/Components/NavBar";

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

                    <NavBar />
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
