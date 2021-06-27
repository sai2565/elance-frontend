import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
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
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img 
            className={className}
            onClick={onClick}
            src="https://img.icons8.com/windows/512/000000/circled-chevron-left.png"
        />
    );
  }

function PopularServicesSlider() {
    const aPopularCategories = [
        { 'title':"Build brand", 'desc':"Logo Design", "img_url":"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" },
        { 'title':"Customize site", 'desc':"WordPress", 'img_url':"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"},
        { 'title':"Share message", 'desc':"Voice Over", 'img_url':"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"},
        { 'title':"Engage audience", 'desc':"Video Explainer", 'img_url':"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"},
        { 'title':"Reach customers", 'desc':"Social Media", 'img_url':"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"},
        { 'title':"Unlock growth", 'desc':"SEO", 'img_url':"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"},
        { 'title':"Color dreams", 'desc':"Illustration", 'img_url':"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"},
        { 'title':"Go global", 'desc':"Translation", 'img_url':"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"},
        { 'title':"Learn business", 'desc':"Data Entry", 'img_url':"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"},
        { 'title':"Showcase story", 'desc':"Book Covers", 'img_url':"https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"},
    ];

var settings = {
            dots: false,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
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
            <div className="mx-5 mt-10 lg:mx-32 lg:mt-12 lg:mb-12">
                <h1 className="text-3xl text-black font-bold mb-5 lg:mb-16 lg:text-4xl">Popular professional services</h1>
                <div className="w-full justify-center">
                  <Slider {...settings} className="mx-5">
                            {aPopularCategories.map(({title, desc, img_url}) => (
                                <div className="p-4 mr-5 cursor-pointer focus:outline-none transition duration-150 transform hover:scale-105">
                                    <img loading="lazy" src={img_url} className="w-full"/>
                                    <div className="text-black items-center rounded-b-md bg-gray-200 px-3 py-5">
                                        <h1 className="whitespace-nowrap">{title}</h1>
                                        <h1 className="text-xl font-bold whitespace-nowrap">{desc}</h1>
                                    </div>
                                </div>
                            ))}
                </Slider>
                </div>  
            </div>
        </div>
    )
}

export default PopularServicesSlider
