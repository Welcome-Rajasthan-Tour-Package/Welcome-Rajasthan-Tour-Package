import React from "react";
import FrontView from "../../Components/FrontView";
import Section1 from "../../Components/Section1";
import Section2 from "../../Components/Section2";
import TourPackageCard from "../../Components/TourPackageCard";
import Slider from "../../Components/Slider";

import Jaipur from "/src/assets/hawa-mahal-2.webp";
import Udaipur from "/src/assets/Udaipur-CityPalace.webp";
import Jaisalmer from "/src/assets/jaisalmer-2.webp";
import Jodhpur from "/src/assets/jodhpur-2.webp";
import Bikaner from "/src/assets/Bikaner.webp";
import Pushkar from "/src/assets/pushkar-2.webp";

import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {

  const TopPlaces = [
    {
      links: "/blog/jaipur",
      imageUrl: Jaipur,
      heading: "Jaipur",
    },
    {
      links: "/blog/udaipur",
      imageUrl: Udaipur,
      heading: "Udaipur",
    },
    {
      links: "/blog/jaisalmer",
      imageUrl: Jaisalmer,
      heading: "Jaisalmer",
    },
    {
      links: "/blog/jodhpur",
      imageUrl: Jodhpur,
      heading: "Jodhpur",
    },
    {
      links: "/blog/bikaner",
      imageUrl: Bikaner,
      heading: "Bikaner",
    },
    {
      links: "/blog/pushkar",
      imageUrl: Pushkar,
      heading: "Pushkar",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Welcome Rajasthan Tour Package</title>
      </Helmet>
      <FrontView />
      <main className="main-container">
        <Section1 />
        <Section2 />
        <section className="page3 w-full flex items-center justify-center flex-col py-10 bg-[#eef3f7]">
          <h3 className="text-sec-color text-3xl font-Seaweed_Script mt-3">
            Tour Packages
          </h3>
          <h4 className="font-bold text-[32px] md:text-[42px] leading-10 md:leading-[50px] font-Urbanist my-3">
            Featured Tours
          </h4>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-7 xl:w-[92%]">
            <TourPackageCard />
          </div>
        </section>
        <section className="page4 w-full flex items-center justify-center flex-col py-10 bg-[url('./assets/slider-bg.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
          <h3 className="text-sec-color text-3xl font-Seaweed_Script mt-3">
            Tour Types
          </h3>
          <h4 className="text-white font-bold text-[32px] md:text-[42px] leading-10 md:leading-[50px] font-Urbanist my-3 px-1 text-center">
            Find Adventure in Life
          </h4>
          <div className="container 1300px:max-w-[1290px] mt-5 mx-auto">
            <Slider />
          </div>
        </section>
        <section className="page5 w-full flex items-center justify-center flex-col pt-10 pb-20 bg-[#eef3f7]">
          <h3 className="text-sec-color text-3xl font-Seaweed_Script mt-3">
            Top Places
          </h3>
          <h4 className=" font-bold text-[32px] md:text-[42px] leading-10 md:leading-[50px] font-Urbanist my-3">
            Top Visited Places
          </h4>
          <div className="w-full flex justify-center items-center flex-wrap gap-8 mt-5 px-5">
            {TopPlaces.map((topPlace, index) => (
              <NavLink
                to={topPlace.links}
                key={index}
                className="relative before:z-[1] w-full h-[250px] sm:w-[380px] sm:h-[280px] group before:w-full before:h-full before:bg-black/30 before:absolute overflow-hidden rounded-md"
              >
                <div className="w-full h-full flex justify-center">
                  <img
                    className="object-cover object-center w-full h-full group-hover:scale-105 transition-all duration-[500ms] ease-[ease] select-none"
                    src={topPlace.imageUrl}
                    alt={topPlace.heading}
                  />
                  <a
                    href="/"
                    className="absolute bottom-7 text-white text-4xl font-Seaweed_Script z-[2]"
                  >
                    {topPlace.heading}
                  </a>
                </div>
              </NavLink>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
