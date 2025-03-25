import img from "../../../../assets/homebg2.png";
import img1 from "../../../../assets/home1.png";
import faqbg from "../../.././../assets/faqbg.png";

const Delivery = () => {
  return (
    <div style={{ backgroundImage: `url(${faqbg})` }}>
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-semibold leading-[130%] tracking-[-1.44px] uppercase">
              Delivering top-tier sales person with groundbreaking AI
              innovation.
            </h1>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <p className="text-[#878C91] text-sm sm:text-base md:text-lg font-medium leading-[180%] uppercase">
              Objective Rankings: SalesRank Scores (70-100) based on real
              performance - not hype. Industry-Specific Filters: From SaaS to
              Real Estate to Medical Sales, we rank the best in each field.
              Projected Revenue Impact: See how much revenue each consultant
              could bring to your business - before you hire.
            </p>
          </div>
        </div>

        {/* Image Section with Grid Layout */}
        <div className="grid grid-cols-12 gap-5 mt-10">
          <div className="col-span-4 h-full relative">
            <img src={img} alt="Delivery Image 1" className="w-full h-full " />
            <div className="absolute top-5 left-10 ">
              <div>
                <h1 className="inline mr-1 text-5xl text-white font-bold">
                  920
                </h1>
                <span className="font-bold text-3xl text-[#FCE38A]">+</span>
              </div>
              <div>
                <h1 className="text-[#878C91] font-manrope text-[19px] font-medium leading-[170%]">
                  People hired with superbly
                </h1>
              </div>
            </div>
            {/* Profile Images Section */}
            <div className="absolute bottom-5 left-10 flex gap-2">
              {[
                "/profile1.jpg",
                "/profile2.jpg",
                "/profile3.jpg",
                "/profile4.jpg",
              ].map((profile, index) => (
                <img
                  key={index}
                  src={profile}
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-2 border-white"
                />
              ))}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FCE38A] text-primary font-bold text-lg border-2 border-white">
                <span className="text-3xl font-bold text-white">+</span>
              </div>
            </div>
          </div>
          <div className="col-span-8 h-full relative">
            <img src={img1} alt="Delivery Image 2" className="w-full h-full " />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h1 className="text-white text-4xl font-bold uppercase">
                HOW WE WORK
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
