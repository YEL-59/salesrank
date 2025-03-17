import { Badge } from "@/components/ui/badge";
import faqbg from "../../.././../assets/faqbg.png";
import img1 from "../../../../assets/consulting1.png";
import img2 from "../../../../assets/consulting2.png";
import img3 from "../../../../assets/consulting3.png";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Growth = () => {
  const cards = [
    { img: img1, title: "Credibility" },
    { img: img2, title: "Higher Earning Potential" },
    { img: img3, title: "Know Your Rank" },
  ];

  return (
    <div style={{ backgroundImage: `url(${faqbg})` }} className="py-10">
      <div className="container">
        <div>
          <Badge className="rounded-full bg-white py-2 px-5 ">
            <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
            Why It Matters
          </Badge>
          <h1 className="text-primary text-[64px] font-normal leading-[120%] max-w-4xl">
            Your Growth Story Starts Here. Speak with Our Experts Today.
          </h1>
        </div>

        <div className="flex gap-5 justify-end items-stretch py-10">
          {cards.map((card, index) => (
            <Card key={index} className="flex flex-col   ">
              <CardHeader className="flex items-center justify-center">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-auto object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow flex  ">
                <p className="text-primary text-[36px] font-medium leading-[120%] text-start">
                  {card.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Growth;
