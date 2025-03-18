import { Ellipsis } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const feedbackData = [
  {
    id: 1,
    name: "Olivia Smith",
    position: "HR Manager",
    feedback:
      "The orientation was well-organized and thorough, providing all the necessary information about company policies and my role responsibilities. The team was very welcoming, making it easy to integrate smoothly.",
  },
  {
    id: 2,
    name: "John Doe",
    position: "Software Engineer",
    feedback:
      "I appreciated the structured onboarding process. The training sessions were insightful, and the mentors were very supportive. It made my transition into the team seamless.",
  },
  {
    id: 3,
    name: "Emma Johnson",
    position: "Marketing Specialist",
    feedback:
      "The onboarding materials were detailed, and I loved how interactive the sessions were. The team was incredibly supportive, answering all my questions patiently.",
  },
  {
    id: 4,
    name: "David Brown",
    position: "Project Manager",
    feedback:
      "I found the onboarding experience to be quite comprehensive. The leadership was approachable, and I got a clear understanding of my responsibilities and expectations.",
  },
];

const OnboadingFooter = () => {
  return (
    <div className="space-y-6 py-5">
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-xl font-semibold">Onboarding Feedback</h1>
        <Ellipsis className="cursor-pointer text-muted-foreground" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {feedbackData.map((item) => (
          <Card key={item.id} className="max-w-sm shadow-md">
            <CardHeader>
              <CardTitle>
                <div className="flex gap-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-primary text-white flex justify-center items-center font-semibold">
                    {item.name.charAt(0)}
                  </div>

                  <div className="text-sm font-medium">
                    <h1 className="text-base font-semibold">{item.name}</h1>
                    <p className="text-xs text-gray-500">{item.position}</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{item.feedback}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OnboadingFooter;
