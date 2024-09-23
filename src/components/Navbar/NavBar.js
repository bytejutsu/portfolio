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

    // Check if the screen size is larger than md on initial render and on resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsScreenMdOrLarger(window.innerWidth >= 768); // 'md' breakpoint is 768px in Tailwind
        };
        checkScreenSize(); // Check on initial render
        window.addEventListener('resize', checkScreenSize); // Check on resize

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <nav className="fixed top-0 w-full bg-primary bg-opacity-50 shadow-xl z-50">
            <div className="p-2">
                {/* Hamburger icon - visible only on small screens (md and below) */}
                <div className="flex justify-start items-center md:hidden mb-2">
                    <FaBars
                        className="text-black text-2xl cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu
                    />
                </div>

                {/* Render flex-col if menu is open and screen size is less than md */}
                {/* Render flex-row if screen size is md or larger */}
                <div
                    className={`${
                        isScreenMdOrLarger
                            ? 'flex-row flex' // Always show flex-row on md+ screens
                            : isMenuOpen
                                ? 'flex-col flex' // Show flex-col when menu is open and screen is less than md
                                : 'hidden' // Hide the stack when menu is closed and screen size is less than md
                    } md:flex-row md:flex`}
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
                            onClick={() => handleScroll(item.id)}
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
