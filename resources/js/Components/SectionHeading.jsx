export default function SectionHeading({ title, subtitle, align = "center" }) {
    return (
        <div className={`text-${align} mb-10`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
