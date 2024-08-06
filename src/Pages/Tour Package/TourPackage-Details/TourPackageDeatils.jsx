import React from "react";
import AsideBar from "../../../Components/AsideBar";
import FrontView2 from "../../../Components/FrontView2";

const TourPackageDeatils = () => {
  return (
    <>
      <FrontView2
        pageName="Tour Package Details"
        bgImg="bg-[url(/src/assets/jaipur-2.webp)]"
        position="bg-[0_100%]"
      />
      <section className="flex justify-center items-center w-full h-full py-10 lg:py-24 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 xl:gap-12 h-full w-full lg:px-8 xl:px-0 xl:container mx-auto px-5">
          <div className="w-full h-full col-span-2">a</div>
          <AsideBar/>
        </div>
      </section>
    </>
  );
};

export default TourPackageDeatils;
