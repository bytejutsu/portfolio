import React from 'react';
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";
import EmblaCarousel from "@/components/Projects/EmblaCarousel/EmblaCarousel";
import styles from "@/app/Globals.module.css";
import { FaDraftingCompass } from "react-icons/fa";
import getAssetPath from "@/utils/getAssetPath";

const ProjectSection = () => {

    const OPTIONS = { loop: true }
    const PROJECTS_COUNT = 5
    const PROJECTS = [
        {
            index: 0,
            name: "Arcade Adventures",
            description: "An arcade game made that can be run on the browser",
            imageUrl: getAssetPath('./projects/arcade.png'),
            demoAvailable: true,
            demoUrl: 'https://bytejutsu.github.io/platformer/',
        },
        {
            index: 1,
            name: "Quick POS",
            description: "A POS system for Prestashop. Simple to use and complete in features",
            imageUrl: getAssetPath('./projects/quickpos.png'),
            demoAvailable: false,
            demoUrl: 'https://bytejutsu.com',
        },
        {
            index: 2,
            name: "XBoard",
            description: "A web based app for painting and doodling",
            imageUrl: getAssetPath('./projects/xboard.png'),
            demoAvailable: true,
            demoUrl: 'https://bytejutsu.github.io/xboard/',
        },
        {
            index: 3,
            name: "Arcade Adventures",
            description: "A web based arcade game",
            imageUrl: getAssetPath('./projects/arcade.png'),
            demoAvailable: true,
            demoUrl: 'https://bytejutsu.github.io/platformer/',
        },
        {
            index: 4,
            name: "Tax Stamp",
            description: "A Prestashop module to add a tax stamp in order to comply with tax regulations",
            //description: "A Prestashop module to add a tax stamp in order to comply with tax regulation of certain countries",
            imageUrl: getAssetPath('./projects/taxstamp.png'),
            demoAvailable: false,
            demoUrl: 'https://bytejutsu.com',
        },
    ]

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
            <EmblaCarousel slides={PROJECTS} options={OPTIONS}/>
        </section>
    );
};

export default ProjectSection;
