import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";
import LottieAnimation from "@/components/LottieAnimation";
import getAssetPath from "@/utils/getAssetPath";
import styles from "@/app/Globals.module.css";
import {FaHandshake, FaTrophy} from "react-icons/fa";
import PartnersRow from "@/components/Partners/PartnersRow";

const PartnersSection = () => {

    return (
        <section id="partners" className="bg-black pt-20 pb-48">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
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
                            boxShadow:
                                '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // shadow-lg
                        }}
                    >
                        <FaHandshake className="text-4xl"/>
                    </CyberpunkButton>
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className={`text-5xl text-[#00F0FF] font-semibold ${styles.neonText}`}>
                            Partners
                        </h2>
                        <p className="text-lg leading-relaxed m-4 text-gray-200">
                            Collaborating with the Best to Deliver Excellence! At ByteJutsu, we forge alliances with the crème de la crème in the field.
                        </p>
                    </div>
                    <div className="w-[4rem] h-[4rem]"></div>
                </div>

                {/* Uncomment if Globe component is implemented */}
                {/* <div className="w-full h-[500px]">
            <Globe />
        </div> */}

                <div className="container mx-auto px-4">
                    <div className="mb-20">
                        <PartnersRow />
                    </div>

                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
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
                                    boxShadow:
                                        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // shadow-lg
                                }}
                            >
                                <FaTrophy className="text-2xl" />
                            </CyberpunkButton>
                            <h3 className="text-3xl text-white mb-2 font-semibold leading-normal">
                                Dedicated Team
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-200">
                                Our team is dedicated to ensuring a positive and productive partnership.
                            </p>
                        </div>
                        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                <div className="w-96 h-96">
                                    <LottieAnimation src={getAssetPath('/lotties/quadcopter.json')}/>
                                </div>
                                <blockquote className="relative p-8 mb-4 bg-primary">
                                    <h4 className="text-xl font-bold text-black">
                                        Top Notch Services
                                    </h4>
                                    <p className="text-md font-light mt-2 text-black">
                                        Experience Unparalleled, Flexible, and Innovative Solutions with ByteJutsu! Our
                                        services are meticulously crafted to be nothing but top-notch.
                                    </p>
                                </blockquote>
                                <CyberpunkButton
                                    buttonStyles={{
                                        color: '#000000', // text-black
                                        padding: '0.75rem', // p-3
                                        textAlign: 'center', // text-center
                                        display: 'block', // block
                                        alignItems: 'center', // items-center
                                        justifyContent: 'center', // justify-center
                                        width: '100%', //
                                        height: '2rem', // h-16
                                        marginBottom: '0rem', // mb-6
                                        boxShadow:
                                            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // shadow-lg
                                    }}
                                    cutoutCorners={['bottom-right', 'bottom-left']}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
