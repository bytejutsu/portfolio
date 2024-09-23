import MyTypewriter from "@/components/MyTypewriter";
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";
import getAssetPath from "@/utils/getAssetPath";
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className="">
            <div className="bg-primary w-full h-full">
                <div className="flex flex-col items-center space-y-0 lg:flex-row lg:justify-around">
                    <div className="mt-32 mb-0 w-1/2 lg:w-1/3 lg:mt-0" style={{}}>
                        <Image
                            width={500}
                            height={500}
                            priority
                            style={{
                                width: '100%',
                                height: 'auto', // To maintain aspect ratio
                            }}
                            alt="logo"
                            src={getAssetPath('./hero-image.svg')}
                        />
                    </div>
                    <div className="flex flex-col justify-around items-center pb-12 space-y-8 md:pt-16 md:items-end">
                        <div className="w-full">
                            <div className={`${styles.introSeparatorTop}`}></div>
                        </div>
                        <h1 className="text-6xl sm:text-8xl md:text-9xl text-black font-black">
                            ByteJutsu
                        </h1>
                        <MyTypewriter/>
                        <div className="flex flex-col">
                            <div className="flex justify-end items-center">
                                <CyberpunkButton buttonStyles={{
                                    backgroundColor: 'black',
                                    fontWeight: 'bold',
                                    padding: '24px 46px',
                                    margin: '0 20px'
                                }}>Contact Us</CyberpunkButton>
                                <CyberpunkButton cutoutCorners={[]} buttonStyles={{
                                    backgroundColor: 'black',
                                    fontWeight: 'bold',
                                    padding: '24px 46px',
                                    margin: '0 20px'
                                }}>Live Demo</CyberpunkButton>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className={`${styles.introSeparatorBottom}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SVG Polygon at the bottom */}
            <svg className="bg-tertiary" height="" width="100%" xmlns="http://www.w3.org/2000/svg">
                <polygon
                    className="text-primary bg-primary fill-current"
                    points="2800 200 2800 0 0 0"
                ></polygon>
            </svg>
        </section>
    );
}
