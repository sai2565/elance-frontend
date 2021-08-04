import { useRouter } from "next/router";
import { useState } from 'react';
import { Dialog } from '@material-ui/core';
import HireFreelancer from '../search/HireFreelancer';


function FreelancerFeedItem({profile, currentUserProfile}) {
    //console.log(JSON.stringify(profile))
    const router = useRouter();
    const [isFavourite, toggleFavourite] = useState(currentUserProfile.user[0].favUsers.includes(profile._id));
    async function switchFavourite(){
            const url = isFavourite ? "http://elance-be.herokuapp.com/api/v1/favourites/unSetFavUser" : "http://elance-be.herokuapp.com/api/v1/favourites/setFavUser"
            const favres = await fetch(url,{
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ 
                                    "favouriteUserId": profile._id,
                                    "userId": currentUserProfile.user[0]._id
                                })
            });
            const favres_json = await favres.json();
            toggleFavourite(!isFavourite);
            console.log( " fav reds" + JSON.stringify(favres_json));
    }
    const [hireDialogOpen, setHireDialogOpen] = useState(false);
    const handleHireDialogOpen = () => {
        setHireDialogOpen(true);
    };
  
    const handleHireDialogClose = () => {
        setHireDialogOpen(false);
    };

    return (
        <div className="m-3 p-5 space-y-5 cursor-pointer border border-[#e4e4e4] rounded-md hover:border-[#c4c4c4]">
            <div className="space-y-1">
                <div className="lg:flex justify-between items-center">
                    <h1 onClick={() => router.push(`/Profile?id=${profile._id}`) } className="text-lg font-semibold cursor-pointer text-[#29b2fe] underline hover:text-[#239ada]">
                        {profile.fullName} | @{profile.userName} | {profile.occupation}
                    </h1>
                    <div className="flex space-x-5 items-center my-2 lg:my-0 justify-between lg:justify-evenly">
                        <img className={`h-8 w-8 rounded-full cursor-pointer `} loading="lazy" src={profile && profile.profilePic && profile.profilePic.includes("http") ? profile.profilePic : "https://img.icons8.com/officel/128/000000/user.png"}/>
                        <img onClick={switchFavourite} className="h-6 w-6 cursor-pointer" src={`${isFavourite ? "https://img.icons8.com/ios-filled/120/29b2fe/like--v1.png" : "https://img.icons8.com/ios/120/000000/like--v1.png"}`} />
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
                <h1>{profile.intro}</h1>
            </div>
            <div>
                <h1 className="font-bold">Skills</h1>
                <h1>
                    {
                        profile.skills.map((skill) => (
                            skill.name + " | "
                        ))
                    }
                </h1>
            </div>
            <div className="flex justify-between">
                <div className="flex space-x-3 items-center">
                    <img className="w-6 h-6" src="https://img.icons8.com/glyph-neue/128/2ECC71/user-location.png"/>
                    <h1>{profile.address? profile.address[0] : "Open to work anywhere"}</h1>
                </div>
                <div>
                    <h1>{profile.hourlyRate || "850"} ₹</h1>
                </div>
            </div>
            <div className="flex justify-end">
                <h1 onClick={handleHireDialogOpen} className="text-white font-semibold bg-[#29b2fe] px-4 py-1 rounded-full cursor-pointer hover:bg-[#239ada]">
                    Hire
                </h1>
            </div>
            <Dialog
                open={hireDialogOpen}
                onClose={handleHireDialogClose}>
                <div>
                    <HireFreelancer clientprofile={currentUserProfile} freelancerprofile={profile}/>
                </div>
            </Dialog> 
        </div>
    )
}

export default FreelancerFeedItem
