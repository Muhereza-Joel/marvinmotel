export function MountainBorder({
    children,
    bg = "white",
    mountainColor = "#e5e7eb", // Tailwind gray-200
    flip = false, // Flip mountains vertically
}) {
    return (
        <div className="relative">
            {/* Top Mountains */}
            {!flip && (
                <svg
                    className="absolute top-0 left-0 w-full"
                    viewBox="0 0 1440 150"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill={mountainColor}
                        d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,96C672,96,768,160,864,186.7C960,213,1056,203,1152,165.3C1248,128,1344,64,1392,32L1440,0V150H0Z"
                    ></path>
                </svg>
            )}

            {/* Content */}
            <div className={`relative bg-${bg}`}>{children}</div>

            {/* Bottom Mountains */}
            {flip && (
                <svg
                    className="absolute bottom-0 left-0 w-full rotate-180"
                    viewBox="0 0 1440 150"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill={mountainColor}
                        d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,96C672,96,768,160,864,186.7C960,213,1056,203,1152,165.3C1248,128,1344,64,1392,32L1440,0V150H0Z"
                    ></path>
                </svg>
            )}
        </div>
    );
}
