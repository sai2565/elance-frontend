import {useRouter} from 'next/router';

function JobPost({project}) {
    const router = useRouter();
    
    return (
        <div className="px-3 rounded-md border border-[#e4e4e4] hover:border-[#c4c4c4] mx-3 h-96">
            <div className=" p-3 space-y-5 cursor-pointer h-80">
                <div className="space-y-2">
                    <h1 onClick={() => router.push(`/ProjectDetails?projectId=${project._id}`)} className="text-[#29b2fe] hover:underline text-lg font-semibold line-clamp-2">
                      {project.projectTitle}
                    </h1>
                    <div className="space-x-5 flex text-xs font-semibold text-[#c4c4c4]">
                    <h1>{"posted on: "+ project.createdAt?.split('T')[0]}</h1>
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
                        {project.budget?.minPrice || 900}  per Hr for a freelancer | {project.budget?.maxPrice || 81560} total project budget
                    </h1>
                </div>
            </div>
            <div className="flex justify-end mb-3">
                    <h1 className={`bg-[#29b2fe] px-2 py-1 text-white font-semibold hover:bg-[#238ac2] rounded-full cursor-pointer text-center`}>
                        {"Re Post"}
                    </h1>
            </div>
        </div>
    )
}

export default JobPost
