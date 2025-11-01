import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// Enhanced Pricing Data Structure
const PRICING_DATA = {
    Resident: {
        currency: "UGX",
        rooms: {
            "Single Room": {
                noAC: {
                    "Bed Only": 60000,
                    "Bed & Breakfast": 80000,
                    "Half Board": 110000,
                    "Full Board": 140000,
                },
                AC: {
                    "Bed Only": 70000,
                    "Bed & Breakfast": 90000,
                    "Half Board": 120000,
                    "Full Board": 150000,
                },
            },
            "Double Room": {
                noAC: {
                    "Bed Only": 80000,
                    "Bed & Breakfast": 120000,
                    "Half Board": 150000,
                    "Full Board": 200000,
                },
                AC: {
                    "Bed Only": 90000,
                    "Bed & Breakfast": 130000,
                    "Half Board": 190000,
                    "Full Board": 230000,
                },
            },
            "Twin Room": {
                noAC: {
                    "Bed Only": 80000,
                    "Bed & Breakfast": 120000,
                    "Half Board": 160000,
                    "Full Board": 200000,
                },
                AC: {
                    "Bed Only": 90000,
                    "Bed & Breakfast": 130000,
                    "Half Board": 190000,
                    "Full Board": 230000,
                },
            },
        },
    },
    Foreign: {
        currency: "USD",
        rooms: {
            "Single Room": {
                noAC: {
                    "Bed Only": 20,
                    "Bed & Breakfast": 25,
                    "Half Board": 40,
                    "Full Board": 50,
                },
                AC: {
                    "Bed Only": 25,
                    "Bed & Breakfast": 35,
                    "Half Board": 45,
                    "Full Board": 55,
                },
            },
            "Double Room": {
                noAC: {
                    "Bed Only": 30,
                    "Bed & Breakfast": 40,
                    "Half Board": 60,
                    "Full Board": 80,
                },
                AC: {
                    "Bed Only": 35,
                    "Bed & Breakfast": 45,
                    "Half Board": 65,
                    "Full Board": 85,
                },
            },
            "Twin Room": {
                noAC: {
                    "Bed Only": 30,
                    "Bed & Breakfast": 40,
                    "Half Board": 60,
                    "Full Board": 80,
                },
                AC: {
                    "Bed Only": 45,
                    "Bed & Breakfast": 55,
                    "Half Board": 65,
                    "Full Board": 85,
                },
            },
        },
    },
};

