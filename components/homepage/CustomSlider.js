import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JobPost from "../datarepresentation/JobPost";

function NextItemArrow(props) {
    const { className, style, onClick } = props;
    console.log(className)
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

function CustomSlider({title, item}) {

  const sliderItem = item;
  
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
                <h1 className="text-xl text-black font-bold">{title}</h1>
                <div className="w-full justify-center">
                  <Slider {...settings} className="mx-5">
                    <JobPost jobdata = {sliderItem}/>
                    <JobPost jobdata = {sliderItem}/>   
                    <JobPost jobdata = {sliderItem}/>   
                    <JobPost jobdata = {sliderItem}/>   
                    <JobPost jobdata = {sliderItem}/>   
                    <JobPost jobdata = {sliderItem}/>   
                </Slider>
                </div>  
            </div>
        </div>
    )
}

export default CustomSlider
