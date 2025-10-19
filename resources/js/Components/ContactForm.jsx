import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function ContactForm() {
    const contactDetails = {
        address:
            "We are located along Kasese Mbarara Highway just 221 kilometers from Mbarara City and 111 kilometers from Fort Portal Tourism City",
        phone: "Office: +256 772 623 456, Mobile: +256 758 262 114,",
        email: "info@marvinmotel.com, sales@marvinmotel.com",
    };

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(
                "https://api.marvinmotel.com/api/v1/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                });

                alert(
                    "Thank you for contacting Karangura Peak Coffee! Your message has been sent successfully!"
                );
            } else {
                setSubmitStatus("error");
                if (data.errors) {
                    setErrors(data.errors);
                }

                alert(
                    "Failed to send the message. Please check the fields and try again."
                );
            }
        } catch {
            setSubmitStatus("error");
            alert("An unexpected error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
                {/* Contact Info */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-800">
                        Contact Information
                    </h3>
                    <p className="text-gray-700">
                        <strong>Physical Address:</strong>
                        <br />
                        {contactDetails.address}
                    </p>
                    <p className="text-gray-700">
                        <strong>Phone:</strong>
                        <br />
                        {contactDetails.phone}
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong>
                        <br />
                        <a
                            href={`mailto:${contactDetails.email}`}
                            className="text-indigo-600 hover:underline"
                        >
                            {contactDetails.email}
                        </a>
                    </p>
                </div>

                {/* Embedded Map */}
                <div className="lg:col-span-2">
                    <iframe
                        title="FortBreeze Hotel Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127673.8386808431!2d29.949368981952166!3d-0.1336926117362815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19df51004d57ff2d%3A0xb1ee4d060efe9dff!2sMARVIN%20MOTEL%20KATUNGURU!5e0!3m2!1sen!2sug!4v1760883051879!5m2!1sen!2sug"
                        width="100%"
                        height="500"
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg shadow-lg border-0"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div id="message-form" className="lg:col-span-3">
                    <SectionWrapper className="bg-white p-8 rounded-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            Send Us a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-gray-900"
                                        required
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.firstName}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-gray-900"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.lastName}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-gray-900"
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-gray-900"
                                    required
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                            {submitStatus === "success" && (
                                <div className="p-3 mt-4 bg-green-100 text-green-700 rounded-md">
                                    Thank you for your message! We'll get back
                                    to you soon.
                                </div>
                            )}

                            {submitStatus === "error" &&
                                !errors.firstName &&
                                !errors.email &&
                                !errors.message && (
                                    <div className="p-3 mt-4 bg-red-100 text-red-700 rounded-md">
                                        There was an error sending your message.
                                        Please try again.
                                    </div>
                                )}
                        </form>
                    </SectionWrapper>
                </div>
            </div>
        </SectionWrapper>
    );
}
