import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'

function PostProject() {
    const [currStep, setCurrStep] = useState("1");
    var intStep = 1;
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
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-full"
                                        placeholder="Ex: We are aliens group of constructions starting our new venture at Hitech city and are looking for experienced CAD developers to design models for our realestate project"/>    
                                </div>
                            </div>
                            <div className="flex cursor-pointer items-center p-5 justify-end">
                                {/* <button onClick={() => setCurrStep("" + (intStep--))} className={`${currStep === "1" && "hidden"} px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] rounded-md place-self-center focus:outline-none text-sm font-semibold`}>Previous</button> */}
                                <button onClick={() => setCurrStep("2")} className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
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
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: Bachelors of Technology in Computer Science or related field"/>    
                                </div>
                            </div>



                            <div className="flex cursor-pointer items-center px-5 pb-3 justify-end space-x-5">
                                <button onClick={() => setCurrStep("1")} className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] font-semibold rounded-md place-self-center focus:outline-none text-sm">Previous</button>
                                <button onClick={() => setCurrStep("3")} className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
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
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: 6 months"/>    
                                </div>
                            </div>
                            <div className="flex cursor-pointer items-center px-5 pb-3 justify-end space-x-5">
                                <button onClick={() => setCurrStep("2")} className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] font-semibold rounded-md place-self-center focus:outline-none text-sm">Previous</button>
                                <button onClick={() => setCurrStep("4")} className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
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
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios/100/666666/unchecked-checkbox.png"/>
                                    <h1 className="text-lg font-semibold text-[#666666]">Matching Skill Set</h1>
                                </div>
                                <div className="flex rounded-lg px-3 py-1 items-center space-x-3 cursor-pointer">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios/100/666666/unchecked-checkbox.png"/>
                                    <h1 className="text-lg font-semibold text-[#666666]">Matching Location</h1>
                                </div>
                                <div className="flex rounded-lg px-3 py-1 items-center space-x-3 cursor-pointer">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios/100/666666/unchecked-checkbox.png"/>
                                    <h1 className="text-lg font-semibold text-[#666666]">Matching Time Zone</h1>
                                </div>
                                <div className="flex rounded-lg px-3 py-1 items-center space-x-3 cursor-pointer">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios/100/666666/unchecked-checkbox.png"/>
                                    <h1 className="text-lg font-semibold text-[#666666]">4+ Star Rating</h1>
                                </div>
                            </div>

                            <div className="flex cursor-pointer items-center px-5 pb-3 justify-end space-x-5">
                                <button onClick={() => setCurrStep("3")} className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] font-semibold rounded-md place-self-center focus:outline-none text-sm">Previous</button>
                                <button onClick={() => setCurrStep("5")} className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
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
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Ex: 700"/>    
                                </div>
                            </div>
                            <div className="flex cursor-pointer items-center px-5 pb-3 justify-end space-x-5">
                                <button onClick={() => setCurrStep("4")} className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] font-semibold rounded-md place-self-center focus:outline-none text-sm">Previous</button>
                                <button onClick={() => setCurrStep("6")} className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Continue</button>
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
                                        Need a CAD designer to create a 3D model of a residential building.
                                    </h1>
                                    <h1 className="text-[#666666]">
                                        We are aliens group of constructions starting our new venture at Hitech city and are looking for experienced CAD developers to design models for our realestate project
                                    </h1>
                                </div>
                                <div>
                                    <h1 className="text-black">
                                        Skills
                                    </h1>
                                    <h1 className="text-[#666666]">
                                        React | NextJs | MongoDB | GraphQL | Firebase | Express | NodeJs
                                    </h1>
                                </div>
                                <div>
                                    <h1 className="text-black">
                                        Qualifications
                                    </h1>
                                    <h1 className="text-[#666666]">
                                        Bachelors of Technology in Computer Science and Engineering
                                    </h1>
                                </div>

                                <div>
                                    <h1 className="text-black">
                                        Additional details
                                    </h1>
                                    <h1 className="text-[#666666]">
                                        Hardware / Software required : Autocad, Macbook PRO, Stylus
                                    </h1>
                                    <h1 className="text-[#666666]">
                                        Loking for 6 front end developers for a duration of 6 months
                                    </h1>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <img className={`w-6 h-6`} src="https://img.icons8.com/ios-filled/100/29b2fe/rupee.png"/>        
                                    <h1 className="text-[#666666]">
                                        700 per freelancer | 1,25,000 total budget
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
                                        Bengaluru | Remote
                                    </h1>
                                </div>

                                
                            </div>

                            <div className="flex cursor-pointer items-center px-5 py-3 justify-end space-x-5">
                                <button onClick={() => setCurrStep("5")} className="px-6 py-3 text-[#29b2fe] bg-white border border-[#29b2fe] font-semibold rounded-md place-self-center focus:outline-none text-sm">Previous</button>
                                <button className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                     
                </div>
            </div>
        </div>
    )
}

export default PostProject
