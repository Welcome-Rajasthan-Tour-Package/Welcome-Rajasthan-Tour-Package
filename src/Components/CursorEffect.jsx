import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const CursorEffect = () => {
  const cursorRef = useRef();
  const cursorText = useRef();

  useGSAP(() => {
    const moveCursor = (event) => {
      gsap.to(cursorRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 4,
        ease: "elastic.out(1, 1)",
      });
    };

    const handleMouseEnter = () => {
      cursorRef.current.style.display = "inline-flex";
    };

    const handleMouseLeave = () => {
      cursorRef.current.style.display = "none";
    };

    document.body.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const aTags = document.querySelectorAll("a");

    const handleAnchorMouseEnter = () => {
      gsap.to(cursorRef.current, {
        height: "76px",
        width: "76px",
        duration: 1,
        ease: "power3.out",
      });
      cursorText.current.innerText = "Click!";
    };

    const handleAnchorMouseLeave = () => {
      gsap.to(cursorRef.current, {
        height: "64px",
        width: "64px",
        duration: 1,
        ease: "power3.out",
      });
      cursorText.current.innerText = "Go!";
    };

    aTags.forEach((a) => {
      a.addEventListener("mouseenter", handleAnchorMouseEnter);
      a.addEventListener("mouseleave", handleAnchorMouseLeave);
    });

    return () => {
      aTags.forEach((a) => {
        a.removeEventListener("mouseenter", handleAnchorMouseEnter);
        a.removeEventListener("mouseleave", handleAnchorMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        <div
          ref={cursorRef}
          className="cursor fixed size-16 justify-center items-center font-semibold text-sm text-zinc-100 bg-[radial-gradient(circle,_rgba(255,196,46,0.8)_0%,rgba(255,107,0,0.8)_100%)] border border-[#ff9d4d] rounded-full z-[99999] hidden backdrop-blur-[3px]"
        >
          <span
            className="flex justify-center items-center p-1 text-center font-Urbanist"
            ref={cursorText}
          >
            Go!
          </span>
        </div>
      </div>
    </>
  );
};

export default CursorEffect;
