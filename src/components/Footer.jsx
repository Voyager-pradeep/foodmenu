import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-green-800">
            MyKitchen
          </h1>
          <p>
            "Thank you for choosing MyKitchen. Your satisfaction is our
            priority. We appreciate your business and look forward to serving
            you again. Happy ordering and delivery!"
          </p>
          <div className="flex justify-between md:w-[50%] my-6">
            <a
              href="https://www.linkedin.com/in/pradip-das-4a87a111a/"
              target="blank"
            >
              <FaFacebookSquare size={30} className="cursor-pointer " />
            </a>
            <a
              href="https://www.facebook.com/pradipdas111?mibextid=ZbWKwL"
              target="blank"
            >
              <FaInstagramSquare size={30} className="cursor-pointer " />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/pradip-das-4a87a111a/"
              target="blank"
            >
              <FaTwitterSquare size={30} className="cursor-pointer " />
            </a>{" "}
            <a
              href="https://www.facebook.com/pradipdas111?mibextid=ZbWKwL"
              target="blank"
            >
              <FaGithubSquare size={30} className="cursor-pointer " />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/pradip-das-4a87a111a/"
              target="blank"
            >
              {" "}
              <FaDribbbleSquare size={30} className="cursor-pointer " />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-[green-800]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Delhi</li>
              <li className="py-2 text-sm">Mumbai</li>
              <li className="py-2 text-sm">Cuttak</li>
              <li className="py-2 text-sm">Kolkata</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[green-800]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Shilong</li>
              <li className="py-2 text-sm">Srinagar</li>
              <li className="py-2 text-sm">Pune</li>
              <li className="py-2 text-sm">Mangalore</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[green-800]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Amritsar</li>
              <li className="py-2 text-sm">Tiruchirapalli</li>
              <li className="py-2 text-sm">Gwalior</li>
              <li className="py-2 text-sm">Chennai</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[green-800]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Bangalore</li>
              <li className="py-2 text-sm">Kota</li>
              <li className="py-2 text-sm">Jaipur</li>
              <li className="py-2 text-sm">Vijayawada</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[green-800]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Raipur</li>
              <li className="py-2 text-sm">Madurai</li>
              <li className="py-2 text-sm">Bareilly</li>
              <li className="py-2 text-sm">Howrah</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
