import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import HeaderTag from '../components/HeaderTag'


const useStyles = makeStyles({
    list: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
  });

function Header() {

    const onSearch = (e) => {
        e.preventDefault();
    }

    // code for side bar
    const classes = useStyles();
    
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
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
        </div>
  );  
    return (
        <header className="sticky z-50">
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
            <div className="bg-white border-b border-gray-200">
                <div className="flex items-center justify-between mx-5 my-3 lg:mx-32">
                    <div className="flex items-center">
                        <img
                        className="h-7 w-7 mr-8 lg:hidden cursor-pointer"
                        src="https://img.icons8.com/metro/52/000000/menu.png"
                        onClick={toggleDrawer("left", true)}/>
                    
                        <div className="flex cursor-pointer items-center">
                            <img
                            className="w-12 h-12"
                            src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                            <h1 className="italic text-xl font-extrabold -ml-3 text-[#0e1724]">elance</h1>
                        </div>

                        <div className="items-center ml-14 hidden lg:flex">
                            <form className="flex">
                            <div className="flex items-center rounded-l-full h-9 xl:w-96 border border-gray-400 focus-within:border-[#0e1724]">
                                <img 
                                className="h-4 w-4 ml-3"
                                src="https://img.icons8.com/metro/52/000000/search.png"/>
                                <input 
                                className="border-none focus:outline-none mx-2 text-[#0e1724] flex-grow flex-shrink"
                                placeholder="Find Jobs or Freelancers"/>
                                {/* <img 
                                className="mr-3 h-4 w-4 cursor-pointer"
                                src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png"/> */}
                            </div>
                            <button 
                            type="submit"
                            onClick={onSearch}
                            className="bg-[#29b2fe] text-white font-semibold px-5 h-9 rounded-r-full hover:bg-[#238ac2] focus:outline-none -ml-1">Search</button>
                            </form>
                        </div>
                 
                    </div>
                    <div className="flex items-center space-x-5">
                        <h1 className={`cursor-pointer hover:text-[#29b2fe] text-lg font-semibold`}>
                            Log In
                        </h1>

                        <h1 className={`cursor-pointer hover:text-[#29b2fe] text-lg font-semibold`}>
                            Sign Up
                        </h1>

                        <h1
                        className="bg-yellow-400 px-5 py-2 text-white font-bold rounded-md cursor-pointer hover:bg-yellow-500 hidden lg:flex">
                            Post a Project
                        </h1>
                    </div>
                </div>
            </div>

            {/* lower header */}
            <div className="bg-white border-b border-gray-200  hidden md:flex">
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
