import {useRouter} from "next/router";
import { Dialog } from '@material-ui/core';
import { useState } from 'react';
import HireFreelancer from '../search/HireFreelancer';
import ApplyToProject from "../search/ApplyToProject";

function ProjectGridItem({currentUserProfile, project}) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    var rating = 3;

    const [isMyFavProj, toggleFavourite] = useState(currentUserProfile.user[0].favProjects.includes(project._id));
    async function switchFavourite(){
        const url = isMyFavProj ? "http://elance-be.herokuapp.com/api/v1/favourites/unSetFavProject" : "http://elance-be.herokuapp.com/api/v1/favourites/setFavProject"
        const favres = await fetch(url,{
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ 
                                "favProjectId": project._id,
                                "userId": currentUserProfile.user[0]._id
                            })
        });
        const favres_json = await favres.json();
        toggleFavourite(!isMyFavProj);
    }

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div className="m-2">
            <div>
                <div className=" border border-[#c4c4c4] rounded-md">
                    <div className="p-2 space-y-3">
                        <div className="flex justify-between items-center">
                            <h1 onClick={() => router.push(`/ProjectDetails?projectId=${project._id}`)} className="text-lg font-bold text-[#29b2fe] underline cursor-pointer hover:text-[#239ada]">
                                {project.projectTitle}
                            </h1>
                            <img onClick={switchFavourite} className="w-6 h-6 cursor-pointer transition duration-150 transform hover:scale-110" src={`${isMyFavProj ? "https://img.icons8.com/ios-filled/150/29b2fe/like--v1.png" : "https://img.icons8.com/ios/150/000000/like--v1.png"}`} />
                            {/* https://img.icons8.com/ios-filled/50/000000/like--v1.png 
                            https://img.icons8.com/ios/150/333333/like--v1.png*/}
                        </div>
                        <div className="flex items-center">
                            {project.description}
                        </div>
                        <div>
                            <h1 className="font-semibold">
                                Skills Required
                            </h1>
                            <h1 className="">
                                {project.skills.join(" | ")}
                            </h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img className="w-6 h-6" src="https://img.icons8.com/glyph-neue/128/2ECC71/user-location.png"/>
                            <h1>{project.workLocation[0]}</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img className="w-6 h-6" src="https://img.icons8.com/color/144/000000/rupee--v1.png"/>
                            <h1>{project.budget ? project.budget.minPrice : "NA"} per Hr | {project.budget ? project.budget.maxPrice : "NA"} Total Budget</h1>
                        </div>
                        <div className="">
                            {/* <h1>posted on : 24-May-2020</h1> */}
                            <div className="flex items-center space-x-2">
                                <img className="w-6 h-6" src="https://img.icons8.com/material/192/666666/clock--v1.png"/>
                                <h1 className="italic font-semibold text-[#666666] text-sm"></h1>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div />
                            <h1 onClick={handleOpen} className=" text-white font-semibold bg-[#29b2fe] px-4 py-1 rounded-full cursor-pointer hover:bg-[#239ada]">
                                Apply
                            </h1>
                            <Dialog
                                open={open}
                                onClose={handleClose}>
                                <div>
                                    <ApplyToProject project={project} currentUserProfile={currentUserProfile}/>
                                </div>
                            </Dialog>  
                        </div>
                    </div>
                    <div className="border-t border-[#c4c4c4] space-x-2 flex p-2 justify-between">
                        <div className="space-y-2">
                            <h1 className="font-semibold text-[#29b2fe] underline cursor-pointer hover:text-[#239ada]">
                                {project.postedBy ? project.postedBy.userName : "unknown"} | @{project.postedBy ? project.postedBy.userName : "unknown"}
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
            </div>
        </div>
    )
}

export default ProjectGridItem
