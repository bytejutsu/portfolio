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

    /*
    const flow = {
        start: {
            message: "Hello, I am Apex 👋! The Chatbot of ByteJutsu, I'm excited that you are here 😊! Do you want to know more about the services of ByteJutsu ?",
            options: ["Yes", "No"],
            path: "introduction"
        },
        introduction: {
            message: "ByteJutsu is a Software and IT Services company that specializes in providing custom and business tailored software solutions and consulting",
            path: "end"
        },
        end: {
            message: "Thank you for visiting ! please feel free to contact us if you have any questions",
            chatDisabled: true
        }
    }
     */

    const flow={
        start: {
            message: "Hello there! What is your name?",
            function: (params) => setForm({...form, name: params.userInput}),
            path: "ask_age"
        },
        ask_age: {
            message: (params) => `Nice to meet you ${params.userInput}, what is your age?`,
            function: (params) => setForm({...form, age: params.userInput}),
            path: "ask_pet"
        },
        ask_pet: {
            message: "Do you own any pets?",
            // alternative way to declare options, with sending of output disabled
            // more info here: https://react-chatbotify.com/docs/api/attributes
            // options: {items: ["Yes", "No"], sendOutput: false}
            options: ["Yes", "No"],
            chatDisabled: true,
            function: (params) => setForm({...form, pet_ownership: params.userInput}),
            path: "ask_choice"
        },
        ask_choice: {
            message: "Select at least 2 pets that you are comfortable to work with:",
            // alternative way to declare checkboxes, with default configurations (i.e. min 1, max 4, send output and not reusable)
            // more info here: https://react-chatbotify.com/docs/api/attributes
            // checkboxes: ["Dog", "Cat", "Rabbit", "Hamster"]
            checkboxes: {items: ["Dog", "Cat", "Rabbit", "Hamster"], min: 2},
            chatDisabled: true,
            function: (params) => setForm({...form, pet_choices: params.userInput}),
            path: "ask_work_days"
        },
        ask_work_days: {
            message: "How many days can you work per week?",
            function: (params) => setForm({...form, num_work_days: params.userInput}),
            path: "end"
        },
        end: {
            message: "Thank you for your interest, we will get back to you shortly!",
            component: (
                <div style={formStyle}>
                    <p>Name: {form.name}</p>
                    <p>Age: {form.age}</p>
                    <p>Pet Ownership: {form.pet_ownership}</p>
                    <p>Pet Choices: {form.pet_choices}</p>
                    <p>Num Work Days: {form.num_work_days}</p>
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