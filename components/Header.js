import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import HeaderTag from '../components/HeaderTag';
import { useRouter } from "next/router";
import { useSession, signOut } from 'next-auth/client';
import SideBar from './SideBar';
import HeaderOption from './HeaderOption';
import Tooltip from '@material-ui/core/Tooltip';
import SearchBar from './SearchBar';
import { withStyles, makeStyles } from '@material-ui/core/styles';

function Header({page, isNewUser}) {
        
    const categories = [
        {"subcat":"Logo Design"},
        {"subcat":"Web and Mobile App Design"},
        {"subcat":"Architecture and Building Design"},
        {"subcat":"Art and Illustration"},
        {"subcat":"Fashion and Merchandise"},
        {"subcat":"Social Media"},
        {"subcat":"Gaming"},
        {"subcat":"Visual Design"},
        {"subcat":"Print Design"},
        {"subcat":"Product and Character Design"}];

    //react router//
    const router = useRouter();

    //next auth session//
    const [session] = useSession();

    // Routes //
    // try {
    //     if((page === "landing") && (session && session.user)){
    //         router.push('/HomePage');
    //     }
    //     if((page === "home") && (!session || !session.user)){
    //         router.push('/');
    //     }
    // } catch (error) {   
    // }
    
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
  
    const IconDropDown = withStyles((theme) => ({
        tooltip: {
          backgroundColor: theme.palette.common.white,
          color: 'rgba(0, 0, 0, 0)',
          boxShadow: theme.shadows[2],
          marginTop: 10,
          marginLeft: 0
         // fontSize: 11,
        },
      }))(Tooltip);

      const onClickLogo = () => {
          if(session && session.user){
              router.push('/HomePage');
          }
          else{
              router.push('/');
          }
        };
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
                        className="h-5 w-5 mr-2 lg:hidden cursor-pointer"
                        src="https://img.icons8.com/metro/52/000000/menu.png"
                        onClick={toggleDrawer("left", true)}/>
                    
                        <div onClick={onClickLogo} className="flex cursor-pointer items-center">
                            <img
                            className="w-12 h-12"
                            src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                            <h1 className="italic text-xl font-extrabold -ml-3 text-[#0e1724] hidden lg:flex">elance</h1>
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

                        <h1 onClick={() => router.push('/PostProject')} className={`bg-yellow-400 px-5 py-2 text-white font-bold rounded-md cursor-pointer hover:bg-yellow-500  ${(session && session.user) ? "hidden" : "hidden lg:flex"}`}>
                            Post a Project
                        </h1>

                        {/* notifications */}
                        <div className={`${(!session || !session.user) && "hidden"}`}>
                            <IconDropDown
                                className="bg-white" 
                                interactive
                                arrow
                                placement="bottom"
                                title={
                                <div className="space-y-2 p-3 text-base text-[#666666]">
                                    <h1 className="cursor-pointer">
                                       You do not have any notifications.
                                    </h1>
                                </div>
                                }>
                            <img className="h-7 w-7 cursor-pointer" src="https://img.icons8.com/ios/100/000000/appointment-reminders--v1.png"/>
                            </IconDropDown>
                        </div>
                        {/* profile pic */}
                        <div className={`${(!session || !session.user) && "hidden"}`}>
                            <IconDropDown
                                className="bg-white" 
                                interactive
                                arrow
                                placement="bottom"
                                title={
                                <div className="space-y-2 p-3 text-base text-[#666666]">
                                    <h1 onClick={() => router.push('/Profile')} className="cursor-pointer hover:underline">
                                       My Profile
                                    </h1>
                                    <h1 onClick={signOut} className="cursor-pointer hover:underline">
                                       Sign Out
                                    </h1> 
                                </div>
                                }>
                                <img className={`h-10 w-10 rounded-full cursor-pointer`} src={profilepic} loading="lazy" />
                            </IconDropDown>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* lower header */}
            <div className= {`bg-white border-b border-gray-200 hidden ${page === "profile" ? "hidden" : "lg:flex z-0"}`} >
                <div className="flex space-x-7 mx-5 lg:mx-32">
                    <HeaderTag tag={'Graphics & Design'} options={categories}/>
                    <HeaderTag tag={'Digital Marketing'} options={categories}/>
                    <HeaderTag tag={'Writing & Translation'} options={categories}/>
                    <HeaderTag tag={'Video & Animation'} options={categories}/>
                    <HeaderTag tag={'Music & Audio'} options={categories}/>
                    <HeaderTag tag={'Programming & Tech'} options={categories}/>
                    <HeaderTag tag={'Data'} options={categories}/>
                    <HeaderTag tag={'Business'} options={categories}/>
                    <HeaderTag tag={'Lifestyle'} options={categories}/>
                </div>

            </div>
        </header>
    )
}

export default Header