export default function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        guestType: "Resident",
        roomType: "",
        mealPlan: "",
        acOption: "No",
        checkIn: "",
        checkOut: "",
    });

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [priceDetails, setPriceDetails] = useState({
        nightlyRate: null,
        numberOfNights: 0,
        totalCost: null,
    });

    // Calculate number of nights and total cost
    const calculateStayDetails = (checkIn, checkOut, nightlyRate) => {
        if (!checkIn || !checkOut || !nightlyRate) {
            return { numberOfNights: 0, totalCost: null };
        }

        const startDate = new Date(checkIn);
        const endDate = new Date(checkOut);

        // Validate dates
        if (endDate <= startDate) {
            return { numberOfNights: 0, totalCost: null };
        }

        const timeDifference = endDate.getTime() - startDate.getTime();
        const numberOfNights = Math.ceil(timeDifference / (1000 * 3600 * 24));
        const totalCost = numberOfNights * nightlyRate;

        return { numberOfNights, totalCost };
    };

    // Auto calculate price and total cost
    useEffect(() => {
        const { guestType, roomType, mealPlan, acOption, checkIn, checkOut } =
            formData;

        if (guestType && roomType && mealPlan) {
            const acKey = acOption === "Yes" ? "AC" : "noAC";
            const nightlyRate =
                PRICING_DATA[guestType]?.rooms?.[roomType]?.[acKey]?.[
                    mealPlan
                ] || null;

            if (nightlyRate) {
                const { numberOfNights, totalCost } = calculateStayDetails(
                    checkIn,
                    checkOut,
                    nightlyRate
                );

                setPriceDetails({
                    nightlyRate,
                    numberOfNights,
                    totalCost,
                });
            } else {
                setPriceDetails({
                    nightlyRate: null,
                    numberOfNights: 0,
                    totalCost: null,
                });
            }
        } else {
            setPriceDetails({
                nightlyRate: null,
                numberOfNights: 0,
                totalCost: null,
            });
        }
    }, [formData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const formatCurrency = (amount, guestType) => {
        const currency = PRICING_DATA[guestType]?.currency;
        if (guestType === "Resident") {
            return `${currency} ${amount?.toLocaleString()}`;
        }
        return `${currency} ${amount?.toFixed(2)}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage("");

        // Validate dates
        if (priceDetails.numberOfNights <= 0) {
            setStatusMessage(
                "❌ Please select valid check-in and check-out dates"
            );
            setLoading(false);
            return;
        }

        try {
            await axios.post(
                "https://marvinmotel.com/api/v1/send-booking-email",
                {
                    ...formData,
                    ...priceDetails,
                }
            );
            setStatusMessage(
                "✅ Booking request sent successfully! We'll confirm your reservation shortly."
            );
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                guestType: "Resident",
                roomType: "",
                mealPlan: "",
                acOption: "No",
                checkIn: "",
                checkOut: "",
            });
            setPriceDetails({
                nightlyRate: null,
                numberOfNights: 0,
                totalCost: null,
            });
        } catch (error) {
            setStatusMessage(
                "❌ Failed to send booking request. Please try again or contact us directly."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
            <div
                id="booking"
                className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4">
                        Reserve Your Stay
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Complete your reservation details below. Our team will
                        promptly confirm your booking via email.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Booking Form */}
                    <div className="lg:col-span-2">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white shadow-none rounded-2xl p-8 space-y-8 border border-gray-200"
                        >
                            {/* Guest Information Section */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                    Guest Information
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                                            placeholder="+256 XXX XXX XXX"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Guest Type *
                                        </label>
                                        <select
                                            name="guestType"
                                            value={formData.guestType}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                                        >
                                            <option value="Resident">
                                                Ugandan Resident (UGX)
                                            </option>
                                            <option value="Foreign">
                                                International Guest (USD)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Stay Details Section */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                    Stay Details
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Room Type *
                                        </label>
                                        <select
                                            name="roomType"
                                            value={formData.roomType}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                                        >
                                            <option value="">
                                                Select Room Type
                                            </option>
                                            <option value="Single Room">
                                                Single Room
                                            </option>
                                            <option value="Double Room">
                                                Double Room
                                            </option>
                                            <option value="Twin Room">
                                                Twin Room
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Meal Plan *
                                        </label>
                                        <select
                                            name="mealPlan"
                                            value={formData.mealPlan}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                                        >
                                            <option value="">
                                                Select Meal Plan
                                            </option>
                                            <option value="Bed Only">
                                                Bed Only
                                            </option>
                                            <option value="Bed & Breakfast">
                                                Bed & Breakfast
                                            </option>
                                            <option value="Half Board">
                                                Half Board
                                            </option>
                                            <option value="Full Board">
                                                Full Board
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Air Conditioning
                                        </label>
                                        <select
                                            name="acOption"
                                            value={formData.acOption}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                                        >
                                            <option value="No">
                                                Standard (No AC)
                                            </option>
                                            <option value="Yes">
                                                With Air Conditioning
                                            </option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Check-In *
                                            </label>
                                            <input
                                                type="date"
                                                name="checkIn"
                                                value={formData.checkIn}
                                                onChange={handleChange}
                                                required
                                                min={
                                                    new Date()
                                                        .toISOString()
                                                        .split("T")[0]
                                                }
                                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Check-Out *
                                            </label>
                                            <input
                                                type="date"
                                                name="checkOut"
                                                value={formData.checkOut}
                                                onChange={handleChange}
                                                required
                                                min={
                                                    formData.checkIn ||
                                                    new Date()
                                                        .toISOString()
                                                        .split("T")[0]
                                                }
                                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition duration-200"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={
                                        loading || !priceDetails.totalCost
                                    }
                                    className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition duration-200 transform hover:scale-105 disabled:scale-100"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Processing Reservation...
                                        </span>
                                    ) : (
                                        "Complete Reservation"
                                    )}
                                </button>
                            </div>

                            {statusMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-xl text-center font-medium ${
                                        statusMessage.startsWith("✅")
                                            ? "bg-green-50 text-green-700 border border-green-200"
                                            : "bg-red-50 text-red-700 border border-red-200"
                                    }`}
                                >
                                    {statusMessage}
                                </motion.div>
                            )}
                        </form>
                    </div>

                    {/* Price Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white shadow-none rounded-2xl p-8 border border-gray-200 sticky top-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                                Booking Summary
                            </h3>

                            {priceDetails.nightlyRate ? (
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-600">
                                            Nightly Rate:
                                        </span>
                                        <span className="font-semibold text-lg">
                                            {formatCurrency(
                                                priceDetails.nightlyRate,
                                                formData.guestType
                                            )}
                                        </span>
                                    </div>

                                    {priceDetails.numberOfNights > 0 && (
                                        <>
                                            <div className="flex justify-between items-center py-2">
                                                <span className="text-gray-600">
                                                    Duration:
                                                </span>
                                                <span className="font-semibold">
                                                    {
                                                        priceDetails.numberOfNights
                                                    }{" "}
                                                    night
                                                    {priceDetails.numberOfNights !==
                                                    1
                                                        ? "s"
                                                        : ""}
                                                </span>
                                            </div>

                                            <div className="border-t border-gray-200 pt-4 mt-4">
                                                <div className="flex justify-between items-center py-2">
                                                    <span className="text-gray-600">
                                                        Subtotal:
                                                    </span>
                                                    <span className="font-semibold">
                                                        {formatCurrency(
                                                            priceDetails.nightlyRate *
                                                                priceDetails.numberOfNights,
                                                            formData.guestType
                                                        )}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-300 pt-4 mt-2">
                                                <div className="flex justify-between items-center py-2">
                                                    <span className="text-lg font-bold text-gray-900">
                                                        Total Amount:
                                                    </span>
                                                    <span className="text-2xl font-bold text-amber-700">
                                                        {formatCurrency(
                                                            priceDetails.totalCost,
                                                            formData.guestType
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {priceDetails.numberOfNights === 0 &&
                                        formData.checkIn &&
                                        formData.checkOut && (
                                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4">
                                                <p className="text-yellow-700 text-sm text-center">
                                                    Please select valid check-in
                                                    and check-out dates
                                                </p>
                                            </div>
                                        )}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="text-gray-400 mb-2">
                                        <svg
                                            className="w-16 h-16 mx-auto"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-500">
                                        Complete your stay details to see the
                                        pricing
                                    </p>
                                </div>
                            )}

                            {/* Additional Information */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    What's Included
                                </h4>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <svg
                                            className="w-4 h-4 text-green-500 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        Free WiFi access
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-4 h-4 text-green-500 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        Housekeeping service
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-4 h-4 text-green-500 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        24/7 Customer support
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
