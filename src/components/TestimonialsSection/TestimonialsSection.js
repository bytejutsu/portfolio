import React from 'react';
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";
import DonutChart from "@/components/DonutChart/DonutChart";
import Testimonials from "@/components/TestimonialsSection/Testimonials";
import { FaUserFriends } from "react-icons/fa";

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="relative bg-primary pt-20">
            {/* Top SVG */}
            <div className="absolute top-0 w-full pointer-events-none" style={{ height: '0rem' }}>
                <svg
                    className="overflow-hidden"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 33600 640"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon
                        className="text-gray-900 fill-current"
                        points="15200,640 16000,0 17600,0 18400,640"
                        transform="rotate(180 16800 320)"
                    ></polygon>
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-8">
                    <CyberpunkButton
                        buttonStyles={{
                            backgroundColor: '#000000',
                            color: '#FCEE09',
                            padding: '0.75rem',
                            textAlign: 'center',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '4rem',
                            height: '4rem',
                            marginBottom: '1.5rem',
                            boxShadow:
                                '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        }}
                    >
                        <FaUserFriends className="text-3xl"/>
                    </CyberpunkButton>
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className="text-5xl text-black font-semibold">
                            Testimonials
                        </h2>
                        <p className="text-lg leading-relaxed m-4 text-black">
                            Voices of 1000+ Satisfied Partners! At ByteJutsu, we’ve not only built products but also robust relationships with our clientele.
                        </p>
                    </div>
                    <div className="w-[4rem] h-[4rem]"></div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col justify-center items-center">
                        <Testimonials/>
                        <div className="mb-16">
                            <DonutChart />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom SVG */}
            <div className="absolute bottom-0 w-full pointer-events-none">
                <svg
                    className="overflow-hidden"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 33600 640"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon
                        className="text-black fill-current"
                        points="15200,640 16000,0 17600,0 18400,640"
                    ></polygon>
                </svg>
            </div>
        </section>
    );
};

export default TestimonialsSection;
