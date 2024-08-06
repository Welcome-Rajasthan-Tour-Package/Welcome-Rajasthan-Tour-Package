import React from "react";
import FrontView2 from "../../Components/FrontView2";
import { BlogContent } from "./Blog-Details/BlogContent";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Blog = () => {

  const BlogCards = BlogContent;

  return (
    <>
      <Helmet>
        <title>Blog - Welcome Rajasthan Tour Package</title>
      </Helmet>
      <FrontView2
        pageName="Blog"
        bgImg="bg-[url(./assets/blog-bg.webp)]"
        position="bg-[0_100%]"
      />
      <main>
        <section className="w-full min-h-screen flex items-center justify-center flex-col py-10 pb-20 px-2">
          <h3 className="text-sec-color text-3xl font-Seaweed_Script mt-3">
            Blog
          </h3>
          <h4 className=" font-bold text-[32px] md:text-[42px] leading-10 md:leading-[50px] font-Urbanist my-3 px-1 text-center">
            Heritage Meets Splendor
          </h4>
          <div className="blogs md:container mx-auto mt-5 grid grid-cols-auto md:grid-cols-2 980px:grid-cols-3 grid-row-auto md:gap-7 lg:gap-10 px-[1.5vw] md:px-5">
            {BlogCards.map((BlogCard, index) => (
              <div key={index} className="group pt-2 col-span-auto">
                <NavLink to={BlogCard.links}>
                  <div className="w-full max-h-96 md:h-60 overflow-hidden rounded-md">
                    <img
                      className="w-full h-full object-center object-cover group-hover:scale-105 transition-all duration-[500ms] ease-[ease] select-none"
                      src={BlogCard.imgUrl}
                      alt=""
                    />
                  </div>
                </NavLink>
                <div className="flex items-center justify-start mt-5 mb-3">
                  <NavLink
                    to={BlogCard.links}
                    className="text-base text-center py-1 px-4 border border-theme-color/20 bg-theme-color/5 text-theme-color rounded-md transition-all duration-[500ms] ease-[ease] hover:bg-theme-color hover:text-white mr-10"
                  >
                    {BlogCard.place}
                  </NavLink>
                  <div className="flex justify-start items-center text-theme-gray text-base">
                    <i className="fa-regular fa-calendar text-xl mr-2"></i>
                    <span className="text-center font-normal">
                      {BlogCard.blogDate}
                    </span>
                  </div>
                </div>
                <NavLink to={BlogCard.links} className="">
                  <h3 className="text-2xl font-bold font-Urbanist  hover:text-theme-color transition-all duration-[500ms] ease-[ease]">
                    {BlogCard.heading}
                  </h3>
                </NavLink>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
