import ContactForm from "@/Components/ContactForm";
import HeroSection from "@/Components/HeroSection";
import SEOTemplate from "@/Components/SEOTemplate";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function ContactUs() {
    return (
        <PublicLayout>
            <Head title="Contact Us" />
            <SEOTemplate
                title="Contact Us"
                description="Get in touch with Marvin Motel Katunguru for reservations, inquiries, or travel guidance near Queen Elizabeth National Park and the Kazinga Channel."
                keywords="Contact Marvin Motel, Katunguru hotel phone number, Queen Elizabeth National Park lodges contact, Kazinga Channel accommodation booking, Kasese travel support, Uganda safari lodge inquiries"
                url="https://marvinmotel.com/contact-us"
            />

            <HeroSection
                titles={["Don't Hesitate To Reach Us At Marvin Motel"]}
                animationMode="typing"
                typingSpeed={50} // keep smooth rotation
                subtitle="Incase you have any querries, always reach us. Your Feedback is valuable in improving customer services."
                bgColor="bg-blue-800"
                buttonText="Talks To Us Today"
                buttonLink="#about"
                buttonColor="bg-amber-600 text-white hover:bg-amber-700"
                imageAnimationDirection="bottom"
                titleGradient="text-gray-50"
            />

            <ContactForm />
        </PublicLayout>
    );
}

export default ContactUs;
