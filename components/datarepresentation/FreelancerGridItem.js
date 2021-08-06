import { Dialog } from '@material-ui/core';
import { useSession } from 'next-auth/client';
import { useState } from 'react';
import HireFreelancer from '../search/HireFreelancer';
import {useRouter} from 'next/router';

function FreelancerGridItem({profile}) {
    const router = useRouter();
    var rating = 3;
    const [open, setOpen] = useState(false);
    const [session] = useSession();
    const handleOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
      };
    const [hourlyrate, setHourlyRate] = useState(Math.ceil(Math.random() * 100)*10);
    return (
            <div className="my-3 p-3 w-full">
                <div className="border border-[#c4c4c4] rounded-md w-full p-3 h-96">
                    <div className="p-2 space-y-3">
                    <div className="flex justify-between items-center">
                            <h1 onClick={() => router.push(`/Profile?id=${profile._id}`)} className="text-lg line-clamp-1 font-bold text-[#29b2fe] underline cursor-pointer hover:text-[#239ada]">
                                {profile.fullName} |@{profile.userName}
                            </h1>
                            <img className="h-8 w-8 rounded-full ml-3" src={profile.profilePic || "https://img.icons8.com/officel/160/000000/user.png"}/>
                            {/* <img className="w-4 h-4 cursor-pointer hover:w-5 hover:h-5" src={`${favourite ? "https://img.icons8.com/ios-filled/50/29b2fe/like--v1.png" : "https://img.icons8.com/ios/150/29b2fe/like--v1.png"}`} /> */}
                            {/* https://img.icons8.com/ios-filled/50/000000/like--v1.png 
                            https://img.icons8.com/ios/150/333333/like--v1.png*/}
                        </div>
                        <div className="space-x-0.5 flex items-center">
                                <img className={`h-4 w-4 ${rating < 1 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 2 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 3 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 4 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 5 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <h1 className="text-xs">
                                    ( 20 ratings and 10 reviews )
                                </h1>
                        </div>
                        <div className="flex items-center line-clamp-2">
                            {profile.intro}
                        </div>
                        <div>
                            <h1 className="font-semibold">
                                Skills
                            </h1>
                            <h1 className="line-clamp-2">
                                {profile.skills?.map((skill) => (skill.name)).join(" | ")}
                            </h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img className="w-6 h-6" src="https://img.icons8.com/glyph-neue/128/2ECC71/user-location.png"/>
                            <h1>{profile.address ? profile.address[0] : "Remote"}</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img className="w-6 h-6" src="https://img.icons8.com/color/144/000000/rupee--v1.png"/>
                            <h1>{hourlyrate} per Hr</h1>
                        </div>
                    </div>
                </div>
                {
                    session && session.user &&
                    <div className="flex justify-between align-baseline -mt-14 mr-3">
                        <div />
                        <h1 onClick={handleOpen} className=" text-white font-semibold bg-[#29b2fe] px-4 py-1 rounded-full cursor-pointer hover:bg-[#239ada]">
                            Hire
                        </h1>
                        <Dialog
                            open={open}
                            onClose={handleClose}>
                            <div>
                                <HireFreelancer clientprofile={session.user.elanceprofile} freelancerprofile={profile}/>
                            </div>
                        </Dialog>                           
                    </div>
                }
            </div>
            
    )
}

export default FreelancerGridItem
