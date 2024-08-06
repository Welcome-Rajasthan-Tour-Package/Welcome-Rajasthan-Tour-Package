import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const Footer = () => {
  const navLink = [
    {
      link: "/",
      heading: "home",
    },
    {
      link: "/about",
      heading: "about",
    },
    {
      link: "/tourpackage",
      heading: "tour package",
    },
    {
      link: "/blog",
      heading: "blog",
    },
    {
      link: "/privacy",
      heading: "privacy",
    },
    {
      link: "/contact",
      heading: "contact",
    },
  ];
  return (
    <>
      <footer className="bg-[url('./assets/footer-bg.webp')] bg-fixed bg-cover bg-bottom bg-no-repeat">
        <div className="overlay w-full h-full bg-[#000000]/40">
          <div className="w-full h-full grid-cols-1 grid lg:grid-cols-3 items-center justify-start pt-12 pb-10 px-2 md:px-6 lg:px-12 xl:px-20 text-white/90 gap-10 mb-5">
            <div className="p-5 flex justify-start items-start flex-col h-full">
              <NavLink
                to="/"
                className="logo w-full flex items-center justify-start gap-3 mb-6"
              >
                <img
                  className="flex items-center justify-center object-center object-cover size-[4.5rem] rounded-full hover:drop-shadow-[0_5px_10px_var(--theme-color)] transition-all duration-[250ms] ease-[ease]"
                  src={Logo}
                  alt="Welcome Rajasthan Tour Package Logo"
                />
                <h1 className="flex justify-center items-start flex-col text-3xl font-black text-theme-color/90 font-Seaweed_Script gap-1">
                  <span className="inline-block">Welcome Rajasthan</span>
                  <span className="inline-block text-white/90">
                    Tour Package
                  </span>
                </h1>
              </NavLink>
              <p className="mb-8 text-lg">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet morning of spring which
              </p>
              <div className="contact-links text-base">
                <div className="mb-2 hover:text-theme-color transition-all duration-[500ms] ease-[ease] my-3">
                  <a
                    className=""
                    href="mailto:welcomerajasthantourpackage@gmail.com"
                  >
                    <span className="inline-block">
                      welcomerajasthantourpackage
                    </span>
                    <span className="inline-block">@gmail.com</span>
                  </a>
                </div>
                <div className=" hover:text-theme-color transition-all duration-[500ms] ease-[ease] my-3">
                  <a href="tel:+916376335095">(+91)-6376335095</a>
                </div>
                <div className=" hover:text-theme-color transition-all duration-[500ms] ease-[ease] my-3">
                  <a target="_blank" href="https://maps.app.goo.gl/AeASL1RthTNjjQDb9">
                    Hotel Bhairon Vilas, next to Junagarh Fort Road, near Head
                    Post Office, Kuchilpura, Bikaner, Rajasthan - 334001
                  </a>
                </div>
              </div>
            </div>
            <div className="p-5 pl-7 flex justify-start items-start lg:items-center flex-col h-full">
              <ul className="">
                <h3 className="text-theme-color/90 font-Urbanist font-bold text-2xl mb-5">
                  Quick Links
                </h3>
                {navLink.map((navLinkContent, index) => (
                  <li
                    key={index}
                    className="hover:text-theme-color text-lg font-medium mb-3 transition-all duration-[500ms] ease-[ease] capitalize"
                  >
                    <NavLink to={navLinkContent.link}>
                      {navLinkContent.heading}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 w-full h-full flex justify-start items-start flex-col">
              <h3 className="font-Urbanist font-bold text-2xl mb-5 text-theme-color/90">
                Map
              </h3>
              <div className="overflow-hidden w-full h-full rounded-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803286.2160027307!2d70.87716135625003!3d28.023149600000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd494a6dd07b%3A0x804372c2e26f0bea!2sWelcome%20Rajasthan%20Tour%20Package!5e0!3m2!1sen!2sin!4v1722418162347!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title="Welcome Rajasthan Tour Package Map"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around text-white/90 border-t-[1px] border-zinc-300 p-5 bg-[#000000]/10">
            <p className="text-base font-semibold text-center">
              <span className="inline-bloack">
                Copyright © 2024{" "}
                <NavLink className="text-theme-color" to="/">
                  Welcome Rajasthan Tour Package.
                </NavLink>
              </span>{" "}
              <span className="inline-block">Inc. All Rights Reserved</span>
            </p>
            <p className="font-semibold text-center">
              Website created by{" "}
              <span className="text-theme-color/90">
                Welcome Rajasthan Team
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
