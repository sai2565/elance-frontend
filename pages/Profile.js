import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useSession, getSession, session} from 'next-auth/client';
import HireFreelancer from '../components/search/HireFreelancer';
import {useState, useRef} from 'react';
import { Dialog } from '@material-ui/core';
import {useRouter} from 'next/router';
import RatingSet from '../components/RatingSet';

function Profile({profile}) {
    const [session] = useSession();
    const router = useRouter();
    console.log(session);
    console.log(profile);
    // try{
    //     if(!session && profile === "no-id") {router.push('/');}
    // }catch(error){}

    var myprofile = session?.user.elanceprofile;
    const isMyProfile = (profile === "no-id");
    if(isMyProfile){profile = myprofile?.user[0]}
    //const reviews = profile?.reviews;
    const [myGivenRating, setMyGivenRating] = useState(null);
    const [loading, setLoading] = useState(false);
    function handleMyGivenRating(rating){
        setMyGivenRating(rating);
    }
    const myGivenReviewInpRef = useRef(null);
    async function submitReviweRating(){
        if(myGivenRating && myGivenReviewInpRef.current.value){
            setLoading(true);
            //console.log("Review "+ myGivenReviewInpRef.current.value +" | Rating "+myGivenRating);
            const res = await fetch("https://elance-be.herokuapp.com/api/v1/users/setReview",{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "userId": profile._id,
                            "reviewedBy": session.user.elanceprofile.user[0]._id,
                            "title":"Review by "+session.user.elanceprofile.user[0].fullName,
                            "description":myGivenReviewInpRef.current.value,
                            "rating":myGivenRating,
                        })
            });
            const res_json = await res.json();
            //console.log("review Response"+JSON.stringify(res_json));
            router.reload();
        }
    }
    
    const SocialIconPopover = withStyles((theme) => ({
        tooltip: {
          backgroundColor: theme.palette.common.white,
          color: 'rgba(0, 0, 0, 0)',
          boxShadow: theme.shadows[2],
          marginTop: 10,
          marginLeft: 0
         // fontSize: 11,
        },
      }))(Tooltip);

      const [hireDialogOpen, setHireDialogOpen] = useState(false);

      const handleHireDialogOpen = () => {
            setHireDialogOpen(true);
        };
      
        const handleHireDialogClose = () => {
            setHireDialogOpen(false);
        };
        async function handleMessage(){
            const res = await fetch("https://elance-be.herokuapp.com/api/v1/users/setContacted", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "senderUserId": myprofile.user[0]._id,
                    "receiverUserId": profile._id
                })
            });
            const res_json = await res.json();
            if(res_json.status === 200){
                router.push(`/Messenger?userId=${profile._id}`)
            }
            //console.log(" set contacted "+ JSON.stringify(res_json));
            // 
        }

    return (
        <div>
            <Head>
                <title>Elance | @{profile?.userName}</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"profile"} />
            { 
                ((session) || (profile && profile.name)) &&
            <div className="h-60 bg-[#666666] lg:flex justify-center space-x-5">
                <h1 className="text-white font-bold text-2xl text-center pt-10">{profile.fullName} | @{profile.userName}</h1>
            </div>
            }
            { 
                ((session) || (profile && profile.name)) &&
            <div className={`mx-8 lg:mx-60 mb-10 mt-5 lg:-mt-32 space-y-5`}>
                <div className="justify-center bg-white border border-[#c4c4c4] rounded-md">
                <div className="justify-between border-b border-[#c4c4c4] flex items-center p-5">
                    <h1 className="text-black font-bold text-lg italic">
                        About
                    </h1>
                    <h1 className="text-black font-semibold italic text-lg">
                        {profile.userType}
                    </h1>
                    {/* <img className="w-6 h-6 cursor-pointer transition duration-150 transform hover:scale-110" src={`${favourite ? "https://img.icons8.com/ios-filled/50/29b2fe/like--v1.png" : "https://img.icons8.com/ios/150/29b2fe/like--v1.png"}`} /> */}
                </div>
                <div className="p-5 lg:flex lg:space-x-5">
                    <img className="h-24 w-24" src={profile.profilePic}/>
                    <div className="space-y-5">
                        <div>
                            <h1 className="text-black font-bold text-lg italic">
                                Intro
                            </h1>
                            <h1 className="text-black text-lg">{profile.intro}</h1>
                        </div>
                        <div className="lg:grid lg:grid-cols-3">
                            <div>
                                <h1 className="text-black font-bold text-lg italic">
                                    Occupation
                                </h1>
                                <h1 className="text-black text-lg">
                                    {profile.occupation}
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-black font-bold text-lg italic">
                                    Phone
                                </h1>
                                <h1 className="text-black text-lg">
                                    {profile.phoneNumber}
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-black font-bold text-lg italic">
                                    City
                                </h1>
                                <h1 className="text-black text-lg">
                                    {profile.address ? profile.address[0] : "India"}
                                </h1>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-black font-bold text-lg italic">
                                Education
                            </h1>
                            <h1>
                                {profile.qualifications[0]? profile.qualifications[0].degree : "unknown"}
                            </h1>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-black font-bold text-lg italic">
                                Skills
                            </h1>
                            <h1>
                                {
                                profile.skills.map((skill) => (
                                    skill.name + " | "
                                ))
                                }
                            </h1>
                        </div>
                        <div className="lg:grid lg:grid-cols-2 space-y-3 lg:space-y-0">
                            <div className="space-y-2">
                                <h1 className="text-black font-bold text-lg italic">
                                    Social Profiles
                                </h1>
                                <div className="flex items-center space-x-3">
                                    <SocialIconPopover
                                        className="bg-white" 
                                        interactive
                                        arrow
                                        placement="bottom"
                                        title={
                                    <div className="p-1 text-base text-[#29b2fe] hover:underline">
                                        {profile.socialProfiles[0] ? profile.socialProfiles[0].url : "unknown"}
                                    </div>
                                    }>
                                        <img className="w-8 h-8 cursor-pointer transition duration-150 transform hover:scale-110" src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/>
                                    </SocialIconPopover>
                                    <SocialIconPopover
                                        className="bg-white" 
                                        interactive
                                        arrow
                                        placement="bottom"
                                        title={
                                    <div className="p-1 text-base text-[#29b2fe] hover:underline">
                                        {profile.socialProfiles[1] ? profile.socialProfiles[1].url : "unknown"}
                                    </div>
                                    }>
                                        <img className="w-8 h-8 cursor-pointer transition duration-150 transform hover:scale-110" src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v1.png"/>
                                    </SocialIconPopover>
                                    <SocialIconPopover
                                        className="bg-white" 
                                        interactive
                                        arrow
                                        placement="bottom"
                                        title={
                                    <div className="p-1 text-base text-[#29b2fe] hover:underline">
                                        {profile.socialProfiles[2] ? profile.socialProfiles[2].url : "unknown"}
                                    </div>
                                    }>
                                        <img className="w-8 h-8 cursor-pointer transition duration-150 transform hover:scale-110" src="https://img.icons8.com/ios-filled/50/000000/github.png"/>
                                    </SocialIconPopover>
                                    <SocialIconPopover
                                        className="bg-white" 
                                        interactive
                                        arrow
                                        placement="bottom"
                                        title={
                                    <div className="p-1 text-base text-[#29b2fe] hover:underline">
                                        {profile.website}
                                    </div>
                                    }>
                                        <img className="w-8 h-8 cursor-pointer transition duration-150 transform hover:scale-110" src="https://img.icons8.com/ios-filled/50/000000/domain.png"/>
                                    </SocialIconPopover>
                                    
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-black font-bold text-lg italic">
                                    e-mail
                                </h1>
                                <h1 className="cursor-pointer hover:underline hover:text-[#29b2fe] ">
                                    {profile.email}
                                </h1>
                            </div>
                            {
                             !isMyProfile &&
                            <div className="flex items-center space-x-5">
                                <button
                                    onClick={handleMessage}
                                    className="bg-[#29b2fe] text-sm lg:text-base text-white font-semibold px-5 h-9 rounded-md hover:bg-[#238ac2] focus:outline-none mt-10">Message</button>

                                <button
                                    onClick={handleHireDialogOpen}
                                    className="bg-[#29b2fe] text-sm lg:text-base text-white font-semibold px-5 h-9 rounded-md hover:bg-[#238ac2] focus:outline-none mt-10">Hire</button>
                            </div>}
                            <Dialog
                                open={hireDialogOpen}
                                onClose={handleHireDialogClose}>
                                <div>
                                    <HireFreelancer clientprofile={myprofile} freelancerprofile={profile}/>
                                </div>
                            </Dialog> 
                                                        
                        </div>
                        
                    </div>
                </div>
                
                </div>
                {/* <div class={`border border-[#c4c4c4] rounded-md mt-10`}> */}
                <div className="justify-between border border-[#c4c4c4] rounded-t-md flex items-center p-5">
                    <h1 className="text-black font-bold text-lg italic">
                        Personal projects & works
                    </h1>
                    {/* <img className="w-6 h-6 cursor-pointer transition duration-150 transform hover:scale-110" src={`${favourite ? "https://img.icons8.com/ios-filled/50/29b2fe/like--v1.png" : "https://img.icons8.com/ios/150/29b2fe/like--v1.png"}`} /> */}
                </div>
                <div className="lg:grid lg:grid-cols-3 mt-10 space-y-4 lg:space-x-4 lg:space-y-0">
                    {
                        profile.portfolioProjects.map((project) => (
                            <div className="p-3 space-y-3 rounded-b-md text-center border border-[#c4c4c4]">
                                <h1 className="font-semibold">{project.title}</h1>
                                <h1>{project.description}</h1>
                                <div>
                                        <h1 className="font-semibold">Skills and Tech stack</h1>
                                        <h1>{project.skills.join(" | ")}</h1>
                                </div>
                                <div>
                                    <Link href={project.project_url}>
                                        <h1 className="font-semibold text-[#29b2fe] cursor-pointer">view project</h1>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
            
            <div>
                <div className="justify-between border border-[#c4c4c4] rounded-t-md flex items-center p-5">
                    <h1 className="text-black font-bold text-lg italic">
                        Reviews & Ratings
                    </h1>
                    {/* <img className="w-6 h-6 cursor-pointer transition duration-150 transform hover:scale-110" src={`${favourite ? "https://img.icons8.com/ios-filled/50/29b2fe/like--v1.png" : "https://img.icons8.com/ios/150/29b2fe/like--v1.png"}`} /> */}
                </div>
                <div className="justify-between border border-[#c4c4c4] rounded-b-md p-5 space-y-5">
                    {
                        !isMyProfile && !(session && profile.reviews.map((review) => (review.reviewedBy._id)).includes(session.user.elanceprofile.user[0]._id)) &&
                        <div className="w-full space-y-3">
                            <h1 className="text-xl text-[#666666] font-bold">Give your rating</h1>
                            <RatingSet handleRating={handleMyGivenRating} editable={true}/> 
                            <textarea
                                type="text"
                                rows="2"
                                ref={myGivenReviewInpRef}
                                className="border border-[#666666] focus:outline-none text-[#0e1724] text-base font-semibold rounded-md p-2 flex-grow flex-shrink w-full h-full"
                                placeholder={`Know ${profile.fullName}? Write your thoughts and give a review.`}/>
                            <div className="flex justify-between">
                                <div/>
                                <h1 onClick={submitReviweRating} className="text-white font font-semibold px-4 py-2 bg-[#29b2fe] hover:bg-[#238ac2] rounded-md text-right cursor-pointer">Send</h1> 
                            </div>   
                             
                        </div>
                    }
                    {
                        !isMyProfile && (session && profile.reviews.map((review) => (review.reviewedBy._id)).includes(session.user.elanceprofile.user[0]._id)) &&
                        <h1 className="text-center text-xl font-bold w-full border-b border-[#c4c4c4] pb-3">
                            You have already given a review for this profile !
                        </h1>
                    }
                    {
                        profile.reviews && profile.reviews.map((review) => (
                            <div className="space-y-2 m-1">
                                <h1 onClick={() => router.push(`/Profile?id=${review.reviewedBy._id}`)} className="cursor-pointer text-lg text-[#29b2fe] hover:underline font-semibold">
                                    {review.reviewedBy.fullName} | @{review.reviewedBy.userName}
                                </h1>
                                <h1 className="text-base font-semibold text-[#666666]">
                                    {review.description}
                                </h1>
                                <div>
                                    <RatingSet editable={false} rating={review.rating} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
                
            </div>
            }
            {
                (!session || !session.user || loading) &&
                <Dialog
                        open={true}
                        >
                        <div className="animate-pulse flex items-center justify-center p-5">
                            <img
                                className="w-12 h-12"
                                src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                            <h1 className="italic text-xl font-extrabold -ml-3 text-[#0e1724] hidden lg:flex">elance</h1>    
                        </div>
                    </Dialog> 
            }
        </div>
    )
}

export async function getServerSideProps(context){

    const userId = context.query.id;
    if(userId){
        const reqBody = {
                "_id": userId,
        }
        const otherUserProfile = await fetch("https://elance-be.herokuapp.com/api/v1/users/getAllUsers", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        });
        const otherUserProfile_json = await otherUserProfile.json();
        return{
            props:{
                profile : otherUserProfile_json.users[0]
            }
        }
    }else{
        return{
            props:{
                profile : "no-id"
            }
        }
    }
        
}

export default Profile
