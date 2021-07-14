import Head from 'next/head'
import {useSession} from 'next-auth/client';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

function CreateProfile() {
    const [session] = useSession();
    const router = useRouter();
    const [userType, setUserType] = useState("");
    const [createViewContext, setViewContext] = useState("1");

    var username, f_name, l_name, email, names;

    username = session && session.user ? session.user.name : "";

    if(username.includes(" ")){
        var names = username.split(" ");;
        f_name = names[0];
        l_name = names[1];
    }
    else{
        f_name = username;
        l_name = "";
    }

    email = session && session.user && session.user.email ? session.user.email : "error fetching your email";
    return (
        <div>
            <Head>
                <title>Elance | Create Profile</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            {/* header */}
            <div className="border-b border-gray-200">
               
                <div className="lg:mx-32 mx-5 my-3">
                    <div className="flex cursor-pointer items-center">
                        <img
                            className="w-12 h-12"
                            src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                        <h1 className="italic text-xl font-extrabold -ml-3 text-[#0e1724]">elance</h1>
                    </div>
                </div>
                
            </div>
            {/* header */}
            <div className="" >
                <div className="w-full flex items-center my-10">
                    <div className="flex justify-center w-full items-center">
                        {/* initial page in create profile */}
                        <div id="create_profile_initial" className={`${createViewContext !== "1" && "hidden"} px-1 lg:px-10 py-5 rounded-lg space-y-5 lg:border border-[#c4c4c4]`}>
                            <div className="space-y-2"> 
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-2xl font-bold ">Complete your free account setup</h1>
                                </div>
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-xl">{email}</h1>
                                </div>
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-[#29b2fe] font-semibold">Step 1 of 4</h1>
                                </div>
                            </div>
                            <div className="space-y-5 lg:flex lg:space-x-3 lg:space-y-0">
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/90/666666/user--v1.png"/>
                                    <input
                                        type="text"
                                        defaultValue={f_name}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="First Name"/>    
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/90/666666/user--v1.png"/>
                                    <input
                                        type="text"
                                        defaultValue={l_name}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Last Name"/>    
                                </div>
                            </div>   
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/90/666666/email.png"/>
                                <input
                                    type="text"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Set a user name"/>    
                            </div>
                            <div className="space-y-5 hidden lg:space-x-3 lg:space-y-0">
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/metro/104/666666/password.png"/>
                                    <input
                                        type="password"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Set a password"/>    
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/metro/104/666666/password.png"/>
                                    <input
                                        type="password"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Re-enter your password"/>    
                                </div>
                            </div>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-5">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/world.png"/>
                                {/* To-Do replace with country select list <select></select> */}
                                <input
                                    type="text"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Type your country name"/>    
                            </div>
                            <div className="flex cursor-pointer items-center justify-center">
                                <h1 className="font-extrabold -ml-3 text-[#0e1724]">I want to </h1>
                            </div>

                            <div className="space-y-5 lg:flex lg:space-y-0 ">
                                <div  onClick={() => setUserType("C")} className={`hover:bg-[#29b2fe] hover:border-[#29b2fe] hover:text-white hover:font-semibold ${userType === "C" && "bg-[#29b2fe] border-[#29b2fe] text-white font-semibold"} px-8 py-2 border-2 border-gray-400 rounded-md lg:rounded-l-md lg:rounded-r-none flex items-center space-x-5 w-full cursor-pointer text-[#666666] `}>
                                    <h1>Hire for a project</h1>
                                </div>
                                <div onClick={() => setUserType("F")} className={`hover:bg-[#29b2fe] hover:border-[#29b2fe] hover:font-semibold ${userType === "F" && "bg-[#29b2fe] border-[#29b2fe] text-white font-semibold"} border-2 border-gray-400 px-8 py-2 rounded-md lg:rounded-r-md lg:rounded-l-none flex items-center space-x-5 w-full cursor-pointer text-[#666666] hover:text-white`}>
                                    <h1>Work as a freelancer</h1>
                                </div>
                            </div>  
                            <div className="flex cursor-pointer items-center justify-center">
                                <button onClick={() => setViewContext("2")} type="submit" className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
                            </div>                            
                        </div>


                        <div id="create_profile_second" className={`${createViewContext !== "2" && "hidden"} px-1 lg:px-10 py-5 rounded-lg space-y-5 lg:border border-[#c4c4c4]`}>
                            <div className="space-y-2"> 
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-2xl font-bold ">Complete your free account setup</h1>
                                </div>
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-xl">{email}</h1>
                                </div>
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-[#29b2fe] font-semibold">Step 2 of 4</h1>
                                </div>
                            </div>

                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/portfolio.png"/>
                                <input
                                    type="text"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="What's your occupation?"/>    
                            </div>

                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/material-rounded/160/666666/employee-card.png"/>
                                <input
                                    type="text"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Write a short intro about yourself."/>    
                            </div>

                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/apple-phone.png"/>
                                <input
                                    type="tel"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Phone"/>    
                            </div>
                            <h1>Social Links </h1>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/linkedin.png"/>
                                <input
                                    type="url"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Paste a link to your LinkedIn profile"/>    
                            </div>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/github.png"/>
                                <input
                                    type="url"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Paste a link to your GitHub profile"/>    
                            </div>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/facebook--v1.png"/>
                                <input
                                    type="url"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Paste a link to your Facebook profile"/>    
                            </div>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/resume-website.png"/>
                                <input
                                    type="url"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Paste a link to your portfolio website"/>    
                            </div>
                            <div className="flex cursor-pointer items-center justify-center space-x-5">
                                <button onClick={() => setViewContext("1")} type="submit" className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] rounded-md place-self-center focus:outline-none text-sm font-semibold">Previous</button>
                                <button onClick={() => setViewContext("3")} type="submit" className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
                            </div> 
                        </div>

                        <div id="create_profile_third" className={`${createViewContext !== "3" && "hidden"} px-1 lg:px-10 py-5 rounded-lg space-y-5 lg:border border-[#c4c4c4]`}>
                            <div className="space-y-2"> 
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-2xl font-bold ">Complete your free account setup</h1>
                                </div>
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-xl">{email}</h1>
                                </div>
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-[#29b2fe] font-semibold">Step 3 of 4</h1>
                                </div>
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="">Tell us about your 3 prominent works and projects</h1>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h1>Project 1</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/title.png"/>
                                    <input
                                        type="text"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="A short title of your project"/>
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/material-outlined/96/666666/details-pane.png"/>
                                    <input
                                        type="text"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="What is your project about?"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/visualization-skill.png"/>
                                    <input
                                        type="text"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="skills or tech stack ( , separated)"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/resume-website.png"/>
                                    <input
                                        type="url"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Paste a url link"/>    
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <h1>Project 2</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/title.png"/>
                                    <input
                                        type="text"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="A short title of your project"/>
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/material-outlined/96/666666/details-pane.png"/>
                                    <input
                                        type="text"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="What is your project about?"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/visualization-skill.png"/>
                                    <input
                                        type="text"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="skills or tech stack ( , separated)"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/resume-website.png"/>
                                    <input
                                        type="url"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Paste a url link"/>    
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h1>Project 3</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/title.png"/>
                                    <input
                                        type="text"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="A short title of your project"/>
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/material-outlined/96/666666/details-pane.png"/>
                                    <input
                                        type="text"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="What is your project about?"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/visualization-skill.png"/>
                                    <input
                                        type="text"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="skills or tech stack ( , separated)"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/resume-website.png"/>
                                    <input
                                        type="url"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Paste a url link"/>    
                                </div>
                            </div>

                            <div className="flex cursor-pointer items-center justify-center space-x-5">
                                <button onClick={() => setViewContext("2")} type="submit" className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] rounded-md place-self-center focus:outline-none text-sm font-semibold">Previous</button>
                                <button onClick={() => setViewContext("4")} type="submit" className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
                            </div>
                         </div>

                         <div id="create_profile_third" className={`${createViewContext !== "4" && "hidden"} px-1 lg:px-10 py-5 rounded-lg space-y-5 lg:border border-[#c4c4c4]`}>
                            <div className="space-y-2"> 
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-2xl font-bold ">Complete your free account setup</h1>
                                </div>
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-xl">{email}</h1>
                                </div>
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-[#29b2fe] font-semibold">Step 4 of 4</h1>
                                </div>
                            </div>
                            <h1>Skills</h1>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/visualization-skill.png"/>
                                <input
                                    type="text"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder={userType === "F" ? "Add your skills separated by ( , )" : "Add required skills separated by ( , )"}/>   
                            </div>
                            <h1>Education</h1>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/education.png"/>
                                <input
                                    type="text"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="What's your highest qualification?"/>   
                            </div>
                            <div className="flex cursor-pointer items-center justify-center space-x-5">
                                <button onClick={() => setViewContext("3")} type="submit" className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] rounded-md place-self-center focus:outline-none text-sm font-semibold">Previous</button>
                                <button onClick={() => router.push("/HomePage")} type="submit" className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Create My Account</button>
                            </div>
                        </div>


                    </div>            
                </div>
            </div>
            
           



        </div>
    )
}

export default CreateProfile
