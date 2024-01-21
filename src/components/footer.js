import Logo from "../assets/Logo (1).png";

const Footer = () => {
  return (
    <div className="bg-black w-full flex flex-col py-12 px-3 justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center md:flex md:flex-row md:justify-between md:w-full md:px-16">
        <span className="w-80 text-2xl text-white flex text-center">
          Join our newsletter to keep up to date with us!
        </span>

        <div className="md:flex justify-center items-center">
          <input
            className="w-80 mt-6 bg-black border  border-[#ffffff]/20 text-[#ffffff]/72 pl-14 py-3 rounded-xl focus:outline md:m-auto"
            type="text"
            placeholder="Enter your email"
          />

          <svg
            className="absolute top-4 left-6"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99967 10C12.3009 10 14.1663 8.13454 14.1663 5.83335C14.1663 3.53217 12.3009 1.66669 9.99967 1.66669C7.69849 1.66669 5.83301 3.53217 5.83301 5.83335C5.83301 8.13454 7.69849 10 9.99967 10Z"
              stroke="white"
              stroke-opacity="0.72"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
              stroke="white"
              stroke-opacity="0.72"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <button className="w-80 mt-3 bg-[#1872E7] text-white px-7 py-3 rounded-xl md:w-40 md:h-12 md:m-auto md:ml-4">
            Subscribe
          </button>
        </div>
      </div>

      <hr className="w-80 ml-5 my-8 md:my-12 md:w-4/5" />

      <div className="md:flex md:justify-between md:px-16">
        <div className="md:flex md:flex-col md:w-1/2 ">
          <img src={Logo} className=" w-16 ml-6" />
          <span className="text-white ml-5 flex mt-5 font-light ">
            'Company Name' refers to the global organisation, and may refer to
            one or more member firm of Company Name International Inc. (WASII),
            as the context requires.
          </span>
          <div className="text-white ml-5 flex mt-5 font-light">icons</div>
        </div>

        <div className="flex flex-wrap mt-12 ">
          <div className="flex flex-col text-white w-1/2 pl-6 md:w-1/3">
            <span style={{ fontFamily: "Montserrat" }} className="my-2">
              Connect
            </span>
            <span style={{ fontFamily: "Poppins" }} className="my-2">
              Contact
            </span>
            <span style={{ fontFamily: "Poppins" }} className="my-2">
              Our Offices
            </span>
          </div>
          <div className="flex flex-col text-white w-1/2 pl-6 md:w-1/3">
            <span style={{ fontFamily: "Montserrat" }} className="my-2">
              Legal
            </span>
            <span style={{ fontFamily: "Poppins" }} className="my-2">
              Privacy
            </span>
            <span style={{ fontFamily: "Poppins" }} className="my-2">
              Disclaimer
            </span>
          </div>
          <div className="flex flex-col text-white w-1/2 pl-6 md:w-1/3">
            <span style={{ fontFamily: "Montserrat" }} className="my-2">
              About
            </span>
            <span style={{ fontFamily: "Poppins" }} className="my-2">
              About Us
            </span>
            <span style={{ fontFamily: "Poppins" }} className="my-2">
              Careers
            </span>
            <span style={{ fontFamily: "Poppins" }} className="my-2">
              Code of Conduct
            </span>
          </div>
        </div>
      </div>

      <hr className="w-80 ml-5 my-8 md:my-10 md:w-4/5" />

      <div className="text-white font-light flex flex-col w-full px-6 items-center justify-center md:flex-row md:justify-between md:px-16">
        <div className="my-6 md:w-1/2 ">© 2023 Company Name</div>
        <div className="flex justify-between w-full md:w-1/2">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
