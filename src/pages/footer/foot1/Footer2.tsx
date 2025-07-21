import { TbBrandLinkedin } from "react-icons/tb";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

export const Footer2 = () => {
    const links = [
        { icon: <TbBrandLinkedin size={27} /> },
        { icon: <RiTwitterXFill size={23} /> },
        { icon: <BsInstagram size={23} /> },
    ];

    return (
        <div
            className="mt-20 max-w-7xl mx-auto relative bottom-4 px-4 sm:px-8"
            style={{
                backgroundImage: `radial-gradient(indigo 0.7px, transparent 0)`,
                padding: 4,
                backgroundSize: `5px 5px`,
                backgroundPosition: `0 0, 20px 20px`,
                borderRadius: `0.5rem`,
            }}
        >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                <p className="text-sm font-medium leading-tight text-neutral-600 text-center sm:text-left w-full sm:w-auto">
                    Design by Phara, Made by Farooq 💫
                </p>

                <div className="flex items-center gap-4 max-w-4xl mx-auto">
                    {links.map((item, idx) => (
                        <a
                            href="#"
                            key={idx}
                            className="bg-neutral-800 rounded-xl p-2 text-neutral-400"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                <p className="text-sm font-medium leading-tight text-neutral-600 text-center sm:text-right w-full sm:w-auto">
                    Privacy Policy
                </p>
            </div>

            <span className="absolute group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-cyan-500 group-hover:to-transparent group-hover:w-full group-hover:transition-opacity group-hover:duration-400 inset-x-0 -bottom-2 bg-gradient-to-r from-transparent via-neutral-100 to-transparent h-px w-3/4 mx-auto" />
        </div>
    );
};
