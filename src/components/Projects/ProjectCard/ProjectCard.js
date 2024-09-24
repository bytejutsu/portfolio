import React from 'react';
//import styles from './ProjectCard.module.css';
import styles from '@/app/Globals.module.css';
import getAssetPath from "@/utils/getAssetPath"; // Scoped styles
import Image from 'next/image';
import ImageWithModal from "@/components/Projects/ProjectCard/ImageWithModal";

const ProjectCard = ({ index, name, description, imageUrl, demoAvailable, demoUrl }) => {
    return (
        <div className="p-10 text-center flex flex-row justify-center">
            <div className="relative flex w-full flex-col rounded-sm bg-[#FCEE09] text-gray-700 shadow-md">
                {/*
                    <div
                        className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 -mt-6 h-64 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-border text-white shadow-lg">
                        <div className="relative w-full h-full">
                            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"></div>
                            <Image
                                className="rounded-xl p-2"
                                src={imageUrl}
                                alt={name}
                                fill
                                style={{objectFit: 'cover'}} // Ensures the image covers the entire container
                            />
                        </div>
                    </div>
                */}
                <ImageWithModal name={name} imageUrl={imageUrl} />
                <div className="p-6">
                    <h5 className="text-blue-gray-900 font-sans2 mb-2 block text-xl font-semibold leading-snug tracking-normal antialiased">
                        {name}
                    </h5>
                    <p className="block font-sans2 text-base font-light leading-relaxed text-inherit antialiased">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className="flex justify-center">
                        <div className="w-full lg:w-3/4">
                            <a
                                className={`${styles.cpBtn} font-sans2`}
                                href={demoAvailable ? demoUrl : '#'}
                                onClick={(e) => {
                                    if (!demoAvailable) {
                                        e.preventDefault(); // Prevent default behavior since we are scrolling instead of navigating
                                        document.getElementById('contact').scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        });
                                    } else {
                                        e.preventDefault(); // Prevent navigation with href attribute
                                        window.open(demoUrl, '_blank'); // Open demo URL in a new tab
                                    }
                                }}
                                style={{ borderImage: `url(${getAssetPath('./cp-btn-yellow.svg')}) 0 20 fill`, color: '#fcee0a' }}
                            >
                                { demoAvailable ? 'Demo Link_' : 'Contact For Demo_' }
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
