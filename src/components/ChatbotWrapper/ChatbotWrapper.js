"use client";

import { lazy, Suspense, useEffect, useState, useRef } from "react";
import getAssetPath from "@/utils/getAssetPath";
import Image from 'next/image';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles
import * as emailjs from "@emailjs/browser";
import {
    EMAIL_JS_PUBLIC_KEY,
    EMAIL_JS_SERVICE_ID,
    EMAIL_JS_TEMPLATE_ID,
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
        services_choices: '',
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
        chatButton: {
            icon: getAssetPath('./apex.svg')
        },
        header: {
            title: <h1 className="font-bold text-lg font-sans2">Apex</h1>
        },
        audio: {
            disabled: true
        },
        botBubble: {
            showAvatar: true
        },
        voice: {
            language: "en-US"
        },
        footer: {
            text: <Image
                width={40}
                height={40}
                alt="logo"
                src={getAssetPath('./logo.svg')}
            />,
        },
    };

    const sendEmail = () => {
            console.log('sendEmail is triggered');
            const templateParams = {
                name: form.name,
                //role: form.role,
                //already_customer: form.already_customer,
                message: form.services_choices, // converting array to string
                //budget: form.budget,
            };

            emailjs
                .send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams, EMAIL_JS_PUBLIC_KEY)
                .then(
                    () => {
                        toast.success("Message sent successfully!", {
                            position: "top-right"
                        });
                    },
                    (error) => {
                        toast.error("Failed to send message. Please try again.", {
                            position: "top-right"
                        });
                        console.error('FAILED...', error.text);
                    }
                );
    };

    const flow={
        start: {
            message: "Hello there I am Apex the Chatbot of ByteJutsu! What should I call you?",
            function: (params) => setForm({...form, name: params.userInput}),
            path: "ask_role"
        },
        ask_role: {
            message: (params) => `Nice to meet you ${params.userInput}, what is your current role or job?`,
            function: (params) => setForm({...form, role: params.userInput}),
            path: "ask_customer"
        },
        ask_customer: {
            message: "Interesting! Are you already a customer of ByteJutsu?",
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
            checkboxes: {items: ["Consulting", "E-commerce", "Web App", "Mobile App", "Wordpress", "Prestashop", "Digital Marketing" ,"Custom Solution", "Other"], min: 1},
            chatDisabled: true,
            function: (params) => setForm({...form, services_choices: params.userInput}),
            path: "ask_budget"
        },
        ask_budget: {
            message: "What is your estimated budget?",
            function: (params) => setForm({...form, budget: params.userInput}),
            path: "end"
        },
        end: {
            message: "Thank you for your interest, we will get back to you shortly!",
            function: (params) => { sendEmail() },
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

    const styles = {};

    return (
        <>
            {isLoaded && (
                <Suspense fallback={<></>}>
                    <ChatBot
                        settings={settings}
                        flow={flow}
                        styles={styles}
                    />
                </Suspense>
            )}
            {/* Toast notifications */}
            <ToastContainer />
        </>
    );
}