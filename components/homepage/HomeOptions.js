function HomeOptions() {
    const usertype = "C";
    return (
        <div>
            <div className="rounded-md border border-[#c4c4c4]">
                <div className="flex items-center cursor-pointer border-b border-[#c4c4c4]">
                    <div className="flex space-x-5 px-4 py-2 items-center transition duration-150 transform hover:scale-105">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/ios-filled/100/666666/project.png"/>
                        <h1 className="font-semibold text-[#666666]">Explore projects</h1>
                    </div>    
                </div>
                <div className="flex items-center cursor-pointer border-b border-[#c4c4c4]">
                    <div className="flex space-x-5 px-4 py-2 items-center transition duration-150 transform hover:scale-105">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/glyph-neue/128/666666/manager.png"/>
                        <h1 className="font-semibold text-[#666666]">Explore Freelancers</h1>
                    </div>
                </div>
                <div className={`flex items-center cursor-pointer border-b border-[#c4c4c4] ${usertype === "F" && "hidden"}`}>
                    <div className="flex space-x-5 px-4 py-2 items-center transition duration-150 transform hover:scale-105">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/ios-filled/100/666666/new-job.png"/>
                        <h1 className="font-semibold text-[#666666]">Post a Job</h1>
                    </div>
                </div>
                <div className={`flex items-center cursor-pointer border-b border-[#c4c4c4] ${usertype === "C" && "hidden"}`}>
                    <div className="flex space-x-5 px-4 py-2 items-center transition duration-150 transform hover:scale-105">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/ios-filled/100/666666/new-job.png"/>
                        <h1 className="font-semibold text-[#666666]">Apply for a Job</h1>
                    </div>
                </div>
                <div className="flex items-center cursor-pointer border-b border-[#c4c4c4]">
                    <div className="flex space-x-5 px-4 py-2 items-center transition duration-150 transform hover:scale-105">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/ios-filled/100/666666/youtube-live.png"/>
                        <h1 className="text- font-semibold text-[#666666]">Active Postings</h1>
                    </div>
                </div>
                <div className="flex items-center cursor-pointer">
                    <div className="flex space-x-5 px-4 py-2 items-center transition duration-150 transform hover:scale-105">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/ios-filled/100/666666/reviewer-male.png"/>
                        <h1 className="font-semibold text-[#666666]">Reviews</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeOptions
