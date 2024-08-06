import React from "react";
import FrontView2 from "../../Components/FrontView2";
import Section1 from "../../Components/Section1";
import Section2 from "../../Components/Section2";
import { Helmet } from "react-helmet";

const About = () => {
  const BestOffer = [
    {
      bgImg: "bg-[url(./assets/jaisalmer-3.webp)]",
      title: "Jaisalmer",
      desc: "Jaisalmer - Fort",
      para: "Majestic Golden Fortress in the Thar Desert",
    },
    {
      bgImg: "bg-[url(./assets/jaipur-2.webp)]",
      title: "Jaipur",
      desc: "Jal Mahal",
      para: "",
    },
    {
      bgImg: "bg-[url(./assets/jodhpur-3.webp)]",
      title: "Jodhpur",
      desc: "Jaswant Thada",
      para: "",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - Welcome Rajasthan Tour Package</title>
      </Helmet>
      <FrontView2
        pageName="About"
        bgImg="bg-[url(./assets/about-bg.webp)]"
        position="bg-[0_60%]"
      />
      <main>
        <Section1 />
        <Section2
          bgColor="bg-[#faf6f2]/90"
          bgImg="bg-[url('/src/assets/shape-2.png')]"
        />
        <section className="page3 w-full flex items-center justify-center flex-col py-10">
          <h3 className="text-sec-color text-3xl font-Seaweed_Script mt-3">
            Best Deals
          </h3>
          <h4 className="font-bold text-[32px] md:text-[42px] leading-10 md:leading-[50px] font-Urbanist my-3">
            Special Offers
          </h4>
          <div
            className={`w-full h-auto grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 gap-4 px-3 md:px-6 lg:px-8 lg:gap-7 xl:px-16 xl:gap-8 py-10`}
          >
            {BestOffer.map((BestOfferContent, index) => (
              <div
                key={index}
                className={`rounded-xl w-full h-full col-span-1 row-span-1 overflow-hidden p-8 ${
                  BestOfferContent.bgImg
                } bg-cover bg-center bg-no-repeat ${
                  index === 0 &&
                  "col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-2"
                }`}
                // style={{ backgroundImage: `url(${BestOfferContent.bgImg})` }}
              >
                <div className={`w-full ${index === 0 ? "mb-64" : "mb-7 "} `}>
                  <div className="text-3xl font-Seaweed_Script font-extrabold mb-3 text-sec-color">
                    {BestOfferContent.title}
                  </div>
                  <div
                    className={`inline-flex justify-start items-center font-Urbanist text-3xl md:text-5xl font-extrabold mb-2 text-white ${
                      index === 0 && "text-3xl md:text-7xl"
                    }`}
                  >
                    {BestOfferContent.desc}
                  </div>
                  <p className="text-base font-medium text-white">
                    {BestOfferContent.para}
                  </p>
                </div>
                {/* <button className="text-white bg-theme-black hover:bg-white hover:text-theme-black transition-all duration-[500ms] ease-[ease] select-none border-none rounded-md text-sm font-medium py-3 px-6">
                  View Details
                </button> */}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
