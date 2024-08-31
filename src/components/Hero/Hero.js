import MyTypewriter from "@/components/MyTypewriter";
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";

export default function Hero(){
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                    <h1 className="text-5xl sm:text-8xl text-center text-gray-800 font-black leading-7 md:leading-10">
                        ByteJutsu
                    </h1>
                    <MyTypewriter />
                </div>
                <div className="flex justify-center items-center">
                    <CyberpunkButton buttonStyles={{backgroundColor: 'black', fontWeight: 'bold', padding: '20px 40px', margin: '0 20px'}}>Contact Us</CyberpunkButton>
                    <CyberpunkButton cutoutCorners={[]} buttonStyles={{backgroundColor: 'black', fontWeight: 'bold', padding: '20px 40px', margin: '0 20px' }}>Live Demo</CyberpunkButton>
                </div>
            </div>
        </div>
    );
}