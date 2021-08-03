import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JobPost from "../datarepresentation/JobPost";
import { useRouter } from "next/router";

function NextItemArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
            onClick={onClick}>
            <img src="https://img.icons8.com/windows/512/000000/circled-chevron-right.png"/>
        </div>
    );
  }

  function PrevItemArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img 
            className={className}
            onClick={onClick}
            src="https://img.icons8.com/windows/512/000000/circled-chevron-left.png"
        />
    );
  }

function CustomSlider({profile, slider_data}) {
  const router = useRouter();
  const userType = profile?.user[0].userType;
  const userInternalId = profile?.user[0]._id;
  const sliderItems = (userType === "client" ? slider_data.projects : profile?.user[0].applications)

  var settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <NextItemArrow />,
        prevArrow: <PrevItemArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        <div className="">
            <div className="space-y-10">
                <h1 className="text-xl text-black font-bold">{userType === "client" ? "My Postings" : "My Applications"}</h1>
                <div className="w-full justify-center">
                  {
                    profile &&
                    <Slider {...settings} className={`${userType === "client" ? "": "hidden"}`} >
                        {
                          sliderItems.length === 0 && userType === "client" &&
                          <div onClick={() => router.push('/PostProject')} className="space-y-5 border border-[#c4c4c4] rounded-md cursor-pointer w-20">
                            <h1 className="text-center p-2 border-b border-[#c4c4c4]">Nothing to Show - Post a Project</h1>
                            <div className="flex justify-center">
                              <img className="h-28 w-28 my-10" src="https://img.icons8.com/material-outlined/500/000000/add.png"/>
                            </div>
                          </div>
                        }
                        {
                          sliderItems.length === 0 && userType === "freelancer" &&
                          <div onClick={() => router.push('/Search')} className="space-y-5 border border-[#c4c4c4] rounded-md cursor-pointer w-20">
                            <h1 className="text-center p-2 border-b border-[#c4c4c4]">No Applications - Search and Apply</h1>
                            <div className="flex justify-center">
                              <img className="h-28 w-28 my-10" src="https://img.icons8.com/ios/500/000000/search--v4.png"/>
                              {/* <img  src="https://img.icons8.com/material-outlined/500/000000/add.png"/> */}
                            </div>
                          </div>
                        }

                        { userType === "client" &&
                          sliderItems.map((project) => (
                              <JobPost 
                                project={project}
                              />
                          ))
                        }
                        {userType === "freelancer" && 
                          sliderItems.map((application) => (
                              console.log("Application "+JSON.stringify(application))
                          ))
                        }
                    </Slider>
                  }
                  
                </div>  
            </div>
        </div>
    )
}

export default CustomSlider
