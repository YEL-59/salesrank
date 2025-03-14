import img from "../../../../assets/delivery1.png";
import img1 from "../../../../assets/delevery2.png";

const Delivery = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-semibold leading-[130%] tracking-[-1.44px] uppercase">
            Delivering top-tier sales person with groundbreaking AI innovation.
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <p className="text-[#878C91] text-sm sm:text-base md:text-lg font-medium leading-[180%] uppercase">
            Objective Rankings: SalesRank Scores (70-100) based on real
            performance - not hype. Industry-Specific Filters: From SaaS to Real
            Estate to Medical Sales, we rank the best in each field. Projected
            Revenue Impact: See how much revenue each consultant could bring to
            your business - before you hire.
          </p>
        </div>
      </div>

      {/* Image Section with Grid Layout */}
      <div className="grid grid-cols-12 gap-5 mt-10">
        <div className="col-span-4 h-full">
          <img src={img} alt="Delivery Image 1" className="w-full h-full " />
        </div>
        <div className="col-span-8 h-full">
          <img src={img1} alt="Delivery Image 2" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
