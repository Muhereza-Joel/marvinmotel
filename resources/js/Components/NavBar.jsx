import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useSpring,
    useReducedMotion,
} from "framer-motion";

/**
 * Single source of truth for navigation.
 * Contact Us is deliberately last.
 */
const NAV_ITEMS = [
    { label: "About Us", name: "about" },
    { label: "Restaurant & Bar", name: "restaurantbar" },
    { label: "Gallery", name: "gallery" },
    { label: "Contact Us", name: "contact" },
];

const serif = {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
};

function DesktopItem({ label, name }) {
    const active = route().current(name);

    return (
        <li>
            <Link
                href={route(name)}
                aria-current={active ? "page" : undefined}
                className={`group relative block px-1 py-2 text-base font-semibold tracking-wide lg:text-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 rounded-sm dark:focus-visible:ring-offset-gray-900 ${
                    active
                        ? "text-orange-700 dark:text-orange-400"
                        : "text-gray-700 hover:text-orange-700 dark:text-gray-200 dark:hover:text-orange-400"
                }`}
            >
                {label}

                {/* Hover underline grows from the left */}
                <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-orange-500/70 transition-transform duration-300 group-hover:scale-x-100"
                />

                {/* Active underline glides between links */}
                {active && (
                    <motion.span
                        layoutId="nav-active-underline"
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-orange-600"
                        transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 34,
                        }}
                    />
                )}
            </Link>
        </li>
    );
}

function MobileItem({ label, name, index, reduceMotion }) {
    const active = route().current(name);

    return (
        <motion.li
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                delay: reduceMotion ? 0 : 0.06 * index,
                duration: 0.25,
            }}
        >
            <Link
                href={route(name)}
                aria-current={active ? "page" : undefined}
                style={serif}
                className={`block border-l-2 py-2.5 pl-4 text-2xl font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                    active
                        ? "border-orange-600 text-orange-700 dark:text-orange-400"
                        : "border-transparent text-gray-800 hover:border-orange-300 hover:text-orange-700 dark:text-gray-100 dark:hover:text-orange-400"
                }`}
            >
                {label}
            </Link>
        </motion.li>
    );
}

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const reduceMotion = useReducedMotion();

    // Reading-progress line along the bottom edge: the one signature detail
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 28,
        mass: 0.3,
    });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close the mobile menu after any Inertia navigation
    useEffect(() => {
        const off = router.on("navigate", () => setMenuOpen(false));
        return () => off();
    }, []);

    // Escape closes the mobile menu
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [menuOpen]);

    const bookingHref = route().current("root")
        ? "#booking"
        : `${route("root")}#booking`;

    return (
        <header className="fixed top-10 left-0 z-50 w-full">
            <nav
                aria-label="Primary"
                className={`relative w-full transition-all duration-300 ${
                    scrolled
                        ? "bg-white/90 shadow-lg shadow-orange-900/5 backdrop-blur-md dark:bg-gray-900/90"
                        : "bg-white shadow-sm dark:bg-gray-900"
                }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className={`flex items-center justify-between transition-all duration-300 ${
                            scrolled ? "h-20" : "h-24"
                        }`}
                    >
                        {/* Brand */}
                        <Link
                            href={route("root")}
                            aria-label="Marvin Motel Katunguru, home"
                            className="group flex items-center gap-3 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-gray-900"
                        >
                            <img
                                src="/assets/images/marvin-motel-logo.jfif"
                                alt="Marvin Motel Katunguru logo"
                                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                                    scrolled ? "h-11" : "h-12"
                                }`}
                            />

                            <span
                                aria-hidden="true"
                                className="hidden h-9 w-px bg-gradient-to-b from-transparent via-orange-400 to-transparent sm:block"
                            />

                            <span className="hidden select-none flex-col leading-none sm:flex">
                                <span
                                    style={serif}
                                    className="bg-gradient-to-r from-orange-700 via-orange-800 to-indigo-900 bg-clip-text text-[1.7rem] font-bold tracking-tight text-transparent dark:from-orange-400 dark:via-orange-300 dark:to-indigo-300"
                                >
                                    Marvin Motel
                                </span>
                                <span
                                    style={serif}
                                    className="mt-1 text-sm italic tracking-[0.18em] text-gray-500 dark:text-gray-400"
                                >
                                    Katunguru
                                </span>
                            </span>
                        </Link>

                        {/* Desktop navigation: real list for crawlers and screen readers */}
                        <ul className="hidden items-center gap-8 sm:flex lg:gap-10">
                            {NAV_ITEMS.map((item) => (
                                <DesktopItem key={item.name} {...item} />
                            ))}
                        </ul>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <a
                                href={bookingHref}
                                className="hidden rounded-full bg-orange-600 px-7 py-2.5 text-base font-semibold tracking-wide text-white shadow-md shadow-orange-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 sm:inline-block"
                            >
                                Book Now
                            </a>

                            <button
                                type="button"
                                className="rounded-md p-2 text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:text-gray-100 sm:hidden"
                                onClick={() => setMenuOpen((o) => !o)}
                                aria-expanded={menuOpen}
                                aria-controls="mobile-menu"
                                aria-label={
                                    menuOpen ? "Close menu" : "Open menu"
                                }
                            >
                                {menuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={
                                reduceMotion ? false : { height: 0, opacity: 0 }
                            }
                            animate={{ height: "auto", opacity: 1 }}
                            exit={
                                reduceMotion
                                    ? { opacity: 0 }
                                    : { height: 0, opacity: 0 }
                            }
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden border-t border-orange-100 bg-white dark:border-gray-700 dark:bg-gray-900 sm:hidden"
                        >
                            <div className="px-6 pb-6 pt-4">
                                <ul className="space-y-1">
                                    {NAV_ITEMS.map((item, i) => (
                                        <MobileItem
                                            key={item.name}
                                            {...item}
                                            index={i}
                                            reduceMotion={reduceMotion}
                                        />
                                    ))}
                                </ul>

                                <a
                                    href={bookingHref}
                                    onClick={() => setMenuOpen(false)}
                                    className="mt-5 block rounded-full bg-orange-600 py-3 text-center font-semibold text-white shadow-md transition-colors duration-300 hover:bg-orange-700"
                                >
                                    Book Now
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scroll progress line */}
                {!reduceMotion && (
                    <motion.div
                        aria-hidden="true"
                        style={{ scaleX: progress }}
                        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-orange-500 via-orange-600 to-indigo-800"
                    />
                )}
            </nav>
        </header>
    );
}
