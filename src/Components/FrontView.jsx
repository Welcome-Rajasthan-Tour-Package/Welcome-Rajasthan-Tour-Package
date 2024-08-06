import React, { useRef } from "react";
import ChittorgarhFort from "../assets/chittorgarh-fort.webp";
import UmaidBhawan from "../assets/Umaid-Bhawan.webp";
import CityPalace from "../assets/city-palace.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const FrontView = () => {
  const textRef = useRef(null);
  const h3Ref = useRef(null);
  const pRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  useGSAP(() => {
    const animateImg = () => {
      const tl = gsap.timeline({
        repeat: -1,
      });
      tl.to([img1Ref.current], {
        scale: 1.2,
        duration: 4.5,
        zIndex: 2,
        stagger: 4.5,
      });
      tl.to([img2Ref.current], {
        scale: 1.2,
        duration: 4.5,
        zIndex: 2,
        stagger: 4.5,
      });
      tl.to([img3Ref.current], {
        scale: 1.2,
        duration: 4.5,
        zIndex: 2,
        stagger: 4.5,
      });
    };

    animateImg();

    const animateElements = () => {
      let tl = gsap.timeline();
      tl.from(textRef.current, {
        opacity: 0,
        y: -100,
        duration: 2,
        stagger: 0.1,
      });
      tl.from(
        h3Ref.current,
        {
          opacity: 0,
          y: 100,
          duration: 0.8,
        },
        "-=1"
      );
      tl.from(
        pRef.current,
        {
          opacity: 0,
          y: 100,
          duration: 0.8,
        },
        "-=0.5"
      );
    };

    animateElements();

    const animateExploreLetter = () => {
      let tl = gsap.timeline();
      tl.from("#exploreletter", {
        opacity: 0,
        duration: 0.5,
      });
      tl.from(["#e1", "#x2", "#p3", "#l4", "#o5", "#r6", "#e7"], {
        display: "none",
        duration: 0.9,
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power1.in",
      });
    };

    animateExploreLetter();
  }, []);

  return (
    <>
      <div className="frontview w-full h-screen sm:h-[85vh] relative overflow-hidden">
        <div className="absolute w-full h-full z-[-1] c flex items-center justify-center">
          <div className="relative w-full h-full">
            <img
              ref={img1Ref}
              className="w-full h-full object-cover object-center absolute select-none"
              src={CityPalace}
              alt="City Palace Udaipur"
            />
            <img
              ref={img2Ref}
              className="w-full h-full object-cover object-bottom absolute select-none"
              src={UmaidBhawan}
              alt="Umaid Bhawan Jodhpur"
            />
            <img
              ref={img3Ref}
              className="w-full h-full object-cover object-bottom absolute select-none"
              src={ChittorgarhFort}
              alt="Chittorgarh Fort"
            />
          </div>
        </div>
        <div className="absolute w-full z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center p-5">
          <div
            ref={textRef}
            className="text-sec-color font-Seaweed_Script text-4xl my-3"
          >
            Discover the Rajasthan
          </div>
          <h3
            ref={h3Ref}
            className="font-Urbanist font-bold text-5xl leading-[60px] md:text-7xl my-5"
          >
            Creating memories that last...
          </h3>
          <p
            ref={pRef}
            className="font-Inter text-lg leading-[30px] mt-4"
          >
            Explore Rajasthan with our curated and customizable tour packages.
          </p>
          <div
            id="exploreletter"
            className="text-center h-[200px] translate-y-1/4 select-none hidden lg:inline-block"
          >
            {["e", "x", "p", "l", "o", "r", "e"].map((Letter, index) => (
              <span
                id={Letter + (index + 1)}
                key={index}
                className="tracking-tight inline-block font-black text-[230px] xl:text-[280px] font-Urbanist leading-[200px] min-h-[200px] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#ffffff91] uppercase text-transparent"
              >
                {Letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontView;
