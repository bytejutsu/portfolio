import { useState, useEffect } from 'react';
import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";
import { FaBars } from 'react-icons/fa'; // Importing the hamburger icon from react-icons

const navItems = [
    { label: 'Contact Us', id: 'contact', cutoutCorners: ['bottom-left'] },
    { label: 'Technologies', id: 'technologies', cutoutCorners: [] },
    { label: 'Testimonials', id: 'testimonials', cutoutCorners: [] },
    { label: 'Projects', id: 'projects', cutoutCorners: [] },
];

const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScreenMdOrLarger, setIsScreenMdOrLarger] = useState(false);

    const checkScreenSize = () => {
        setIsScreenMdOrLarger(window.innerWidth >= 768);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <nav className="fixed top-0 w-full bg-primary bg-opacity-50 shadow-xl z-50">
            <div className="p-2">
                <div className="flex justify-start items-center md:hidden mb-2">
                    <FaBars
                        className="text-black text-2xl cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                    />
                </div>

                <div
                    className={`${
                        isScreenMdOrLarger
                            ? 'flex-row flex'
                            : isMenuOpen
                                ? 'flex-col-reverse flex'
                                : 'hidden'
                    } md:flex-row md:flex md:justify-end`}
                >
                    {navItems.map((item, index) => (
                        <CyberpunkButton
                            key={index}
                            buttonStyles={{
                                height: '3rem',
                                margin: '0.25rem',
                                backgroundColor: '#000000',
                            }}
                            cutoutCorners={item.cutoutCorners}
                            className="transition duration-300 ease-in-out font-sans2 font-semibold text-white hover:text-[#00f0ff] hover:shadow-neon w-full md:w-48"
                            onClick={() => {
                                handleScroll(item.id);
                                setIsMenuOpen(false); // Close menu after clicking
                            }}
                        >
                            {item.label}
                        </CyberpunkButton>
                    ))}
                </div>
            </div>
        </nav>
    );

};

export default NavBar;
