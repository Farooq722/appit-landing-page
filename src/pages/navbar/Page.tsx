import { motion } from "motion/react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {

    const navitems = [
        { title: "Benefits", href: "/" },
        { title: "Features", href: "/" },
        { title: "Pricing", href: "/" },
        { title: "Testimonials", href: "/" },
        { title: "FAQ's", href: "/" }
    ];

    const [menu, setMenu] = useState(false);
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div
            className="p-6 max-w-7xl mx-auto bg-gradient-to-t from-white via-black to-white rounded-[0.9rem]"
            style={{
                backgroundImage: `radial-gradient(indigo 0.7px, transparent 0)`,
                backgroundSize: `5px 5px`,
                backgroundPosition: `0 0, 20px 20px`
            }}
        >
            <div className="flex justify-between items-center">
                <motion.div
                    className="flex justify-center items-center font-extrabold cursor-pointer"
                    initial={{ opacity: 1, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                >
                    <img src="/img.svg" alt="appit's logo" width={28} height={28} />
                    <h1 className="text-xl font-serif italic text-white">ppit</h1>
                </motion.div>

                {/* Desktop Navbar */}
                <motion.div className="hidden md:flex justify-center items-center gap-3 ml-40">
                    {navitems.map((item, idx) => (
                        <motion.a
                            href={item.href}
                            key={idx}
                            className="text-lg text-neutral-500 relative px-2 py-1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {hovered === idx && (
                                <motion.span
                                    layoutId="hovered-span"
                                    className="absolute inset-0 bg-neutral-800 text-neutral-100 rounded-md z-0"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span
                                className={`relative z-10 transition-colors duration-300 ${hovered === idx
                                    ? "text-neutral-300 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.9)]"
                                    : "text-neutral-500"
                                    }`}
                            >
                                {item.title}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.button
                    className="hidden md:block bg-white text-black font-bold p-3 rounded-xl cursor-pointer hover:bg-neutral-200 transition ease-in-out"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                >
                    Get Template
                </motion.button>

                {/* Hamburger Button (Mobile only) */}
                <button
                    className="md:hidden text-white text-2xl ml-4"
                    onClick={() => setMenu(!menu)}
                    aria-label="Toggle menu"
                >
                    {menu ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* For Mobile  */}
            {menu && (
                <motion.div
                    className="flex flex-col mt-4 space-y-4 md:hidden bg-neutral-900 rounded-lg p-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                >
                    {navitems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-white hover:bg-neutral-800"
                            onClick={() => setMenu(false)}
                        >
                            {item.title}
                        </a>
                    ))}
                    <button
                        className="bg-white text-black font-bold p-3 rounded-xl w-full hover:bg-neutral-200 transition ease-in-out"
                        onClick={() => setMenu(false)}
                    >
                        Get Template
                    </button>
                </motion.div>
            )}
        </div>
    );
};
