import { MdOutlineMarkEmailRead } from "react-icons/md";



export const Footer1 = () => {

    const footer = [
        {
            title: "Benefits",
        },
        {
            title: "Features",
        },
        {
            title: "Pricing",
        },
        {
            title: "FAQ's",
        },
        {
            title: "Testimonials",
        },
        {
            title: "Waitlist",
        },
    ]

    return (
        <div className="text-white max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center max-w-5xl mx-auto ">
                <div className="flex -space-x-2 space-y-6">
                    <img src="./logo.svg" alt="Logo" width={46} height={46} />
                    <h1 className="text-4xl font-serif italic text-white font-bold">ppit</h1>
                </div>
                <p className="text-lg font-medium text-neutral-400 w-[300px] text-center leading-tight">Empower Your Social Connections with Appit Socail</p>

                <div className="flex justify-center items-center gap-1.5 mt-10 px-6 py-3 border border-neutral-700 bg-neutral-900 rounded-2xl ">
                    <MdOutlineMarkEmailRead size={22} color="green" />
                    <p className="text-md font-medium"> hello@appit.com</p>
                </div>

            </div>
            <div className="flex justify-evenly items-center mt-16 max-w-4xl mx-auto">
                {
                    footer.map((item, idx) => (
                        <p key={idx} className="text-lg font-medium text-neutral-500 hover:text-neutral-400 cursor-pointer">{item.title}</p>
                    ))
                }
            </div>
        </div>
    )
}


