"use client";

import { lazy, Suspense, useEffect, useState, useRef } from "react";
import getAssetPath from "@/utils/getAssetPath";
import Image from 'next/image';
import ReCAPTCHA from "react-google-recaptcha"; // Import the reCAPTCHA component
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles
import * as emailjs from "@emailjs/browser";
import {
    EMAIL_JS_PUBLIC_KEY,
    EMAIL_JS_SERVICE_ID,
    EMAIL_JS_TEMPLATE_ID,
    RECAPTCHA_PUBLIC_KEY,
} from "@/components/ChatbotWrapper/EmailJS";

const ChatBot = lazy(() => import("react-chatbotify"));

export default function ChatbotWrapper() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null); // State to store reCAPTCHA token

    const recaptchaRef = useRef(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const [form, setForm] = useState({
        name: '',
        role: '',
        already_customer: '',
        services_choices: [],
        budget: ''
    });

    const formStyle = {
        marginTop: 10,
        marginLeft: 20,
        border: "1px solid #491d8d",
        padding: 10,
        borderRadius: 5,
        maxWidth: 300
    }

    const settings = {
        general: {
            primaryColor: '#491d8d',
            secondaryColor: '#FF003C',
            fontFamily: 'Arial, sans-serif',
        },
        header: {
            title: <h1 className="font-bold text-lg font-sans2">Apex</h1>
        },
        footer: {
            text: <Image
                width={40}
                height={40}
                alt="logo"
                src={getAssetPath('./logo.svg')}
            />,
        }
    };

    const sendEmail = async (form) => {

        console.log('sendEmail is triggered');

        if (recaptchaRef.current) {
            recaptchaRef.current.execute(); // Trigger the invisible reCAPTCHA
        }
    };


    // Modify the reCAPTCHA onChange handler to send the email once token is received
    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token); // Set the reCAPTCHA token

        // If the token is received, proceed with sending the email
        if (token) {
            const templateParams = {
                name: form.name,
                role: form.role,
                already_customer: form.already_customer,
                services_choices: form.services_choices.join(", "), // converting array to string
                budget: form.budget,
                'g-recaptcha-response': recaptchaToken, // Add the reCAPTCHA token
            };

            emailjs
                .send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams, EMAIL_JS_PUBLIC_KEY)
                .then(
                    () => {
                        toast.success("Message sent successfully!", {
                            position: "top-right"
                        });
                        recaptchaRef.current.reset(); // Reset reCAPTCHA after successful submission
                    },
                    (error) => {
                        toast.error("Failed to send message. Please try again.", {
                            position: "top-right"
                        });
                        console.error('FAILED...', error.text);
                    }
                );
        }
    };

    const flow={
        start: {
            message: "Hello there! What is your name?",
            function: (params) => setForm({...form, name: params.userInput}),
            path: "ask_role"
        },
        ask_role: {
            message: (params) => `Nice to meet you ${params.userInput}, what is your current role?`,
            function: (params) => setForm({...form, role: params.userInput}),
            path: "ask_customer"
        },
        ask_customer: {
            message: "Are you already a customer of ByteJutsu?",
            // alternative way to declare options, with sending of output disabled
            // more info here: https://react-chatbotify.com/docs/api/attributes
            // options: {items: ["Yes", "No"], sendOutput: false}
            options: ["Yes", "No"],
            chatDisabled: true,
            function: (params) => setForm({...form, already_customer: params.userInput}),
            path: "ask_choice"
        },
        ask_choice: {
            message: "Let me know what services are you interested in",
            // alternative way to declare checkboxes, with default configurations (i.e. min 1, max 4, send output and not reusable)
            // more info here: https://react-chatbotify.com/docs/api/attributes
            checkboxes: {items: ["Consulting", "E-commerce", "Web App", "Mobile App", "Wordpress", "Prestashop", "Digital Marketing" ,"Custom Solution"], min: 1},
            chatDisabled: true,
            function: (params) => setForm({...form, services_choices: params.userInput}),
            path: "ask_budget"
        },
        ask_budget: {
            message: "what is your budget?",
            function: (params) => setForm({...form, budget: params.userInput}),
            path: "end"
        },
        end: {
            message: "Thank you for your interest, we will get back to you shortly!",
            function: async (params) => { await sendEmail() },
            component: (
                <div style={formStyle}>
                    <p>Name: {form.name}</p>
                    <p>Role: {form.role}</p>
                    <p>Already Customer: {form.already_customer}</p>
                    <p>Interested in: {form.services_choices}</p>
                    <p>Budget: {form.budget}</p>
                </div>
            ),
            options: ["Confirm", "New Application"],
            chatDisabled: true,
            path: "start"
        },
    }

    return (
        <>
            {isLoaded && (
                <Suspense fallback={<></>}>
                    <ChatBot
                        settings={settings}
                        flow={flow}
                    />
                </Suspense>
            )}
            {/* reCAPTCHA */}
            <div className="flex justify-center mt-6">
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_PUBLIC_KEY} // Replace with your reCAPTCHA site key
                    onChange={handleRecaptchaChange}
                    size="invisible"
                />
            </div>
            {/* Toast notifications */}
            <ToastContainer />
        </>
    );
}