"use client";
import { lazy, Suspense, useEffect, useState } from "react";
import getAssetPath from "@/utils/getAssetPath";
import Image from 'next/image';

const ChatBot = lazy(() => import("react-chatbotify"));

export default function ChatbotWrapper() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const [form, setForm] = useState({});
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
                //layout="responsive"
                alt="logo"
                src={getAssetPath('./logo.svg')}
            />,
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
            // checkboxes: ["Dog", "Cat", "Rabbit", "Hamster"]
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
            component: (
                <div style={formStyle}>
                    <p>Name: {form.name}</p>
                    <p>Role: {form.role}</p>
                    <p>Already Customer: {form.already_customer}</p>
                    <p>Interested in: {form.services_choices}</p>
                    <p>Budget: {form.budget}</p>
                </div>
            ),
            options: ["New Application"],
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
        </>
    );
}