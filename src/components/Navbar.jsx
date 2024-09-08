import logo from "../assets/svg_images/logo.svg";
import hamburger from "../assets/svg_images/hamburger.svg";
import home from "../assets/svg_images/home-svgrepo-com.svg";
import rocket from "../assets/svg_images/rocket-svgrepo-com.svg";
import tips from "../assets/svg_images/tips-svgrepo-com.svg";
import more from "../assets/svg_images/more-svgrepo-com.svg";
import { useState } from "react";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(true);
  const [toggleMoreMenu, setToggleMoreMenu] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center py-6">
        <div className="order-1 sm:order-2 lg:order-1">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden lg:block lg:order-2">
          <ul className="flex items-center justify-center gap-4 text-base">
          </ul>
        </div>
        <div className="order-3 sm:order-1 lg:hidden">
          <button onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
            <img src={hamburger} alt="hamburger" />
          </button>
        </div>
      </nav>
      <div
        className={`fixed right-0 left-0 bg-white p-4 border-gray border-t-2 border-opacity-10 transition-all ease-in-out duration-500 z-50 lg:hidden ${
          toggleNavbar ? "bottom-0" : "-bottom-32"
        }`}>
        <ul className="flex justify-around">
          <li className="opacity-60 hover:opacity-100">
            <button
              to="/"
              className="flex flex-col justify-center items-center">
              <img src={home} alt="home" className="w-10 h-auto" />
              <span className="text-base font-medium">Home</span>
            </button>
          </li>
          <li className="opacity-60 hover:opacity-100">
            <button
              to="/explore-jobs"
              className="flex flex-col justify-center items-center">
              <img src={rocket} alt="rocket" className="w-10 h-auto" />
              <span className="text-base">Explore Jobs</span>
            </button>
          </li>
          <li className="opacity-60 hover:opacity-100">
            <button
              to="/career-tips"
              className="flex flex-col justify-center items-center">
              <img src={tips} alt="tips" className="w-10 h-auto" />
              <span className="text-base">Career Tips</span>
            </button>
          </li>
          <li className="opacity-60 sm:hidden hover:opacity-100">
            <button
              className="flex flex-col justify-center items-center"
              onClick={() => setToggleMoreMenu(toggleMoreMenu ? false : true)}>
              <img src={more} alt="more" className="w-10 h-auto" />
              <span className="text-base">More</span>
            </button>
          </li>
        </ul>
        <div
          className={`absolute flex gap-2 
              left-0 right-0 justify-center transition-all ease-in-out duration-500 sm:hidden ${
                toggleMoreMenu && toggleNavbar ? "bottom-24" : "-bottom-14"
              }`}>
        </div>
      </div>
    </>
  );
};

export default Navbar;
