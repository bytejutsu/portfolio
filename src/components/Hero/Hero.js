import MyTypewriter from "@/components/MyTypewriter";
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";
import getAssetPath from "@/utils/getAssetPath";

export default function Hero() {
    return (
            <section className="">
                <div className="bg-primary w-full h-full">
                    <div className="flex flex-col items-center md:flex-row justify-around">
                        <div className="flex">

                        </div>
                        <div className="flex flex-col justify-around items-center pt-20 pb-12 space-y-8 md:pt-16 md:items-end">
                            <h1 className="text-6xl sm:text-8xl md:text-9xl text-black font-black">
                                ByteJutsu
                            </h1>
                            <MyTypewriter />
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
                        </div>
                    </div>
                </div>
            </section>
    );
    {/*
            <div className="bg-primary">
            <div className="relative bg-contain bg-no-repeat bg-left"
                 style={{backgroundImage: `url('${getAssetPath('./hero-image.svg')}')`}}>
                <div className="bg-opacity-50">
                    <div className="container flex flex-col py-32">
                        <div className="flex flex-col justify-end items-end mx-12 mb-10">
                            <h1 className="text-9xl text-gray-800 font-black leading-8">
                                ByteJutsu
                            </h1>
                            <MyTypewriter/>
                        </div>
                        <div className="flex justify-end items-center">
                            <CyberpunkButton buttonStyles={{
                                backgroundColor: 'black',
                                fontWeight: 'bold',
                                padding: '20px 40px',
                                margin: '0 20px'
                            }}>Contact Us</CyberpunkButton>
                            <CyberpunkButton cutoutCorners={[]} buttonStyles={{
                                backgroundColor: 'black',
                                fontWeight: 'bold',
                                padding: '20px 40px',
                                margin: '0 20px'
                            }}>Live Demo</CyberpunkButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        */}

}
