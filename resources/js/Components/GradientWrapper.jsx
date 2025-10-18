export function GradientWrapper({
    children,
    from = "#6366f1", // indigo-500
    via = "#a855f7", // purple-500
    to = "#ec4899", // pink-500
    overlayLight = "rgba(255,255,255,0.8)",
    overlayDark = "rgba(17,24,39,0.8)",
}) {
    return (
        <div
            className="relative rounded-xl p-[2px] overflow-hidden"
            style={{
                "--overlay-light": overlayLight,
                "--overlay-dark": overlayDark,
            }}
        >
            {/* Gradient only in light mode */}
            <div
                className="absolute inset-0 gradient-layer"
                style={{
                    background: `linear-gradient(to right, ${from}, ${via}, ${to})`,
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 overlay-layer backdrop-blur-sm" />

            {/* Content */}
            <div className="relative rounded-xl bg-transparent">{children}</div>

            {/* Styles to remove gradient in dark mode */}
            <style jsx>{`
                .overlay-layer {
                    background: var(--overlay-light);
                }
                :global(.dark) .overlay-layer {
                    background: var(--overlay-dark);
                }
                :global(.dark) .gradient-layer {
                    display: none;
                }
            `}</style>
        </div>
    );
}
