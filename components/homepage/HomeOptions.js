import { useRouter } from "next/router"
function HomeOptions({status}) {
    const router = useRouter();
    return (
        <div>
            <div className="rounded-md border border-[#c4c4c4]">
                <div onClick={() => router.push(`/Search?category=projects`)} className="flex items-center cursor-pointer border-b border-[#c4c4c4]">
                    <div className="flex space-x-5 px-6 py-4 items-center hover:underline">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/ios-filled/100/3498DB/project.png"/>
                        <h1 className="font-semibold text-[#666666]">Explore projects</h1>
                    </div>    
                </div>
                <div onClick={() => router.push(`/Search?category=freelancers`)} className="flex items-center cursor-pointer border-b border-[#c4c4c4]">
                    <div className="flex space-x-5 px-6 py-4 items-center hover:underline">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/glyph-neue/128/3498DB/manager.png"/>
                        <h1 className="font-semibold text-[#666666]">Explore Freelancers</h1>
                    </div>
                </div>
                <div onClick={() => router.push(`/PostProject`)} className={`flex items-center cursor-pointer border-b border-[#c4c4c4] ${status !== "clientsession" && "hidden"}`}>
                    <div className="flex space-x-5 px-6 py-4 items-center hover:underline">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/ios-filled/100/3498DB/new-job.png"/>
                        <h1 className="font-semibold text-[#666666]">Post a Job</h1>
                    </div>
                </div>
                <div onClick={() => router.push(`/Search?category=projects`)} className={`flex items-center cursor-pointer border-b border-[#c4c4c4] ${status !== "freelancersession" && "hidden"}`}>
                    <div className="flex space-x-5 px-6 py-4 items-center hover:underline">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/ios-filled/100/3498DB/new-job.png"/>
                        <h1 className="font-semibold text-[#666666]">Apply for a Job</h1>
                    </div>
                </div>
                <div onClick={() => router.push(`/Search?category=projects`)} className="flex items-center cursor-pointer border-b border-[#c4c4c4]">
                    <div className="flex space-x-5 px-6 py-4 items-center hover:underline">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/ios-filled/100/3498DB/youtube-live.png"/>
                        <h1 className="text- font-semibold text-[#666666]">Active Postings</h1>
                    </div>
                </div>
                <div onClick={() => router.push(`/Profile`)} className="flex items-center cursor-pointer">
                    <div className="flex space-x-5 px-6 py-4 items-center hover:underline">
                        <img class="w-10 h-10" loading="lazy" src="https://img.icons8.com/ios-filled/100/3498DB/reviewer-male.png"/>
                        <h1 className="font-semibold text-[#666666]">Reviews</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeOptions
