import FreelancerGridItem from '../datarepresentation/FreelancerGridItem';
import { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Slider from '@material-ui/core/Slider';
import CustomCheckbox from '../CustomCheckbox';
import RatingSet from '../RatingSet';
import FreelancerFeedItem from "../datarepresentation/FreelancerFeedItem";
import {useSession} from 'next-auth/client'
import {useRouter} from 'next/router'

function FreelancersSearch({freelancers, totalpages, currentpage}) {
    const [viewType, setViewType] = useState('G');
    const [minBudget, setMinBudget] = useState(30);
    const [maxBudget, setMaxBudget] = useState(50);
    const [onlyRemote, setOnlyRemote] = useState(false);
    const [totPages, setTotPages] = useState(totalpages);
    const [currPage, setCurrPage] = useState(currentpage);
    var selectedSkills = {};
    const [session] = useSession();
    const router = useRouter();

    const handleChangeMinBudget = (event, budget) => {
        setMinBudget(budget);
    };
    const handleChangeMaxBudget = (event, budget) => {
        setMaxBudget(budget);
    };
    const handleSkillSelectionChange = (event) => {
        console.log(event);
      };
    const handleRemoteToggle = () => {
        setOnlyRemote(!onlyRemote);
    }

    return (
            <div >
                 <div className="grid grid-cols-12 my-5">
                    <div className="col-span-3 w-full space-y-2 rounded-md mt-14">
                        <div className="border border-[#c4c4c4] p-3 rounded-md space-y-2">
                        <h1 className="text-lg text-[#666666] font-bold " >Filters</h1>
                        <div className="space-y-2">
                            <h1 className="text-base font-bold text-[#666666]">
                                Project Budget
                            </h1>
                            <div>
                                <div className="justify-center lg:px-5">
                                    <Slider value={minBudget} onChange={handleChangeMinBudget} style={{color:"#666666"}}/>
                                </div>    
                                <div className="flex space-x-2 lg:px-5 justify-center">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/50/666666/rupee.png"/>
                                    <h1 className="font-semibold">Min</h1>
                                    <h1>{minBudget * 10}</h1>
                                </div>
                            </div>
                            <div>
                                <div className="justify-center lg:px-5">
                                    <Slider value={maxBudget} onChange={handleChangeMaxBudget} min={minBudget} style={{color:"#666666"}}/>
                                </div>    
                                <div className="flex space-x-2 lg:px-5 justify-center">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/50/666666/rupee.png"/>
                                    <h1 className="font-semibold">Max</h1>
                                    <h1>{maxBudget * 10}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-base font-bold text-[#666666]">
                                Skills
                            </h1>
                            <div className="border border-[#666666] rounded-md p-2 flex items-center space-x-2">
                                <img className="h-4 w-4" src="https://img.icons8.com/metro/52/000000/search.png"/>
                                <input className="focus:outline-none w-full" placeholder="Type a skill"/>
                            </div>
                            <div className="h-32 overflow-y-scroll">
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">React</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">Redux</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">Next</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">Node</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">Express</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">MongoDB</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">GraphQL</h1>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-base font-bold text-[#666666]">
                                Specific Location
                            </h1>
                            <div className="border border-[#666666] rounded-md p-2 flex items-center space-x-2">
                                <input className="focus:outline-none w-full" placeholder="Type a location"/>
                                <img className="h-6 w-6" src="https://img.icons8.com/glyph-neue/48/666666/user-location.png"/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-base font-bold text-[#666666]">
                                Time Zone
                            </h1>
                            <div className="border border-[#666666] rounded-md p-2 flex items-center space-x-2">
                                <img className="h-4 w-4" src="https://img.icons8.com/metro/52/000000/search.png"/>
                                <input className="focus:outline-none w-full" placeholder="Type a skill"/>
                            </div>
                            <div className="h-32 overflow-y-scroll">
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">IST</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">CST</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">CET</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">GMT</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">CEST</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">ET</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">GET</h1>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-base font-bold text-[#666666]">
                                Minimum Rating
                            </h1>
                            <div>
                                <RatingSet editable={true} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-base font-bold text-[#666666]">
                                Qualifications
                            </h1>
                            <div className="border border-[#666666] rounded-md p-2 flex items-center space-x-2">
                                <img className="h-4 w-4" src="https://img.icons8.com/metro/52/000000/search.png"/>
                                <input className="focus:outline-none w-full" placeholder="Type a skill"/>
                            </div>
                            <div className="h-32 overflow-y-scroll">
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">B.Tech</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">M.Tech</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">B.Com</h1>
                                </div>
                                <div className="flex space-x-2 p-2 items-center">
                                    <CustomCheckbox />
                                    <h1 className="font-semibold text-[#666666]">MS</h1>
                                </div>
                            </div>
                        </div> 
                        <div className="space-y-2">
                            <h1 className="text-base font-bold text-[#666666]">
                                Remote
                            </h1> 
                            <div className="space-y-2">
                                <h1>
                                    Only Remote freelancers
                                </h1>
                                <div onClick={handleRemoteToggle} className={`w-14 h-6 rounded-full ${onlyRemote ? "bg-[#29b2fe]" : "bg-white"} border border-[#29b2fe] items-center p-0.5 flex justify-between cursor-pointer`} >
                                    <div className="w-5 h-5 bg-[#29b2fe] rounded-full"/>
                                    <div className="w-5 h-5 bg-white rounded-full"/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-span-9">
                        {/* border border-[#c4c4c4] rounded-md */}
                      <div className="justify-between flex items-center"> 
                        <h1 className="text-lg text-[#666666] font-bold ml-10 italic">{router.query.query ? `"${router.query.query}"` : ``} freelancers</h1>
                        <div className="flex items-center space-x-2">
                            <img 
                                onClick={() => setViewType('G')}
                                className="w-6 h-6 cursor-pointer"
                                src={`https://img.icons8.com/material/192/${ viewType === 'G' ? "29b2fe" : "666666"}/grid-2.png`}/>
                            <img 
                                onClick={() => setViewType('F')}
                                className="w-6 h-6 cursor-pointer"
                                src={`https://img.icons8.com/material-rounded/240/${ viewType === 'F' ? "29b2fe" : "666666"}/overview-pages-3.png`} />
                        </div>
                      </div>
                      <div className={`${viewType === 'G' && "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"} place-items-center p-5`}>
                          {freelancers && freelancers.map((freelancer) => (
                              <FreelancerGridItem profile={freelancer} />
                            // <FreelancerFeedItem profile={freelancer} currentUserProfile={session?.user?.elanceprofile}/>
                          ))}
                      </div>
                      <div className="justify-between w-full">
                        <div />
                        <div className="flex items-center space-x-5 mt-10 justify-center">
                            <img className={`w-8 h-8 ${currPage === "1" ? "cursor-not-allowed" : "cursor-pointer"}`} src={currPage === "1" ? "https://img.icons8.com/ios-glyphs/120/999999/previous.png" : "https://img.icons8.com/ios-glyphs/120/29b2fe/previous.png"} />
                        <h1>
                            Page {currPage} of {totPages}
                        </h1>
                            <img className={`w-8 h-8 ${currPage === totPages ? "cursor-not-allowed" : "cursor-pointer"}`} src={currPage <= totPages ? "https://img.icons8.com/ios-glyphs/120/29b2fe/next.png" : "https://img.icons8.com/ios-glyphs/120/999999/next.png"} />
                        </div>
                      </div>
                    </div>

                </div>

            </div>
    )
}

export default FreelancersSearch
