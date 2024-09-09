import styles from './TechnologiesBanner.module.css';

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaDigitalOcean } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { SiPhpstorm } from "react-icons/si";
import { FaLinux } from "react-icons/fa";

const technologies = [
    <FaReact key={0} />,
    <RiNextjsFill key={1} />,
    <SiNestjs key={2} />,
    <RiVuejsFill key={3} />,
    <SiMongodb key={4} />,
    <FaDigitalOcean key={5} />,
    <FaGitAlt key={6} />,
    <FaGithub key={7} />,
    <TbBrandReactNative key={8} />,
    <FaWordpress key={9} />,
    <FaLaravel key={10} />,
    <DiNodejs key={11} />,
    <SiPhp key={12} />,
    <SiPhpstorm key={13} />,
    <FaLinux key={14} />,
];

const TechnologiesBanner = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.banner}>
                {technologies.map((tech, index) => (
                    <div key={index} className={styles.bannerItem}>
                        {tech}
                    </div>
                ))}
                {technologies.map((tech, index) => (
                    <div key={index} className={styles.bannerItem}>
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologiesBanner;
