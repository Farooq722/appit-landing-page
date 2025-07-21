export const Content = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col justify-center items-center mt-20 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">Flexible Pricing Plans</h1>
                <p className="text-sm sm:text-md font-medium leading-tight text-neutral-500 max-w-xl py-3">
                    Choose a plan that fits your needs, with flexible options and transparent pricing.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 border border-neutral-800 rounded-xl max-w-xs mx-auto py-2.5 px-2">
                <button className="flex items-center justify-center text-sm sm:text-md font-medium text-neutral-500 border border-neutral-900 px-6 py-2 rounded-2xl hover:bg-neutral-900 hover:text-white cursor-pointer w-full sm:w-auto">
                    Monthly
                </button>
                <button className="flex items-center justify-center text-sm sm:text-md font-medium text-neutral-500 border border-neutral-900 px-6 py-2 rounded-2xl hover:bg-neutral-900 hover:text-white cursor-pointer w-full sm:w-auto">
                    Yearly
                </button>
            </div>
        </div>
    );
};
