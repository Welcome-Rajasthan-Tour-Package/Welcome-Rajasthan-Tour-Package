import React from "react";

const FrontView2 = (props) => {
  return (
    <>
      <div className={`flex justify-center items-center w-full h-[65vh] ${props.bgImg} bg-cover ${props.position} bg-no-repeat bg-[0_80%]`}>
        <div className="overlay flex justify-center items-center flex-col w-full h-full bg-black/20">
          <h2 className="text-white text-7xl font-Urbanist font-bold mb-5 text-center">
            {props.pageName}
          </h2>
          <div className="text-white font-Seaweed_Script text-2xl">
            <a
              className="text-sec-color hover:text-theme-color mr-5 transition-all duration-[500ms] ease-[ease] select-none"
              href="/"
            >
              Home
            </a>
            <span className="">- &nbsp; {props.pageName}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontView2;
