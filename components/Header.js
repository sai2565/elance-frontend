import React, { useState, useEffect } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import HeaderTag from '../components/HeaderTag';
import { useRouter } from "next/router";
import { useSession, signOut } from 'next-auth/client';
import SideBar from './SideBar';
import HeaderOption from './HeaderOption';
import Tooltip from '@material-ui/core/Tooltip';
import SearchBar from './SearchBar';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Popover from "@material-ui/core/Popover";
import { Dialog } from '@material-ui/core';

function Header({page}) {
    const router = useRouter();
    const [session] = useSession();
    const myProfile = session?.user.elanceprofile.user && session?.user.elanceprofile.user[0];
    const myNotifications = myProfile?.notifications;
    const myContactedUsers = myProfile?.contacted;
    const [loading, setLoading] = useState(false);
    // Routes //

    const [notifyAnchorEl, setNotifyAnchorEl] = React.useState(null);
    const isNotificationDropOpen = Boolean(notifyAnchorEl);
    const notificationDropId = isNotificationDropOpen ? "notificationbardropdown" : undefined;
    const handleNotificationDropClick = (event) => {
        setNotifyAnchorEl(event.currentTarget);
    };
    const handleNotificationDropClose = () => {
        setNotifyAnchorEl(null);
    };

    const [messengerAnchorEl, setMessengerAnchorEl] = React.useState(null);
    const isMessageDropOpen = Boolean(messengerAnchorEl);
    const messengerDropId = isMessageDropOpen ? "messagebardropdown" : undefined;
    const handleNMessageDropClick = (event) => {
        setMessengerAnchorEl(event.currentTarget);
    };
    const handleMessageDropClose = () => {
        setMessengerAnchorEl(null);
    };
    
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
        <SideBar anchor={anchor} toggleDrawer={toggleDrawer}/>
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

    async function hireRequestAction(action, notificationId, freelancerId, hireRequestId){
        setLoading(true);
        const url = (action === "accept") ? "https://elance-be.herokuapp.com/api/v1/hire/agreeHireRequest" : "https://elance-be.herokuapp.com/api/v1/hire/rejectHireRequest";
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    // "message" : action,
                    // "freelancerId": freelancerId,
                    "hireRequestId" : hireRequestId
                    // "notificationId": notificationId
                })
            });
        const res_json = await res.json();
        console.log("action res "+ JSON.stringify(res_json));
        readNotification(freelancerId, notificationId);
        setLoading(false);
    }

    // function handleMessageNotification(notificationId, userId){
    //     readNotification(userId, notificationId);
    // }

    async function handleHireReqAgreeNotification(notificationId, myId, triggeredById){
        setLoading(true);
        const res = await fetch("https://elance-be.herokuapp.com/api/v1/users/setContacted", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "senderUserId": myId,
                    "receiverUserId": triggeredById
                })
            });
            const res_json = await res.json();
            readNotification(myId, notificationId);
            router.push(`/Messenger?userId=${triggeredById}`);
        setLoading(false);            
    }

    function handleReviewNotification(notificationId, userId){
        readNotification(userId, notificationId);
        router.push('/Profile');
    }

    function handleJobApplicationNotification(notificationId, userId, projectId){
        readNotification(userId, notificationId);
        router.push(`/ProjectDetails?projectId=${projectId}`);
    }

    async function readNotification(freelancerId, notificationId){
        const resReadNotification = await fetch("https://elance-be.herokuapp.com/api/v1/users/readNotification",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    "userId": freelancerId,
                    "notificationId": notificationId
                })
            });
        const resReadNotification_json = await resReadNotification.json();
        console.log("read notific"+JSON.stringify(resReadNotification_json));  
    }

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
                        {
                            !(session && session.user) &&
                            <h1 onClick={() => router.push("/auth/signin")} className={`cursor-pointer hover:text-[#29b2fe] text-lg font-semibold`}>
                                Log In
                            </h1>
                        }
                        {
                            !(session && session.user) &&
                            <h1 onClick={() => router.push("/auth/signup")} className={`cursor-pointer hover:text-[#29b2fe] text-lg font-semibold`}>
                                Sign Up
                            </h1>
                        }
                        {
                            session && session.user &&
                            <img onClick={() => router.push('/HomePage')} className={`h-7 w-7 cursor-pointer`} src={`${page === "home" ? "https://img.icons8.com/glyph-neue/128/29b2fe/home.png" : "https://img.icons8.com/glyph-neue/128/000000/home.png"}`}/>
                        }
                        {
                            session && session.user &&
                            <img onClick={handleNMessageDropClick} className={`h-7 w-7 cursor-pointer`} src={`${page === "messenger" ? "https://img.icons8.com/material-rounded/128/29b2fe/facebook-messenger--v1.png":"https://img.icons8.com/material-rounded/128/000000/facebook-messenger--v1.png"}`}/>

                        }
                        {   
                            session && session.user &&
                            <Popover
                                className={`rounded-md m-2`}
                                id={messengerDropId}
                                open={isMessageDropOpen}
                                anchorEl={messengerAnchorEl}
                                onClose={handleMessageDropClose}
                                anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                                }}
                                transformOrigin={{
                                vertical: "top",
                                horizontal: "center"
                                }}>
                                <div className="w-52">
                                    <h1 className="text-center p-2 border-b border-[#c4c4c4] text-base font-semibold">
                                        {
                                            myContactedUsers &&
                                            myContactedUsers.length > 0 ? "Connected users" : "You are not connected to anyone. Go to someones profile and click on 'Message' to add them here"}
                                    </h1>
                                    {   
                                        myContactedUsers &&
                                        myContactedUsers.length > 0 &&
                                        myContactedUsers.map((contactedUser) => (
                                            <div className="p-2 border-b border-[#c4c4c4] cursor-pointer space-y-2">
                                                <h1 className="text-sm text-[#29b2fe] font-bold hover:underline">
                                                    {contactedUser.fullName} | @{contactedUser.userName}
                                                </h1>
                                                <div className="flex justify-between items-center">
                                                    <h1 className="italiac text-sm italic">
                                                        {contactedUser.userType}
                                                    </h1>
                                                    <h1 onClick={() => router.push(`/Messenger?userId=${contactedUser._id}`)} className="text-white p-1 bg-[#29b2fe] text-xs rounded-full font-bold hover:bg-white hover:text-[#29b2fe] hover:underline ">
                                                        Open Messenger
                                                    </h1>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                            </Popover>
                        }
                        {
                            !(session && session.user) && page !== "postproject" &&
                            <h1 onClick={() => router.push('/PostProject')} className={`bg-yellow-400 px-5 py-2 text-white font-bold rounded-md cursor-pointer hover:bg-yellow-500 hidden lg:flex`}>
                                Post a Project
                            </h1>
                        }
                        {
                            session && session.user &&
                            <div className="flex" onClick={handleNotificationDropClick}>
                                <img className="h-7 w-7 cursor-pointer" src="https://img.icons8.com/ios-filled/151280/000000/appointment-reminders--v1.png"/>
                                {   myNotifications &&
                                        myNotifications.length > 0  &&
                                    <div className="-mt-2 -ml-1.5">
                                        <h1 className="font-bold">{myNotifications.length}</h1>
                                    </div>
                                }
                            </div>
                        }
                        {
                            session && session.user &&
                            <Popover
                                className={`rounded-md m-2`}
                                id={notificationDropId}
                                open={isNotificationDropOpen}
                                anchorEl={notifyAnchorEl}
                                onClose={handleNotificationDropClose}
                                anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                                }}
                                transformOrigin={{
                                vertical: "top",
                                horizontal: "center"
                                }}>
                                    <div className="w-52">
                                        <h1 className="text-center p-2 border-b border-[#c4c4c4] text-base font-semibold">
                                            {myNotifications?.length === 0 ? "You do not have any notifications" : "Your notifications"}
                                        </h1>
                                    {
                                        myNotifications &&
                                        myNotifications.map((notification) => (
                                            <div className="p-2 border-b border-[#c4c4c4] hover:bg-[#ECF0F1] cursor-pointer">
                                                <h1>
                                                    {
                                                       notification.notificationType === 'message' &&
                                                       notification.triggeredBy.fullName+ " has sent you a message" 
                                                    }{
                                                       (notification.notificationType === 'jobApplication' || notification.notificationType === 'jobApplicationReminder') &&
                                                       <div onClick={() => handleJobApplicationNotification(notification._id, myProfile._id, notification.projectId)}>
                                                           <h1 className="text-sm font-semibold">
                                                                {notification.triggeredBy.fullName} has applied to your project
                                                            </h1>
                                                           {/* <h1 onClick={() => router.push(`/Profile?id=${notification.triggeredBy._id}`) } className={`text-sm text-[#29b2fe] font-semibold hover:underline cursor-pointer`} >{notification.triggeredBy.fullName} | @{notification.triggeredBy.userName}</h1> 
                                                           <h1 onClick={() => router.push(`/ProjectDetails?projectId=${notification.projectId}`)}> has applied to your project </h1> */}
                                                       </div>
                                                    }{
                                                        notification.notificationType === 'hireRequest' &&
                                                        <div>
                                                            <h1 onClick={() => router.push(`/ProjectDetails?projectId=${notification.projectId}`)} className="text-sm text-[#29b2fe] font-semibold hover:underline cursor-pointer">{notification.notificationMessage}</h1>
                                                            <div className="flex space-x-5 lg:space-x-10 items-center pt-5">
                                                                <h1 onClick={() => hireRequestAction("accept", notification._id, myProfile._id, notification.hireRequestId)} className="text-white font-semibold text-sm px-2 py-1 rounded-md bg-[#2ECC71] cursor-pointer hover:bg-[#138643]">
                                                                    Accept
                                                                </h1>
                                                                <h1 onClick={() => hireRequestAction("reject", notification._id, myProfile._id, notification.hireRequestId)} className="text-white font-semibold text-sm px-2 py-1 rounded-md bg-[#E74C3C] cursor-pointer hover:bg-[#cc3c2c]">
                                                                    Reject
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    }{
                                                        notification.notificationType === 'review' &&
                                                        <div onClick={() => handleReviewNotification(notification._id, myProfile._id)}>
                                                            <h1 className="text-sm font-semibold">
                                                                You have received a review from {notification.triggeredBy.fullName}
                                                            </h1>
                                                            
                                                        </div>
                                                    }{
                                                        notification.notificationType === 'agreeHireRequest' &&
                                                        <div>
                                                            <h1 className="text-sm font-semibold">
                                                                {notification.triggeredBy.fullName} has accepted your hire request 
                                                            </h1>
                                                            <h1 onClick={() => handleHireReqAgreeNotification(notification._id, myProfile._id, notification.triggeredBy._id)} className="text-sm font-semibold text-[#29b2fe]">
                                                                Send a Message
                                                            </h1>
                                                        </div>
                                                    }
                                                    {
                                                        notification.notificationType === 'applicantHired' &&
                                                        <div>
                                                            <h1 className="text-sm font-semibold">
                                                                {notification.triggeredBy.fullName} has accepted your application 
                                                            </h1>
                                                            <h1 onClick={() => handleHireReqAgreeNotification(notification._id, myProfile._id, notification.triggeredBy._id)} className="text-sm font-semibold text-[#29b2fe]">
                                                                Send a Message
                                                            </h1>
                                                        </div>
                                                    }
                                                    {/* 'jobApplication', 
                                                    'hireRequest', 
                                                    'review', 
                                                    'applicantHired', 
                                                    "applicantRejected", 
                                                    "agreeHireRequest", 
                                                    "rejectedHireRequest",
                                                    "message",
                                                    "jobApplicationReminder" */}
                                                </h1>
                                            </div>
                                        ))
                                    }
                                    </div>
                            </Popover>
                        }
                        {
                            session && session.user &&
                            <div className={`${(!session || !session.user) && "hidden"}`}>
                                <IconDropDown
                                    className="bg-white" 
                                    interactive
                                    arrow
                                    placement="bottom"
                                    title={
                                    <div className="space-y-2 p-3 text-base text-[#666666]">
                                        <h1 onClick={() => router.push(`/Profile`)} className="cursor-pointer hover:underline">
                                        My Profile
                                        </h1>
                                        <h1 onClick={signOut} className="cursor-pointer hover:underline">
                                        Sign Out
                                        </h1> 
                                    </div>
                                    }>
                                    <img className={`h-10 w-10 rounded-full cursor-pointer`} src={session.user.image.includes("http") ? session.user.image: "https://img.icons8.com/officel/128/000000/user.png" } loading="lazy" />
                                </IconDropDown>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {/* lower header */}
            {
                page !== "postproject" && page !== "messenger" && page !== "search" &&
                <div className= {`bg-white border-b border-gray-200 hidden lg:flex z-0`} >
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
            }
            <Dialog open={loading}>
                <div className="animate-pulse flex items-center justify-center p-5">
                    <img
                        className="w-12 h-12"
                        src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                    <h1 className="italic text-xl font-extrabold -ml-3 text-[#0e1724] hidden lg:flex">elance</h1>    
                </div>
            </Dialog>
            
        </header>
    )
}

export default Header