import { motion } from "motion/react"

export const Hero = () => {

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
        <div className="mt-20 text-white max-w-7xl mx-auto ">
            <motion.div 
            className="flex justify-center items-center gap-2 border border-gray-600 w-1/3 p-2 rounded-full mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5 * 0.1, duration: 0.7, ease: "easeOut" }}
            >
                {
                    pictures.map((item, idx) => (
                        <img src={item.images} key={idx} alt={item.alt} width={27} height={27} className="rounded-full -ml-3.5" />
                    ))
                }
                <p className="font-semibold text-base text-neutral-400 leading-tight">Join 3 million other users on waitlist</p>
            </motion.div>
        </div>
    )
}

//className="rounded-full -ml-3.5"