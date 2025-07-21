import { motion } from "motion/react"
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoLogoAppleAppstore } from "react-icons/io5";

export const Content = () => {
    return (
        <div className="mt-2 mx-auto px-4">
            <div className="flex flex-col justify-center items-center text-center max-w-6xl mx-auto p-4 relative">
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 7 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                >
                    Connect, Share, and Grow
                    <span className="block">with Appit Social</span>
                </motion.h1>

                <motion.p
                    className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg lg:text-base xl:text-sm font-semibold leading-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 9 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                >
                    Join Appit to build authentic connections and share your passions effortlessly
                </motion.p>

                <motion.img
                    src="./left_image.png"
                    alt="Left"
                    className="absolute left-0 w-24 sm:w-32 md:w-40 lg:w-64 opacity-80 pointer-events-none z-0"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 9 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                />

                <motion.button
                    className="mt-6 py-3 px-5 rounded-xl bg-white text-neutral-600 font-bold hover:bg-gray-200 cursor-pointer text-sm sm:text-base"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 10 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                >
                    Download App
                </motion.button>

                <motion.p
                    className="text-gray-600 mt-5 flex flex-wrap justify-center items-center gap-2 font-semibold text-sm sm:text-base"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 11 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                >
                    <IoMdInformationCircleOutline className="w-5 h-5" />
                    App Available For
                    <span className="flex justify-center items-center gap-1 border border-gray-800 px-2.5 py-0.5 rounded-full">
                        <BiLogoPlayStore className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-700" />
                        <IoLogoAppleAppstore className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                    </span>
                </motion.p>

                <motion.img
                    src="./right_image.png"
                    alt="Right"
                    className="absolute right-0 w-24 sm:w-32 md:w-40 lg:w-64 opacity-80 pointer-events-none z-0"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 9 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                />

                <motion.img
                    className="mt-12 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 10 * 0.1, duration: 0.7, ease: "easeOut"
                    }}
                    src="./image1.png"
                    alt="Mobile image"
                />

                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-neutral-100 to-transparent h-px w-full mx-auto" />
            </div>
        </div>
    )
}
