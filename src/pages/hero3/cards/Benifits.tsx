import { TiStarOutline } from "react-icons/ti";
import { motion } from "motion/react";
import { Cards } from "./Cards";

import { IoPeopleOutline } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";
import { RiGlobalFill } from "react-icons/ri";
import { WiStars } from "react-icons/wi";


export const Benifits = () => {

    const leftCard = [
        {
            icons: <IoPeopleOutline size={50} color="white" />,
            title: "Authentic Connections",
            content: "Build genuine relationship with like-minded individuals."
        },
        {
            icons: <RiGlobalFill size={50} color="#86efac" />,
            title: "Authentic Connections",
            content: "Build genuine relationship with like-minded individuals."
        }
    ]

    const rightCard = [
        {
            icons: <WiStars size={50} color="yellow" />,
            title: "Authentic Connections",
            content: "Build genuine relationship with like-minded individuals."
        },
        {
            icons: <RiEmojiStickerLine size={50} color="#fda4af" />,
            title: "Authentic Connections",
            content: "Build genuine relationship with like-minded individuals."
        }
    ]

    return (
        <div className="mx-auto max-w-7xl mt-26 text-white">
            <motion.div className="flex justify-center items-center gap-2 border border-gray-700  max-w-3xs mx-auto py-2 rounded-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.7,
                    duration: 0.7,
                    ease: "easeOut",
                }}
            >
                <TiStarOutline size={27} />
                <p className="text-lg font-semibold">Our Benefits</p>
            </motion.div>
            <div className="flex flex-col justify-center items-center mt-10 space-y-3 mb-20">
                <h1 className="text-5xl font-medium leading-tight text-neutral-100">Discover Appit's Benefits</h1>
                <p className="max-w-md text-center text-sm font-medium text-gray-500">Unlock a world of  meaningfull connections, tailored experiences, and seamless social interaction.</p>
            </div>

            <div className="flex justify-center items-center gap-x-8">
                <div className="flex flex-col w-1/3 justify-around">
                    {leftCard.map((item, index) => (
                        <Cards
                            icon={item.icons}
                            title={item.title}
                            content={item.content}
                            key={index}
                        />
                    ))}
                </div>

                <img src="./image2.png" alt="mobile image" className="w-1/3 " />

                <div className="flex flex-col w-1/3 justify-around">
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

        </div >
    )
}

