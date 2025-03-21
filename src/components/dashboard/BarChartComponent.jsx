import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { month: "January", Shortlisted: 186, Rejected: 80 },
  { month: "February", Shortlisted: 305, Rejected: 200 },
  { month: "March", Shortlisted: 237, Rejected: 120 },
  { month: "April", Shortlisted: 73, Rejected: 190 },
  { month: "May", Shortlisted: 209, Rejected: 130 },
  { month: "June", Shortlisted: 214, Rejected: 140 },
];

export default function BarChartComponent() {
  return (
    <Card>
      <CardContent>
        <BarChart width={500} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tickLine={false} tickMargin={10} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Shortlisted"
            stackId="a"
            fill="#6D6E75"
            radius={[0, 0, 4, 4]}
          />
          <Bar
            dataKey="Rejected"
            stackId="a"
            fill="#FCE38A"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </CardContent>
    </Card>
  );
}
