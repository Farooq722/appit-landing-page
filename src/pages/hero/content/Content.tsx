import { motion } from "motion/react"
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoLogoAppleAppstore } from "react-icons/io5";

export const Content = () => {
    return (
        <div className="mt-2 mx-auto ">
            <div className="flex flex-col justify-center items-center text-center max-w-6xl mx-auto p-4 relative">
                <motion.h1 className="text-7xl font-bold leading-tight text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 7 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                >Connect, Share, and Grow  <span className="text-center">with Appit Social</span></motion.h1>
                <motion.p className="mt-4 text-gray-500 text-sm w-1/3 font-semibold leading-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 9 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                >Join Appit to build authentic connections and share your passions effortlessy</motion.p>

                <motion.img
                    src="./left_image.png"
                    alt="Left"
                    className="absolute  left-0 w-40 md:w-80 opacity-80 pointer-events-none z-0"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 9 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                />

                <motion.button className="mt-6 py-3 px-5 rounded-xl bg-white text-neutral-600 font-bold hover:bg-gray-200 cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 10 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                >Download App</motion.button>
                <motion.p className="text-gray-600 mt-5 flex justify-center items-center gap-2 font-semibold"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 11 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                >
                    <IoMdInformationCircleOutline className="w-5 h-5" />
                    App Available For
                    <span className="flex justify-center items-center gap-1 border border-gray-800 px-2.5 py-.5 rounded-full">
                        <BiLogoPlayStore className="w-7 h-7 text-cyan-700" />
                        <IoLogoAppleAppstore className="w-6 h-6 text-blue-700" />
                    </span>
                </motion.p>

                <motion.img
                    src="./right_image.png"
                    alt="Right"
                    className="absolute right-0 w-40 md:w-80 opacity-80 pointer-events-none z-0"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 9 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                />

                <motion.img className="bg-red-600 mt-15"

                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 10 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                    src="./image1.png" alt="Mobli image"
                />

                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-neutral-100 to-transparent h-px w-full mx-auto" />
            </div>
        </div>
    )
}

