import { Button } from "@/components/ui/button";
import faqbg from "../../../../assets/faqbg.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveRight } from "lucide-react";

// Dummy JSON Data for Cards
const cardData = [
  {
    id: 1,
    title: "How a Top Sales Person Can Boost Your Business",
    description:
      "We are the top digital marketing agency for branding corp. We offer a full range of services...",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Why AI is the Future of Sales Performance",
    description:
      "AI-driven insights are changing the way businesses hire and train top sales talent...",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Maximizing Revenue with AI-Powered Sales Strategies",
    description:
      "Learn how to leverage AI to increase revenue and improve sales team efficiency...",
    readTime: "6 min read",
  },
];

const Rank = () => {
  return (
    <div
      className="bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${faqbg})` }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div>
            <h1 className="text-primary text-3xl max-w-[130rem] sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-[130%] tracking-[-1.44px] uppercase">
              AI-Powered Sales Ranking & Performance Solutions That Drive Growth
              and Boost Revenue
            </h1>
          </div>

          <div className="mt-6 lg:mt-0">
            <p className="text-primary-foreground text-sm sm:text-base md:text-lg font-medium leading-[180%] uppercase">
              Unlock the potential of your sales team with AI-driven insights,
              performance rankings, and industry benchmarks to accelerate growth
              and maximize revenue.
            </p>
            <Button
              variant="outline"
              className="rounded-full px-10 py-5 text-primary mt-6 lg:mt-4 text-md"
            >
              See more
            </Button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cardData.map((card) => (
            <Card key={card.id} className="max-w-md">
              <CardHeader>
                <CardDescription>
                  <div className="flex justify-between items-center">
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <p className="overflow-hidden text-[#878C91] leading-[160%] text-ellipsis text-sm font-normal truncate">
                      {card.readTime}
                    </p>
                  </div>
                </CardDescription>
                <CardTitle>
                  <h1 className="text-primary text-[26px] font-semibold leading-[150%] tracking-[-0.78px] max-w-md">
                    {card.title}
                  </h1>
                </CardTitle>
              </CardHeader>

              <CardFooter className="flex justify-between items-center">
                <p className="text-primary-foreground max-w-[15rem] overflow-hidden text-[14px] font-manrope font-medium leading-[160%]">
                  {card.description}
                </p>
                <Button className="bg-primary p-5 text-white rounded-full">
                  <MoveRight />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rank;
