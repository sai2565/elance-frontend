import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomSlider from '../components/homepage/CustomSlider';
import PopularServicesSlider from '../components/landingpage/PopularServicesSlider';
import HomeOptions from '../components/homepage/HomeOptions';
import Head from 'next/head';
import { useSession, getSession, session} from 'next-auth/client';
import { useRouter } from "next/router";
import MyFeed from '../components/homepage/MyFeed';
import { Dialog } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { InvertColorsOffTwoTone } from '@material-ui/icons';

function HomePage({feed}) {
    const router = useRouter();
    const [session] = useSession();
    // console.log("HomePage : Feed Data"+ JSON.stringify(feed));
    // console.log(session);

    try{
        if(feed === "newuser") {router.push('/CreateProfile');}
        else if(feed === "nosession") {router.push('/');}
    }catch(error){
        console.log("HomePage : router called from server");
    }
    // console.log(session);
    // 
    // const [userType, setUserType] = useState("");
    // const userName = status === "nosession" ? "Guest User" : profile?.user[0].fullName;
  
    return (
        <div >
            <Head>
                <title>Elance | Home</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            {
                session && feed !== "nosession" && feed !== "newuser" &&
                <Header page={"home"}/>
            }
            
             {
                session && feed !== "nosession" && feed !== "newuser" &&
                <div className={`mx-5 lg:mx-32 mb-10`}>
                    {/* <div className="grid grid-cols-1 lg:grid-cols-4 pt-5"> */}
                    <div className="flex justify-between pt-5 lg:grid lg:grid-cols-4 items-center">
                        <div className="flex items-center space-x-3 lg:col-span-3">
                            <h1 className="text-lg font-bold text-[#4c4c4c]">{`Welcome, ${session?.user.elanceprofile.user[0].userName}`}</h1>
                            <img className="animate-wave w-10 h-10 hidden lg:flex" src="https://threejs-journey.xyz/assets/images/hand-emoji-100x100.png"></img>
                        </div>
                        <div className="flex lg:col-span-1 lg:justify-center items-center">
                            <h1 className="text-xl italic font-bold">
                                {session.user.elanceprofile.user[0].userType}
                            </h1>
                        </div>
                    </div>
                        
                    {/* </div> */}
                    <div className="mt-10">
                        <div className="grid grid-cols-1 lg:grid-cols-4">
                            <div className="col-span-1 lg:col-span-3 space-y-5">
                                <CustomSlider />
                                <MyFeed feed={feed}/>
                            </div>

                            <div className={`lg:col-span-1 lg:flex justify-center`}>
                                <div className="space-y-10">
                                    <div className=" items-center place-items-center flex justify-center">
                                        <h1 onClick={() => router.push('/PostProject')}  h1 className={`bg-yellow-400 px-5 py-2 text-white font-bold rounded-md cursor-pointer text-center hover:bg-yellow-500  ${ session.user.elanceprofile.user[0].userType === "client" ? "hidden lg:flex" : "hidden"}`}>
                                            Post a Project
                                        </h1>
                                    </div>
                                    <HomeOptions />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                  
            }
            {
                session && session.user &&
                <Footer className=""/>
            }
            {
                (!session || !session.user) &&
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

export async function getServerSideProps(context) {

    const session = await getSession(context);
    
    if(!session || !session.user) 
        return {
            props: {
                feed: "nosession"
            }
        }

    const elanceprofile = session.user.elanceprofile;

    if(elanceprofile && elanceprofile.user){

        if((elanceprofile.user[0].userType === 'client')){
            const freelancers = await fetch("https://elance-be.herokuapp.com/api/v1/users/getAllUsers?page=1&size=10", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ 
                                    "userType": "freelancer"
                                })
                            });
            const freelancers_json = await freelancers.json();
            return {
                props: {
                    feed: freelancers_json
                }
            }
        }

        else if((elanceprofile.user[0].userType === 'freelancer')){
            const projects = await fetch("https://elance-be.herokuapp.com/api/v1/projects/getAllProjects?page=1&size=10",{
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({})
                            });
            const projects_json = await projects.json();
            return {
                props: {
                    feed: projects_json
                }
            } 
        }

    }

    return{
        props: {
            feed: "newuser"
        }
    }

  }
  
export default HomePage