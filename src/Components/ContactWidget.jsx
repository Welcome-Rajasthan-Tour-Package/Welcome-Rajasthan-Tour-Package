import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const ContactWidget = () => {
  const contactWidget = useRef(null);
  const messageRef = useRef(null);
  const whatsappRef = useRef(null);
  const phoneRef = useRef(null);
  const widgetBtnRef = useRef(null);
  const widgetCloseBtnRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .to([phoneRef.current, whatsappRef.current, messageRef.current], {
        y: -10,
        marginTop: 5,
        rotate: -720,
        duration: 0.5,
        ease: "Power3.in",
      });
  }, []);

  const openWidget = () => {
    if (tl.current) {
      tl.current.play();
      widgetBtnRef.current.style.display = "none";
      widgetCloseBtnRef.current.style.display = "inline-flex";
    }
  };

  const closeWidget = () => {
    if (tl.current) {
      tl.current.reverse();
      widgetCloseBtnRef.current.style.display = "none";
      widgetBtnRef.current.style.display = "inline-flex";
    }
  };

  return (
    <div
      ref={contactWidget}
      className="fixed bottom-5 right-5 z-[999]"
    >
      <a
        title="message"
        href="sms:+916376335095"
        ref={messageRef}
        className="relative -z-[1] flex justify-center items-center rounded-full size-16 bg-red-300 translate-y-[300%]"
      >
        <i className="fa-regular fa-message text-2xl"></i>
      </a>
      <a
        title="Whatsapp"
        href="https://wa.me/:+916376335095"
        ref={whatsappRef}
        className="relative z-[1] flex justify-center items-center rounded-full size-16 bg-red-300 translate-y-[200%]"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
      <a
        title="Phone"
        href="tel:+916376335095"
        ref={phoneRef}
        className="relative z-[2] flex justify-center items-center rounded-full size-16 bg-red-300 translate-y-full"
      >
        <i className="fa-solid fa-phone text-2xl"></i>
      </a>
      <div
        title="Widget Box"
        onClick={openWidget}
        ref={widgetBtnRef}
        className="relative z-[3] flex justify-center items-center rounded-full size-16 bg-blue-200 cursor-pointer"
      >
        <i className="fa-solid fa-comment text-3xl text-green-600"></i>
      </div>
      <div
        title="Contact Box"
        onClick={closeWidget}
        ref={widgetCloseBtnRef}
        className="relative z-[3] justify-center items-center rounded-full size-16 bg-blue-200 hidden cursor-pointer"
      >
        <i className="fa-solid fa-xmark text-3xl text-green-600"></i>
      </div>
    </div>
  );
};

export default ContactWidget;
