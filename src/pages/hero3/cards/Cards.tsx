import type { ReactElement } from "react";
import { motion } from "framer-motion";

interface CardDetails {
    icon: ReactElement;
    title: string;
    content: string;
    className?: string;
}

export const Cards = ({ icon, title, content, className }: CardDetails) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 50,
                duration: 0.7,
            },
        },
    };

    return (
        <motion.div
            className={`bg-neutral-950 border border-gray-800 px-4 py-10 rounded-2xl mt-5 mb-8 ${className}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.p
                className="bg-neutral-900 rounded-2xl py-2 px-3 inline-flex border border-gray-800"
                variants={itemVariants}
            >
                {icon}
            </motion.p>
            <motion.h2
                className="text-xl font-medium text-white mt-4 leading-tight"
                variants={itemVariants}
            >
                {title}
            </motion.h2>
            <motion.p
                className="text-md font-medium text-gray-400 mt-4 leading-tight"
                variants={itemVariants}
            >
                {content}
            </motion.p>
        </motion.div>
    );
};
