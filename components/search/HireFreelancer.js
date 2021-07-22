function HireFreelancer() {
    return (
        <div>
            <div>
                <h1 className="border-b-2 border-[#c4c4c4] p-5 font-bold">
                    You are hiring Sai Sharan Beepeta( @sharan2565 )!
                </h1>
                <div className="p-5 space-y-2">
                    <h1>
                        What is the job you are hiring for? *
                    </h1>
                    <div className={`border border-[#c4c4c4] rounded-md p-2`}>
                        <input
                            className="w-full focus:outline-none"
                            placeholder="Paste elance job id or job link here"/>
                    </div>
                </div>
                <div className="p-5 space-y-2">
                    <h1>
                        What is the duration in months you are hiring for? *
                    </h1>
                    <div className={`border border-[#c4c4c4] rounded-md p-2`}>
                        <input
                            className="w-full focus:outline-none"
                            placeholder="Type duration in months"/>
                    </div>
                </div>
                <div className="p-5 space-y-2">
                    <h1>
                        How much hourly rate are you offering? *
                    </h1>
                    <div className={`border border-[#c4c4c4] rounded-md p-2`}>
                        <input
                            className="w-full focus:outline-none"
                            placeholder="Type hourly rate in rupees"/>
                    </div>
                </div>
                <div className="grid grid-cols-3 p-5">
                    <div />
                    <h1 className="lg:px-4 lg:py-2 p-2 border border-[#29b2fe] bg-[#29b2fe] rounded-full text-center justify-center cursor-pointer text-white font-semibold hover:text-[#29b2fe] hover:bg-white">
                        Send Hire Request
                    </h1>
                    <div />
                </div>
                
            </div>
        </div>
        
    )
}

export default HireFreelancer
