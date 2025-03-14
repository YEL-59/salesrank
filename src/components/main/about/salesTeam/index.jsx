import faqbg from "../../.././../assets/faqbg.png";
import img from "../../../../assets/salesteamimg.png";
import img1 from "../../../../assets/salesteam.png";
import cardlogo from "../../../../assets/cardsaleslogo.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Salesteam = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${faqbg})` }}>
        <div className="container py-10 ">
          <div className="flex gap-10 ">
            <div>
              <h1 className="text-primary max-w-3xl text-[64px] font-semibold leading-normal">
                Keeping Sales Teams Thriving with Expert Performance Solutions.
              </h1>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>

          <div>
            <div className="flex justify-between gap-10  items-center py-10">
              <div className="flex gap-10 ">
                <div className="flex-shrink-0">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <Card className="max-w-sm h-full relative">
                    <CardHeader>
                      <CardTitle>
                        <div>
                          <img src={cardlogo} alt="" className="w-12 h-12" />
                        </div>
                      </CardTitle>
                      <CardTitle>
                        <h1 className="text-xl font-semibold max-w-[18rem] py-10">
                          Keeping Sales Teams Thriving with Expert Performance
                          Solutions.
                        </h1>
                      </CardTitle>
                      <CardDescription>
                        <p className="text-sm max-w-xs">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tem
                        </p>
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="bottom-0 absolute">
                      <Button className="bg-primary text-white p-5 rounded-full w-full flex gap-10 justify-between hover:bg-primary-dark">
                        Join Now
                        <span className="h-7 w-7 bg-white text-primary p-2 flex justify-center items-center rounded-full">
                          <MoveRight />
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="flex-shrink-0">
                <h1 className="text-[#dcdcde] text-right text-[96px] font-normal leading-normal">
                  01
                </h1>
              </div>
            </div>

            <div className="flex justify-between gap-10  items-center py-10">
              <div className="flex-shrink-0">
                <h1 className="text-[#dcdcde] text-right text-[96px] font-normal leading-normal">
                  02
                </h1>
              </div>
              <div className="flex gap-10 ">
                <div className="flex-shrink-0">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <Card className="max-w-sm h-full relative">
                    <CardHeader>
                      <CardTitle>
                        <div>
                          <img src={cardlogo} alt="" className="w-12 h-12" />
                        </div>
                      </CardTitle>
                      <CardTitle>
                        <h1 className="text-xl font-semibold max-w-[18rem] py-10">
                          Comprehensive Solutions Tailored to Your Sales Team’s
                          Needs
                        </h1>
                      </CardTitle>
                      <CardDescription>
                        <p className="text-sm max-w-xs">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tem
                        </p>
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="bottom-0 absolute">
                      <Button className="bg-primary text-white p-5 rounded-full w-full flex gap-10 justify-between hover:bg-primary-dark">
                        Join Now
                        <span className="h-7 w-7 bg-white text-primary p-2 flex justify-center items-center rounded-full">
                          <MoveRight />
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Salesteam;
