import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useSession } from 'next-auth/client';

function Profile() {
    var favourite = true;
    const [session] = useSession();
    const userimg = (session && session.user && session.user.image) ? session.user.image : "";
    return (
        <div>
            <Head>
                <title>Elance | Profile</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"profile"}/>
            <div className="h-60 bg-[#666666] lg:flex justify-center space-x-5">
                <div className="pt-5">
                    <h1 className="text-white text-center italic">First Name</h1>
                    <h1 className="text-white font-bold text-2xl text-center">Sai Sharan</h1> 
                </div>
                <div className="pt-5">
                    <h1 className="text-white text-center italic">Last Name</h1>
                    <h1 className="text-white font-bold text-2xl text-center">Beepeta</h1> 
                </div>
                <div className="pt-5">
                    <h1 className="text-white text-center italic">User Name</h1>
                    <h1 className="text-white font-bold text-2xl text-center">@sharan2565</h1> 
                </div>
                {/* <div className="pt-11">
                    <h1 className="text-white font-bold text-2xl text-center"> Freelancer</h1>
                </div> */}
                
            </div>
            <div className={`mx-8 lg:mx-60 mb-10 mt-5 lg:-mt-32 space-y-5`}>
                <div className="justify-center bg-white border border-[#c4c4c4] rounded-md">
                <div className="justify-between border-b border-[#c4c4c4] flex items-center p-5">
                    <h1 className="text-black font-bold text-lg italic">
                        About
                    </h1>
                    <h1 className="text-black font-semibold italic text-lg">
                        Freelancer
                    </h1>
                    {/* <img className="w-6 h-6 cursor-pointer transition duration-150 transform hover:scale-110" src={`${favourite ? "https://img.icons8.com/ios-filled/50/29b2fe/like--v1.png" : "https://img.icons8.com/ios/150/29b2fe/like--v1.png"}`} /> */}
                </div>
                <div className="p-5 lg:flex lg:space-x-5">
                    <img className="h-24 w-24" src={userimg}/>
                    <div className="space-y-5">
                        <div>
                            <h1 className="text-black font-bold text-lg italic">
                                Intro
                            </h1>
                            <h1 className="text-black text-lg">
                                Hey this is my intro. I am an intro page where you can view and edit my profile Hey this is my intro. I am an intro page where you can view and edit my profile
                            </h1>
                        </div>
                        <div className="lg:grid lg:grid-cols-3">
                            <div>
                                <h1 className="text-black font-bold text-lg italic">
                                    Occupation
                                </h1>
                                <h1 className="text-black text-lg">
                                    Software Developer
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-black font-bold text-lg italic">
                                    Phone
                                </h1>
                                <h1 className="text-black text-lg">
                                    +91 9284659649
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-black font-bold text-lg italic">
                                    City
                                </h1>
                                <h1 className="text-black text-lg">
                                    Hyderabad, India
                                </h1>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-black font-bold text-lg italic">
                                Education
                            </h1>
                            <h1>
                                Bachelors of Technology in Electronics and Communication
                            </h1>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-black font-bold text-lg italic">
                                Skills
                            </h1>
                            <h1>
                                ReactJs | NodeJs | MongoDB | GraphQL | NextJS | JavaScript
                            </h1>
                        </div>
                        <div className="lg:grid lg:grid-cols-2 space-y-3 lg:space-y-0">
                            <div className="space-y-2">
                                <h1 className="text-black font-bold text-lg italic">
                                    Social Profiles
                                </h1>
                                <div className="flex items-center space-x-3">
                                    <img className="w-8 h-8 cursor-pointer transition duration-150 transform hover:scale-110" src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/>
                                    <img className="w-8 h-8 cursor-pointer transition duration-150 transform hover:scale-110" src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v1.png"/>
                                    <img className="w-8 h-8 cursor-pointer transition duration-150 transform hover:scale-110" src="https://img.icons8.com/ios-filled/50/000000/github.png"/>
                                    <img className="w-8 h-8 cursor-pointer transition duration-150 transform hover:scale-110" src="https://img.icons8.com/ios-filled/50/000000/domain.png"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-black font-bold text-lg italic">
                                    e-mail
                                </h1>
                                <h1 className="cursor-pointer hover:underline hover:text-[#29b2fe] ">
                                    saisharan2565@gmail.com
                                </h1>
                            </div>

                        </div>
                        
                    </div>
                </div>
                <div className="justify-between border-b border-[#c4c4c4] flex items-center p-5">
                    <h1 className="text-black font-bold text-lg italic">
                        Projects & Works
                    </h1>
                    {/* <img className="w-6 h-6 cursor-pointer transition duration-150 transform hover:scale-110" src={`${favourite ? "https://img.icons8.com/ios-filled/50/29b2fe/like--v1.png" : "https://img.icons8.com/ios/150/29b2fe/like--v1.png"}`} /> */}
                </div>
                <div className="lg:grid lg:grid-cols-3">
                    <div className="p-3 space-y-3 rounded-md hover:bg-gray-50 text-center">
                       <h1 className="font-semibold">Project title Project title</h1>
                       <h1>Project Description Project Description</h1>
                       <div>
                            <h1 className="font-semibold">Skills and Tech stack</h1>
                            <h1>ReactJs | NodeJs | MongoDB | GraphQL | NextJS | JavaScript</h1>
                       </div>
                       <div>
                            <h1 className="font-semibold text-[#29b2fe] cursor-pointer">view project</h1>
                       </div>
                   </div>
                   <div className="p-3 space-y-3 rounded-md hover:bg-gray-50 text-center">
                       <h1 className="font-semibold">Project title Project title</h1>
                       <h1>Project Description Project Description</h1>
                       <div>
                            <h1 className="font-semibold">Skills and Tech stack</h1>
                            <h1>ReactJs | NodeJs | MongoDB | GraphQL | NextJS | JavaScript</h1>
                       </div>
                       <div>
                            <h1 className="font-semibold text-[#29b2fe] cursor-pointer">view project</h1>
                       </div>
                   </div>
                   <div className="p-3 space-y-3 rounded-md hover:bg-gray-50 text-center">
                       <h1 className="font-semibold">Project title Project title</h1>
                       <h1>Project Description Project Description Project Description Project Description Project Description Project Description</h1>
                       <div>
                            <h1 className="font-semibold">Skills and Tech stack</h1>
                            <h1>ReactJs | NodeJs | MongoDB | GraphQL | NextJS | JavaScript</h1>
                       </div>
                       <div>
                            <h1 className="font-semibold text-[#29b2fe] cursor-pointer">view project</h1>
                       </div>
                   </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
