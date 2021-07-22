function ApplyToProject() {
    return (
        <div>
            <div>
                <h1 className="border-b-2 border-[#c4c4c4] p-5 font-bold">
                    You are applying to project1!
                </h1>
                <div className="p-5 space-y-2">
                    <h1>
                        A short message to the job poster? *
                    </h1>
                    <div className={`border border-[#c4c4c4] rounded-md p-2`}>
                        <input
                            className="w-full focus:outline-none"
                            placeholder="Write your message here"/>
                    </div>
                </div>
                <div className="p-5 space-y-2">
                    <h1>
                        How many months are available to work? *
                    </h1>
                    <div className={`border border-[#c4c4c4] rounded-md p-2`}>
                        <input
                            className="w-full focus:outline-none"
                            placeholder="Type duration here"/>
                    </div>
                </div>
                <div className="p-5 space-y-2">
                    <h1>
                        How much hourly rate are you expecting? *
                    </h1>
                    <div className={`border border-[#c4c4c4] rounded-md p-2`}>
                        <input
                            className="w-full focus:outline-none"
                            placeholder="Type hourly rate in rupees"/>
                    </div>
                </div>
                <div className="grid grid-cols-3 p-5">
                    <div/>
                    <h1 className="lg:px-4 lg:py-2 p-2 border border-[#29b2fe] bg-[#29b2fe] rounded-full text-center justify-center cursor-pointer text-white font-semibold hover:text-[#29b2fe] hover:bg-white">
                        Send Application
                    </h1>
                    <div />
                </div>
                
            </div>
        </div>
    )
}

export default ApplyToProject
