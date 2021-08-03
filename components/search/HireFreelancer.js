import { useState, useRef } from 'react';
import { Dialog } from '@material-ui/core';

function HireFreelancer({clientprofile, freelancerprofile}) {
    console.log(JSON.stringify(clientprofile.projects));
    const projectIDInpRef = useRef(null);
    const messageInpRef = useRef(null);
    const [loading, setLoading] = useState(false);

    async function validateAndHire(){
        if(projectIDInpRef.current.value && messageInpRef.current.value){
            setLoading(true);
            const res = await fetch("http://elance-be.herokuapp.com/api/v1/hire/hireRequest", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "projectId": projectIDInpRef.current.value,
                                "freelancerId" : freelancerprofile._id,
                                "clientId" : clientprofile._id,
                                "description" : messageInpRef.current.value
                            })
            });
            const res_json = await res.json();
            setLoading(false);
        }
    } 
    return (
        <div>
            <div className={``} >
                <h1 className="border-b-2 border-[#c4c4c4] p-5 font-bold">
                    You are hiring {freelancerprofile.fullName}( @{freelancerprofile.userName} )!
                </h1>
                <div className="p-5 space-y-2">
                    <h1>
                        What is the job you are hiring for? *
                    </h1>
                    <div className={`border border-[#c4c4c4] rounded-md p-2`}>
                        <input
                            ref={projectIDInpRef}
                            className="w-full focus:outline-none"
                            placeholder="Paste elance job id or job link here"/>
                    </div>
                    <div className={`p-2`}>
                        {
                            "select one from : " + clientprofile.projects.join(" | ")
                        }
                    </div>
                        
 
                </div>
                <div className="p-5 space-y-2">
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
                {/* <div className="p-5 space-y-2">
                    <h1>
                        How much hourly rate are you offering? *
                    </h1>
                    <div className={`border border-[#c4c4c4] rounded-md p-2`}>
                        <input
                            className="w-full focus:outline-none"
                            placeholder="Type hourly rate in rupees"/>
                    </div>
                </div> */}
                <div className="grid grid-cols-3 p-5">
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
        </div>
        
    )
}

export default HireFreelancer
