import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";

const NavBar = () => {
    return (
        <nav className="fixed top-0 w-full bg-primary bg-opacity-50 shadow-xl z-50">
            <div className="p-2 flex justify-end">
                <CyberpunkButton
                    buttonStyles={{
                        width: '12rem',
                        height: '3rem',
                        margin: '0.25rem',
                        backgroundColor: '#000000',
                    }}
                    cutoutCorners={['bottom-left']}
                    className="transition duration-300 ease-in-out font-sans2 font-semibold text-white hover:text-[#00f0ff] hover:shadow-neon"
                >
                    Contact Us
                </CyberpunkButton>
                <CyberpunkButton
                    buttonStyles={{
                        width: '12rem',
                        height: '3rem',
                        margin: '0.25rem',
                        backgroundColor: '#000000',
                    }}
                    cutoutCorners={[]}
                    className="transition duration-300 ease-in-out font-sans2 font-semibold text-white hover:text-[#00f0ff] hover:shadow-neon"
                >
                    Technologies
                </CyberpunkButton>
                <CyberpunkButton
                    buttonStyles={{
                        width: '12rem',
                        height: '3rem',
                        margin: '0.25rem',
                        backgroundColor: '#000000',
                    }}
                    cutoutCorners={[]}
                    className="transition duration-300 ease-in-out font-sans2 font-semibold text-white hover:text-[#00f0ff] hover:shadow-neon"
                >
                    Testimonials
                </CyberpunkButton>
                <CyberpunkButton
                    buttonStyles={{
                        width: '12rem',
                        height: '3rem',
                        margin: '0.25rem',
                        backgroundColor: '#000000',
                    }}
                    cutoutCorners={[]}
                    className="transition duration-300 ease-in-out font-sans2 font-semibold text-white hover:text-[#00f0ff] hover:shadow-neon"
                >
                    Projects
                </CyberpunkButton>
            </div>
        </nav>
    );
};

export default NavBar;
