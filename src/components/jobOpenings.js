import JobComponent from "./job";

const JobOpeningsComponent = ({ prop }) => {
  return (
    <div className=" my-4">
      <span
        className=" ml-6 text-xl mt-6 text-semibold md:ml-16"
        style={{
          fontFamily: "Crimson Text",
        }}
      >
        {prop || ""}
      </span>

      <hr className="mx-6 my-3 md:mx-16" />

      <JobComponent />
      <JobComponent />
    </div>
  );
};

export default JobOpeningsComponent;
