import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function AuthButtons() {
    const { auth } = usePage().props;

    return (
        <div className="flex space-x-4">
            {auth.user ? (
                <>
                    <Link
                        href={route("dashboard")}
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                        My Account
                    </Link>
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                        Logout
                    </Link>
                </>
            ) : (
                <>
                    <Link
                        href={route("login")}
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                        Login
                    </Link>
                    <Link
                        href={route("register")}
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                        Register
                    </Link>
                </>
            )}
        </div>
    );
}
