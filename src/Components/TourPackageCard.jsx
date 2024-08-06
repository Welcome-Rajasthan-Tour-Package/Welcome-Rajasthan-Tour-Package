import React from "react";
import { TourPackageContent } from "../Pages/Tour Package/TourPackage-Details/TourPackageContent";
import { NavLink } from "react-router-dom";

const TourPackageCard = () => {
  const TourPackageCard = TourPackageContent;

  return (
    <>
      {TourPackageCard.map((tourPackageCards, index) => (
        <div
          key={index}
          className="relative w-full h-auto rounded-xl overflow-hidden bg-white group shadow-xl pb-5"
        >
          <div className="imgbox w-full h-1/2 sm:min-h-[180px] sm:max-h-[200px] relative overflow-hidden rounded-b-xl">
            <img
              className="object-center object-cover w-full h-full group-hover:scale-105 transition-all duration-[500ms] ease-[ease] select-none"
              src={tourPackageCards.imageUrl}
              alt={tourPackageCards.alt}
            />
          </div>
          <div className="card-content w-full pt-5 px-5 pb-4">
            <span className="inline-flex items-center justify-center text-[13px] uppercase font-bold text-theme-gray font-Urbanist mb-3">
              <i className="fa-regular fa-clock mr-2 text-sm font-medium"></i>
              <span className="flex items-center justify-center tracking-wide">
                {tourPackageCards.days}
              </span>
            </span>
            <h4 className="font-semibold font-Urbanist text-xl mb-2 tracking-wide">
              {tourPackageCards.heading}
            </h4>
          </div>
          <NavLink
            className="absolute bottom-5 left-5 text-base font-medium flex items-center justify-start gap-2 hover:text-theme-color transition-all duration-[500ms] ease-[ease]"
            to={tourPackageCards.links}
          >
            Explore more <i className="fa-solid fa-arrow-up-long rotate-90"></i>
          </NavLink>
        </div>
      ))}
    </>
  );
};

export default TourPackageCard;
