import React from "react";
import PublicLayout from "@/Layouts/PublicLayout";
import PictorialGallery from "@/Components/PictorialGallery";
import { Head, usePage } from "@inertiajs/react";

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
            <PictorialGallery images={images} />
        </PublicLayout>
    );
}
