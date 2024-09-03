import React, { useState } from "react";
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const nameRemaining = 256 - formData.name.length;
    const emailRemaining = 256 - formData.email.length;
    const messageRemaining = 1024 - formData.message.length;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitEmail = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <section id="contact" className="relative block py-24 lg:pt-0 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                    <div className="w-full lg:w-6/12 px-4">
                        <form onSubmit={submitEmail}>
                            <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-[#00F0FF] bg-[#FCEE09] ${styles.neonBorder}`}>
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-bold text-center">
                                        Send us a message
                                    </h4>
                                    <p className="leading-relaxed mt-1 mb-4 text-gray-800 text-center">
                                        Complete the form below to get in touch with us.
                                    </p>
                                    <div className="relative w-full mb-3 mt-8">
                                        <label
                                            className="block uppercase text-gray-800 text-xs font-bold mb-2"
                                            htmlFor="name"
                                        >
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
                                            style={{ transition: "all 0.15s ease 0s" }}
                                            type="text"
                                        />
                                        <p className="text-xs text-gray-600 text-right">
                                            {nameRemaining}
                                        </p>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-800 text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
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
                                            style={{ transition: "all 0.15s ease 0s" }}
                                            type="email"
                                        />
                                        <p className="text-xs text-gray-600 text-right">
                                            {emailRemaining}
                                        </p>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-800 text-xs font-bold mb-2"
                                            htmlFor="message"
                                        >
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
                                    <div className="flex justify-center mt-6">
                                        <div className="w-3/4">
                                            <button className="cp-btn cp-btn--cyan" type="submit">
                                                <span>Send Message_</span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Google reCAPTCHA can be added here if needed */}
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
