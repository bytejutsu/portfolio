import React from 'react';
//import styles from './ProjectCard.module.css';
import styles from '@/app/Globals.module.css';
import getAssetPath from "@/utils/getAssetPath"; // Scoped styles

const ProjectCard = ({ index }) => {
    return (
        <div className="p-10 text-center flex flex-row justify-center">
            <div className="relative flex w-full flex-col rounded-sm bg-[#FCEE09] text-gray-700 shadow-md">
                <div className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 -mt-6 h-64 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-border text-white shadow-lg"></div>
                <div className="p-6">
                    <h5 className="text-blue-gray-900 font-sans2 mb-2 block text-xl font-semibold leading-snug tracking-normal antialiased">
                        Project {index}
                    </h5>
                    <p className="block font-sans2 text-base font-light leading-relaxed text-inherit antialiased">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className="flex justify-center">
                        <div className="w-3/4">
                            <a
                                className={`${styles.cpBtn}`}
                                href=""
                                style={{ borderImage: `url(${getAssetPath('./cp-btn-yellow.svg')}) 0 20 fill`, color: '#fcee0a' }}
                            >
                                <span className='font-sans2'>Project_</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
