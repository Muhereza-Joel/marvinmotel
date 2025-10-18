import { motion } from "framer-motion";

export default function FeatureGrid({ items = [] }) {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, idx) => (
                <motion.div
                    key={idx}
                    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{
                        y: -5,
                        scale: 1.02,
                        transition: { duration: 0.2 },
                    }}
                >
                    {item.icon && (
                        <div className="mb-4">
                            <item.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                        </div>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
