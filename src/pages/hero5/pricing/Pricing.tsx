import { VscPassFilled } from "react-icons/vsc";


export const Pricing = () => {

    return (
        <div className="min-h-screen max-w-7xl mx-auto mt-15">
            <div className="flex justify-center items-center gap-10 max-w-3xl mx-auto relative">
                <div className="flex flex-col justify-start items-start border border-gray-800 w-1/2 h-[550px] p-6 py-8 max-w-md mx-auto rounded-2xl space-y-3">
                    <h1 className="text-xl font-bold leading-tight text-white">Free Plan</h1>
                    <h1 className="text-5xl font-bold text-white">$0<span className="text-sm text-neutral-700">/per month</span></h1>
                    <p className="text-sm font-medium text-neutral-500">Basic acess with essential features</p>
                    <button className="bg-white text-black font-medium cursor-pointer hover:bg-neutral-200 w-full p-4 rounded-2xl mt-2">Get Started</button>
                    <h3 className="mt-4 text-md text-white font-normal">What's Included</h3>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#4ade80" />
                        <p className="text-neutral-300">Create and customize profile</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#4ade80" />
                        <p className="text-neutral-300">Connect with other users</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#262626" />
                        <p className="text-neutral-500 line-through">Send and receive messages</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#4ade80" />
                        <p className="text-neutral-300">Acess to basic features</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#262626" />
                        <p className="text-neutral-500 line-through">View and share content</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#4ade80" />
                        <p className="text-neutral-300">Receive notifications and updates</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start border border-gray-800 w-1/2 h-[550px] p-6 py-10 max-w-md mx-auto rounded-2xl space-y-3 relative">
                    <p className="absolute right-0 top-0 text-xs text-neutral-500 font-bold bg-neutral-900 py-2 px-4 rounded-4xl">Save 20% on yearly</p>
                    <h1 className="text-xl font-bold leading-tight text-white">Premium Plan</h1>
                    <h1 className="text-5xl font-bold text-white">$10<span className="text-sm text-neutral-700">/per month</span></h1>
                    <p className="text-sm font-medium text-neutral-500">Enchanced features for new experience</p>
                    <button className="bg-white text-black font-medium cursor-pointer hover:bg-neutral-200 w-full p-4 rounded-2xl mt-2">Get Started</button>
                    <h3 className="mt-4 text-md text-white font-normal">What's Included</h3>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#4ade80" />
                        <p className="text-neutral-300">Create and customize profile</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#4ade80" />
                        <p className="text-neutral-300">Connect with other users</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#4ade80" />
                        <p className="text-neutral-300">Send and receive messages</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#4ade80" />
                        <p className="text-neutral-300">Acess to basic features</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#4ade80" />
                        <p className="text-neutral-300">View and share content</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <VscPassFilled size={23} color="#4ade80" />
                        <p className="text-neutral-300">Receive notifications and updates</p>
                    </div>
                </div>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-neutral-100 to-transparent h-px w-full mx-auto" />
            </div>
        </div>
    )
}

