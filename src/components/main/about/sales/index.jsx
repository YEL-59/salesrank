import faqbg from "../../../../assets/faqbg.png";
import person from "../../../../assets/person.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

// Card Data
const cardData = [
  {
    id: 1,
    type: "people",
    count: "84K+",
    description: "Lorem ipsum dolor sit amettes consectetur adipiscing elit",
    buttonText: "Join Now",
  },
  {
    id: 2,
    type: "image",
    bgColor: "#C4C4C4",
    description: "Lorem ipsum dolor sit amettes consectetur adipiscing elit",
  },
  {
    id: 3,
    type: "text",
    count: "14K+",
    description: "Where Sales Performance Meets Business Growth.",
    buttonText: "More Sales, More Growth, Powered by AI.",
  },
];

// Reusable Card Component
const SalesCard = ({ card }) => {
  return (
    <Card className="max-w-sm bg-transparent border-0">
      <CardHeader>
        <CardTitle>
          {card.type === "people" && (
            <div className="flex justify-between items-center gap-5">
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, index) => (
                  <img
                    key={index}
                    className="w-10 h-10 border-2 border-white rounded-full"
                    src={person}
                    alt="Person"
                  />
                ))}
              </div>
              <p className="text-[35px] font-medium leading-normal text-[#F6EFE9]">
                {card.count}
              </p>
            </div>
          )}

          {card.type === "image" && (
            <div
              className="p-20 rounded-xl"
              style={{ backgroundColor: card.bgColor }}
            ></div>
          )}

          {card.type === "text" && (
            <p className="text-[35px] font-medium leading-normal text-[#F6EFE9]">
              {card.count}
            </p>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-[#F6EFE9] text-[20px] font-normal leading-[35px]">
          {card.description}
        </p>
      </CardContent>

      {card.buttonText && (
        <CardFooter>
          <Button className="border border-white rounded-full text-[#F6EFE9] flex gap-10 justify-between">
            {card.buttonText}{" "}
            <span className="h-5 w-5 bg-[#F6EFE9] text-black p-2 flex justify-center items-center rounded-full">
              <MoveRight />
            </span>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

// Main Sales Component
const Sales = () => {
  return (
    <div
      style={{ backgroundImage: `url(${faqbg})` }}
      className="bg-cover bg-center"
    >
      <div className="container py-10">
        <div className="bg-primary rounded-3xl p-10">
          <div className="flex flex-wrap justify-between gap-5">
            {cardData.map((card) => (
              <SalesCard key={card.id} card={card} />
            ))}
          </div>

          <div className="border mx-auto my-6"></div>

          <div className="flex  justify-between items-end">
            <h1 className="text-[#F6EFE9] text-[64px] font-normal leading-normal">
              Passionate About Sales, Dedicated to Performance.
            </h1>

            <Button className="border border-white bg-[#FCE38A] p-5 rounded-full text-primary flex gap-10 justify-between">
              Explore Now
              <span className="h-7 w-7 bg-primary text-white p-2 flex justify-center items-center rounded-full">
                <MoveRight />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
