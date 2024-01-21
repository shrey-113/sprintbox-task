const HomePage = () => {
  return (
    <div className="w-screen">
      <div className=" flex flex-col justify-center items-center w-full sm:w-full">
        <span
          className=" mt-14"
          style={{
            color: "var(--Secondary-color, #000)",
            fontFamily: "Crimson Text",
            fontSize: "3rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Be Yourself And Join Us Today
        </span>
        <span
          className=" mt-6 w-[40rem] mb-6 sm:w-full"
          style={{
            color: "var(--Secondary-color, #000)",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          At Company Name, we are young, flexible, and have the ability to
          change quickly based on market research, conditions, or customer
          demands with our technology. We have a do whatever it takes attitude
          to make and keep our customers happy — as our success depends on it.
        </span>
      </div>
    </div>
  );
};

export default HomePage;
