export function SkewWrapper({
    children,
    bg = "white",
    skewTop = true,
    skewBottom = true,
    skewClass = "skew-y-3",
}) {
    return (
        <div className="relative">
            {/* Skewed top */}
            {skewTop && (
                <div
                    className={`absolute top-0 left-0 right-0 h-16 bg-${bg} transform ${skewClass} origin-top-left`}
                />
            )}

            {/* Content */}
            <div className={`relative bg-${bg}`}>{children}</div>

            {/* Skewed bottom */}
            {skewBottom && (
                <div
                    className={`absolute bottom-0 left-0 right-0 h-16 bg-${bg} transform -${skewClass} origin-bottom-left`}
                />
            )}
        </div>
    );
}
