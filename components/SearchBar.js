import Popover from "@material-ui/core/Popover";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';



function SearchBar({device}) {
    const usertype = "C";
    const [searchContext, setSearchContext] = useState(usertype);
    const searchInputRef = useRef(null);
    const router = useRouter();

    const onSearch = (e) => {
        e.preventDefault();
        const query = searchInputRef.current.value;
        if(!query) { return; }
        searchContext === "F" ? router.push(`/Search?category=freelancers&query=${query}`) : router.push(`/Search?category=projects&query=${query}`) ;
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleSearchDropClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSearchDropClose = () => {
        setAnchorEl(null);
    };

    const isSearchDropOpen = Boolean(anchorEl);
    const id = isSearchDropOpen ? "searchbardropdown" : undefined;

    return (
        <div className="items-center">
            <div className="items-center ml-2">
                <form className="flex">
                <div onClick={handleSearchDropClick} className="flex items-center rounded-l-full h-9 xl:w-96 border border-gray-400 focus-within:border-[#0e1724]">
                    <img 
                    className="h-4 w-4 ml-3"
                    src="https://img.icons8.com/metro/52/000000/search.png"/>
                    <img 
                    className="h-4 w-4 mx-1 cursor-pointer"
                    src="https://img.icons8.com/ios-filled/100/000000/sort-down.png"/>
                    <input
                    ref={searchInputRef}
                    className="border-none focus:outline-none mx-2 text-[#0e1724] text-sm lg:text-base flex-grow flex-shrink"
                    defaultValue={router.query.query || ""}
                    placeholder="Find Jobs or Freelancers"/>
                </div>
                <button 
                type="submit"
                onClick={onSearch}
                className="bg-[#29b2fe] text-sm lg:text-base text-white font-semibold px-5 h-9 rounded-r-full hover:bg-[#238ac2] focus:outline-none -ml-1">Search</button>
                </form>
            </div>
            <Popover
                className={`rounded-md m-2 ${device==="s" && "lg:hidden "} ${device === "l" && "hidden lg:flex"}`}
                id={id}
                open={isSearchDropOpen}
                anchorEl={anchorEl}
                onClose={handleSearchDropClose}
                anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
                }}
                transformOrigin={{
                vertical: "top",
                horizontal: "left"
                }}>
                    <div className={`rounded-md text-sm lg:text-base`}>
                        <div onClick={() => setSearchContext("F")} className={`flex border-b-2 border-gray-400 items-center space-x-5 p-3 cursor-pointer ${searchContext === "F" && "bg-[#29b2fe] text-white"}`}>
                            <img className="w-8 h-8" src={`${searchContext === "F" ? "https://img.icons8.com/ios-glyphs/90/ffffff/user--v1.png" : "https://img.icons8.com/ios-glyphs/90/000000/user--v1.png"}`}/>
                            <div className="">
                                <h1 className="font-bold">Freelancers</h1>
                                <h1>Hire professional freelancers</h1>
                            </div>
                        </div>
                        <div onClick={() => setSearchContext("C")} className={`flex border-b-2 border-gray-400 items-center space-x-5 p-3 cursor-pointer ${searchContext === "C" && "bg-[#29b2fe] text-white"}`}>
                            <img className="w-8 h-8" src={`${searchContext === "C" ? "https://img.icons8.com/material-rounded/128/ffffff/find-matching-job.png" : "https://img.icons8.com/material-rounded/128/000000/find-matching-job.png" }`} />
                            <div className="">
                                <h1 className="font-bold">Projects</h1>
                                <h1>Browse projects</h1>
                            </div>
                        </div>
                    </div>
            </Popover>
            
        </div>
    )
}

export default SearchBar
