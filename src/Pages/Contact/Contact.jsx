import React from "react";
import FrontView2 from "../../Components/FrontView2";
import { Helmet } from "react-helmet";

const Contact = () => {
  const ContactDetailsCard = [
    {
      hyperlink: "https://maps.app.goo.gl/AeASL1RthTNjjQDb9",
      iconName: "fa-solid fa-location-dot",
      title: "Our Location",
      ContactInfo: `Hotel Bhairon Vilas, next to Junagarh Fort Road, near Head
      Post Office, Kuchilpura, Bikaner, Rajasthan - 334001`,
    },
    {
      hyperlink: "mailto:welcomerajasthantourpackage@gmail.com",
      iconName: "fa-regular fa-envelope",
      title: "Email Address",
      ContactInfo: "welcomerajasthantourpackage @gmail.com",
    },
    {
      hyperlink: "tel:+916376335095",
      iconName: "fa-solid fa-phone",
      title: "Phone Number",
      ContactInfo: "(+91)-6376335095",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Welcome Rajasthan Tour Package</title>
      </Helmet>
      <FrontView2
        pageName="Contact Us"
        bgImg="bg-[url(./assets/Udaipur-CityPalace.webp)]"
        position="bg-center"
      />
      <main>
        <section className="page3 w-full h-full flex items-center justify-center flex-col py-16 pb-24">
          <h3 className="text-sec-color text-3xl font-Seaweed_Script mt-3">
            Contact Details
          </h3>
          <h4 className="font-bold text-[32px] md:text-[42px] leading-10 md:leading-[50px] font-Urbanist my-3 text-center px-4">
            Contact Information
          </h4>
          <div className="w-full lg:w-full xl:w-[95%] h-full flex justify-center items-center flex-wrap lg:flex-nowrap gap-8 p-3 lg:p-10 mb-16">
            {ContactDetailsCard.map((ContactDetails, index) => (
              <a
                key={index}
                href={`${ContactDetails.hyperlink}`}
                className="flex justify-start items-center flex-col text-center w-full h-[350px] md:w-[47%] lg:w-[33%] shadow-[0px_10px_80px_0px_rgba(0,0,0,0.07)] rounded-xl py-12 px-7 hover:-translate-y-3 transition-all duration-[500ms] ease-[ease]"
              >
                <div className="bg-theme-color size-24 rounded-xl p-4 flex justify-center items-center mb-9">
                  <i
                    className={`${ContactDetails.iconName} text-4xl text-white`}
                  ></i>
                </div>
                <h5 className="text-2xl font-semibold font-Urbanist mb-4">
                  {ContactDetails.title}
                </h5>
                <p className="text-theme-gray font-medium text-base break-words">
                  {ContactDetails.ContactInfo}
                </p>
              </a>
            ))}
          </div>
          <div className="map w-[88%] h-[75vh] rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803286.2160027307!2d70.87716135625003!3d28.023149600000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd494a6dd07b%3A0x804372c2e26f0bea!2sWelcome%20Rajasthan%20Tour%20Package!5e0!3m2!1sen!2sin!4v1722418162347!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Welcome Rajasthan Tour Package Map"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
