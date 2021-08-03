import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useSession, getSession, session} from 'next-auth/client';
import HireFreelancer from '../components/search/HireFreelancer';
import {useState} from 'react';
import { Dialog } from '@material-ui/core';
import {useRouter} from 'next/router';

function Profile({profile, myprofile, }) {
    const [session] = useSession();
    const router = useRouter();
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
        console.log(JSON.stringify({
            "senderUserId": myprofile._id,
            "revieverUserId": profile._id
        }));
        async function handleMessage(){
            const res = await fetch("http://elance-be.herokuapp.com/api/v1/users/setContacted", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "senderUserId": myprofile._id,
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
                <title>Elance | @{profile.userName}</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"profile"}/>
            <div className="h-60 bg-[#666666] lg:flex justify-center space-x-5">
             <h1 className="text-white font-bold text-2xl text-center pt-10">{profile.fullName} | @{profile.userName}</h1>
                {/* <div className="pt-5">
                    <h1 className="text-white text-center italic">First Name</h1>
                    <h1 className="text-white font-bold text-2xl text-center">{profile.firstName}</h1> 
                </div>
                <div className="pt-5">
                    <h1 className="text-white text-center italic">Last Name</h1>
                    <h1 className="text-white font-bold text-2xl text-center">{profile.lastName}</h1> 
                </div>
                <div className="pt-5">
                    <h1 className="text-white text-center italic">User Name</h1>
                    <h1 className="text-white font-bold text-2xl text-center">{profile.userName}</h1> 
                </div> */}
            </div>
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
                            <div className="flex items-center space-x-5">
                                <button
                                    onClick={handleMessage}
                                    className="bg-[#29b2fe] text-sm lg:text-base text-white font-semibold px-5 h-9 rounded-md hover:bg-[#238ac2] focus:outline-none mt-10">Message</button>

                                <button
                                    onClick={handleHireDialogOpen}
                                    className="bg-[#29b2fe] text-sm lg:text-base text-white font-semibold px-5 h-9 rounded-md hover:bg-[#238ac2] focus:outline-none mt-10">Hire</button>
                            </div>
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
                        Projects & Works
                    </h1>
                    {/* <img className="w-6 h-6 cursor-pointer transition duration-150 transform hover:scale-110" src={`${favourite ? "https://img.icons8.com/ios-filled/50/29b2fe/like--v1.png" : "https://img.icons8.com/ios/150/29b2fe/like--v1.png"}`} /> */}
                </div>
                <div className="lg:grid lg:grid-cols-3 mt-10">
                    {
                        profile.portfolioProjects.map((project) => (
                            <div className="p-3 space-y-3 rounded-md text-center border border-[#c4c4c4] mx-3">
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
                {/* </div> */}
            </div>
        </div>
    )
}

export async function getServerSideProps(context){

    const userId = context.query.id;
    const reqBody = {
        "_id": userId,
    }
    const otherUserProfile = await fetch("http://elance-be.herokuapp.com/api/v1/users/getAllUsers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody)
    });
    const otherUserProfile_json = await otherUserProfile.json();
    const nextAuthSession = await getSession(context);
    if(nextAuthSession && nextAuthSession.user && nextAuthSession.user.email){
        const email = nextAuthSession.user.email;
        const myprofile = await fetch("http://elance-be.herokuapp.com/api/v1/users/getUserByEmail",{
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "email": email
                            })
                        });
        const myprofile_json = await myprofile.json();
        return{
            props:{
                profile : otherUserProfile_json.users[0],
                myprofile: myprofile_json.user[0]
            }
        }
    }
    return{
        props:{
            profile : otherUserProfile_json.users[0]
        }
    }    
}

export default Profile
