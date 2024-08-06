import React from "react";
import { NavLink } from "react-router-dom";
import { BlogContent } from "../Pages/Blog/Blog-Details/BlogContent";
import { TourPackageContent } from "../Pages/Tour Package/TourPackage-Details/TourPackageContent";

const BlogAsideBar = () => {
  const AsideBlogDetails = BlogContent;
  const AsideTourPackageDetails = TourPackageContent;

  return (
    <>
      <aside
        className={`col-span-1 flex justify-start items-start flex-col h-fit shadow-[0px_10px_80px_0px_#0000000f] rounded-xl p-12`}
      >
        {/* <div className="mb-12">
          <h3 className="font-Urbanist text-2xl font-bold mb-5">
            Tour Package
          </h3>
          <ul className="">
            {AsideTourPackageDetails.map((AsideBarDetail, index) => (
              <li key={index} className="mb-5 text-base">
                <NavLink to={AsideBarDetail.links}>
                  {AsideBarDetail.place}
                </NavLink>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="mb-12">
          <h3 className="font-Urbanist text-2xl font-bold mb-5">Blog</h3>
          <ul className="">
            {AsideBlogDetails.map((AsideBlogDetail, index) => (
              <li key={index} className="mb-5 text-base">
                <NavLink to={AsideBlogDetail.links}>
                  {AsideBlogDetail.place}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default BlogAsideBar;
