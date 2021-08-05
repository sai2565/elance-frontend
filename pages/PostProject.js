import Head from 'next/head'
import { useRef } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import CustomCheckbox from '../components/CustomCheckbox';
import { Dialog } from '@material-ui/core';
// import {Context} from '../libs/context'
import React, { useContext } from "react"
import { useSession, getSession, session} from 'next-auth/client';
import router from 'next/router';

function PostProject() {
    const [session] = useSession();
    const [currStep, setCurrStep] = useState("1");
    var intStep = 1;
    const projNameInpRef = useRef(null);
    const projDescInpRef = useRef(null);
    const skillsInpRef = useRef(null);
    const qualificationInpRef = useRef(null);
    const locationInpRef = useRef(null);
    const equipReqInpRef = useRef(null);
    const freelancerCountInpRef = useRef(null);
    const durationInpRef = useRef(null);
    const budgetInpRef = useRef(null);
    const hourlyBudgetInpRef = useRef(null);
    const [projectName, setProjectName] = useState("");
    const [projectDesc, setProjDesc] = useState("");
    const [skills, setSkills] = useState("");
    const [qualification, setQualification] = useState("");
    const [location, setLocation] = useState("");
    const [equipment, setEquipment] = useState("");
    const [count, setCount] = useState("");
    const [duration, setDuration] = useState("");
    const [budget, setBudget] = useState("");
    const [hourlyBudget, setHourlyBudget] = useState("");
    const [loading, setLoading] = useState(false);

    const validateStep1 = ()=>{
        if(projNameInpRef.current.value && projDescInpRef.current.value){
            setProjectName(projNameInpRef.current.value);
            setProjDesc(projDescInpRef.current.value);
            setCurrStep("2");
        }   
    }

    const validateStep2 = ()=>{
        if(skillsInpRef.current.value && qualificationInpRef.current.value){
            
            setSkills(skillsInpRef.current.value);
            console.log(skills);
            setQualification(qualificationInpRef.current.value);
            setCurrStep("3");
        }
    }

    const validateStep3 = ()=>{
        if(locationInpRef.current.value && equipReqInpRef.current.value && freelancerCountInpRef.current.value && durationInpRef.current.value){
            setLocation(locationInpRef.current.value);
            setEquipment(equipReqInpRef.current.value);
            setCount(freelancerCountInpRef.current.value);
            setDuration(durationInpRef.current.value);
            setCurrStep("4");
        }
    }

    const validateStep4 = ()=>{
        setCurrStep("5");
    }

    const validateStep5 = ()=>{
        if(budgetInpRef.current.value && hourlyBudgetInpRef.current.value){
            setBudget(budgetInpRef.current.value);
            setHourlyBudget(hourlyBudgetInpRef.current.value);
            setCurrStep("6");
        }
        
    }

    async function postproject () {
        setLoading(true);
        console.log("posting project...");
        var reqBody = { 
            "projectTitle": projectName,
            "description": projectDesc,
            "skills": skills.split(','),
            "education": qualification,
            "workLocation":location,
            "softwareRequirements":equipment.split(','),
            "freelancersCount":count,
            "visibility": ["1", "2", "3", "4"],
            "postedBy": session.user.elanceprofile.user[0]._id,
            "budget": {"minPrice": hourlyBudget, "maxPrice": budget},
            "duration": duration
        };
        console.log(reqBody);
        const res = await fetch("https://elance-be.herokuapp.com/api/v1/projects/createProject", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        });
        const resJson = await res.json();
        console.log(resJson);
        if(resJson.message === "Project added"){
            setLoading(false);
            const projectId = resJson.projectId;
            console.log(projectId);
            router.push(`/ProjectDetails?projectId=${projectId}`);
            //navigate to project details page
        }
    }

    return (
        <div>
            <Head>
                <title>Elance | Post a Project</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"postproject"}/>
            <div className="lg:mx-32 mx-5 my-3">
                <div className="lg:grid lg:grid-cols-10 mt-10">


                    <div className="flex lg:flex-col lg:col-span-3 lg:space-y-5 mb-5">
                        <div className={`flex space-x-5 pl-5 items-center lg:border-l-4 ${currStep === "1" ? "border-[#29b2fe]" : "border-[#ffffff]"}`}>
                            <img className="h-8 w-8" src={`https://img.icons8.com/ios-filled/150/${currStep >= "1" ? "29b2fe" : "C4C4C4"}/edit-image.png`}/>
                            <h1 className="hidden lg:flex text-lg font-semibold text-[#000000]">About Project</h1>
                            <img className="hidden lg:flex h-8 w-8" src={`https://img.icons8.com/ios-glyphs/120/${currStep > "1" ? "29b2fe" : "C4C4C4"}/checked--v1.png`}/>
                        </div>
                        <div className={`flex space-x-5 pl-5 items-center lg:border-l-4 ${currStep === "2" ? "border-[#29b2fe]" : "border-[#ffffff]"}`}>
                            <img className="h-8 w-8" src={`https://img.icons8.com/ios-filled/100/${currStep >= "2" ? "29b2fe" : "C4C4C4"}/visualization-skill.png`}/>
                            <h1 className="hidden lg:flex text-lg font-semibold text-[#000000]">Skills Required</h1>
                            <img className="hidden lg:flex h-8 w-8" src={`https://img.icons8.com/ios-glyphs/120/${currStep > "2" ? "29b2fe" : "C4C4C4"}/checked--v1.png`}/>
                        </div>
                        <div className={`flex space-x-5 pl-5 items-center lg:border-l-4 ${currStep === "3" ? "border-[#29b2fe]" :"border-[#ffffff]"}`}>
                            <img className="h-8 w-8" src={`https://img.icons8.com/material-outlined/192/${currStep >= "3" ? "29b2fe" : "C4C4C4"}/details-pane.png`}/>
                            <h1 className="hidden lg:flex text-lg font-semibold text-[#000000]">Details</h1>
                            <img className="hidden lg:flex h-8 w-8" src={`https://img.icons8.com/ios-glyphs/120/${currStep > "3" ? "29b2fe" : "C4C4C4"}/checked--v1.png`}/>
                        </div>
                        <div className={`flex space-x-5 pl-5 items-center lg:border-l-4 ${currStep === "4" ? "border-[#29b2fe]" :"border-[#ffffff]"}`}>
                            <img className="h-8 w-8" src={`https://img.icons8.com/material/144/${currStep >= "4" ? "29b2fe" : "C4C4C4"}/visible--v1.png`}/>
                            <h1 className="hidden lg:flex text-lg font-semibold text-[#000000]">Visibility</h1>
                            <img className="hidden lg:flex h-8 w-8" src={`https://img.icons8.com/ios-glyphs/120/${currStep > "4" ? "29b2fe" : "C4C4C4"}/checked--v1.png`}/>
                        </div>
                        <div className={`flex space-x-5 pl-5 items-center lg:border-l-4 ${currStep === "5" ? "border-[#29b2fe]" :"border-[#ffffff]"}`}>
                            <img className="h-8 w-8" src={`https://img.icons8.com/ios-filled/100/${currStep >= "5" ? "29b2fe" : "C4C4C4"}/rupee.png`}/>
                            <h1 className="hidden lg:flex text-lg font-semibold text-[#000000]">Budget</h1>
                            <img className="hidden lg:flex h-8 w-8" src={`https://img.icons8.com/ios-glyphs/120/${currStep > "5" ? "29b2fe" : "C4C4C4"}/checked--v1.png`}/>
                        </div>
                        <div className={`flex space-x-5 pl-5 items-center lg:border-l-4 ${currStep === "6" ? "border-[#29b2fe]" :"border-[#ffffff]"}`}>
                            <img className="h-8 w-8" src={`https://img.icons8.com/ios-filled/100/${currStep >= "6" ? "29b2fe" : "C4C4C4"}/double-tick.png`}/>
                            <h1 className="hidden lg:flex text-lg font-semibold text-[#000000]">Review</h1>
                            {/* <img className="h-8 w-8" src={`https://img.icons8.com/ios-glyphs/120/${currStep > "6" ? "29b2fe" : "C4C4C4"}/checked--v1.png`}/> */}
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        
                    {/* Step 1  */}
                    <div className={`w-full ${currStep !== "1" && "hidden"}`}>
                        <div className="border border-gray-300 w-full rounded-md">
                            <div className="p-5 space-y-2 border-b border-gray-300">
                                <h1 className=" font-semibold text-[#666666] text-lg">Add a title and description</h1>
                                <h1 className="font-semibold text-[#29b2fe]">Step 1 of 6</h1>
                            </div>

                            <div className="p-5 space-y-3">
                                <h1 className="text-[#000000] font-bold">Enter a name for your project</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/90/666666/edit.png"/>
                                    <input
                                        type="text"
                                        ref={projNameInpRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: Need a CAD designer to create a 3D model of a residential building."/>    
                                </div>
                            </div>

                            <div className="p-5 space-y-3">
                                <h1 className="text-[#000000] font-bold">Describe your project</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-start space-x-3 pt-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/120/666666/view-details.png"/>
                                    <textarea
                                        type="text"
                                        rows="5"
                                        ref={projDescInpRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-full"
                                        placeholder="Ex: We are aliens group of constructions starting our new venture at Hitech city and are looking for experienced CAD developers to design models for our realestate project"/>    
                                </div>
                            </div>
                            <div className="flex cursor-pointer items-center p-5 justify-end">
                                {/* <button onClick={() => setCurrStep("" + (intStep--))} className={`${currStep === "1" && "hidden"} px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] rounded-md place-self-center focus:outline-none text-sm font-semibold`}>Previous</button> */}
                                <button onClick={validateStep1} className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className={`w-full ${currStep !== "2" && "hidden"}`}>
                        <div className="border border-gray-300 w-full rounded-md">
                            <div className="p-5 space-y-2 border-b border-gray-300">
                                <h1 className=" font-semibold text-[#666666] text-lg">Add required skills</h1>
                                <h1 className="font-semibold text-[#29b2fe]">Step 2 of 6</h1>
                            </div>
                            <div className="p-5 space-y-3">
                                <h1 className="text-[#000000] font-bold">Enter the skills your project requires</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/visualization-skill.png"/>
                                    <input
                                        type="text"
                                        ref={skillsInpRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: React, NextJs, MongoDB, GraphQL, Firebase separated by ( , )"/>    
                                </div>
                            </div>

                            <div className="p-5 space-y-3">
                                <h1 className="text-[#000000] font-bold">Enter any educational qualififications your project requires</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/120/666666/education.png"/>
                                    <input
                                        type="text"
                                        ref={qualificationInpRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: Bachelors of Technology in Computer Science or related field"/>    
                                </div>
                            </div>



                            <div className="flex cursor-pointer items-center px-5 pb-3 justify-end space-x-5">
                                <button onClick={() => setCurrStep("1")} className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] font-semibold rounded-md place-self-center focus:outline-none text-sm">Previous</button>
                                <button onClick={validateStep2} className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
                            </div>
                        </div>     
                    </div>

                    {/* Step 3 */}
                    <div className={`w-full ${currStep !== "3" && "hidden"}`}>
                        <div className="border border-gray-300 w-full rounded-md">
                            <div className="p-5 space-y-2 border-b border-gray-300">
                                <h1 className=" font-semibold text-[#666666] text-lg">Add additional details</h1>
                                <h1 className="font-semibold text-[#29b2fe]">Step 3 of 6</h1>
                            </div>
                            <div className="p-5 space-y-3">
                                <h1 className="text-[#000000] font-bold">What is the working location for the project</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/glyph-neue/128/666666/user-location.png"/>
                                    <input
                                        type="text"
                                        ref={locationInpRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: Bengaluru, Hyderabad, Remote enter 1 or more locations serparated by ( , )"/>    
                                </div>
                            </div>

                            <div className="p-5 space-y-3">
                                <h1 className="text-[#000000] font-bold">Hardware or Software requirements</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/servers-group.png"/>
                                    <input
                                        type="text"
                                        ref={equipReqInpRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: Autocad, Macbook Pro, Stylus"/>    
                                </div>
                            </div>

                            <div className="p-5 space-y-3">
                                <h1 className="text-[#000000] font-bold">How many freelancers are you looking to hire?</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/128/666666/child-safe-zone--v2.png"/>
                                    <input
                                        type="number"
                                        ref={freelancerCountInpRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: 6 front end developers"/>    
                                </div>
                            </div>
                            <div className="p-5 space-y-3">
                                <h1 className="text-[#000000] font-bold">What is the expected duration of this project?</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/clock--v3.png"/>
                                    <input
                                        type="number"
                                        ref={durationInpRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: 6 months"/>    
                                </div>
                            </div>
                            <div className="flex cursor-pointer items-center px-5 pb-3 justify-end space-x-5">
                                <button onClick={() => setCurrStep("2")} className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] font-semibold rounded-md place-self-center focus:outline-none text-sm">Previous</button>
                                <button onClick={validateStep3} className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
                            </div>
                        </div>     
                    </div>


                    {/* Step 4 */}
                    <div className={`w-full ${currStep !== "4" && "hidden"}`}>
                        <div className="border border-gray-300 w-full rounded-md">
                            <div className="p-5 space-y-2 border-b border-gray-300">
                                <h1 className=" font-semibold text-[#666666] text-lg">Control visibility of your job posting</h1>
                                <h1 className="font-semibold text-[#29b2fe]">Step 4 of 6</h1>
                            </div>

                            <div className="p-5 space-y-3">
                                <h1 className="text-[#000000] font-bold">Your project is visible to freelancers who has :</h1>
                                <div className="flex rounded-lg px-3 py-1 items-center space-x-3 cursor-pointer">
                                    {/* <img className="w-6 h-6" src="https://img.icons8.com/ios/100/666666/unchecked-checkbox.png"/> */}
                                    <CustomCheckbox />
                                    <h1 className="text-lg font-semibold text-[#666666]">Matching Skill Set</h1>
                                </div>
                                <div className="flex rounded-lg px-3 py-1 items-center space-x-3 cursor-pointer">
                                    {/* <img className="w-6 h-6" src="https://img.icons8.com/ios/100/666666/unchecked-checkbox.png"/> */}
                                    <CustomCheckbox />
                                    <h1 className="text-lg font-semibold text-[#666666]">Matching Location</h1>
                                </div>
                                <div className="flex rounded-lg px-3 py-1 items-center space-x-3 cursor-pointer">
                                    {/* <img className="w-6 h-6" src="https://img.icons8.com/ios/100/666666/unchecked-checkbox.png"/> */}
                                    <CustomCheckbox />
                                    <h1 className="text-lg font-semibold text-[#666666]">Matching Time Zone</h1>
                                </div>
                                <div className="flex rounded-lg px-3 py-1 items-center space-x-3 cursor-pointer">
                                    {/* <img className="w-6 h-6" src="https://img.icons8.com/ios/100/666666/unchecked-checkbox.png"/> */}
                                    <CustomCheckbox />
                                    <h1 className="text-lg font-semibold text-[#666666]">4+ Star Rating</h1>
                                </div>
                            </div>

                            <div className="flex cursor-pointer items-center px-5 pb-3 justify-end space-x-5">
                                <button onClick={() => setCurrStep("3")} className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] font-semibold rounded-md place-self-center focus:outline-none text-sm">Previous</button>
                                <button onClick={validateStep4} className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
                            </div>

                        </div>
                       
                    </div>

                    {/* Step 5 */}
                    <div className={`w-full ${currStep !== "5" && "hidden"}`}>
                        <div className="border border-gray-300 w-full rounded-md">
                            <div className="p-5 space-y-2 border-b border-gray-300">
                                <h1 className=" font-semibold text-[#666666] text-lg">Project Budget and Hourly Rate</h1>
                                <h1 className="font-semibold text-[#29b2fe]">Step 5 of 6</h1>
                            </div>


                            <div className="p-5 space-y-3">
                                <h1 className="text-[#000000] font-bold">What is your project budget ?</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/rupee.png"/>
                                    <input
                                        type="number"
                                        ref={budgetInpRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: 1,25,000"/>    
                                </div>
                            </div>

                            <div className="p-5 space-y-3">
                                <h1 className="text-[#000000] font-bold">What is your hourly budget per a freelancer?</h1>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/100/666666/rupee.png"/>
                                    <input
                                        type="number"
                                        ref={hourlyBudgetInpRef}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: 700"/>    
                                </div>
                            </div>
                            <div className="flex cursor-pointer items-center px-5 pb-3 justify-end space-x-5">
                                <button onClick={() => setCurrStep("4")} className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] font-semibold rounded-md place-self-center focus:outline-none text-sm">Previous</button>
                                <button onClick={validateStep5} className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
                            </div>
                        </div>
                    </div>

                    {/* review step */}
                    <div className={`w-full ${currStep !== "6" && "hidden"}`}>
                        <div className="border border-gray-300 w-full rounded-md">
                            <div className="p-5 space-y-2 border-b border-gray-300">
                                <h1 className=" font-semibold text-[#666666] text-lg">Review your posting</h1>
                                <h1 className="font-semibold text-[#29b2fe]">Step 6 of 6</h1>
                            </div>
                            
                            <div className="p-5 space-y-3 border-b border-gray-300">
                                <div className="space-y-2">
                                    <h1 className="text-lg font-semibold text-[#29b2fe]">
                                        {projectName}
                                    </h1>
                                    <h1 className="text-[#666666]">
                                        {projectDesc}
                                    </h1>
                                </div>
                                <div>
                                    <h1 className="text-black">
                                        Skills
                                    </h1>
                                    <h1 className="text-[#666666]">
                                        {skills.replace(/,/g, ' | ')}
                                    </h1>
                                </div>
                                <div>
                                    <h1 className="text-black">
                                        Qualifications
                                    </h1>
                                    <h1 className="text-[#666666]">
                                        {qualification}
                                    </h1>
                                </div>

                                <div>
                                    <h1 className="text-black">
                                        Additional details
                                    </h1>
                                    <h1 className="text-[#666666]">
                                        Hardware / Software required : {equipment.replace(/,/g, ' | ')}
                                    </h1>
                                    <h1 className="text-[#666666]">
                                        Loking for {count} freelancers for a duration of {duration} months
                                    </h1>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <img className={`w-6 h-6`} src="https://img.icons8.com/ios-filled/100/29b2fe/rupee.png"/>        
                                    <h1 className="text-[#666666]">
                                        {hourlyBudget} per freelancer | {budget} total budget
                                    </h1>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <img className={`w-6 h-6`} src="https://img.icons8.com/ios-glyphs/120/29b2fe/visible--v1.png"/>        
                                    <h1 className="text-[#666666]">
                                        Matching Skill Set | Matching Location | Matching Time Zone | 4+ Star Rating
                                    </h1>
                                </div>

                                <div className="flex space-x-2 items-center">
                                    <img className={`w-6 h-6`} src="https://img.icons8.com/ios-filled/150/29b2fe/marker.png"/>        
                                    <h1 className="text-[#666666]">
                                        {location}
                                    </h1>
                                </div>

                                
                            </div>

                            <div className="flex cursor-pointer items-center px-5 py-3 justify-end space-x-5">
                                <button onClick={() => setCurrStep("5")} className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] font-semibold rounded-md place-self-center focus:outline-none text-sm">Previous</button>
                                <button onClick={postproject} className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Post</button>
                            </div>
                        </div>
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
            </div>
        </div>
    )
}
export default PostProject
