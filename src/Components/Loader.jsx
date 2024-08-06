import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../Components/Loader.css";

const Loader = () => {
  const spinnerRef = useRef(null);
  const lettersRef1 = useRef([]);
  const lettersRef2 = useRef([]);
  const word1 = `Welcome${"\xa0"}Rajasthan`;
  const word2 = `Tour${"\xa0"}Package`;
  const letterArray1 = word1.split("");
  const letterArray2 = word2.split("");

  console.log(letterArray1, letterArray2);

  useEffect(() => {
    const animateSpinner = () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      gsap.to(spinnerRef.current, {
        duration: 2,
        ease: "none",
        repeat: -1,
        rotate: 720,
      });

      letterArray1.forEach((letter, index) => {
        tl.to([lettersRef1.current[index], lettersRef2.current[index]], {
          duration: 0.5,
          opacity: 1,
          y: -10,
          repeat: 1,
          yoyo: true,
        });
      });
    };

    animateSpinner();
  }, []);

  return (
    <>
      <div className="fixed top-0 z-[999999] bg-[#ffc42e] w-full h-full justify-center items-center hidden">
        <div className="flex justify-center items-center flex-col w-full h-full">
          <div
            ref={spinnerRef}
            className="spinner size-40 border-white border-t-[#ffffff80] border-[3px] rounded-full mx-auto mb-10 mt-0"
          ></div>
          <div className="loader-content text-center text-transparent">
            <h1 className="font-Urbanist font-bold text-6xl my-5 mx-auto -web">
              {letterArray1.map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => (lettersRef1.current[index] = el)}
                  className={`inline-block relative text-center text-white`}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <h1 className="font-Urbanist font-bold text-6xl my-5 mx-auto">
              {letterArray2.map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => (lettersRef2.current[index] = el)}
                  className={`inline-block relative text-center text-white`}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
