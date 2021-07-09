import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import HeaderTag from '../components/HeaderTag';
import { useRouter } from "next/router";
import { useSession } from 'next-auth/client';
import SideBar from './SideBar';
import HeaderOption from './HeaderOption';
import Popover from "@material-ui/core/Popover";
import SearchBar from './SearchBar';

function Header({page}) {
    //react router//
    const router = useRouter();

    //next auth session//
    const [session] = useSession();

    // Routes //
    try {
        if((page === "landing") && (session && session.user)){
            router.push('/HomePage');
        }
        if((page === "home") && (!session || !session.user)){
            router.push('/');
        }
    } catch (error) {   
    }
    
    //on search for projects or freelancers
    const onSearch = (e) => {
        e.preventDefault();
    }
    //parsed data
    const pagesource = page;
    const usertype = "C";
    const profilepic = (session && session.user && session.user.image) ? session.user.image : "https://img.icons8.com/office/80/000000/user.png";
    const [searchContext, setSearchContext] = useState(usertype);
    console.log(profilepic);

    //settings required for side bar drawer
    const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return; }
        setState({ ...state, [anchor]: open });
    };

    const sideBar = (anchor) => (
        <SideBar anchor={anchor} toggleDrawer={toggleDrawer} usertype={usertype}/>
    );
    // end settings required for side bar drawer
  
    return (
        <header className="sticky">
            {/* left side bar for mobile screens */}
            <SwipeableDrawer
            className="lg:hidden"
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}>
            {sideBar('left')}
            </SwipeableDrawer>

            {/* upper header */}
            <div className="bg-white border-b border-gray-200 z-50">
                <div className="flex items-center justify-between mx-5 my-3 lg:mx-32">
                    <div className="flex items-center">
                        <img
                        className="h-5 w-5 mr-5 lg:hidden cursor-pointer"
                        src="https://img.icons8.com/metro/52/000000/menu.png"
                        onClick={toggleDrawer("left", true)}/>
                    
                        <div className="flex cursor-pointer items-center">
                            <img
                            className="w-12 h-12"
                            src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                            <h1 className="italic text-xl font-extrabold -ml-3 text-[#0e1724]">elance</h1>
                        </div>
                        <div className="items-center ml-14 hidden lg:flex">
                            <SearchBar device={"l"}/>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <h1 onClick={() => router.push("/auth/signin")} className={`cursor-pointer hover:text-[#29b2fe] text-lg font-semibold ${session && session.user && "hidden"}`}>
                            Log In
                        </h1>
                        <h1 onClick={() => router.push("/auth/signup")} className={`cursor-pointer hover:text-[#29b2fe] text-lg font-semibold ${session && session.user && "hidden"}`}>
                            Sign Up
                        </h1>

                        <HeaderOption 
                            optionId={"myApplications"}
                            optionName={"My Applications"}
                            optionImage={"https://img.icons8.com/windows/128/000000/home.png"}
                            isSelected={pagesource === "home"}
                            isVisible={usertype === "F"}
                        />
                        <HeaderOption 
                            optionId={"findProjects"}
                            optionName={"Find Projects"}
                            optionImage={"https://img.icons8.com/wired/128/000000/find-matching-job.png"}
                            isSelected={pagesource === "findprojects"}
                            isVisible={usertype === "F"}
                        />
                        <HeaderOption 
                            optionId={"myPostings"}
                            optionName={"My Postings"}
                            optionImage={"https://img.icons8.com/windows/128/000000/home.png"}
                            isSelected={pagesource === "home"}
                            isVisible={usertype === "C"}
                        />
                        <HeaderOption 
                            optionId={"findFreelancers"}
                            optionName={"Find Freelancers"}
                            optionImage={"https://img.icons8.com/dotty/160/000000/teacher-hirring.png"}
                            isSelected={pagesource === "findfreelancers"}
                            isVisible={usertype === "C"}
                        />
                        <HeaderOption 
                            optionId={"messages"}
                            optionName={"Messages"}
                            optionImage={"https://img.icons8.com/ios/100/000000/messaging-.png"}
                            isSelected={pagesource === "messages"}
                            isVisible={true}
                        />

                        <h1 className={`bg-yellow-400 px-5 py-2 text-white font-bold rounded-md cursor-pointer hover:bg-yellow-500  ${(session && session.user) ? "hidden" : "hidden lg:flex"}`}>
                            Post a Project
                        </h1>

                        {/* notifications */}
                        <div className={`${(!session || !session.user) && "hidden"}`}>
                            <img className="h-7 w-7 cursor-pointer" src="https://img.icons8.com/ios/100/000000/appointment-reminders--v1.png"/>
                        </div>
                        {/* profile pic */}
                        <div className={`${(!session || !session.user) && "hidden"}`}>
                            <img className={`h-10 w-10 rounded-full cursor-pointer`} src={profilepic} loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>

            {/* lower header */}
            <div className="bg-white border-b border-gray-200 hidden md:flex z-0">
                <div className="flex space-x-7 mx-5 lg:mx-32">
                    <HeaderTag tag={'Graphics & Design'}/>
                    <HeaderTag tag={'Digital Marketing'}/>
                    <HeaderTag tag={'Writing & Translation'}/>
                    <HeaderTag tag={'Video & Animation'}/>
                    <HeaderTag tag={'Music & Audio'}/>
                    <HeaderTag tag={'Programming & Tech'}/>
                    <HeaderTag tag={'Data'}/>
                    <HeaderTag tag={'Business'}/>
                    <HeaderTag tag={'Lifestyle'}/>
                </div>

            </div>
        </header>
    )
}

export default Header