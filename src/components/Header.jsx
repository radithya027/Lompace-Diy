import getStarted from "../assets/svg_images/get-started.svg";
import kerjaSama from "../assets/svg_images/kerja-sama.svg";
import tag from "../assets/svg_images/tag.svg";
import twitter from "../assets/svg_images/twiter.svg";
import facebook from "../assets/svg_images/facebook.svg";
import linkin from "../assets/svg_images/linkin.svg";
import divider from "../assets/svg_images/divider.svg";
import backImage from "../assets/images/backimage.png";
import sideImage from "../assets/svg_images/side-header-image.svg";
import React from "react";

const Navbar = React.lazy(() => import("./Navbar"));

const Header = () => {
  return (
    <div className="bg-gradient-to-br from-red-500 to-red-800 relative overflow-hidden">
      <header className="mx-auto container px-5 lg:px-14">
        <Navbar />

        <div className="flex relative">
          <div className="w-full text-white mt-6 relative z-20 md:w-5/6 lg:mt-28">
            <h1 className="text-3xl font-bold leading-10 mb-4 sm:text-4xl lg:text-6xl lg:leading-tight lg:mb-6">
              Menjelajahi Keindahan Indonesia Melalui Layar Anda
            </h1>
            <p className="font-medium text-base sm:text-base lg:text-lg lg:w-1/2">
              Kami ingin mengajak Anda untuk menjelajahi dunia tanpa batas,
              melalui mata dan imajinasi Anda sendiri. Kami menghadirkan koleksi
              destinasi indah dan menarik dari berbagai penjuru Indonesia.
            </p>
            <div className="flex flex-col mt-14 lg:mt-24">
              <h5 className="font-bold text-base">DIY</h5>
            </div>
          </div>
          <div className="absolute z-10 w-3/4 right-0 bottom-0 sm:w-1/2 lg:w-2/5">
            <img src={sideImage} alt="side image" className="w-full h-auto" />
          </div>
        </div>
      </header>
      <div className="w-full mt-2 relative z-20">
        <img src={divider} alt="divider" className="w-full h-auto" />
      </div>
      <div className="w-full opacity-70 absolute top-28 lg:flex lg:justify-center">
        <img
          src={backImage}
          alt="side image"
          className="w-full h-auto lg:w-5/6"
        />
      </div>
    </div>
  );
};

export default Header;
