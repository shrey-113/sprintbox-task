import img from "../assets/purpose.jpg";

const OurCultureComponent = ({ purpose, description }) => {
  return (
    <div className="items-center justify-center my-4 md:flex md:px-12 md:odd:flex-row-reverse">
      <div className="w-full h-fit bg-[#2151FF] flex items-center justify-center md:w-3/5 md:p-6 ">
        <img src={img} className="p-8 justify-center md:p-4"></img>
      </div>

      <div className="md:m-12">
        <div className=" flex flex-col mt-6">
          <span
            className=" ml-6 text-secondary-color text-2xl font-semibold text-start"
            style={{
              fontFamily: "Crimson Text",
            }}
          >
            {purpose || ""}
          </span>

          <svg
            className=" ml-6 mt-4 mb-4"
            width="145"
            height="3"
            viewBox="0 0 145 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.92773H144"
              stroke="#2151FF"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <span
            className=" ml-6 sm:w-full text-left "
            style={{
              fontFamily: "Poppins",
            }}
          >
            {description || ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurCultureComponent;
