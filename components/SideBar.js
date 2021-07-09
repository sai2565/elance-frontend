import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SearchBar from './SearchBar';

// const useStyles = makeStyles({
//     list: {
//       width:0,
//     },
//     fullList: {
//       width: 'auto',
//     },
//   });

function SideBar({anchor, toggleDrawer, usertype}) {
    //const classes = useStyles();
    //on search for projects or freelancers
    const onSearch = (e) => {
        e.preventDefault();
    }
    return (
        <div
        className="w-full"
          role="presentation">   
            <div className="items-center m-2">
                <div className="flex justify-between items-center">
                    <div className="flex cursor-pointer items-center">
                        <img
                        className="w-10 h-10"
                        src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                        <h1 className="italic text-xl font-extrabold -ml-3 text-[#0e1724]">elance</h1>
                    </div>
                    <img className="w-6 h-6 cursor-pointer" onClick={toggleDrawer(anchor, false)} src="https://img.icons8.com/material-outlined/96/666666/multiply--v1.png"/>
                </div>
                
                <div className="items-center m-2 ">
                    <SearchBar device={"s"} />
                </div>
                <div className={`w-full items-center mt-10 space-y-5 ${usertype === "F" && "hidden"}`}>
                    <div className="flex justify-center w-full items-center">
                        <h1 className="bg-yellow-400 px-5 py-2 text-white font-bold rounded-md cursor-pointer hover:bg-yellow-500 lg:flex"> Post a Project </h1>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default SideBar
