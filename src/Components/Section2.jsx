import React from "react";
import PiggyBank from "../assets/piggy-bank.svg";
import PaySecure from "../assets/pay-secure.svg";
import AffordablePrice from "../assets/affordable-price.svg";
import NoExtraFees from "../assets/no-extra-fees.svg";

const Section2 = (props) => {
  const WhyChoose = [
    {
      imgSrc: AffordablePrice,
      ImgAlt: "Affordable Price Image",
      heading: "Affordable Price",
      para: "Our company offers versatile payment plans to accommodate diverse financial needs.",
    },
    {
      imgSrc: NoExtraFees,
      ImgAlt: "No Extra Fees Image",
      heading: "No Extra Fees",
      para: "In our services, rest assured, no extra fees sneakily hidden, ensuring transparent transactions always.",
    },
    {
      imgSrc: PiggyBank,
      ImgAlt: "Flex Deposit Image",
      heading: "Flex Deposit",
      para: "Ready to start your next adventure? Contact us today to begin planning your dream",
    },
    {
      imgSrc: PaySecure,
      ImgAlt: "Pay Secure Image",
      heading: "Pay Secure",
      para: "Secure payments ensure peace of mind when booking your tour package with us.",
    },
  ];

  return (
    <section
      className={`page2 why-choose-page w-full text-center ${props.bgImg} bg-cover bg-center bg-no-repeat`}
    >
      <div
        className={`overlay w-full h-full px-4 pt-16 py-12 ${props.bgColor}`}
      >
        <h3 className="text-sec-color text-3xl font-Seaweed_Script">
          We are best
        </h3>
        <h4 className="font-bold text-[32px] md:text-[42px] leading-10 md:leading-[50px] font-Urbanist my-3">
          Why Choose Us
        </h4>
        <div className="why-choose-card flex justify-center items-center flex-col md:gap-5 md:flex-wrap md:flex-row mt-10 gap-5">
          {WhyChoose.map((WhyChooseCard, index) => (
            <div
              key={index}
              className="whychoosecard min-h-64 lg:min-h-80 xl:min-h-72 md:w-[48%] lg:w-[22%] py-6 px-5 rounded-xl bg-white"
            >
              <div className="text-theme-color size-16 mb-4 mx-auto select-none">
                <img
                  className="object-cover object-center"
                  src={WhyChooseCard.imgSrc}
                  alt={WhyChooseCard.ImgAlt}
                />
              </div>
              <div className="inline-block font-bold text-2xl font-Urbanist mb-3 hover:text-theme-color transition-all duration-[500ms] ease-[ease]">
                {WhyChooseCard.heading}
              </div>
              <p className="text-theme-gray font-Inter leading-7">
                {WhyChooseCard.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
