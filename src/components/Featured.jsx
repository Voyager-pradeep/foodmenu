import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import slidepic1 from "../assets/bg2.jpg";
import slidepic2 from "../assets/pexels-chan-walrus-958545.jpg";
import slidepic3 from "../assets/pexels-dana-tentis-691114.jpg";

import slidepic5 from "../assets/pexels-cats-coming-699544.jpg";
import slidepic6 from "../assets/pexels-jane-doan-769969.jpg";
import { RxDotFilled } from "react-icons/rx";
const Featured = () => {
  const sliders = [slidepic1, slidepic2, slidepic3, slidepic5, slidepic6];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const isLastSlide = currentIndex === sliders.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative mx-auto group ">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex]})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-green-800  text-white cursor-pointer ">
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-green-800  text-white cursor-pointer ">
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItem, sliderIndex) => {
          return (
            <div
              key={sliderIndex}
              onClick={() => moveToSlide(sliderIndex)}
              className={`text-2xl cursor-pointer ${
                currentIndex === sliderIndex ? "text-green-800" : ""
              }`}
            >
              <RxDotFilled />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
