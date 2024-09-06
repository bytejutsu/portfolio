import React from "react";

import Image from 'next/image'

import getAssetPath from "@/utils/getAssetPath";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaFacebookMessenger } from "react-icons/fa";


const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer className="relative bg-primary pt-8 pb-6">
            <div
                className="bottom-auto top-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "5rem" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon
                        className="text-primary bg-primary fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
            <div className="mx-auto px-4">
                <div className="flex flex-col">
                    <div className="flex flex-col justify-around items-center lg:flex-row">
                        <div className="lg:w-1/3"></div>
                        <div className="flex flex-col justify-between h-full lg:w-1/3">
                            <div className="w-full px-4">
                                <h4 className="text-5xl text-center font-semibold text-black">
                                    Keep in Touch
                                </h4>
                                <h5 className="text-lg text-center mt-4 mb-2 text-black">
                                    Stay updated with our latest news
                                </h5>
                                <div className="flex flex-row justify-center space-x-16 my-12">
                                    <button
                                        className="text-black text-3xl font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2 p-3 hover:text-white"
                                        type="button"
                                    >
                                        <FaFacebookSquare/>
                                    </button>
                                    <button
                                        className="text-black text-3xl font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2 p-3 hover:text-white"
                                        type="button"
                                    >
                                        <ImLinkedin/>
                                    </button>
                                    <button
                                        className="text-black text-3xl font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2 p-3 hover:text-white"
                                        type="button"
                                    >
                                        <FaFacebookMessenger/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-1/2 lg:w-1/3 justify-center">
                            <div className="w-1/2 lg:w-1/2">
                                <Image
                                    width={250}
                                    height={250}
                                    layout="responsive"
                                    src={getAssetPath('./logo.svg')}
                                    alt="Logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-black"/>
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-black font-semibold py-1">
                            Copyright © {date} by ByteJutsu
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
