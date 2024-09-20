import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha"; // Import the reCAPTCHA component
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles
import styles from '@/app/Globals.module.css';
import getAssetPath from "@/utils/getAssetPath";
import * as emailjs from "@emailjs/browser";
import {
    EMAIL_JS_PUBLIC_KEY,
    EMAIL_JS_SERVICE_ID,
    EMAIL_JS_TEMPLATE_ID,
    RECAPTCHA_PUBLIC_KEY,
} from "@/components/Contact/EmailJS";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [recaptchaToken, setRecaptchaToken] = useState(null); // State to store reCAPTCHA token
    const nameRemaining = 256 - formData.name.length;
    const emailRemaining = 256 - formData.email.length;
    const messageRemaining = 1024 - formData.message.length;

    const recaptchaRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token); // Store the reCAPTCHA token on successful completion
    };

    const submitEmail = (e) => {
        e.preventDefault();

        if (!recaptchaToken) {
            toast.error("Please complete the reCAPTCHA.", {
                position: "top-right"
            });
            return;
        }

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            'g-recaptcha-response': recaptchaToken, // Add the reCAPTCHA token
        };

        emailjs
            .send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams, EMAIL_JS_PUBLIC_KEY)
            .then(
                () => {
                    toast.success("Message sent successfully!", {
                        position: "top-right"
                    });
                    recaptchaRef.current.reset(); // Reset the reCAPTCHA
                    setFormData({ name: "", email: "", message: "" }); // Reset the form
                },
                (error) => {
                    toast.error("Failed to send message. Please try again.", {
                        position: "top-right"
                    });
                    console.error('FAILED...', error.text);
                }
            );
    };

    return (
        <section id="contact" className="relative block py-24 lg:pt-0 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                    <div className="w-full lg:w-6/12 px-4">
                        <form onSubmit={submitEmail}>
                            <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-[#00F0FF] bg-[#FCEE09] ${styles.neonBorder}`}>
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-bold text-center font-sans2">
                                        Send us a message
                                    </h4>
                                    <p className="leading-relaxed mt-1 mb-4 text-gray-800 text-center font-sans2">
                                        Complete the form below to get in touch with us.
                                    </p>
                                    <div className="relative w-full mb-3 mt-8">
                                        <label className="block uppercase text-gray-800 text-xs font-bold mb-2 font-sans2" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            className="border-t-0 border-r-0 border-l-0 border-b-2 border-b-black px-3 py-3 placeholder-gray-400 text-gray-700 bg-transparent text-sm focus:outline-none focus:ring w-full"
                                            maxLength="256"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Name"
                                            required
                                            type="text"
                                        />
                                        <p className="text-xs text-gray-600 text-right">
                                            {nameRemaining}
                                        </p>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-800 text-xs font-bold mb-2 font-sans2" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            className="border-t-0 border-r-0 border-l-0 border-b-2 border-b-black px-3 py-3 placeholder-gray-400 text-gray-700 bg-transparent text-sm focus:outline-none focus:ring w-full"
                                            maxLength="256"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            required
                                            type="email"
                                        />
                                        <p className="text-xs text-gray-600 text-right">
                                            {emailRemaining}
                                        </p>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-800 text-xs font-bold mb-2 font-sans2" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="border-2 border-black px-3 py-3 placeholder-gray-400 text-gray-700 bg-transparent text-sm focus:outline-none focus:ring w-full"
                                            cols="80"
                                            maxLength="1024"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Type a message..."
                                            required
                                            rows="4"
                                        ></textarea>
                                        <p className="text-xs text-gray-600 text-right">
                                            {messageRemaining}
                                        </p>
                                    </div>

                                    {/* reCAPTCHA */}
                                    <div className="flex justify-center mt-6">
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={RECAPTCHA_PUBLIC_KEY} // Replace with your reCAPTCHA site key
                                            onChange={handleRecaptchaChange}
                                        />
                                    </div>

                                    <div className="flex justify-center mt-6">
                                        <div className="w-full lg:w-1/2">
                                            <button
                                                className={`${styles.cpBtn}`}
                                                style={{ borderImage: `url(${getAssetPath('./cp-btn-cyan.svg')}) 0 20 fill`, color: '#00f0ff' }}
                                                type="submit"
                                            >
                                                <span className="font-sans2">Send Message_</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Toast notifications */}
                                    <ToastContainer />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
