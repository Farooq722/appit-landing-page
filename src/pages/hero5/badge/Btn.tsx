import { LuCrown } from "react-icons/lu";

export const Btn = () => {
    return (
        <div className="mt-52 max-w-7xl mx-auto px-4">
            <div className="flex justify-center items-center gap-2 border border-gray-700 bg-neutral-950 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 py-2 px-2 rounded-full mx-auto cursor-pointer relative group">
                <LuCrown size={25} color="white" />
                <p className="font-normal text-lg sm:text-xl text-neutral-200 leading-tight">Our Pricing</p>
            </div>
        </div>
    );
};
