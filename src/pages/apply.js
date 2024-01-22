import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import FormComponent from "../components/form";

const ApplyPage = () => {
  const [formActive, setFormActive] = useState(true);

  return (
    <div className="w-full">
      <Header />
      <div>
        <div className=" flex flex-col justify-center items-center w-full">
          <span
            className=" mt-10 text-secondary-color text-center text-3xl font-semibold p-4 "
            style={{
              fontFamily: "Crimson Text",
            }}
          >
            Product Designer
          </span>
          <hr className="w-[90%] mt-6 mb-8" />
        </div>

        <div className="md:flex">
          <div className="flex flex-col mb-4 md:w-1/3 md:pl-16 md:mb-0 md:h-fit">
            <span
              className="ml-6 text-[#999] text-sm"
              style={{ fontFamily: "Poppins" }}
            >
              Location
            </span>
            <span className="ml-6 my-2" style={{ fontFamily: "Poppins" }}>
              UAE-Remote
            </span>
            <hr className="w-[90%] m-auto mb-4" />

            <span
              className="ml-6 text-[#999] text-sm"
              style={{ fontFamily: "Poppins" }}
            >
              Type
            </span>
            <span className="ml-6 my-2" style={{ fontFamily: "Poppins" }}>
              Full-Time
            </span>
            <hr className="w-[90%] m-auto mb-4" />

            <span
              className="ml-6 text-[#999] text-sm"
              style={{ fontFamily: "Poppins" }}
            >
              Salary
            </span>
            <span className="ml-6 my-2" style={{ fontFamily: "Poppins" }}>
              40k-50k
            </span>
            <hr className="w-[90%] m-auto mb-4" />

            <span
              className="ml-6 text-[#999] text-sm"
              style={{ fontFamily: "Poppins" }}
            >
              Department
            </span>
            <span className="ml-6 my-2" style={{ fontFamily: "Poppins" }}>
              Designing
            </span>
            <hr className="w-[90%] m-auto mb-4" />
          </div>

          <div className="md:w-2/3">
            <div className="flex md:w-2/3">
              <button
                className={`w-1/2 mx-6 py-3 text-left ${
                  formActive
                    ? "text-[#999] border-none"
                    : "text-[#000] border-b-4 border-[#2151FF] font-    bold"
                }`}
                onClick={() => {
                  setFormActive(false);
                }}
              >
                Overview
              </button>
              <button
                className={`w-1/2 mx-6 py-3 text-left ${
                  !formActive
                    ? "text-[#999] border-none"
                    : "text-[#000] border-b-4 border-[#2151FF] font-bold"
                }`}
                onClick={() => {
                  setFormActive(true);
                }}
              >
                Application
              </button>
            </div>

            <div className={`mx-6 mt-4  ${formActive ? "hidden" : "md:flex"}`}>
              <div className="md:w-2/3">
                <span style={{ fontFamily: "Poppins" }} className=" font-bold">
                  Job Description
                </span>
                <ul className="list-disc mx-6 text-[#555] mt-4 mb-6">
                  <li>
                    Lead our Customer Support Engineering teams, providing
                    technical support, prompt resolution time and a leading
                    customer experience.
                  </li>
                  <li>
                    Become an expert on the Paddle product suite, including
                    payment, billing, dashboard, ProfitWell Retain and Metrics.
                  </li>
                  <li>
                    Own, measure and influence the KPIs of the team, including
                    ticket volume, response times, escalations, feedback
                    surveys, and/or other metrics you help define.
                  </li>
                  <li>
                    Lead the hiring and development of Support Engineers in the
                    early stages of their career, coaching and mentoring them
                    into seasoned Engineers.
                  </li>
                  <li>
                    Look for ways to make the team more efficient over time:
                    creating playbooks, identifying processes that can be
                    automated with tooling, escalating or fixing bugs or
                    features which would reduce manual efforts, and becoming a
                    master of process improvement.
                  </li>
                </ul>
                <span style={{ fontFamily: "Poppins" }} className=" font-bold">
                  Qualifications
                </span>
                <ul className="list-disc mx-6 text-[#555] mt-4 mb-6">
                  <li>
                    Lead our Customer Support Engineering teams, providing
                    technical support, prompt resolution time and a leading
                    customer experience.
                  </li>
                  <li>
                    Become an expert on the Paddle product suite, including
                    payment, billing, dashboard, ProfitWell Retain and Metrics.
                  </li>
                  <li>
                    Own, measure and influence the KPIs of the team, including
                    ticket volume, response times, escalations, feedback
                    surveys, and/or other metrics you help define.
                  </li>
                  <li>
                    Lead the hiring and development of Support Engineers in the
                    early stages of their career, coaching and mentoring them
                    into seasoned Engineers.
                  </li>
                  <li>
                    Look for ways to make the team more efficient over time:
                    creating playbooks, identifying processes that can be
                    automated with tooling, escalating or fixing bugs or
                    features which would reduce manual efforts, and becoming a
                    master of process improvement.
                  </li>
                </ul>
              </div>
              <div className="flex justify-between mt-4 mx-6 mb-10 md:w-1/3  md:flex-col md:justify-normal md:p-3">
                <button className=" bg-[#2151FF] text-[#FFF] px-10 py-2 w-1/2 p-2 mx-2 md:my-2">
                  Apply
                </button>
                <button className=" text-[#000] px-10 flex justify-center p-2 border border-black w-1/2 mx-2 md:my-2">
                  Share
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M15.252 17.9168C14.6742 17.9168 14.1823 17.7141 13.7762 17.3085C13.37 16.9041 13.167 16.4124 13.167 15.8335C13.167 15.7224 13.1767 15.6077 13.1962 15.4893C13.215 15.3704 13.2437 15.2588 13.282 15.1543L6.83033 11.3527C6.62644 11.5827 6.38921 11.7618 6.11866 11.8902C5.84866 12.0191 5.55921 12.0835 5.25033 12.0835C4.67144 12.0835 4.17977 11.8813 3.77533 11.4768C3.36977 11.0718 3.16699 10.5802 3.16699 10.0018C3.16699 9.42405 3.36977 8.93211 3.77533 8.526C4.17921 8.11988 4.67088 7.91683 5.25033 7.91683C5.55921 7.91683 5.84866 7.98127 6.11866 8.11016C6.38921 8.2385 6.62644 8.41766 6.83033 8.64766L13.282 4.846C13.2437 4.74155 13.215 4.62988 13.1962 4.511C13.1767 4.39266 13.167 4.27794 13.167 4.16683C13.167 3.58794 13.3695 3.09627 13.7745 2.69183C14.1789 2.28627 14.6703 2.0835 15.2487 2.0835C15.8264 2.0835 16.3184 2.286 16.7245 2.691C17.1306 3.09544 17.3337 3.58683 17.3337 4.16516C17.3337 4.74294 17.1309 5.23488 16.7253 5.641C16.3209 6.04711 15.8292 6.25016 15.2503 6.25016C14.9414 6.25016 14.652 6.18572 14.382 6.05683C14.1114 5.9285 13.8742 5.74933 13.6703 5.51933L7.21866 9.321C7.25699 9.42544 7.2856 9.53655 7.30449 9.65433C7.32394 9.77266 7.33366 9.88683 7.33366 9.99683C7.33366 10.1068 7.32394 10.2221 7.30449 10.3427C7.2856 10.4627 7.25699 10.5749 7.21866 10.6793L13.6703 14.481C13.8742 14.251 14.1114 14.0718 14.382 13.9435C14.652 13.8146 14.9414 13.7502 15.2503 13.7502C15.8292 13.7502 16.3209 13.9527 16.7253 14.3577C17.1309 14.7621 17.3337 15.2535 17.3337 15.8318C17.3337 16.4096 17.1314 16.9016 16.727 17.3077C16.322 17.7138 15.8303 17.9168 15.252 17.9168ZM15.2503 5.41683C15.5931 5.41683 15.8873 5.29433 16.1328 5.04933C16.3778 4.80377 16.5003 4.50961 16.5003 4.16683C16.5003 3.82405 16.3778 3.52988 16.1328 3.28433C15.8873 3.03933 15.5931 2.91683 15.2503 2.91683C14.9075 2.91683 14.6134 3.03933 14.3678 3.28433C14.1228 3.52988 14.0003 3.82405 14.0003 4.16683C14.0003 4.50961 14.1228 4.80377 14.3678 5.04933C14.6134 5.29433 14.9075 5.41683 15.2503 5.41683ZM5.25033 11.2502C5.5931 11.2502 5.88727 11.1277 6.13283 10.8827C6.37783 10.6371 6.50033 10.3429 6.50033 10.0002C6.50033 9.65738 6.37783 9.36322 6.13283 9.11766C5.88727 8.87266 5.5931 8.75016 5.25033 8.75016C4.90755 8.75016 4.61338 8.87266 4.36783 9.11766C4.12283 9.36322 4.00033 9.65738 4.00033 10.0002C4.00033 10.3429 4.12283 10.6371 4.36783 10.8827C4.61338 11.1277 4.90755 11.2502 5.25033 11.2502ZM15.2503 17.0835C15.5931 17.0835 15.8873 16.961 16.1328 16.716C16.3778 16.4704 16.5003 16.1763 16.5003 15.8335C16.5003 15.4907 16.3778 15.1966 16.1328 14.951C15.8873 14.706 15.5931 14.5835 15.2503 14.5835C14.9075 14.5835 14.6134 14.706 14.3678 14.951C14.1228 15.1966 14.0003 15.4907 14.0003 15.8335C14.0003 16.1763 14.1228 16.4704 14.3678 16.716C14.6134 16.961 14.9075 17.0835 15.2503 17.0835Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className={`mx-6 mt-4 ${formActive ? "" : "hidden"}`}>
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyPage;
