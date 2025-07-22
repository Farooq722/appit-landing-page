import { TiStarOutline } from "react-icons/ti";
import { motion } from "motion/react";
import { Cards } from "./Cards";

import { IoPeopleOutline } from "react-icons/io5";
import { RiEmojiStickerLine, RiGlobalFill } from "react-icons/ri";
import { WiStars } from "react-icons/wi";

export const Benifits = () => {

    const leftCard = [
        {
            icons: <IoPeopleOutline size={50} color="white" />,
            title: "Authentic Connections",
            content: "Build genuine relationships with like-minded individuals."
        },
        {
            icons: <RiGlobalFill size={50} color="#86efac" />,
            title: "Global Community",
            content: "Connect beyond borders with people around the world."
        }
    ];

    const rightCard = [
        {
            icons: <WiStars size={50} color="yellow" />,
            title: "Inspiring Experiences",
            content: "Discover unique moments that elevate your journey."
        },
        {
            icons: <RiEmojiStickerLine size={50} color="#fda4af" />,
            title: "Express Freely",
            content: "Share your vibe with vibrant stickers and reactions."
        }
    ];

    return (
        <div className="mx-auto max-w-7xl mt-20 px-4 text-white">
            <div
                className="flex justify-center items-center gap-2 border border-gray-700 max-w-fit mx-auto py-2 px-4 rounded-full"
            >
                <TiStarOutline size={27} />
                <p className="text-lg font-semibold">Our Benefits</p>
            </div>

            <div className="flex flex-col justify-center items-center mt-10 space-y-3 mb-20 text-center"

            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-neutral-100"
                >
                    Discover Appit's Benefits
                </h1>
                <p className="max-w-md text-sm font-medium text-gray-500"
                >
                    Unlock a world of meaningful connections, tailored experiences, and seamless social interaction.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-x-7"
            >
                <div className="flex flex-col w-full sm:w-3/4 lg:w-1/3 gap-6">
                    {leftCard.map((item, index) => (
                        <Cards
                            icon={item.icons}
                            title={item.title}
                            content={item.content}
                            key={index}
                        />
                    ))}
                </div>

                <motion.img
                    src="./image2.png"
                    alt="mobile image"
                    className="w-2/3 sm:w-1/2 lg:w-1/3 max-w-sm object-contain"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.7,
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                />

                <div className="flex flex-col w-full sm:w-3/4 lg:w-1/3 gap-6 "

                >
                    {rightCard.map((item, index) => (
                        <Cards
                            icon={item.icons}
                            title={item.title}
                            content={item.content}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
