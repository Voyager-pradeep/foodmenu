import React from "react";
import logo from "../assets/logo1.png";
const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-green-800 font-bold text-2xl text-center">
        8 Min Delivery
      </h3>
      <div className="lg:w-[1240px] md:w-[95%]  mx-auto grid md:grid-cols-2  md:mt-3">
        <img
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          className="lg:w-[400px] mx-auto  my-4 md:w-[95%]  "
        />
        <div className="flex flex-col justify-center  lg:w-[auto] lg:px-0 md:w-[400px] ">
          <p className="text-green-800 font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience on demand
          </h1>
          <p>
            Our food delivery app prioritizes well-being, offering a diverse
            menu of balanced, delicious meals crafted from fresh, high-quality
            ingredients. We cater to various dietary preferences, collaborating
            with local chefs for transparent nutritional information. Our app
            delivers meals balancing taste and nutrition, satisfying cravings,
            and contributing to overall well-being. Accessible and enjoyable
            health-conscious dining brought to your doorstep.
          </p>
          <button className="bg-black rounded-md font-bold text-green-800 my-6 mx-auto w-[200px] md:mx-0 py-3 duration-500 ease-in-out hover:bg-green-800 hover:border-black hover:text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
