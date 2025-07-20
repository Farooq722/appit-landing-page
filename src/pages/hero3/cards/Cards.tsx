import type { ReactElement } from "react";

interface CardDetails {
    icon: ReactElement;
    title: string;
    content: string;
    className?: string;
}

export const Cards = ({ icon, title, content, className }: CardDetails) => {

    return (
        <div className={`bg-neutral-950 border border-gray-900 px-4 py-10 rounded-2xl mt-5 mb-8 ${className}`}>
            <div className="bg-neutral-900 rounded-2xl py-2 px-3 inline-flex border border-gray-800">
                {icon}
            </div>
            <h2 className="text-xl font-medium text-white mt-4 leading-tight">{title}</h2>
            <p className="text-md font-medium text-gray-400 mt-4 leading-tight">{content}</p>
        </div>
    );
};