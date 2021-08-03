import Head from 'next/head';
import ApplicationItem from '../components/ApplicationItem';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ProjectDetails({projectdetails}) {
    console.log(projectdetails.projects);

    var favourite = true;
    var rating = 4;
    return (
        <div>
            <Head>
                <title>Elance | Project Details</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"projectdetails"}/>
            <div className="h-60 bg-[#666666]">
                <h1 className="text-white font-bold text-2xl underline text-center pt-10">{projectdetails.projects[0].projectTitle}</h1>
            </div>
            <div className={`mx-8 lg:mx-60 mb-10 -mt-32 space-y-5`}>
                <div className="justify-center bg-white border border-[#c4c4c4] rounded-md">
                    <div className="justify-between border-b border-[#c4c4c4] flex items-center p-5">
                        <h1 className="text-black font-bold text-lg">
                            Project Details
                        </h1>
                        <img className="w-6 h-6 cursor-pointer transition duration-150 transform hover:scale-110" src={`${favourite ? "https://img.icons8.com/ios-filled/50/29b2fe/like--v1.png" : "https://img.icons8.com/ios/150/29b2fe/like--v1.png"}`} />

                    </div>
                    <div className="p-5 space-y-5">
                        <h1 className="">
                            {projectdetails.projects[0].description}
                        </h1>
                        <div>
                            <h1 className="font-semibold">
                                Skills Required
                            </h1>
                            <h1 className="">
                                {projectdetails.projects[0].skills.join(' | ')}
                            </h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img className="w-6 h-6" src="https://img.icons8.com/glyph-neue/128/2ECC71/user-location.png"/>
                            <h1>{projectdetails.projects[0].workLocation[0]}</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img className="w-6 h-6" src="https://img.icons8.com/color/144/000000/rupee--v1.png"/>
                            <h1>{projectdetails.projects[0].budget ? projectdetails.projects[0].budget.minPrice : "NA"} per Hr | {projectdetails.projects[0].budget ? projectdetails.projects[0].budget.maxPrice : "NA"} Total Budget</h1>
                        </div>
                        <div className="flex space-x-3">
                            {/* <h1>posted on : 24-May-2020</h1> */}
                            <div className="flex items-center space-x-2">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/clock--v1.png"/>
                                <h1 className="italic font-semibold text-[#666666] text-sm">{projectdetails.projects[0].createdAt}</h1>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                                <img className="w-6 h-6" src="https://img.icons8.com/material/192/666666/expired--v1.png"/>
                                <h1 className="italic font-semibold text-[#666666] text-sm">{projectdetails.projects[0].createdAt}</h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div />
                            <h1 className=" text-white font-semibold bg-[#29b2fe] px-4 py-1 rounded-full cursor-pointer hover:bg-[#239ada]">
                                Apply
                            </h1>
                        </div>
                        
                    </div>
                    <div className="border-t border-[#c4c4c4] flex justify-between p-5">
                        <div className="space-y-2">
                            <h1 className="font-semibold text-[#29b2fe] underline cursor-pointer hover:text-[#239ada]">
                                {projectdetails.projects[0].postedBy?.userName} | @{projectdetails.projects[0].postedBy?.userName} 
                            </h1>
                            <div className="space-x-0.5 flex">
                                <img className={`h-4 w-4 ${rating < 1 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 2 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 3 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 4 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 5 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <h1 className="text-xs">
                                    ( 20 ratings and 10 reviews )
                                </h1>
                            </div>
                        </div>
                        <div>
                            <img className="h-8 w-8 rounded-full" src="https://img.icons8.com/officel/160/000000/user.png"/>
                        </div>
                    </div>
                </div>  
                <div className="justify-center bg-white border border-[#c4c4c4] rounded-md">
                    <h1 className="text-black font-bold text-lg p-5 border-b border-[#c4c4c4]">
                        Applications
                    </h1>
                    <div className="divide-y divide-[#c4c4c4]">
                        <ApplicationItem />
                        <ApplicationItem />
                        <ApplicationItem />
                        <ApplicationItem />
                        <ApplicationItem />
                    </div>
                    <div className="justify-between w-full mb-5">
                        <div />
                        
                        <div className="flex items-center space-x-5 mt-10 justify-center">
                            <img className="w-8 h-8" src="https://img.icons8.com/ios-glyphs/120/999999/previous.png" />
                            <h1>
                                Page 1 | 5 of 16 applications
                            </h1>
                            <img className="w-8 h-8 cursor-pointer" src="https://img.icons8.com/ios-glyphs/120/29b2fe/next.png" />
                        </div>
                        
                    </div>
                </div> 
            </div>
            <Footer />
        </div>
    )
}

export default ProjectDetails

export async function getServerSideProps(context){
    const projectId = context.query.projectId;
    const reqBody = {
        "_id": projectId
    }
    const projectDetails = await fetch("http://elance-be.herokuapp.com/api/v1/projects/getAllProjects", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody)
    });
    const projectDetails_json = await projectDetails.json();
    console.log(projectDetails_json);
    return{
        props:{
            projectdetails : projectDetails_json
        }
    }    
}