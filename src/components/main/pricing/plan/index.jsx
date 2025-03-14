import Right from "@/assets/right";
import faqbg from "../../.././../assets/faqbg.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Free Search",
    price: "$0",
    frequency: "month",
    features: [
      "Limited Access",
      "Search up to 10 ranked profiles",
      "Basic profile data",
      "Limited filters",
    ],
    isYearly: false,
  },
  {
    title: "Premium Search",
    price: "$20",
    frequency: "month",
    features: [
      "Unlimited Access",
      "Search up to 100 ranked profiles",
      "Detailed profile data",
      "Advanced filters",
    ],
    isYearly: false,
  },
  {
    title: "Ultimate Search",
    price: "$200",
    frequency: "year",
    features: [
      "Unlimited Access",
      "Search up to 500 ranked profiles",
      "Full profile data",
      "Premium filters",
    ],
    isYearly: true,
  },
];

const Plan = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${faqbg})` }}>
        <div className="container py-10">
          <div>
            <h2 className="text-red-500 text-[24px] font-normal leading-normal tracking-[-0.24px]">
              Pricing plan
            </h2>

            <h1 className="text-primary text-[60px] font-normal leading-[120%] tracking-[-0.6px]">
              Design Solutions for Every Budget
            </h1>
          </div>

          <div className="flex justify-between gap-10 py-10">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="max-w-lg bg-transparent border-0 shadow-0 h-full"
              >
                <CardHeader>
                  <CardTitle>
                    <div className="flex gap-5">
                      <h1>{plan.title}</h1>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-5xl text-primary">
                      {plan.price}/
                      <span className="text-md">{plan.frequency}</span>
                    </p>
                    {/* {plan.isYearly && (
                      <span className="bg-primary text-white text-xs py-1 px-3 rounded-full absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                        Yearly Plan
                      </span>
                    )} */}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Right />
                        <p className="text-[#636363] text-[16px] font-light leading-[140%] tracking-[-0.32px]">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="border rounded-full p-5">
                    Choose Your Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
