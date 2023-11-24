import React, { useState } from "react";
import { mealData } from "../data/data";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterCat = (category) => {
    setActiveCategory(category);
    setFoods(
      mealData.filter((item) => {
        return category === "all" || item.category === category;
      })
    );
  };

  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-green-700 font-bold text-2xl text-center py-2">
        Our Meal
      </h1>

      <div className="flex flex-col justify-center lg:flex-row mb-2">
        <div className="flex justify-center md:justify-center">
          <button
            id="btn"
            className={`m-1 border-green-700 ${
              activeCategory === "all"
                ? "bg-white text-green-800  font-bold"
                : "bg-green-800 hover:bg-white hover:text-green-800 hover:border-green-800"
            } duration-300  `}
            onClick={() => filterCat("all")}
          >
            All
          </button>
          <button
            id="btn"
            className={`m-1 border-green-700  ${
              activeCategory === "pizza"
                ? "bg-white text-green-900  font-bold"
                : "bg-green-800 hover:bg-white hover:text-green-800 hover:border-green-800"
            } duration-300`}
            onClick={() => filterCat("pizza")}
          >
            Pizza
          </button>
          <button
            id="btn"
            className={`m-1 border-green-700 ${
              activeCategory === "chicken"
                ? "bg-white text-green-900 font-bold "
                : "bg-green-800 hover:bg-white hover:text-green-800 hover:border-green-800"
            } duration-300`}
            onClick={() => filterCat("chicken")}
          >
            Chicken
          </button>
          <button
            id="btn"
            className={`m-1 border-green-700  ${
              activeCategory === "salad"
                ? "bg-white text-green-900  font-bold"
                : "bg-green-800 hover:bg-white hover:text-green-800 hover:border-green-800"
            } duration-300`}
            onClick={() => filterCat("salad")}
          >
            Salad
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {foods.map((item) => {
          return (
            <div
              key={item.id}
              className="border-none hover:scale-105 duration-300 cursor-pointer "
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-[200px] object-cover rounded-2xl"
              />
              <div className="flex justify-between py-2 px-2">
                <p className="font-bold">{item.name}</p>
                <p className="bg-green-800 h-18 w-18  -mt-10 text-white py-4 px-2 border-8 rounded-full font-bold">
                  <span>&#x20B9; </span>
                  {item.price}
                </p>
              </div>
              <div className="pl-2 py-4 -mt-7">
                <p className="flex items-center text-indigo-600">
                  View More
                  <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meal;
