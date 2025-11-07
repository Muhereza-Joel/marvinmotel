import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const openWhatsApp = () => {
        const number = "256772623456";
        const message = "Hello Marvin Motel, I would like to make an inquiry.";

        window.location.href = `whatsapp://send?phone=${number}&text=${encodeURIComponent(
            message
        )}`;

        setTimeout(() => {
            window.location.href = `https://wa.me/${number}?text=${encodeURIComponent(
                message
            )}`;
        }, 500);
    };

    return (
        <>
            {/* WhatsApp Floating Chat Button */}
            <motion.button
                onClick={openWhatsApp}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                    opacity: visible ? 1 : 0,
                    y: visible ? 0 : 50,
                }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                // 💥 This makes it "pop" every few seconds
                animate={{
                    opacity: visible ? 1 : 0,
                    y: visible ? 0 : 50,
                    scale: [1, 1.15, 1], // pop effect
                }}
                transition={{
                    duration: 1.5,
                    repeat: visible ? Infinity : 0,
                }}
                className="fixed bottom-20 right-8 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 z-[999]"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="w-6 h-6" />
            </motion.button>

            {/* Back to Top Button */}
            <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
                transition={{ duration: 0.4 }}
                onClick={scrollToTop}
                className="fixed bottom-4 right-8 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 z-[999]"
                aria-label="Back to top"
            >
                <ChevronUp className="w-4 h-4" />
            </motion.button>
        </>
    );
}
