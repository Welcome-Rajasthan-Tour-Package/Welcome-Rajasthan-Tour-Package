import React from "react";
import FrontView2 from "../../../Components/FrontView2";
import BlogAsideBar from "../../../Components/AsideBar.jsx";
import { Helmet } from "react-helmet";

const BlogDetails = ({ content }) => {
  const BlogContent = content;

  return (
    <>
      <Helmet>
        <title>
          {`${BlogContent.place} Blog - Welcome Rajasthan Tour Package`}
        </title>
      </Helmet>
      <FrontView2
        pageName="Blog Details"
        bgImg="bg-[url(./assets/blog-bg.webp)]"
        position="bg-[0_100%]"
      />
      <section className="flex justify-center items-center w-full h-full py-10 lg:py-24 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 xl:gap-12 h-full w-full lg:px-8 xl:px-0 xl:container mx-auto px-5">
          <div className="w-full h-full col-span-2">
            <div className="overflow-hidden rounded-xl h-[70vh]">
              <img
                className="object-center object-cover w-full h-full hover:scale-110 transition-all duration-[1s] ease-[ease] "
                src={BlogContent.imgUrl}
                alt={BlogContent.place}
              />
            </div>
            <div className="flex items-center justify-start mt-5 mb-5">
              <div className="text-base text-center py-1 px-4 border border-theme-color/20 bg-theme-color/5 text-theme-color rounded-md transition-all duration-[500ms] ease-[ease] hover:bg-theme-color hover:text-white mr-10">
                {BlogContent.place}
              </div>
              <div className="flex justify-start items-center text-theme-gray text-base">
                <i className="fa-regular fa-calendar text-xl mr-2"></i>
                <span className="text-center font-normal">
                  {BlogContent.blogDate}
                </span>
              </div>
            </div>
            <h2 className="font-Urbanist font-bold text-4xl leading-[50px] mb-4">
              {BlogContent.heading}
            </h2>
            <p className="text-base leading-7 text-theme-gray mb-16 font-normal">
              {BlogContent.paragraph}
            </p>
            <div className="flex justify-center items-center flex-col md:flex-row gap-5 lg:gap-10 xl mb-10">
              <div className="w-full h-[500px] overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover object-center"
                  src={BlogContent.secImgUrl}
                  alt={BlogContent.secImgUrl}
                />
              </div>
              <div className="w-full h-[500px] overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover object-center"
                  src={BlogContent.thirdImgUrl}
                  alt={BlogContent.thirdImgUrl}
                />
              </div>
            </div>
            <h2 className="font-Urbanist font-bold text-4xl leading-[50px] mb-7">
              {BlogContent.otherHeading}
            </h2>
            <p className="text-base leading-7 text-theme-gray mb-10 font-normal">
              {BlogContent.otherPara}
            </p>
          </div>
          <BlogAsideBar />
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
