import { motion } from "framer-motion";

export const MovingCard = () => {

    const images = [
        { title: "Google image", href: "./google.png" },
        { title: "Amazon image", href: "./Amazon.png" },
        { title: "Apple image", href: "./apple.png" },
        { title: "Facebook image", href: "./facebook.png" },
        { title: "Microsoft image", href: "./microsoft.png" },
        { title: "Netflix image", href: "./netflix.jpeg" },
        { title: "Google image", href: "./google.png" },
        { title: "Amazon image", href: "./Amazon.png" },
        { title: "Apple image", href: "./apple.png" },
        { title: "Facebook image", href: "./facebook.png" },
        { title: "Microsoft image", href: "./microsoft.png" },
        { title: "Netflix image", href: "./netflix.jpeg" },
    ];

    return (
        <div className="mx-auto max-w-7xl mt-20 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center relative overflow-hidden space-y-10">
                <motion.h3
                    className="text-lg sm:text-xl md:text-2xl font-medium leading-tight text-white text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.4,
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >
                    Trusted by 1000+ businesses across the world
                </motion.h3>

                <div className="relative flex mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] w-full">
                    <motion.div
                        className="flex gap-6 sm:gap-10 md:gap-14 flex-none pr-14"
                        animate={{ translateX: "-50%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        {images.map((item, idx) => (
                            <img
                                key={idx}
                                src={item.href}
                                alt={item.title}
                                className="w-24 sm:w-32 md:w-40 h-auto object-contain"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
