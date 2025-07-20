import { motion } from "motion/react"

export const Badge = () => {

    const pictures = [
        {
            images: "https://github.com/shadcn.png",
            alt: "img",
        },
        {
            images: "https://github.com/leerob.png",
            alt: "img",
        },
        {
            images: "https://github.com/evilrabbit.png",
            alt: "img",
        },
    ]

    return (
        <div className="mt-12 max-w-7xl mx-auto ">
            <motion.div
                className="flex justify-center items-center gap-2 border border-gray-700 bg-neutral-900 w-1/3 py-1.5 px-2 rounded-full mx-auto cursor-pointer relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 5 * 0.1, duration: 0.7, ease: "easeOut"
                }}
            >
                {
                    pictures.map((item, idx) => (
                        <img src={item.images} key={idx} alt={item.alt} width={27} height={27} className="rounded-full -ml-3.5" />
                    ))
                }
                <p className="font-semibold text-base text-neutral-400 leading-tight">Join 3 million other users on waitlist</p>
                <span className="absolute group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-cyan-500 group-hover:to-transparent group-hover:w-full group-hover:transition-opacity group-hover:duration-400 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-neutral-100 to-transparent h-px w-3/4 mx-auto" />
            </motion.div>
        </div>
    )
}

