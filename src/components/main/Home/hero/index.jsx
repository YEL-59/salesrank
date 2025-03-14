import { Button } from "@/components/ui/button";
import heroimg from "../../../../assets/hero.png";
import { MoveRight } from "lucide-react";
import Herologo1 from "@/assets/herologo1";
import Herologo2 from "@/assets/herologo2";
import Herologo3 from "@/assets/herologo3";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        <div className="text-center lg:text-left max-w-5xl">
          <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-semibold leading-tight md:leading-[110%] uppercase">
            The World's First Global Ranking Platform for Elite Sales
            Consultants
          </h1>
          <p className="text-primary-foreground text-sm sm:text-base md:text-lg font-medium leading-[180%] capitalize mt-4">
            At SalesRank.AI, we've taken the guesswork out of hiring sales
            consultants. Our platform ranks the world's top closers across
            multiple industries - giving you data-backed insights into who
            actually delivers results. Whether you're scaling your sales team,
            launching a new product, or need a closer to land that next big
            deal, we make it easy to find and hire top-ranked talent you can
            trust.
          </p>

          <div className="mt-6 flex gap-6 justify-center lg:justify-start items-center">
            <Button className="rounded-full bg-primary text-white p-5 text-sm flex items-center gap-2 hover:bg-primary-dark transition">
              Schedule Call <MoveRight size={20} />
            </Button>
            <p className="text-primary hover:text-primary-foreground cursor-pointer underline">
              View Case Study
            </p>
          </div>

          <div className="mt-8 flex gap-6 justify-center lg:justify-start items-center">
            <p className="text-[14px] font-semibold leading-[160%] capitalize text-primary max-w-[10rem]">
              Trusted by the world's biggest brands
            </p>
            <div className="flex gap-4">
              <Herologo1 />
              <Herologo2 />
              <Herologo3 />
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto lg:mx-0">
          <img
            src={heroimg}
            alt="Hero Image"
            className="w-full h-auto max-h-[700px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
