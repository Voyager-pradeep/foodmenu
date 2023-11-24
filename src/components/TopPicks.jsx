import React from "react";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TopPicks = () => {
  return (
    <div className="hidden md:block">
      <h1 className="text-green-700 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w-[1520px] m-auto py-2 px-2 rounded-1xl">
        <Splide options={{ perPage: 4, gap: "1rem", drag: "free" }}>
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="rounded-1xl relative hover:scale-105 duration-200 cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-full bg-black/50  text-white rounded-1xl z-10">
                    <p className="px-3 pt-4 font-bold text-2xl">{item.title}</p>
                    <p className="px-3">
                      <span>&#x20B9;&nbsp;</span>
                      {item.price}
                    </p>
                    <button className=" border-white text-white mx-2 absolute bottom-4">
                      Add to Cart
                    </button>
                  </div>
                  <img
                    src={item.img}
                    alt=""
                    className="h-[200px] w-full object-cover rounded-1xl cursor-pointer transform  ease-out duration-300 z-10"
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default TopPicks;
