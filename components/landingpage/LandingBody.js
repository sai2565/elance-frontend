function LandingBody() {
    const aNeeds=[
        {"title":"Post a job", "desc":"It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.", "img_url":"https://www.f-cdn.com/assets/main/en/assets/home/need-work-done/post-a-job-v3.svg"},
        {"title":"Choose freelancers", "desc":"No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!", "img_url":"https://www.f-cdn.com/assets/main/en/assets/illustrations/work.svg"},
        {"title":"Pay safely", "desc":"Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.", "img_url":"https://www.f-cdn.com/assets/main/en/assets/home/need-work-done/pay-safely-v3.svg"},
        {"title":"We’re here to help", "desc":"Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.", "img_url":"https://www.f-cdn.com/assets/main/en/assets/illustrations/about-you.svg"},
    ];

    const aWhatsGreat = [
        {"title":"Browse portfolios", "desc":"Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.", "img_url":"https://www.f-cdn.com/assets/main/en/assets/illustrations/browse-portfolios.svg"},
        {"title":"Fast bids", "desc":"Receive obligation free quotes from our talented freelancers fast. 80% of projects get bid on within 60 seconds.", "img_url":"https://www.f-cdn.com/assets/main/en/assets/illustrations/received-bids.svg"},
        {"title":"Quality work", "desc":"ELANCE has by far the largest pool of quality freelancers globally- over 50 million to choose from.", "img_url":"https://www.f-cdn.com/assets/main/en/assets/illustrations/pay-for-quality.svg"},
        {"title":"Track progress", "desc":"Keep up-to-date and on-the-go with our time tracker, and mobile app. Always know what freelancers are up to.", "img_url":"https://www.f-cdn.com/assets/main/en/assets/illustrations/track-process.svg"}
    ]
    return (
        <div>
            <div className="m-5 lg:mx-32 lg:mb-28">
                <div className="border-b border-gray-300 pb-16">
                    <h1 className="text-3xl text-black font-bold mb-5 lg:mb-16 lg:text-4xl">Need something done?</h1>
                    <div className="items-center space-y-10 lg:flex lg:space-x-10 lg:space-y-0">
                    {aNeeds.map(({title, desc, img_url})=>(
                        <div className="space-y-5">
                            <div className="flex items-center space-x-5">
                                <img src={img_url} className="h-12 w-12" />
                                <h1 className="text-xl font-bold">{title}</h1>
                            </div>
                            <h1>{desc}</h1>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="mt-16 ">
                    <h1 className="text-3xl text-black font-bold mb-5 lg:mb-16 lg:text-4xl">What's great about it?</h1>
                    <div className="items-center space-y-10 lg:flex lg:space-x-10 lg:space-y-0">
                    {aWhatsGreat.map(({title, desc, img_url})=>(
                        <div className="space-y-5">
                            <div className="flex items-center space-x-5">
                                <img src={img_url} className="h-12 w-12" />
                                <h1 className="text-xl font-bold">{title}</h1>
                            </div>
                            <h1>{desc}</h1>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingBody
