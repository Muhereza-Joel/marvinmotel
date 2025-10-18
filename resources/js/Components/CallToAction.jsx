import { Link } from "@inertiajs/react";

export default function CallToAction({
    title,
    text,
    buttonText,
    buttonLink,
    bgColor = "bg-indigo-600",
    darkBgColor = "dark:bg-indigo-800",
    textColor = "text-white",
    subTextColor = "text-indigo-100",
    buttonBgColor = "bg-white",
    buttonTextColor = "text-indigo-600",
    buttonHoverBg = "hover:bg-indigo-50",
    paddingY = "py-12",
    paddingX = "px-6",
    rounded = "rounded-none",
    shadow = "shadow-lg",
}) {
    return (
        <div
            className={`${bgColor} ${darkBgColor} ${paddingY} ${paddingX} text-center ${rounded} ${shadow}`}
        >
            <h2 className={`text-3xl font-bold ${textColor} mb-4`}>{title}</h2>
            <p className={`${subTextColor} mb-6 px-80`}>{text}</p>
            <Link
                href={buttonLink}
                className={`px-6 py-3 ${buttonBgColor} ${buttonTextColor} font-semibold shadow ${buttonHoverBg} transition`}
            >
                {buttonText}
            </Link>
        </div>
    );
}
