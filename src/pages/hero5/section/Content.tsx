

export const Content = () => {

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center mt-15">
                <h1 className="text-5xl font-bold leading-tight text-white">Flexible Pricing Plans</h1>
                <p className="text-md font-medium leading-tight text-neutral-500 w-md text-center py-3">Choose a plan that fits your needs, with flexible options and transparent pricing.</p>
            </div>
            <div className="flex justify-center items-center gap-4 mt-15 border border-neutral-800 rounded-full max-w-xs mx-auto text-black py-2.5">
                <button className="flex items-center justify-center text-md font-medium text-neutral-500 border border-neutral-900 px-6 py-2 rounded-full hover:bg-neutral-900 hover:text-white cursor-pointer">Monthly</button>
                <button className="flex items-center justify-center text-md font-medium text-neutral-500 border border-neutral-900 px-6 py-2 rounded-full hover:bg-neutral-900 hover:text-white cursor-pointer">Yearly</button>
            </div>
        </div>
    )
}