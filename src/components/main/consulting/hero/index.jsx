import faqbg from "../../.././../assets/faqbg.png";
import img1 from "../../../../assets/conselting1.png";
import img2 from "../../../../assets/consultingbg.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${faqbg})` }}>
        <div className="container py-10">
          <div className="flex items-center">
            <div className="relative">
              {" "}
              <img src={img1} alt="" />
              <div className="absolute top-20 left-5">
                <div className="flex gap-2">
                  <Badge variant="outline" className="rounded-full py-2">
                    <div className="h-3 w-3 rounded-full bg-gray-500 mr-2"></div>
                    Growth
                  </Badge>
                  <Badge variant="outline" className="rounded-full py-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    Sales
                  </Badge>
                </div>
                <h1 className="text-primary max-w-xl text-[64px] font-medium leading-[120%]">
                  Want to Prove You're Among the Best?
                </h1>

                <p className=" text-[20px] max-w-sm font-normal leading-normal text-[#535353] py-10">
                  Submit Your Data. Get Your Score. Stand Out.
                </p>

                <Button
                  variant="outline"
                  className="rounded-full text-yellow-300 bg-primary mt-10 mb-10"
                >
                  Get Your SalesRank Score
                </Button>

                <div className="flex gap-5">
                  <div>
                    <h1 className="text-primary text-[36px] font-bold leading-normal">
                      125+
                    </h1>
                    <p className="text-primary-foreground ">People joined</p>
                  </div>
                  <div>
                    <h1 className="text-primary text-[36px] font-bold leading-normal">
                      9,99%
                    </h1>
                    <p className="text-primary-foreground ">
                      Success Probability
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
