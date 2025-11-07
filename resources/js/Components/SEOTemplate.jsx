// SEOTemplate.jsx
import React from "react";
import { Head } from "@inertiajs/react";

export default function SEOTemplate({
    title,
    description,
    keywords = "",
    url,
    image,
    type = "website",
}) {
    const defaultTitle =
        "Marvin Motel Katunguru | Peaceful Nature Stay & Affordable Comfort";
    const defaultDescription =
        "Marvin Motel Katunguru offers peaceful lakeside and mountain-view accommodation with warm hospitality. Enjoy nature, relaxation, and affordable comfort.";
    const defaultUrl = "https://marvinmotel.com"; // ⬅️ Update if your domain changes
    const defaultImage =
        "https://marvinmotel.com/assets/images/og-main-image.png"; // Use the 512x512 you generated

    return (
        <Head>
            {/* Title */}
            <title>{title ? `${title}` : defaultTitle}</title>

            {/* Basic SEO */}
            <meta
                name="description"
                content={description || defaultDescription}
            />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url || defaultUrl} />

            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/assets/images/favicon-16x16.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/assets/images/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="48x48"
                href="/assets/images/favicon-48x48.png"
            />

            <link
                rel="apple-touch-icon"
                href="/assets/images/apple-touch-icon.png"
            />

            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/assets/images/android-chrome-192x192.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="512x512"
                href="/assets/images/android-chrome-512x512.png"
            />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:title" content={title || defaultTitle} />
            <meta
                property="og:description"
                content={description || defaultDescription}
            />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url || defaultUrl} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:site_name" content="Marvin Motel" />
            <meta property="og:locale" content="en_UG" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta
                name="twitter:description"
                content={description || defaultDescription}
            />
            <meta name="twitter:image" content={image || defaultImage} />

            {/* JSON-LD (Structured Data) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        name: "Marvin Motel",
                        url: url || defaultUrl,
                        logo: defaultImage,
                        image: image || defaultImage,
                        description: description || defaultDescription,
                        address: {
                            "@type": "P.o Box 430477",
                            streetAddress: "Katunguru",
                            addressLocality: "Katunguru, Kasese District",
                            addressRegion: "Western Uganda",
                            postalCode: "430477",
                            addressCountry: "UG",
                        },
                        geo: {
                            "@type": "GeoCoordinates",
                            latitude: "-0.118907",
                            longitude: "30.049671",
                        },
                        telephone: "+256 772 623456",
                        amenities: [
                            "Free WiFi",
                            "Restaurant",
                            "Secure Parking",
                            "Room Service",
                        ],
                        "@type": "Organization",
                        name: "Marvin Motel Katunguru",
                        url: "https://marvinmotel.com",
                        logo: "https://marvinmotel.com/assets/images/og-main-image.png",
                        // sameAs: [
                        //     "https://facebook.com/YOUR_PAGE",
                        //     "https://instagram.com/YOUR_PAGE",
                        // ],
                    }),
                }}
            />
        </Head>
    );
}
