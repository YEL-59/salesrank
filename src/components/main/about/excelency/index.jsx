import faqbg from "../../.././../assets/faqbg.png";
import img from "../../../../assets/excelency.png";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const Excellency = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${faqbg})` }}>
        <div className="container py-10 ">
          <div className="flex gap-10">
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <h1 className="text-primary max-w-3xl text-[54px] font-semibold leading-normal">
                Your Partner in Sales Excellence and Business Success.
              </h1>
              <p className="text-primary-foreground text-[20px] font-semibold leading-[35px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore dolor sit amet,
                consectetur{" "}
              </p>

              <div className="max-w-xl mx-auto mt-10">
                <div className="flex justify-between gap-10">
                  <div className=" p-20 bg-[#C4C4C4] rounded"></div>
                  <div>
                    <h1 className="text-primary text-[26px] font-normal leading-normal">
                      Comprehensive Solutions Tailored to Your Sales Team’s
                      Needs
                    </h1>
                    <Button className=" bg-primary text-white p-5 rounded-full  flex gap-10 justify-between">
                      Join Now
                      <span className="h-7 w-7 bg-white text-primary p-2 flex justify-center items-center rounded-full">
                        <MoveRight />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Excellency;
