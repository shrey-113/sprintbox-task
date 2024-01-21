const Footer = () => {
  return (
    <>
      <div className="bg-black text-white px-[5.5rem] py-16">
        {/* Upper Footer */}
        <div className="hidden font-outfit mobile:flex justify-between items-center  ">
          <p className="w-80 text-2xl">
            Join our newsletter to keep up to date with us!
          </p>
          <div className="hidden mobile:flex relative">
            <input
              className="w-96 bg-black border border-[#ffffff]/20 text-[#ffffff]/72 pl-14 py-3 rounded-xl focus:outline"
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

            <button className="bg-[#1872E7] text-white px-7 py-3 ml-2 rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="hidden mobile:flex border border-[#ffffff]/20  w-full mx-auto mt-16 my-8" />
        {/* Middle Footer */}
        <div className="flex flex-col mobile:flex-row items-center w-full justify-between">
          <div>
            <p>Logo</p>
            <p className="w-[26rem] text-[#ffffff]/80 font-sans">
              'Company Name' refers to the global organisation, and may refer to
              one or more member firm of Company Name International Inc.
              (WASII), as the context requires.
            </p>
            <div>icons</div>
          </div>

          <div className="flex flex-col flex-wrap mobile:flex-row justify-between  mobile:w-1/3">
            <div>
              <span className="text-sm text-[#ffffff]/80">Connect</span>
              <ul>
                <li className="my-4">Contact us</li>
                <li className="my-4">Our Offices</li>
              </ul>
            </div>
            <div>
              <span className="text-sm text-[#ffffff]/80">About</span>
              <ul>
                <li className="my-4">About us</li>
                <li className="my-4">Careers</li>
                <li className="my-4">Code of Conduct</li>
              </ul>
            </div>
            <div>
              <span className="text-sm text-[#ffffff]/80">Legal</span>
              <ul>
                <li className="my-4">Privacy</li>
                <li className="my-4">Disclaimer</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="flex border border-[#ffffff]/20   mx-auto my-8" />

        {/* Lower Footer */}
        <div className="flex flex-col mobile:flex-row justify-between">
          <p>© 2023 Company Name</p>
          <ul className="flex ">
            <li className="text-sm text-[#ffffff]/80 mr-10">
              Terms of Services
            </li>
            <li className="text-sm text-[#ffffff]/80 mr-10">Privacy Policy</li>
            <li className="text-sm text-[#ffffff]/80">Cookies</li>
          </ul>
        </div>
      </div>

      {/* */}
    </>
  );
};

export default Footer;
