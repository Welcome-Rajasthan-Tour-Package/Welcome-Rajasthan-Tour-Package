import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { Pagination, Autoplay } from "swiper/modules";
import Chittorgarh from "../assets/Chittorgarh.webp";
import Pushkar from "../assets/Pushkar.webp";
import Bikaner from "../assets/Bikaner.webp";
import Ajmer from "../assets/Ajmer.webp";
import Ranthambore from "../assets/Ranthambore.webp";
import Jaisalmer from "../assets/Jaisalmer.webp";
import Kumbhalgarh from "../assets/Kumbhalgarh.webp";
import Udaipur from "../assets/Udaipur.webp";
import MountAbu from "../assets/Mount-Abu.webp";
import Jodhpur from "../assets/Jodhpur.webp";
import Jaipur from "../assets/Jaipur.webp";

const Slider = () => {
  const slides = [
    {
      imageUrl: Jaipur,
      heading: "Jaipur",
    },
    {
      imageUrl: Jaisalmer,
      heading: "Jaisalmer",
    },
    {
      imageUrl: Udaipur,
      heading: "Udaipur",
    },
    {
      imageUrl: Kumbhalgarh,
      heading: "Kumbhalgarh",
    },
    {
      imageUrl: Chittorgarh,
      heading: "Chittorgarh",
    },
    {
      imageUrl: Jodhpur,
      heading: "Jodhpur",
    },
    {
      imageUrl: Bikaner,
      heading: "Bikaner",
    },
    {
      imageUrl: Pushkar,
      heading: "Pushkar",
    },
    {
      imageUrl: Ajmer,
      heading: "Ajmer",
    },
    {
      imageUrl: MountAbu,
      heading: "Mount abu",
    },
    {
      imageUrl: Ranthambore,
      heading: "Ranthambore",
    },
  ];
  return (
    <div className="slider-div py-10 h-[450px]">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          320: {
            slidesPerView: "auto",
            centeredSlides: true,
          },
          1280: {
            slidesPerView: 6,
            centeredSlides: false,
          },
        }}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="bg-transparent mx-3 xl:mx-2">
            <div className="group w-full inline-flex items-center flex-col gap-3">
              <div className="size-[200px] overflow-hidden rounded-lg">
                <img
                  className="group-hover:scale-105 transition-all duration-[500ms] ease-[ease] object-center object-cover w-full h-full select-none"
                  src={slide.imageUrl}
                  alt={slide.heading}
                />
              </div>
              <h4 className="text-white font-bold font-Urbanist text-xl my-2 hover:text-theme-color transition-all duration-[500ms] ease-[ease]">
                {slide.heading}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
