import Head from 'next/head'
import {useSession} from 'next-auth/client';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from '@material-ui/core';

function CreateProfile() {
    const [session] = useSession();
    const router = useRouter();
    const [createViewContext, setViewContext] = useState("1");

    var username, f_name, l_name, email, names
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

    //input references
    //step1
    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);
    const userNameInputRef = useRef(null);
    const countryInputRef = useRef(null);
    const [userType, setUserType] = useState("");
    const [isStep1Validated, setStep1Validated] = useState("I");
    
    //step2
    const occupationInputRef = useRef(null);
    const introInputRef = useRef(null);
    const phoneInputRef = useRef(null);
    const linkedInputRef = useRef(null);
    const githubInputRef = useRef(null);
    const fbInputRef = useRef(null);
    const websiteInputRef = useRef(null);
    const [isStep2Validated, setStep2Validated] = useState("I");
    
    //step3
    const proj1TitInputRef = useRef(null);
    const proj1DescInputRef = useRef(null);
    const proj1SkillsInputRef = useRef(null);
    const proj1UrlInputRef = useRef(null);

    const proj2TitInputRef = useRef(null);
    const proj2DescInputRef = useRef(null);
    const proj2SkillsInputRef = useRef(null);
    const proj2UrlInputRef = useRef(null);

    const proj3TitInputRef = useRef(null);
    const proj3DescInputRef = useRef(null);
    const proj3SkillsInputRef = useRef(null);
    const proj3UrlInputRef = useRef(null);

    const [isStep3Validated, setStep3Validated] = useState("I");

    //step4
    const skillsInputRef = useRef(null);
    const educationInputRef = useRef(null);
    const [isStep4Validated, setStep4Validated] = useState("I");



    const validateStep1 = () => {
        var firstName = firstNameInputRef.current.value;
        if(firstName){
            var lastName = lastNameInputRef.current.value;
            if(lastName){
                var userName = userNameInputRef.current.value;
                if(userName){
                    var country = countryInputRef.current.value;
                    if(country){
                        if(userType !== ""){
                            setViewContext("2");
                            setStep1Validated("T");
                        } else{ setStep1Validated("F"); } 
                    } else{ setStep1Validated("F"); } 
                } else{ setStep1Validated("F"); } 
            } else{ setStep1Validated("F"); } 
        } else{ setStep1Validated("F"); } 
    }

    const validateStep2 = () => {
        var occupation = occupationInputRef.current.value;
        if(occupation){
            var intro = introInputRef.current.value;
            if(intro){
                var phone = phoneInputRef.current.value;
                if(phone){
                    var linkedin = linkedInputRef.current.value;
                    var fb = fbInputRef.current.value;
                    var website = websiteInputRef.current.value;
                    var github = githubInputRef.current.value;
                    if(linkedin || fb || website|| github ){
                        setViewContext("3");
                        setStep2Validated("T");
                    } else{ setStep2Validated("F"); }
                } else{ setStep2Validated("F"); }
            } else{ setStep2Validated("F"); }
        } else{ setStep2Validated("F"); }
    }

    const validateStep3 = () => {
        var proj1Title = proj1TitInputRef.current.value;
        var proj1Desc = proj1DescInputRef.current.value;
        var proj1Skills = proj1SkillsInputRef.current.value;
        var proj1URL = proj1UrlInputRef.current.value;
        var proj2Title = proj2TitInputRef.current.value;
        var proj2Desc = proj2DescInputRef.current.value;
        var proj2Skills = proj2SkillsInputRef.current.value;
        var proj2URL = proj2UrlInputRef.current.value;
        var proj3Title = proj3TitInputRef.current.value;
        var proj3Desc = proj3DescInputRef.current.value;
        var proj3Skills = proj3SkillsInputRef.current.value;
        var proj3URL = proj3UrlInputRef.current.value;
        if(
            proj1Title && proj1Desc && proj1Skills && proj1URL &&
            proj2Title && proj2Desc && proj2Skills && proj2URL &&
            proj3Title && proj3Desc && proj3Skills && proj3URL
        ){
            setViewContext("4");
            setStep3Validated("T");
        }else{
            setStep3Validated("F");
        }
    }

    const validateStep4 = () => {
        var skills = skillsInputRef.current.value;
        var education = educationInputRef.current.value;
        if(skills && education){
            setStep4Validated("T");
            //register user
            registerUser();
        }else{
            setStep4Validated("F");
        }
    }

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function registerUser() {
        
        console.log("Registring user..");
        if(session && session.user && session.user.email){
            var email = session.user.email;
            var image = session.user.image ? session.user.image : "";
            var skills = skillsInputRef.current.value.split(",");
            var skillsObjects = [];
            skills.forEach(skill => {
                skillsObjects.push({"name":skill});

            });
            console.log(skillsObjects);
            setLoading(true);
            const res = await fetch("https://elance-be.herokuapp.com/api/users/registerUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "fullName": firstNameInputRef.current.value + " " + lastNameInputRef.current.value,
                "firstName": firstNameInputRef.current.value,
                "lastName": lastNameInputRef.current.value,
                "email": email,
                "userName": userNameInputRef.current.value,
                "userType": userType,
                "occupation": occupationInputRef.current.value,
                "intro": introInputRef.current.value,
                "profilePic": image,
                "phoneNumber": phoneInputRef.current.value,
                "address": [countryInputRef.current.value],
                "website": websiteInputRef.current.value,
                "resume":"",
                // "socialProfiles": [{
                //         "name":"facebook",
                //         "url": linkedInputRef.current.value       
                //     },{
                //         "name":"linkedin",
                //         "url": linkedInputRef.current.value,      
                //     },{
                //         "name":"github",
                //         "url": linkedInputRef.current.value
                //     }],
                "qualifications":[{
                    "degree": educationInputRef.current.value
                    }],
                "skills": skillsObjects,
                "portfolioProjects":[
                    {
                    "title": proj1TitInputRef.current.value,
                    "description": proj1DescInputRef.current.value,
                    "skills": proj1SkillsInputRef.current.value.split(","),
                    "project_url": proj1UrlInputRef.current.value
                    },{
                    "title": proj2TitInputRef.current.value,
                    "description": proj2DescInputRef.current.value,
                    "category": proj2SkillsInputRef.current.value.split(","),
                    "project_url": proj2UrlInputRef.current.value
                    },{
                    "title": proj3TitInputRef.current.value,
                    "description": proj3DescInputRef.current.value,
                    "category": proj3SkillsInputRef.current.value.split(","),
                    "project_url": proj3UrlInputRef.current.value
                    } 
                ],
                }),
            });
            const user = await res.json();
            console.log(user);
            setLoading(false);
            if(user.message){
                setErrorMessage(user.message);
            }else{
                router.push('/HomePage')
            }
        }
      }

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
                <div className="w-full items-center my-10">
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
                                        ref={firstNameInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="First Name"/>    
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/90/666666/user--v1.png"/>
                                    <input
                                        type="text"
                                        defaultValue={l_name}
                                        ref={lastNameInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Last Name"/>    
                                </div>
                            </div>   
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/90/666666/email.png"/>
                                <input
                                    type="text"
                                    ref={userNameInputRef}
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
                                    ref={countryInputRef}
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Type your country name"/>    
                            </div>
                            <div className="flex cursor-pointer items-center justify-center">
                                <h1 className="font-extrabold -ml-3 text-[#0e1724]">I want to </h1>
                            </div>

                            <div className="space-y-5 lg:flex lg:space-y-0 ">
                                <div  onClick={() => setUserType("client")} className={`${userType === "client" ? "bg-[#29b2fe] border-[#29b2fe] text-white font-semibold" : "text-[#666666]"} px-8 py-2 border-2 border-gray-400 rounded-md lg:rounded-l-md lg:rounded-r-none flex items-center space-x-5 w-full cursor-pointer `}>
                                    <h1>Hire for a project</h1>
                                </div>
                                <div onClick={() => setUserType("freelancer")} className={`${userType === "freelancer" ? "bg-[#29b2fe] border-[#29b2fe] text-white font-semibold": "text-[#666666]"} border-2 border-gray-400 px-8 py-2 rounded-md lg:rounded-r-md lg:rounded-l-none flex items-center space-x-5 w-full cursor-pointer`}>
                                    <h1>Work as a freelancer</h1>
                                </div>
                            </div>
                            <div className="flex cursor-pointer items-center justify-center">
                                <h1 className={`text-sm text-[#E74C3C] font-semibold ${isStep1Validated === "F" ? "flex" : "hidden" }`} >* Please fill all the details and continue *</h1>
                            </div>
                            <div className="flex cursor-pointer items-center justify-center">
                                <button onClick={validateStep1} type="submit" className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
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
                                    ref={occupationInputRef}
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="What's your occupation?"/>    
                            </div>

                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/material-rounded/160/666666/employee-card.png"/>
                                <input
                                    type="text"
                                    ref={introInputRef}
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Write a short intro about yourself."/>    
                            </div>

                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/apple-phone.png"/>
                                <input
                                    type="tel"
                                    ref={phoneInputRef}
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Phone"/>    
                            </div>
                            <h1>Social Links </h1>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/linkedin.png"/>
                                <input
                                    type="url"
                                    ref={linkedInputRef}
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Paste a link to your LinkedIn profile"/>    
                            </div>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/github.png"/>
                                <input
                                    type="url"
                                    ref={githubInputRef}
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Paste a link to your GitHub profile"/>    
                            </div>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/facebook--v1.png"/>
                                <input
                                    type="url"
                                    ref={fbInputRef}
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Paste a link to your Facebook profile"/>    
                            </div>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/resume-website.png"/>
                                <input
                                    type="url"
                                    ref={websiteInputRef}
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Paste a link to your portfolio website"/>    
                            </div>
                            <div className="flex cursor-pointer items-center justify-center">
                                <h1 className={`text-sm text-[#E74C3C] font-semibold ${isStep2Validated === "F" ? "flex" : "hidden" }`} >* Please fill all the details and continue *</h1>
                            </div>
                            <div className="flex cursor-pointer items-center justify-center space-x-5">
                                <button onClick={() => setViewContext("1")} type="submit" className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] rounded-md place-self-center focus:outline-none text-sm font-semibold">Previous</button>
                                <button onClick={validateStep2} type="submit" className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
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
                                        ref={proj1TitInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="A short title of your project"/>
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/material-outlined/96/666666/details-pane.png"/>
                                    <input
                                        type="text"
                                        ref={proj1DescInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="What is your project about?"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/visualization-skill.png"/>
                                    <input
                                        type="text"
                                        ref={proj1SkillsInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="skills or tech stack ( , separated)"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/resume-website.png"/>
                                    <input
                                        type="url"
                                        ref={proj1UrlInputRef}
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
                                        ref={proj2TitInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="A short title of your project"/>
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/material-outlined/96/666666/details-pane.png"/>
                                    <input
                                        type="text"
                                        ref={proj2DescInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="What is your project about?"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/visualization-skill.png"/>
                                    <input
                                        type="text"
                                        ref={proj2SkillsInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="skills or tech stack ( , separated)"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/resume-website.png"/>
                                    <input
                                        type="url"
                                        ref={proj2UrlInputRef}
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
                                        ref={proj3TitInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="A short title of your project"/>
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/material-outlined/96/666666/details-pane.png"/>
                                    <input
                                        type="text"
                                        ref={proj3DescInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="What is your project about?"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/visualization-skill.png"/>
                                    <input
                                        type="text"
                                        ref={proj3SkillsInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="skills or tech stack ( , separated)"/>   
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/resume-website.png"/>
                                    <input
                                        type="url"
                                        ref={proj3UrlInputRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Paste a url link"/>    
                                </div>
                            </div>
                            <div className="flex cursor-pointer items-center justify-center">
                                <h1 className={`text-sm text-[#E74C3C] font-semibold ${isStep3Validated === "F" ? "flex" : "hidden" }`} >* Please fill all the details and continue *</h1>
                            </div>
                            <div className="flex cursor-pointer items-center justify-center space-x-5">
                                <button onClick={() => setViewContext("2")} type="submit" className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] rounded-md place-self-center focus:outline-none text-sm font-semibold">Previous</button>
                                <button onClick={validateStep3} type="submit" className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
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
                                    ref={skillsInputRef}
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder={userType === "F" ? "Add your skills separated by ( , )" : "Add required skills separated by ( , )"}/>   
                            </div>
                            <h1>Education</h1>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/education.png"/>
                                <input
                                    type="text"
                                    ref={educationInputRef}
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="What's your highest qualification?"/>   
                            </div>
                            <div className="flex cursor-pointer items-center justify-center">
                                <h1 className={`text-sm text-[#E74C3C] font-semibold ${isStep4Validated === "F" ? "flex" : "hidden" }`} >* Please fill all the details and continue *</h1>
                            </div>
                            <div className="flex cursor-pointer items-center justify-center space-x-5">
                                <button onClick={() => setViewContext("3")} type="submit" className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] rounded-md place-self-center focus:outline-none text-sm font-semibold">Previous</button>
                                <button onClick={validateStep4} type="submit" className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Create My Account</button>
                            </div>
                        </div>
                    </div>   
                    <div className="text-center m-5 text-[#E74C3C] font-semibold">{errorMessage}</div>         
                </div>
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
    )
}

export default CreateProfile
