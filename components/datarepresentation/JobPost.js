function JobPost({jobdata}) {
    return (
        <div className="px-2">
            <div className="rounded-md border border-[#c4c4c4] p-3 space-y-5 cursor-pointer">
                <div className="space-y-2">
                    <h1 className="text-[#29b2fe] text-lg font-semibold">
                      {jobdata.title}
                    </h1>
                    <div className="space-x-5 flex text-xs font-semibold text-[#c4c4c4]">
                    <h1>{"posted on: "+ jobdata.postedOn}</h1>
                    <h1>{"closed on:"+ jobdata.closedOn}</h1>
                    </div>
                    <h1 className="text-sm">
                        {jobdata.description}
                    </h1>
                </div>
                <div>
                    <h1 className="font-bold text-sm">
                        Skills Required
                    </h1>
                    <h1>
                        {jobdata.skills}
                    </h1>
                </div>
                <div className="text-sm">
                    <h1>
                        {jobdata.ratedesc} 
                    </h1>
                </div>
                <div className="flex justify-end">
                    <h1 className={`bg-[#29b2fe] px-4 py-2 text-white transition duration-150 transform hover:scale-105 font-bold rounded-md cursor-pointer text-center`}>
                        {jobdata.action}
                    </h1>
                </div>
            
            </div>
        </div>
    )
}

export default JobPost
