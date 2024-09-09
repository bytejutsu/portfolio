"use client";
import { lazy, Suspense, useEffect, useState } from "react";

const ChatBot = lazy(() => import("react-chatbotify"));

export default function ChatbotWrapper() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, [])

    return (
        <>
            {isLoaded && (
                <Suspense fallback={<></>}>
                    <ChatBot />
                </Suspense>
            )}
        </>
    );
}