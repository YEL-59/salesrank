import { Badge } from "@/components/ui/badge";
import faqbg from "../../.././../assets/faqbg.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, DollarSign, Users } from "lucide-react";

const cardData = [
  {
    id: 1,
    title: "Reward Fulfillment Services",
    description:
      "Logistics and fulfillment solutions to handle the distribution of rewards to backers.",
    icon: <Calendar size={20} />,
  },
  {
    id: 2,
    title: "Crowdfunding Campaign Audits",
    description:
      "Professional review and feedback on campaign performance to identify areas of improvement.",
    icon: <DollarSign size={20} />,
  },
  {
    id: 3,
    title: "Project Boosting Features",
    description:
      "Paid options to feature and boost projects on the platform's homepage and newsletters.",
    icon: <Users size={20} />,
  },
];

const Work = () => {
  return (
    <div style={{ backgroundImage: `url(${faqbg})` }}>
      <div className="container py-10">
        <div className="flex justify-center">
          <Badge className="rounded-full bg-white">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>How It
            Works:
          </Badge>
        </div>
        <div>
          <h1 className="text-primary text-[64px] font-normal leading-[120%] text-center max-w-4xl mx-auto">
            AI-powered insights to assess and boost sales performance.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {cardData.map((card) => (
            <Card key={card.id} className="max-w-sm bg-[#EFEFEF]">
              <CardHeader>
                <CardTitle>
                  <div className="h-10 w-10 rounded-full bg-primary text-white flex justify-center items-center">
                    {card.icon}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h1 className="text-primary text-[20px] font-medium leading-normal">
                  {card.title}
                </h1>
              </CardContent>
              <CardFooter>
                <p>{card.description}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
