import { useState, useRef } from 'react';
import { Dialog } from '@material-ui/core';
import {useRouter} from 'next/router';


function HireFreelancer({clientprofile, freelancerprofile}) {
    const router = useRouter();
    const messageInpRef = useRef(null);
    const durationInpRef = useRef(null);
    const rateInpRef = useRef(null);
    const [isMissingDetails, setIsMissingDetails] = useState(false);
    const [isRequestSuccess, setIsRequestSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedProject, setSelecedProject] = useState(null);

    async function validateAndHire(){
        if(selectedProject && messageInpRef.current.value && durationInpRef.current.value && rateInpRef.current.value){
            setIsMissingDetails(false);
            setLoading(true);
            const res = await fetch("http://elance-be.herokuapp.com/api/v1/hire/hireRequest", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "projectId": selectedProject,
                                "freelancerId" : freelancerprofile._id,
                                "clientId" : clientprofile._id,
                                "description" : messageInpRef.current.value,
                                "hourlyRate" : rateInpRef.current.value,
                                "duration" : durationInpRef.current.value
                            })
            });
            const res_json = await res.json();
            setLoading(false);
            setIsRequestSuccess(true);
        }else{setIsMissingDetails(true);}
    } 
    return (
        <div>
        {
            !isRequestSuccess &&
            <div className={``} >
                <h1 className="border-b-2 border-[#c4c4c4] p-5 font-bold">
                    You are hiring {freelancerprofile.fullName}( @{freelancerprofile.userName} )!
                </h1>
                <div className="px-5 py-2 space-y-2">
                    <h1>
                        What is the job you are hiring for? *
                    </h1>
                    <div className={`p-2 space-y-2 max-h-48 overflow-y-scroll`}>
                        {   
                            clientprofile.user &&
                            clientprofile.user[0].projects &&
                            clientprofile.user[0].projects.map((project) => (
                                <div className="flex space-x-3 items-start">
                                    <img className="h-5 w-5 cursor-pointer" onClick={() => setSelecedProject(project._id)} src={`${selectedProject === project._id ? "https://img.icons8.com/ios-glyphs/48/666666/checked-checkbox.png" : "https://img.icons8.com/ios-filled/50/666666/unchecked-checkbox.png"}`} />
                                    <h1 className="-mt-1">{project.projectTitle}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="px-5 py-2 space-y-2">
                    <h1>
                        How much hourly rate are you offering? *
                    </h1>
                    <div className={`border border-[#c4c4c4] rounded-md p-2`}>
                        <input
                            ref={rateInpRef}
                            type="number"
                            className="w-full focus:outline-none"
                            placeholder="Type hourly rate in rupees"/>
                    </div>
                </div>
                <div className="px-5 py-2 space-y-2">
                    <h1>
                        For how long you want to hire? *
                    </h1>
                    <div className={`border border-[#c4c4c4] rounded-md p-2`}>
                        <input
                            ref={durationInpRef}
                            type="number"
                            className="w-full focus:outline-none"
                            placeholder="Type number of months"/>
                    </div>
                </div>
                <div className="px-5 py-2 space-y-2">
                    <h1>
                        Add a message to the freelancer *
                    </h1>
                    <div className={`border border-[#c4c4c4] rounded-md p-2`}>
                        <input
                            ref={messageInpRef}
                            className="w-full focus:outline-none"
                            placeholder="I liked your profile and want to get in touch with you"/>
                    </div>
                </div>
                    {
                        isMissingDetails &&
                        <h1 className=" text-center text-base font-semibold text-[#E74C3C]">**Please fill all the data**</h1>
                    }
                <div className="grid grid-cols-3 p-3">
                    <div />
                    <h1 onClick={validateAndHire} className="lg:px-4 lg:py-2 p-2 border border-[#29b2fe] bg-[#29b2fe] rounded-full text-center justify-center cursor-pointer text-white font-semibold hover:text-[#29b2fe] hover:bg-white">
                        Send Hire Request
                    </h1>
                    <div />
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
        {
            isRequestSuccess &&
            <div className="p-5 space-y-3 ">
                <h1 className="text-center text-2xl font-semibold text-[#29b2fe]">You hire request has been sent !</h1>
                {/* <h1 onClick={() => router.push(`/Messenger?userId=${freelancerprofile._id}`)} className="text-[#29b2fe] text-center text-base font-semibold hover:underline cursor-pointer">Message {freelancerprofile.fullName} ?</h1> */}
            </div>
            
            
        }    
        </div>
        
    )
}

export default HireFreelancer
