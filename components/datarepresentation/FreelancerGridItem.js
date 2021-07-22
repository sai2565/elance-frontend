import { Dialog } from '@material-ui/core';
import { useState } from 'react';
import HireFreelancer from '../search/HireFreelancer';

function FreelancerGridItem({favourite}) {
    var rating = 3;
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div className="m-2">
            <div>
                <div className=" border border-[#c4c4c4] rounded-md">
                    <div className="p-2 space-y-3">
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg font-bold text-[#29b2fe] underline cursor-pointer hover:text-[#239ada]">
                                Sai Sharan Beepeta | @sharan2565
                            </h1>
                            <img className="h-8 w-8 rounded-full" src="https://img.icons8.com/officel/160/000000/user.png"/>
                            {/* <img className="w-4 h-4 cursor-pointer hover:w-5 hover:h-5" src={`${favourite ? "https://img.icons8.com/ios-filled/50/29b2fe/like--v1.png" : "https://img.icons8.com/ios/150/29b2fe/like--v1.png"}`} /> */}
                            {/* https://img.icons8.com/ios-filled/50/000000/like--v1.png 
                            https://img.icons8.com/ios/150/333333/like--v1.png*/}
                        </div>
                        <div className="space-x-0.5 flex items-center">
                                <img className={`h-4 w-4 ${rating < 1 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 2 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 3 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 4 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 5 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <h1 className="text-xs">
                                    ( 20 ratings and 10 reviews )
                                </h1>
                            </div>
                        <div className="flex items-center">
                            I am a full stack developer with 4 years of experience building scalable and highly performant web and mobile apps. A javascript enthusiast and an aspiring entrepreneur.
                        </div>
                        <div>
                            <h1 className="font-semibold">
                                Skills
                            </h1>
                            <h1 className="">
                                ReactJs | NodeJs | MongoDB | GraphQL | NextJS | JavaScript
                            </h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img className="w-6 h-6" src="https://img.icons8.com/glyph-neue/128/2ECC71/user-location.png"/>
                            <h1>Remote | Australia</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img className="w-6 h-6" src="https://img.icons8.com/color/144/000000/rupee--v1.png"/>
                            <h1>700 per Hr</h1>
                        </div>
                        {/* <div className="">
                            <h1>posted on : 24-May-2020</h1>
                            <div className="flex items-center space-x-2">
                                <img className="w-6 h-6" src="https://img.icons8.com/material/192/666666/expired--v1.png"/>
                                <h1 className="italic font-semibold text-[#666666] text-sm">24-Sept-2021</h1>
                            </div>
                        </div> */}
                        <div className="flex justify-between">
                            <div />
                            <h1 onClick={handleOpen} className=" text-white font-semibold bg-[#29b2fe] px-4 py-1 rounded-full cursor-pointer hover:bg-[#239ada]">
                                Hire
                            </h1>
                            <Dialog
                                open={open}
                                onClose={handleClose}>
                                <div>
                                    <HireFreelancer />
                                </div>
                            </Dialog>                           
                        </div>
                    </div>
                    {/* <div className="border-t border-[#c4c4c4] space-x-2 flex p-2 justify-between">
                        <div>
                            <h1 className="font-semibold text-[#29b2fe] underline cursor-pointer hover:text-[#239ada]">
                                Sai Sharan Beepeta | @sharan2565 
                            </h1>
                            <div className="space-x-0.5 flex">
                                <img className={`h-4 w-4 ${rating < 1 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 2 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 3 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 4 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                                <img className={`h-4 w-4 ${rating < 5 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                            </div>
                        </div>
                        <div>
                            <img className="h-8 w-8 rounded-full" src="https://img.icons8.com/officel/160/000000/user.png"/>
                        </div>
                    </div> */}
                </div> 
            </div>
        </div>
    )
}

export default FreelancerGridItem
