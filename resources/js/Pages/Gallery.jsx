import React from "react";
import PublicLayout from "@/Layouts/PublicLayout";
import PictorialGallery from "@/Components/PictorialGallery";
import { Head, usePage } from "@inertiajs/react";
import SEOTemplate from "@/Components/SEOTemplate";

export default function Gallery() {
    const {
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
    } = usePage().props;

    // Convert Laravel props into an array
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
    ].filter(Boolean); // removes undefined/null

    return (
        <PublicLayout>
            <Head title="Our Gallery" />
            <SEOTemplate
                title="Gallery"
                description="Explore photos of Marvin Motel Katunguru, including rooms, nature views, Kazinga Channel boat cruise scenery, and peaceful outdoor spaces."
                keywords="Marvin Motel Gallery, Kazinga Channel lodge photos, Queen Elizabeth National Park stay images, Safari accommodation pictures, Katunguru lodge view"
                url="https://marvinmotel.com/gallery"
            />

            <PictorialGallery images={images} />
        </PublicLayout>
    );
}
