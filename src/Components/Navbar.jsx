import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const menuBar = useRef(null);
  const crossBtn = useRef(null);
  const sideBarBg = useRef(null);
  const sideBar = useRef(null);

  const disableBodyScroll = () => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  };

  const enableBodyScroll = () => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  };

  useEffect(() => {
    const animateSideBar = () => {
      gsap.set(sideBarBg.current, {
        display: "block",
      });
      gsap.to(sideBarBg.current, {
        opacity: 1,
        duration: 0.4,
        ease: "Power2.Out",
      });
      gsap.to(sideBar.current, {
        right: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "Power2.Out",
      });

      disableBodyScroll();
    };

    const reverseAnimateSideBar = () => {
      gsap.to(sideBar.current, {
        right: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "Power2.in",
      });
      gsap.to(sideBarBg.current, {
        opacity: 0,
        duration: 0.4,
        ease: "Power2.in",
      });
      gsap.set(sideBarBg.current, {
        display: "none",
      });

      enableBodyScroll();
    };

    const menuBarRef = menuBar.current;
    const crossBtnRef = crossBtn.current;

    if (menuBarRef && crossBtnRef) {
      sideBarBg.current.addEventListener("click", reverseAnimateSideBar);
      menuBarRef.addEventListener("click", animateSideBar);
      crossBtnRef.addEventListener("click", reverseAnimateSideBar);

      const navLinks = sideBar.current.querySelectorAll(".sidebar-navlinks li");
      navLinks.forEach((navLink) => {
        navLink.addEventListener("click", reverseAnimateSideBar);
      });

      return () => {
        sideBarBg.current.addEventListener("click", reverseAnimateSideBar);
        menuBarRef.removeEventListener("click", animateSideBar);
        crossBtnRef.removeEventListener("click", reverseAnimateSideBar);
      };
    }
  }, []);

  const socialMedia = [
    {
      socialLink: "https://www.facebook.com/profile.php?id=61554596382959",
      iconName: "fa-brands fa-youtube",
    },
    {
      socialLink: "https://www.facebook.com/profile.php?id=61554596382959",
      iconName: "fa-brands fa-facebook-f",
    },
    {
      socialLink: "https://www.instagram.com/welcome_rajasthan_tour_package/",
      iconName: "fa-brands fa-instagram",
    },
    {
      socialLink: "https://twitter.com/RajasthanTour02",
      iconName: "fa-brands fa-x-twitter",
    },
    {
      socialLink:
        "https://www.threads.net/@welcome_rajasthan_tour_package?hl=en",
      iconName: "fa-brands fa-threads",
    },
    {
      socialLink:
        "https://www.linkedin.com/in/welcome-rajasthan-tour-package-ba86422a6/",
      iconName: "fa-brands fa-linkedin-in",
    },
  ];

  const contactInfo = [
    {
      link: "tel:+916376335095",
      icon: "fa-solid fa-phone",
      title: "(+91)-6376335095",
    },
    {
      link: "mailto:welcomerajasthantourpackage@gmail.com",
      icon: "fa-regular fa-envelope",
      title: "welcomerajasthantourpackage@gmail.com",
    },
  ];

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
      <header className="border-b-1 border-theme-light-color">
        {/* Header details section start */}
        <div className="flex items-center justify-between flex-col min-[690px]:flex-row gap-3 py-4 px-6 text-[#fff] w-full bg-[linear-gradient(90deg,_#343434_0.47%,_#111111_100%)] md:px-[5vw]">
          <div className="flex items-center justify-center gap-2">
            <div className="flex justify-center items-start">
              <i className="fa-regular fa-clock text-theme-color text-xl mr-2 -mt-[1px]"></i>
              <span className="inline-flex items-center justify-center font-Inter text-base text-center break-words">
                Open Hours: 24/7 Hours
              </span>{" "}
            </div>
          </div>
          <div className="flex items-center justify-between gap-6">
            <span className="flex items-center justify-center font-Inter text-base text-center">
              On Social:
            </span>
            <div className="social-icons flex items-center justify-center gap-5">
              {socialMedia.map((socialMediaContent, index) => (
                <a
                  key={index}
                  className="hover:text-theme-color transition-all duration-[500ms] ease-[ease]"
                  href={socialMediaContent.socialLink}
                >
                  <i className={` ${socialMediaContent.iconName} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Header details section end */}

        {/* Navbar start */}
        <nav className="w-full h-full">
          {/* Large screen Navbar start */}
          <div className="navbar bg-[url(./assets/desert-bg.webp)] bg-cover bg-[0%_65%] bg-no-repeat px-3 600px:pt-2 980px:px-5">
            <div className="navbar-part1 flex justify-center items-center flex-col min-[600px]:flex-row min-[600px]:justify-between min-[600px]:mb-7 container mx-auto">
              <NavLink
                to="/"
                className="logo w-full flex items-center justify-center gap-3 py-3 px-2 bg-theme-color rounded-b-2xl min-[600px]:w-fit min-[600px]:bg-transparent"
              >
                <img
                  className="flex items-center justify-center object-center object-cover size-[4.5rem] rounded-full border-[1px] border-theme-black"
                  src={Logo}
                  alt="Welcome Rajasthan Tour Package Logo"
                />
                <h1 className="flex justify-center items-start flex-col text-[6.8vw] leading-7 sm:text-3xl sm:leading-8 font-black text-[#fff] font-Seaweed_Script gap-2 min-[600px]:text-theme-color">
                  <span className="inline-block">Welcome Rajasthan</span>
                  <span className="inline-block min-[600px]:text-white">
                    Tour Package
                  </span>
                </h1>
              </NavLink>
              <div className="w-fit contact-info flex justify-center items-center min-[600px]:justify-end gap-10 font-Inter font-medium px-2 py-6 text-center">
                {contactInfo.map((contactInfoContent, index) => (
                  <a
                    key={index}
                    className={`flex justify-center items-center text-white 600px:text-black hover:text-theme-color transition-all duration-[500ms] ease-[ease] ${
                      index === 1 && "min-[980px]:flex hidden"
                    }`}
                    href={contactInfoContent.link}
                  >
                    <i
                      className={` ${contactInfoContent.icon} text-theme-color mr-2 text-[20px]`}
                    ></i>
                    <p className="flex justify-start items-center break-all text-lg min-[600px]:text-base">
                      {contactInfoContent.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
            <div className="navbar-part2 py-3 bg-theme-light-color/50 backdrop-blur-[2px] flex justify-between items-center px-[5vw] rounded-t-xl container mx-auto">
              <menu className="nav-links lg:flex justify-center items-center gap-12 hidden ml-10">
                {navLink.map((navLinksContent, index) => (
                  <li
                    key={index}
                    className={`flex justify-center items-center ${
                      index === 5 && "hidden"
                    }`}
                  >
                    <NavLink
                      className="flex justify-center items-center text-[#111111] text-[14px] hover:text-theme-color transition-all duration-[500ms] ease-[ease] font-semibold uppercase"
                      to={navLinksContent.link}
                    >
                      {navLinksContent.heading}
                    </NavLink>
                  </li>
                ))}
              </menu>
              <div
                ref={menuBar}
                className="menu-btn bg-theme-color py-1 px-3 cursor-pointer lg:hidden"
              >
                <i className="fa-solid fa-bars text-white text-3xl"></i>
              </div>
              <button className="flex justify-center items-center group rounded-3xl border border-black hover:border-white lg:outer-btn lg:hover:border-theme-color lg:outer-btn-before">
                <Link
                  className={` w-full h-full flex justify-center items-center text-[15px] font-medium px-5 py-3 text-black group-hover:text-white/90 uppercase`}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
          {/* Large screen Navbar end */}

          {/* small screen Navbar start */}
          <div className="w-full h-full">
            <div
              ref={sideBarBg}
              className="side-navbar hidden fixed top-0 bg-theme-black/70 w-full h-full z-[9999] opacity-0"
            ></div>
            <div
              ref={sideBar}
              className="fixed top-0 -right-full z-[9999] w-full sm:w-[350px] h-full bg-theme-black overflow-y-auto"
            >
              <div
                ref={crossBtn}
                className="cross w-full h-12 flex justify-end items-center px-5 pt-5"
              >
                <i className="fa-solid fa-xmark text-white text-2xl cursor-pointer"></i>
              </div>
              <div className="w-full flex justify-center items-center pt-5 pb-20">
                <div className="logo w-full flex items-center justify-center gap-3 py-3 px-2 min-[600px]:w-fit min-[600px]:bg-transparent">
                  <img
                    className="flex items-center justify-center object-center object-cover size-[4.5rem] rounded-full border-[1px] border-theme-black"
                    src={Logo}
                    alt="Welcome Rajasthan Tour Package Logo"
                  />
                  <h1 className="flex justify-center items-start flex-col text-[7.5vw] leading-[5.5vh] sm:text-3xl sm:leading-8 font-black font-Seaweed_Script gap-2 text-theme-color">
                    <span className="inline-block">Welcome Rajasthan</span>
                    <span className="inline-block text-white">
                      Tour Package
                    </span>
                  </h1>
                </div>
              </div>
              <menu className="sidebar-navlinks border-b border-[#ffffff1a] mb-5">
                {navLink.map((navLinkContent, index) => (
                  <li
                    key={index}
                    className="border-t border-[#ffffff1a] w-full h-11 flex justify-start items-center"
                  >
                    <NavLink
                      onClick={""}
                      to={navLinkContent.link}
                      className="w-full h-full flex justify-start items-center text-white hover:text-theme-color transition-all duration-[500ms] ease-[ease] border-l-[5px] border-transparent px-6 py-2 font-medium text-[15px] leading-6 uppercase"
                    >
                      {navLinkContent.heading}
                    </NavLink>
                  </li>
                ))}
              </menu>
              <div className="contact-links text-lg text-white/70 px-7 pt-20 mb-10">
                <h3 className="text-white mb-5 text-xl font-bold font-Urbanist">
                  Contact Info
                </h3>
                {contactInfo.map((contactInfoContent, index) => (
                  <div
                    key={index}
                    className=" text-[15px] leading-6 pr-10 break-all mb-[6px]"
                  >
                    <a
                      href={contactInfoContent.link}
                      className="hover:text-theme-color transition-all duration-[500ms] ease-[ease]"
                    >
                      {contactInfoContent.title}
                    </a>
                  </div>
                ))}
              </div>
              <div className="social-icons flex items-center justify-start gap-5 px-7 pb-10">
                {socialMedia.map((socialMediaContent, index) => (
                  <a
                    key={index}
                    className=""
                    href={socialMediaContent.socialLink}
                  >
                    <i
                      className={` ${socialMediaContent.iconName} text-xl text-white hover:text-theme-color transition-all duration-[500ms] ease-[ease]`}
                    ></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* small screen Navbar end */}
        </nav>
        {/* Navbar end */}
      </header>
    </>
  );
};
export default Navbar;
