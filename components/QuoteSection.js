function QuoteSection() {
    return (
        <div>
            <div className="m-5 lg:mx-32 lg:grid lg:grid-cols-2">
                <div className="lg:col-span-1">
                    <h1
                        className="text-5xl text-[#29b2fe] font-baskerville lg:text-6xl">
                            Join the best freelance marketplace</h1>
                    <div className="text-2xl font-semibold text-gray-500 mt-3">
                        <h1 >Find great talent. Build your business.</h1>
                        <h1>Take your career to the next level.</h1> 
                    </div>
                    <div className="mt-16 space-y-5 items-center lg:space-x-5 lg:flex lg:space-y-0">
                        <h1 className="px-6 py-2 text-center bg-[#29b2fe] text-white font-bold rounded-full cursor-pointer hover:bg-[#238ac2]">Hire a Freelancer</h1>
                        <h1 className="px-6 py-2 text-center text-[#29b2fe] font-bold rounded-full border border-[#29b2fe] cursor-pointer hover:bg-gray-100" >Make Money Freelancing</h1>
                    </div>
                </div>
                <div>
                    <img
                    className="hidden lg:col-span-1 lg:flex ml-16"
                    height={350}
                    width={350}
                    loading="lazy"
                    src="https://www.upwork.com/static/assets/Brontes/6a4c747/img/globe-2x.f7d44e7.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default QuoteSection
