import React from "react";
import Logo from "../assets/Logo (2).png";

const Header = () => {
  return (
    <header className="bg-primary-color text-secondary-color font-family-crimson text-base md:text-lg w-full">
      <div className="flex ">
        <div className="flex items-cente w-full px-12 justify-between">
          <div className="flex items-center">
            <span className="m-4 ">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3337 18.0001C15.0156 18.0001 18.0003 15.0153 18.0003 11.3334C18.0003 7.65152 15.0156 4.66675 11.3337 4.66675C7.65176 4.66675 4.66699 7.65152 4.66699 11.3334C4.66699 15.0153 7.65176 18.0001 11.3337 18.0001Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.428 23.3333L16 16"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="m-4 ">News</span>
          </div>

          <div className="flex items-center">
            <span className="m-4 ">Locations</span>
            <button className="bg-accent-color px-4 py-2 rounded m-4 border border-black">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full py-2 px-8 h-20 border border-[#2121212b]">
        <div className="flex items-center w-full">
          <span className="mr-4 w-1/3">
            <img src={Logo} alt="Logo" className="w-12 md:w-16" />
          </span>
          <span className=" w-2/3">
            <a href="#" className="p-8">
              About
            </a>
            <a href="#" className=" p-8">
              Services
            </a>
            <a href="#" className=" p-8">
              Blogs
            </a>
            <a href="#" className="p-8">
              Careers
            </a>
            <a href="#" className=" p-8">
              Industries
            </a>
          </span>
        </div>

        {/* Responsive Sidebar */}
        <div className="md:hidden">
          {/* Add a button or icon to trigger the sidebar */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              {/* Add your sidebar icon SVG here */}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
