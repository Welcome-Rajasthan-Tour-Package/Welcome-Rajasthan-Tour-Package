import React from "react";
import FrontView2 from "../../Components/FrontView2";
import TourPackageCard from "../../Components/TourPackageCard";
import { Helmet } from "react-helmet";

const TourPackage = () => {
  return (
    <>
      <Helmet>
        <title>Tour Package - Welcome Rajasthan Tour Package</title>
      </Helmet>
      <FrontView2
        pageName="Tour Package"
        bgImg="bg-[url(./assets/Udaipur-city.jpg)]"
        position="bg-[0_80%]"
      />
      <main>
        <section className="flex justify-center items-center flex-col py-10">
          <h3 className="text-sec-color text-3xl font-Seaweed_Script mt-3">
            Tour Package
          </h3>
          <h4 className=" font-bold text-[32px] md:text-[42px] leading-10 md:leading-[50px] font-Urbanist my-3 px-1 text-center">
            Unforgettable Tours Await
          </h4>
          <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-7 xl:w-[92%]">
            <TourPackageCard />
          </div>
        </section>
      </main>
    </>
  );
};

export default TourPackage;
