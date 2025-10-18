import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none relative " +
                (active
                    ? "text-gray-900 focus:text-gray-700 dark:text-gray-100 dark:focus:text-gray-300 "
                    : "border-transparent text-blue-900 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300 ") +
                className
            }
        >
            <span className="relative">
                {children}
                {active && (
                    <span className="absolute left-0 right-0 -bottom-3 h-0.5 bg-indigo-400 dark:bg-indigo-600"></span>
                )}
            </span>
        </Link>
    );
}
