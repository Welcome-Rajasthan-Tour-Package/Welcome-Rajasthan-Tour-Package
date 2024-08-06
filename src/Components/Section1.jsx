import React from "react";
import Shape1 from "../assets/homeshape1.png";
import GadsisarLake from "../assets/Gadsisar-lake.webp";
import RampuriaHaveli from "../assets/Rampuria-Haveli.webp";
import HawaMahal from "../assets/Hawa-Mahal.webp";

const Section1 = () => {
  const sectionPage = [
    {
      iconName: "fa-solid fa-earth-americas",
      heading: "Rajasthan Tours",
      para: "Our team of travel professional brings a wealth of knowledge and expertise to the table.",
    },
    {
      iconName: "fa-solid fa-layer-group",
      heading: "Choose Multiple Options",
      para: "Planning trip should be an exciting adventure, not stressful ordeal. Let us handle the logistics.",
    },
  ];
  return (
    <section className="page1 w-full relative flex items-center justify-center flex-col lg:flex-row py-6 lg:px-6 xl:px-20">
      <div className="absolute z-[-1] w-full h-full">
        <img
          className="w-full h-full object-center object-cover select-none"
          src={Shape1}
          alt="Shape 1"
        />
      </div>
      <div className="page1-part1 w-full lg:w-1/2 h-auto px-5 md:px-8 py-7">
        <h3 className="text-sec-color text-3xl font-Seaweed_Script">
          About us
        </h3>
        <h4 className="font-bold text-[32px] md:text-[42px] leading-10 md:leading-[50px] font-Urbanist my-3 md:pr-16 lg:pr-0">
          Plan a trip with{" "}
          <span className="text-theme-color">Welcome Rajasthan</span> Tour
          Package
        </h4>
        <p className="font-Inter text-theme-gray mt-7 leading-7 md:pr-16 lg:pr-3">
          We're dedicated to offering exceptional value for your travel
          investment. Our relationships with trusted travel partners
        </p>
        <div className="mt-[5vh]">
          {sectionPage.map((sectionPageContent, index) => (
            <div key={index} className="flex justify-start items-start my-5">
              <div className="flex justify-center items-start mr-4">
                <div className="size-[60px] flex justify-center items-center bg-theme-light-color rounded-full">
                  <i
                    className={`${sectionPageContent.iconName} text-theme-color text-2xl`}
                  ></i>
                </div>
              </div>
              <div className="w-4/5">
                <span className="font-bold font-Urbanist text-2xl">
                  {sectionPageContent.heading}
                </span>
                <p className="text-theme-gray mt-3 leading-7">
                  {sectionPageContent.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="page1-part2 lg:w-1/2 flex justify-center items-center flex-col sm:flex-row p-[3vw] lg:p-5">
        <div className="mx-1 flex justify-center items-center flex-col lg:mx-2">
          <div className="w-full h-full sm:max-w-[250px] sm:h-[310px] sm:max-h-full rounded-xl overflow-hidden">
            <img
              className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-[1s] ease-[ease] select-none"
              src={HawaMahal}
              alt="Hawa Mahal"
            />
          </div>
        </div>
        <div className="mx-1 flex justify-center items-center flex-col sm:items-start">
          <div className="w-full h-full sm:max-w-[280px] sm:h-[310px] sm:max-h-full rounded-xl overflow-hidden my-2">
            <img
              className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-[1s] ease-[ease] select-none"
              src={GadsisarLake}
              alt="Gadsisar Lake"
            />
          </div>
          <div className="w-full h-full sm:w-[220px] sm:h-[250px] rounded-xl overflow-hidden my-2">
            <img
              className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-[1s] ease-[ease] select-none"
              src={RampuriaHaveli}
              alt="Rampuria Haveli"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
