import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomSlider from '../components/homepage/CustomSlider';
import PopularServicesSlider from '../components/landingpage/PopularServicesSlider';
import HomeOptions from '../components/homepage/HomeOptions';
import Head from 'next/head';
import { useSession, getSession, session} from 'next-auth/client';
import { useRouter } from "next/router";
import MyFeed from '../components/homepage/MyFeed';
import { useEffect, useState } from 'react';
import { InvertColorsOffTwoTone } from '@material-ui/icons';

function HomePage({profile, slider}) {
    const router = useRouter();
    const [session] = useSession();
    console.log("slider"+  JSON.stringify(slider));
    const [userType, setUserType] = useState("");
    useEffect(() => {
        if(profile.user){
            setUserType(profile.user[0].userType);
        }
        else{ 
            try{
                router.push('/CreateProfile');
            } catch (error) {}
        }
    });   
    return (
        <div >
            <Head>
                <title>Elance | Home</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"home"}/>
            <div className={`mx-5 lg:mx-32 mb-10`}>
                <div className="grid grid-cols-1 lg:grid-cols-4 pt-5">
                    <div className="flex items-end space-x-3 col-span-1 lg:col-span-3">
                        <h1 className="text-lg font-bold text-[#4c4c4c]">{`Welcome, ${session && session.user ? session.user.name : "Guest User"}`}</h1>
                        <img className="animate-wave w-10 h-10" src="https://threejs-journey.xyz/assets/images/hand-emoji-100x100.png"></img>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        <div className="col-span-1 lg:col-span-3 space-y-5">
                            {/* <CustomSlider profile={profile} slider_data={slider}/>   */}
                            {/* <MyFeed profile={profile} slider_data={slider} /> */}
                        </div>

                        <div className="hidden lg:col-span-1 lg:flex justify-center">
                            <div className="space-y-10">
                                <div className=" items-center place-items-center flex justify-center">
                                    <h1 onClick={() => router.push('/PostProject')}  h1 className={`bg-yellow-400 px-5 py-2 text-white font-bold rounded-md cursor-pointer text-center hover:bg-yellow-500  ${ userType === "client" ? "hidden lg:flex" : "hidden"}`}>
                                        Post a Project
                                    </h1>
                                </div>
                                <HomeOptions userType={userType}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* */}
            </div>
             <Footer className=""/>  
        </div>
        
    )
}

export async function getServerSideProps(context) {
    const nextAuthSession = await getSession(context);
    if(nextAuthSession && nextAuthSession.user && nextAuthSession.user.email){
        const email = nextAuthSession.user.email;
        const profile = await fetch("http://elance-be.herokuapp.com/api/users/getUserByEmail",{
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "email": email
                            })
                        });
        const profile_json = await profile.json();
        if(profile_json.user && profile_json.user[0].userType === "client"){
            const userInternalId = profile_json.user[0]._id;
            const slider = await fetch("http://elance-be.herokuapp.com/api/projects/getAllProjects",{
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    "postedBy": userInternalId
                                })
                            });
            const slider_json = await slider.json();
            return {
                props: {
                    profile: profile_json,
                    slider: slider_json
                }
            }         
        }
        return {
            props: {
                profile: profile_json
            }
        }
    } 
  }
  
export default HomePage