import { Button } from "@/components/ui/button";
import faqbg from "../../.././../assets/faqbg.png";
import aboutherobg from "../../../../assets/aboutherobg.png";
const Hero = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${faqbg})` }}>
        <div className="container py-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="flex-1">
              <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-semibold leading-[130%] tracking-[-1.44px] uppercase">
                Built by Sales Pros. Backed by Real Data.
              </h1>
            </div>

            {/* Right Section */}
            <div className="flex-1">
              <p className="text-[#878C91] text-sm sm:text-base md:text-lg font-medium leading-[180%] uppercase">
                Crafted by Sales Professionals, Powered by Cutting-Edge AI, and
                Backed by Real-World Data to Elevate Performance, Drive Growth,
                and Transform Sales Success.
              </p>

              <Button className="text-white rounded-full p-5 mt-4">
                Join With Us
              </Button>
            </div>
          </div>

          <div className="py-10">
            <img src={aboutherobg} alt="" />
          </div>

          <div>
            <h1 className="text-primary py-3 text-[30px] font-normal leading-[160%]">
              At SalesRank.AI, we are building the global standard for
              identifying elite sales talent—bringing transparency, trust, and
              better results for both companies and top consultants. Great
              salespeople drive success, but for too long, companies have relied
              on gut instinct, biased referrals, and guesswork when hiring
              closers. Resumes can be misleading, interviews are rehearsed, and
              referrals lack objectivity. The wrong hire costs valuable time,
              money, and momentum. That’s why we leverage AI-driven insights to
              revolutionize the way businesses identify, evaluate, and recruit
              top-performing sales professionals—ensuring data-backed decisions
              that lead to real growth.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
