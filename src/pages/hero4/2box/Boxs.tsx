import { VscPassFilled } from "react-icons/vsc";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoIosAppstore } from "react-icons/io";

export const Boxs = () => {

    const dots = [
        {
            icon: <VscPassFilled />,
            title: "Story Sharing"
        },
        {
            icon: <VscPassFilled />,
            title: "Custom Profiles"
        },
        {
            icon: <VscPassFilled />,
            title: "Commutnity Groups"
        },
        {
            icon: <VscPassFilled />,
            title: "Event Creations"
        },
        {
            icon: <VscPassFilled />,
            title: "Smart Notifications"
        }
    ]

    return (
        <div className="mt-52 max-w-7xl mx-auto">
            <div className="flex gap-4">
                <div className="flex flex-col justify-start  items-start space-y-6 w-1/2">
                    <h1 className="text-6xl font-bold p-2 items-center leading-tight text-white">Appit's Advanced Capabilities</h1>
                    <p className="text-lg text-neutral-500 max-w-xl font-medium leading-tight mb-7">Explore advanced capabilities designed to evaluate your social experience and interactions.</p>
                    <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                        {
                            dots.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <p className="text-2xl text-green-700">
                                        {item.icon}
                                    </p>
                                    <p className="text-md font-medium text-neutral-400">
                                        {item.title}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex  gap-4">
                        <button className="mt-2 py-4 px-6 rounded-xl bg-slate-200 text-neutral-600 font-bold hover:bg-gray-200 cursor-pointer"
                        >
                            <span className="flex justify-center items-center gap-2">
                                <BiLogoPlayStore color="green" size={35} />
                                {/* <p className="text-sm text-neutral-500">Get it on </p> */}
                                <p className="text-lg font-bold text-black">Google Play</p>
                            </span>
                        </button>
                        <button className="mt-2 py-4 px-6 rounded-xl bg-slate-200 text-neutral-600 font-bold hover:bg-gray-200 cursor-pointer "
                        >
                            <span className="flex justify-center items-center gap-2">
                                <IoIosAppstore color="blue" size={35} />
                                {/* <p className="text-xs text-neutral-500">Download it on</p> */}
                                <p className="text-lg font-bold text-black">App Store</p>
                            </span>
                        </button>

                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex justify-center items-center border border-neutral-800 max-w-xl rounded-2xl p-4">
                        <img src="./image1.png" alt="mobile image" width={300} height={150} />
                    </div>
                </div>
            </div>
        </div>
    )
}

