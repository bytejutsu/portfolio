import React from 'react';
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";
import EmblaCarousel from "@/components/Projects/EmblaCarousel/EmblaCarousel";
import styles from "@/app/Globals.module.css";
import { FaDraftingCompass } from "react-icons/fa";

const ProjectSection = () => {

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <section id="projects" className="bg-gray-900 relative py-20">
            <div className="flex flex-wrap justify-center text-center mb-6">
                <CyberpunkButton
                    buttonStyles={{
                        color: '#000000', // text-black
                        padding: '0.75rem', // p-3
                        textAlign: 'center', // text-center
                        display: 'inline-flex', // inline-flex
                        alignItems: 'center', // items-center
                        justifyContent: 'center', // justify-center
                        width: '4rem', // w-16
                        height: '4rem', // h-16
                        marginBottom: '1.5rem', // mb-6
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // shadow-lg
                    }}
                >
                    <FaDraftingCompass className="text-3xl"/>
                </CyberpunkButton>
                <div className="w-full lg:w-6/12 px-4">
                    <h2 className={`text-7xl text-[#00F0FF] font-semibold ${styles.neonText} font-sans`}>
                        Projects
                    </h2>
                </div>
                <div className="w-[4rem] h-[4rem]"></div>
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
        </section>
    );
};

export default ProjectSection;
