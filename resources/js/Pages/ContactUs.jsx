import ContactForm from "@/Components/ContactForm";
import HeroSection from "@/Components/HeroSection";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function ContactUs() {
    return (
        <PublicLayout>
            <Head title="Contact Us" />
            <HeroSection
                titles={["Don't Hesitate To Reach Us At Marvin Motel"]}
                animationMode="typing"
                typingSpeed={50} // keep smooth rotation
                subtitle="Incase you have any querries, always reach us. Your Feedback is valuable in improving customer services."
                bgColor="bg-orange-50"
                buttonText="Talks To Us Today"
                buttonLink="#about"
                buttonColor="bg-amber-600 text-white hover:bg-amber-700"
                imageAnimationDirection="bottom"
            />

            <ContactForm />
        </PublicLayout>
    );
}

export default ContactUs;
