import { Badge } from "@/components/ui/badge";
import faqbg from "../../.././../assets/faqbg.png";
import img1 from "../../../../assets/evaluation1.png";
import img2 from "../../../../assets/evaluation2.png";
import img3 from "../../../../assets/evaluation3.png";

const Evaluation = () => {
  const cardData = [
    {
      title: "Total Revenue Closed",
      description:
        "The total revenue from closed deals in a given period, showing sales impact.",
      image: img3,
    },
    {
      title: "Average Deal Size",
      description:
        "The average value of each deal closed within a specific period.",
      image: img3,
    },
    {
      title: "Close Rate",
      description:
        "The % of deals closed compared to the total number of opportunities.",
      image: img3,
    },
    {
      title: "Industries Served",
      description: "The sectors benefiting from our sales solutions.",
      image: img3,
    },
    {
      title: "Deal Velocity",
      description: "The speed at which deals move through the sales pipeline.",
      image: img3,
    },
  ];
  return (
    <>
      <div style={{ backgroundImage: `url(${faqbg})` }} className="py-10">
        <div className="container">
          <div>
            <Badge className="rounded-full bg-white py-2 px-5 ">
              <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
              What we measure
            </Badge>
            <h1 className="text-primary text-[64px] font-normal leading-[120%] max-w-4xl">
              Data-Driven Sales Evaluation: Measuring What Truly Matters
            </h1>
          </div>
          <div className="py-10 flex flex-wrap justify-between gap-5">
            <div>
              <div className="py-10 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 ">
                {cardData.map((card, index) => (
                  <div key={index} className="p-6  max-w-lg relative">
                    <h1 className="text-primary text-[24px] font-semibold mb-4">
                      {card.title}
                    </h1>
                    <div className="flex justify-between items-center gap-4">
                      <p className="text-[#535353] text-[18px] leading-relaxed">
                        {card.description}
                      </p>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="border-b border-gray-300 mt-4 w-[70%] absolute right-0"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Evaluation;
