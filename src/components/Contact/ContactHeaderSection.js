import React from 'react';
import styles from '@/app/Globals.module.css';
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";
import { FaMicrochip } from "react-icons/fa6";
import {FaMedal, FaRocket} from "react-icons/fa";
import {BsGraphUpArrow} from "react-icons/bs";

const ContactHeaderSection = () => {
    return (
        <section id="build" className="pb-20 relative block bg-gray-900">
            <div
                className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: '5rem' }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 33600 640"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon
                        className="text-gray-900 fill-current"
                        points="8000,640 8800,0 10400,0 11200,640"
                    ></polygon>
                    <polygon
                        className="text-gray-900 fill-current"
                        points="25600,640 24800,0 23200,0 22400,640"
                    ></polygon>
                </svg>
            </div>
            <div className="container mx-auto px-4 pt-16 lg:pb-52">
                <div className="flex flex-wrap text-center justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
                            <div className="md:order-3">
                                <CyberpunkButton
                                    buttonStyles={{
                                        color: '#000000',
                                        padding: '0.75rem',
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '4rem',
                                        height: '4rem',
                                        marginBottom: '0rem',
                                        boxShadow:
                                            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                                    }}
                                >
                                    <FaMicrochip className="text-3xl"/>
                                </CyberpunkButton>
                            </div>
                            <span
                                className={`${styles.neonText} text-5xl font-sans2 font-bold text-[#00F0FF] md:order-2`}
                            >
                Let&apos;s Build Something
              </span>
                            <div className="w-[4rem] h-[2rem] md:order-1"></div>
                        </div>
                        <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-200 font-mono font-bold">
                            Let&apos;s Build Something Together
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap my-16 lg:my-12 justify-center space-y-8 lg:space-y-0">
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <CyberpunkButton
                            buttonStyles={{
                                color: '#000000',
                                padding: '0.75rem',
                                textAlign: 'center',
                                display: 'inline-block',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '3rem',
                                height: '3rem',
                                marginBottom: '0rem',
                                boxShadow:
                                    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                            }}
                            cutoutCorners={['bottom-right']}
                        >
                            <FaMedal className="text-xl"/>
                        </CyberpunkButton>
                        <h6 className="text-xl my-5 font-semibold text-white font-sans2">
                            1. Excellent Services
                        </h6>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <CyberpunkButton
                            buttonStyles={{
                                color: '#000000',
                                padding: '0.75rem',
                                textAlign: 'center',
                                display: 'inline-block',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '3rem',
                                height: '3rem',
                                marginBottom: '0rem',
                                boxShadow:
                                    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                            }}
                            cutoutCorners={['bottom-right']}
                        >
                            <FaRocket className="text-xl" />
                        </CyberpunkButton>
                        <h5 className="text-xl my-5 font-semibold text-white font-sans2">
                            2. Product Launching
                        </h5>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <CyberpunkButton
                            buttonStyles={{
                                color: '#000000',
                                padding: '0.75rem',
                                textAlign: 'center',
                                display: 'inline-block',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '3rem',
                                height: '3rem',
                                marginBottom: '0rem',
                                boxShadow:
                                    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                            }}
                            cutoutCorners={['bottom-right']}
                        >
                            <BsGraphUpArrow className="text-xl"/>
                        </CyberpunkButton>
                        <h5 className="text-xl my-5 font-semibold text-white font-sans2">
                            3. Market Growth
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHeaderSection;
