"use client";

import React, { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Tooltip, Label } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { browser: "Chrome", visitors: 275, fill: "#4A90E2" },
  { browser: "Safari", visitors: 200, fill: "#50E3C2" },
  { browser: "Firefox", visitors: 287, fill: "#F5A623" },
  { browser: "Edge", visitors: 173, fill: "#D0021B" },
  { browser: "Other", visitors: 190, fill: "#9013FE" },
];

export default function RankChart() {
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col bg-transparent border-0 shadow-none">
      <CardContent className="flex flex-col items-center justify-center gap-6 pb-0">
        {/* Pie Chart Section */}
        <div className="flex-shrink-0">
          <PieChart width={250} height={250}>
            <Tooltip />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              outerRadius={100}
              strokeWidth={2}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </div>

        {/* Summary List Section */}
        <div className="space-y-3">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-sm font-medium">{item.browser}</span>
              <span className="ml-auto text-sm font-semibold">
                {item.visitors.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
