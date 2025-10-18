// resources/js/Components/CookieBanner.jsx
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "@inertiajs/react";

export default function CookieBanner() {
    const [show, setShow] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const accepted = Cookies.get("cookie_consent");
        if (!accepted) {
            setShow(true);
            setTimeout(() => setAnimate(true), 100); // trigger slide-in
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set("cookie_consent", "true", { expires: 365 });
        setAnimate(false); // trigger slide-out
        setTimeout(() => setShow(false), 300); // wait for animation
    };

    if (!show) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 w-full z-[100] bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out ${
                animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
                {/* Message */}
                <p className="text-sm md:text-base text-center md:text-left leading-relaxed">
                    We use cookies to ensure you get the best browsing
                    experience, to analyze site traffic, and for marketing
                    purposes. By clicking <strong>Accept</strong>, you consent
                    to our use of cookies. Read more in our{" "}
                    <Link
                        href="#"
                        className="underline text-blue-400 hover:text-blue-300"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>

                {/* Actions */}
                <div className="flex space-x-3">
                    <button
                        onClick={acceptCookies}
                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm md:text-base font-medium transition"
                    >
                        Accept
                    </button>
                    {/* <Link
                        href={route("cookies")}
                        className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg text-sm md:text-base font-medium transition"
                    >
                        Manage Preferences
                    </Link> */}
                </div>
            </div>
        </div>
    );
}
