import React from "react";

const DotsBackground = ({
    children,
    dotColor = "currentColor",
    baseColor = "transparent",
    minDotSize = 100, // ~2.6cm
    maxDotSize = 120, // ~3.2cm
    density = 30,
    opacity = 0.15,
    className = "",
    ...props
}) => {
    // Generate random dots
    const dots = Array.from({ length: density }).map((_, i) => ({
        id: i,
        size:
            Math.floor(Math.random() * (maxDotSize - minDotSize + 1)) +
            minDotSize,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * opacity + opacity * 0.3, // Vary opacity slightly
        color: dotColor,
    }));

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            style={{ backgroundColor: baseColor }}
            {...props}
        >
            {/* Dots container */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
            >
                {dots.map((dot) => (
                    <div
                        key={dot.id}
                        className="absolute rounded-full"
                        style={{
                            width: `${dot.size}px`,
                            height: `${dot.size}px`,
                            top: dot.top,
                            left: dot.left,
                            opacity: dot.opacity,
                            backgroundColor: dot.color,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default DotsBackground;
