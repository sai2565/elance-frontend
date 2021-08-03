import {useRouter} from 'next/router';

function JobPost({project}) {
    const router = useRouter();
    
    return (
        <div className="px-3 h-full">
            <div className="rounded-md border border-[#e4e4e4] hover:border-[#c4c4c4] p-3 space-y-5 cursor-pointer h-full">
                <div className="space-y-2">
                    <h1 onClick={() => router.push(`/ProjectDetails?projectId=${project._id}`)} className="text-[#29b2fe] text-lg font-semibold line-clamp-2">
                      {project.projectTitle}
                    </h1>
                    <div className="space-x-5 flex text-xs font-semibold text-[#c4c4c4]">
                    <h1>{"posted on: "+ project.createdAt.split('T')[0]}</h1>
                    {/* <h1>{"closed on:"+ jobdata.closedOn}</h1> */}
                    </div>
                    <h1 className="text-sm line-clamp-4">
                        {project.description}
                    </h1>
                </div>
                <div>
                    <h1 className="font-bold text-sm">
                        Skills Required
                    </h1>
                    <h1 className="line-clamp-2">
                        {project.skills.join(" | ")}
                    </h1>
                </div>
                <div className="text-sm">
                    <h1>
                        {project.budget.minPrice}  per Hr for a freelancer | {project.budget.maxPrice} total project budget
                    </h1>
                </div>
                {/* <div className="flex justify-end">
                    <h1 className={`bg-[#29b2fe] px-4 py-2 text-white transition duration-150 transform hover:scale-105 font-bold rounded-md cursor-pointer text-center`}>
                        {"Re-Post"}
                    </h1>
                </div> */}
            
            </div>
        </div>
    )
}

export default JobPost
