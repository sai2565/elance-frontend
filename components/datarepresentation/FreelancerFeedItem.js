function FreelancerFeedItem({profilepic}) {
    return (
        <div className="p-5 space-y-5 cursor-pointer hover:bg-[#29b2fe] hover:text-white">
            <div className="space-y-1">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold cursor-pointer">
                        Programmitis | @programmitis | Software Developement
                    </h1>
                    <div className="lg:flex lg:space-y-0 lg:space-x-5 lg:items-center">
                        <img className={`h-8 w-8 rounded-full cursor-pointer mb-3 lg:mb-0`} loading="lazy" src={profilepic}/>
                        <img className="h-6 w-6 cursor-pointer" src="https://img.icons8.com/ios-glyphs/120/000000/hearts.png"/>
                    </div>
                </div>
                <div className="space-x-0.5 flex">
                    <img className="h-6 w-6" src="https://img.icons8.com/fluent/120/000000/star.png"/>
                    <img className="h-6 w-6" src="https://img.icons8.com/fluent/120/000000/star.png"/>
                    <img className="h-6 w-6" src="https://img.icons8.com/fluent/120/000000/star.png"/>
                    <img className="h-6 w-6" src="https://img.icons8.com/fluent/120/000000/star.png"/>
                    <img className="h-6 w-6" src="https://img.icons8.com/fluent/120/000000/star.png"/>
                </div>
            </div>
            <div>
                <h1>Programmatis started out as just Joe. His work through freelancer.com gave him the oppo Programmatis started out as just Joe. His work through freelancer.com gave him the Programmatis started out as just Joe. His work through freelancer.com gave him the.  His work through freelancer.com gave him the Programmatis started out as just Joe. His work through freelancer.com.</h1>
            </div>
            <div>
                <h1 className="font-bold">Skills</h1>
                <h1>ReactJs | NodeJs | MongoDB | GraphQL | NextJS | JavaScript</h1>
            </div>
            <div className="flex justify-between">
                <div className="flex space-x-3 items-center">
                    <img className="w-6 h-6" src="https://img.icons8.com/material-sharp/96/000000/marker.png"/>
                    <h1>Australia | Remote</h1>
                </div>
                <div>
                    <h1>₹ 700 / Hr</h1>
                </div>
            </div>

        </div>
    )
}

export default FreelancerFeedItem
