import { motion } from "framer-motion"; // use "framer-motion" not "motion/react"

export const MovingCard = () => {

    const images = [
        {
            title: "Google image",
            href: "./google.png"
        },
        {
            title: "Google image",
            href: "./Amazon.png"
        },
        {
            title: "Google image",
            href: "./apple.png"
        },
        {
            title: "Google image",
            href: "./facebook.png"
        },
        {
            title: "Google image",
            href: "./microsoft.png"
        },
        {
            title: "Google image",
            href: "./netflix.jpeg"
        },
        {
            title: "Google image",
            href: "./google.png"
        },
        {
            title: "Google image",
            href: "./Amazon.png"
        },
        {
            title: "Google image",
            href: "./apple.png"
        },
        {
            title: "Google image",
            href: "./facebook.png"
        },
        {
            title: "Google image",
            href: "./microsoft.png"
        },
        {
            title: "Google image",
            href: "./netflix.jpeg"
        },
    ]

    return (
        <div className="mx-auto max-w-7xl mt-20">
            <div className="flex flex-col justify-center items-center relative overflow-hidden space-y-10">
                <motion.h3
                    className="text-xl font-medium leading-tight text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >
                    Trusted by 1000+ businesses across the world
                </motion.h3>

                <div className="relative flex mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
                >
                    <motion.div
                        className="flex gap-14 flex-none pr-14"
                        animate={{ translateX: "-50%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}

                    >
                        {
                            (images).map((item, idx) => (
                                <img key={idx} src={item.href} alt={item.title} className="w-[200px] h-1/3" />
                            ))
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
