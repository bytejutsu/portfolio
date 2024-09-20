import CyberpunkButton from "@/components/cyberpunk/CyberpunkButton/CyberpunkButton";

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
    return (
        <nav className="fixed top-0 w-full bg-primary bg-opacity-50 shadow-xl z-50">
            <div className="p-2 flex justify-end">
                {navItems.map((item, index) => (
                    <CyberpunkButton
                        key={index}
                        buttonStyles={{
                            width: '12rem',
                            height: '3rem',
                            margin: '0.25rem',
                            backgroundColor: '#000000',
                        }}
                        cutoutCorners={item.cutoutCorners}
                        className="transition duration-300 ease-in-out font-sans2 font-semibold text-white hover:text-[#00f0ff] hover:shadow-neon"
                        onClick={() => handleScroll(item.id)}
                    >
                        {item.label}
                    </CyberpunkButton>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
