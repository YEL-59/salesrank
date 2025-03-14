import faqbg from "../../.././../assets/faqbg.png";
import img from "../../../../assets/aihero.png";
import img1 from "../../../../assets/aiavatar1.png";
import img2 from "../../../../assets/aiavatar2.png";
import img3 from "../../../../assets/aiavatar3.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${faqbg})` }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
          <div className="max-w-2xl">
            <h1 className="text-primary max-w-md text-[80px] font-medium leading-tight tracking-[-0.8px]">
              Your AI-Powered Sales Coach
            </h1>

            <div className="flex items-center gap-5 py-10">
              <img src={img1} alt="AI Avatar" className="p-2 rounded-lg" />
              <p className="text-primary-foreground text-[20px] font-medium leading-[163%] max-w-xs">
                Get real-time coaching, script suggestions, and deal-closing
                strategies powered by advanced AI technology.
              </p>
            </div>

            <div className="flex gap-10 mt-10">
              {[
                { img: img2, number: "2000+", text: "Your protection" },
                { img: img3, number: "7001+", text: "Your protection" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl drop-shadow-xl">
                    <img src={item.img} alt="" className="w-14 h-14 " />
                  </div>
                  <div>
                    <h1 className="text-primary text-[40px] font-semibold leading-[110%] tracking-[-0.4px]">
                      {item.number}
                    </h1>
                    <p className="text-primary-foreground text-[20px] font-medium leading-[163%]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img src={img} alt="AI Hero" className=" drop-shadow-xl" />

            {/* Floating Card */}
            <div className="absolute bottom-[-55px] left-4 transform -translate-x-1/2 w-full max-w-sm">
              <Card className="bg-white rounded-2xl shadow-xl p-6">
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle className="text-primary text-[40px] font-semibold leading-[110%] tracking-[-0.4px]">
                      721+
                    </CardTitle>
                    <CardTitle className="text-primary text-[40px] font-semibold leading-[110%] tracking-[-0.4px]">
                      1000+
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary text-[28px] font-semibold leading-normal">
                    Growth is our priority.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-primary-foreground text-[17px] font-medium leading-[163%]">
                    As a full-service business agency, we specialize in helping
                    companies of all sizes optimize their operations.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
