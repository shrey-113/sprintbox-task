import Header from "../components/header";
import JobOpeningsComponent from "../components/jobOpenings";
import OurCultureComponent from "../components/ourCulture";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="w-full">
      <Header />
      <div className=" flex flex-col justify-center items-center w-full sm:w-full">
        <span
          className=" mt-14 text-secondary-color text-center text-3xl font-semibold p-4 "
          style={{
            fontFamily: "Crimson Text",
          }}
        >
          Be Yourself And Join Us Today
        </span>
        <span
          className=" m-6 sm:w-full md:w-[40rem] text-center "
          style={{
            fontFamily: "Poppins",
          }}
        >
          At Company Name, we are young, flexible, and have the ability to
          change quickly based on market research, conditions, or customer
          demands with our technology. We have a do whatever it takes attitude
          to make and keep our customers happy — as our success depends on it.
        </span>
      </div>

      <div className=" flex flex-col justify-center items-center w-full sm:w-full">
        <span
          className=" mt-14 text-secondary-color text-center text-3xl font-semibold md:text-4xl md:mb-6"
          style={{
            fontFamily: "Crimson Text",
          }}
        >
          Our Culture
        </span>
        <OurCultureComponent
          purpose="Purpose"
          description="We work towards being the global service provider of exemplary financial consultancy services that make us the preferred firm to work with across borders."
        />
        <OurCultureComponent
          purpose="Purpose"
          description="We work towards being the global service provider of exemplary financial consultancy services that make us the preferred firm to work with across borders."
        />
        <OurCultureComponent
          purpose="Purpose"
          description="We work towards being the global service provider of exemplary financial consultancy services that make us the preferred firm to work with across borders."
        />
      </div>

      <div className="flex flex-col w-ful">
        <span
          className=" ml-6 mt-14 text-secondary-color text-start text-3xl font-semibold md:ml-16"
          style={{
            fontFamily: "Crimson Text",
          }}
        >
          Job Openings
        </span>

        <JobOpeningsComponent prop="Product and Engineering" />
        <JobOpeningsComponent prop="Product and Engineering" />
      </div>

      <div className="flex flex-col bg-[#002CCC] justify-center items-center py-6">
        <div className="flex flex-col justify-center items-center md:w-[26rem]">
          <span
            className="text-[#FFF] text-3xl text-center py-5 px-2 md:text-4xl"
            style={{ fontFamily: "Crimson Text" }}
          >
            Don't see the role you're interested in?
          </span>
          <span className="text-[#FFF] text-center py-4 px-4">
            We're always looking for talented people to join our team and we
            will contact you for any future roles.
          </span>
          <buton className="bg-[#000] text-white px-8 py-4">
            Send us your CV
          </buton>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
