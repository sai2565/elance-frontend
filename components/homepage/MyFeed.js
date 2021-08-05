import {useSession} from 'next-auth/client'
import { useState } from 'react';
import FreelancerFeedItem from "../datarepresentation/FreelancerFeedItem";
import { Dialog } from '@material-ui/core';
import ProjectGridItem from '../datarepresentation/ProjectGridItem';

function MyFeed({feed}) {
    const [session] = useSession();
    const userType = session.user.elanceprofile.user[0].userType;
    const [freelancers, setFreelancers] = useState(feed?.users) ;
    const [projects, setProjects] = useState(feed?.projects);
    const [currPage, setCurrPage] = useState(feed?.page);
    const [totalPages, setTotPages] = useState(feed?.totalPages);
    const [loading, setLoading] = useState(false);
    const myAppliedProjects = session.user.elanceprofile.user[0].applications.map((application) => (application.projectId._id));
    
    async function nextPage(){
        if(currPage < feed.totalPages){
            setLoading(true);
            setFreelancers([]);
            setProjects([]);
            const url = userType === "client" ? `https://elance-be.herokuapp.com/api/v1/users/getAllUsers?page=${parseInt(currPage) + 1}&size=10` : `https://elance-be.herokuapp.com/api/v1/projects/getAllProjects?page=${parseInt(currPage) + 1}&size=10`
            const reqBody = userType === "client" ? { "userType":"freelancer" } : {};
            const nextFeed = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify(reqBody)
                });
            const nextFeed_json = await nextFeed.json();
            setFreelancers(nextFeed_json.users);
            setProjects(nextFeed_json.projects);
            setCurrPage(nextFeed_json.page);
            setTotPages(nextFeed_json.totalPages);
            setLoading(false);
        }
    }

    async function prevPage(){
        if(currPage > 1){
            setLoading(true);
            setFreelancers([]);
            setProjects([]);
            const url = userType === "client" ? `https://elance-be.herokuapp.com/api/v1/users/getAllUsers?page=${parseInt(currPage) - 1}&size=10` : `https://elance-be.herokuapp.com/api/v1/projects/getAllProjects?page=${parseInt(currPage) - 1}&size=10`
            const reqBody = userType === "client" ? { "userType":"freelancer" } : {};
            const prevFeed = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify(reqBody)
                });
            const prevFeed_json = await prevFeed.json();

            setFreelancers(prevFeed_json.users);
            setProjects(prevFeed_json.projects);
            setCurrPage(prevFeed_json.page);
            setTotPages(prevFeed_json.totalPages);
            setLoading(false);
        }
    }
    
    return (
    <div>
        {
            session && session.user && feed &&
            <div className="space-y-10">
                <h1 className="text-xl text-black font-bold">My Feed</h1>
                <div className="h-full grid grid-cols-1">
                    {
                        userType === "client" &&
                        freelancers.map((freelancer) => (
                            <FreelancerFeedItem profile={freelancer} currentUserProfile={session.user.elanceprofile}/>
                        ))
                    }
                    {
                        userType === "freelancer" &&
                        projects.map((project) => (

                                (!myAppliedProjects.includes(project._id)) &&
                                <ProjectGridItem project={project} currentUserProfile={session.user.elanceprofile}/>
                        ))
                    }
                </div>
                <div className="justify-between w-full">
                    <div/>
                    <div className="flex items-center space-x-5 mt-10 justify-center">
                        <img onClick={prevPage} className={`w-8 h-8 ${currPage === "1" ? "cursor-not-allowed" : "cursor-pointer"}`} src={`${currPage === "1" ? "https://img.icons8.com/ios-glyphs/120/999999/previous.png" : "https://img.icons8.com/ios-glyphs/120/29b2fe/previous.png"}`} />
                        <h1>
                            Page {currPage} of {Math.ceil(totalPages)}
                        </h1>
                        <img onClick={nextPage} className={`w-8 h-8 ${parseInt(currPage) === parseInt(Math.ceil(totalPages)) ? "cursor-not-allowed" : "cursor-pointer"}`} src={`${currPage < totalPages ? "https://img.icons8.com/ios-glyphs/120/29b2fe/next.png" : "https://img.icons8.com/ios-glyphs/120/999999/next.png"}`}/>
                    </div>
                
                </div>
                <Dialog
                    open={loading}
                    className={`${loading ? "" : "hidden"}`}
                    >
                    <div className="animate-pulse flex items-center justify-center p-5">
                        <img
                            className="w-12 h-12"
                            src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                        <h1 className="italic text-xl font-extrabold -ml-3 text-[#0e1724] hidden lg:flex">elance</h1>    
                    </div>
                </Dialog> 
        </div>
        }    
    </div>
    )
}

export default MyFeed
