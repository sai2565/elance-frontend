import { useRouter } from "next/router";
import { Dialog } from '@material-ui/core';
import { useState, useRef } from 'react';

function ApplicationItem({application, currentUserHasPostedThisProject, hiredApplications, posterDetails}) {

    const router = useRouter();
    var rating = 4;
    const [loading, setLoading] = useState(false);

    async function applicationAction(action){
        setLoading(true);
        const url = (action === "accept") ? "https://elance-be.herokuapp.com/api/v1/hire/hireApplicant" : "https://elance-be.herokuapp.com/api/v1/hire/rejectApplicant";
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    "applicationId": application.applicationId._id,
                    "clientId": posterDetails._id
                })
            });
        const res_json = await res.json();
        console.log("action res "+ JSON.stringify(res_json)); 
        setLoading(false);
        router.push(`/ProjectDetails?projectId=${application.applicationId.projectId}`);
    }
    return (
        <div className="p-3 flex justify-between">
            <div className="space-y-2">
                <h1 onClick={() => router.push(`/Profile?id=${application.userId._id}`)} className="font-semibold text-[#29b2fe] underline cursor-pointer hover:text-[#239ada]">
                    {application.userId.fullName} | @{application.userId.userName} 
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
                <div className="space-y-3">
                    <h1>
                        {
                            application.applicationId.description
                        }
                    </h1>
                    <div className="flex space-x-5">
                        <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/F1C40F/money--v1.png"/>
                        <h1>
                            ₹ { application.applicationId.bid} per Hour | ₹ { application.applicationId.bid * 90} for complete project
                        </h1>
                    </div>
                </div>
                {
                    hiredApplications.includes(application.applicationId._id) &&
                    <h1 className="text-[#2ECC71] font-bold text-base">This application was accepted by jobposter</h1>
                }
                {
                    !hiredApplications.includes(application.applicationId._id) &&
                    currentUserHasPostedThisProject && 
                    posterDetails && posterDetails._id &&
                    // <div className="flex justify-between w-full">
                    //     <div />
                        <div className="flex space-x-5 lg:space-x-10 items-center pt-5">
                            <h1 onClick={() => applicationAction("accept")} className="text-white font-semibold px-4 py-2 rounded-md bg-[#2ECC71] cursor-pointer hover:bg-[#138643]">
                                Accept
                            </h1>
                            <h1 onClick={() => applicationAction("reject")} className="text-white font-semibold px-4 py-2 rounded-md bg-[#E74C3C] cursor-pointer hover:bg-[#cc3c2c]">
                                Reject
                            </h1>
                        </div>
                    // </div>
                    
                }
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
    )
}

export default ApplicationItem
