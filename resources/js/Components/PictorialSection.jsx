import { motion } from "framer-motion";
import { Link } from "@inertiajs/react"; // <-- ensure you import Link

export default function PictorialSection({
    image,
    alt,
    title,
    text,
    reverse = false,
    buttonLink = null, // new: configurable link
    buttonText = "Book Your Stay", // new: configurable text
}) {
    const containerVariants = {
        hidden: { opacity: 0, x: reverse ? 100 : -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            className={`flex flex-col md:flex-row items-center md:space-x-12 ${
                reverse ? "md:flex-row-reverse md:space-x-reverse" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Image Section */}
            <motion.div
                className="flex-shrink-0 w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg"
                variants={containerVariants}
            >
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                />
            </motion.div>

            {/* Text Section */}
            <motion.div
                className="mt-8 md:mt-0 w-full md:w-1/2 max-w-xl text-center md:text-left"
                variants={containerVariants}
            >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                    {text}
                </p>

                {/* Conditionally render button if link provided */}
                {buttonLink && (
                    <Link
                        href={buttonLink}
                        className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full font-medium shadow hover:bg-blue-700 transition duration-300"
                    >
                        {buttonText}
                    </Link>
                )}
            </motion.div>
        </motion.div>
    );
}
