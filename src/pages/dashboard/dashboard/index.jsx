import BarChartComponent from "@/components/dashboard/BarChartComponent";
import { Badge } from "@/components/ui/badge";
import { Ellipsis } from "lucide-react";

import { DatePicker } from "@/components/dashboard/candidate/navbar/date-picker";
import PieChartComponent from "@/components/dashboard/PieChartComponent";
import Experience from "@/components/dashboard/Experience";
import Personalinfo from "@/components/dashboard/Personalinfo";
import Schedual from "@/components/dashboard/Schedual";
import RankChart from "@/components/dashboard/RankChart";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-4 gap-4">
        <div className="col-span-3">
          <div className="rounded-lg bg-white p-5 hover:bg-[#FDE9A1]">
            <div className="flex justify-between">
              <h1 className="text-[#6D6E75] text-[12px] font-normal">
                Shortlisted
              </h1>
              <div>
                <Ellipsis size={15} />
              </div>
            </div>
            <div className="flex justify-between pt-3">
              <h1>869</h1>
              <div>
                <Badge className="bg-white text-primary">1.98%</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 col-start-4">
          {" "}
          <div className="rounded-lg bg-white p-5 hover:bg-[#FDE9A1]">
            <div className="flex justify-between">
              <h1 className="text-[#6D6E75] text-[12px] font-normal">
                Shortlisted
              </h1>
              <div>
                <Ellipsis size={15} />
              </div>
            </div>
            <div className="flex justify-between pt-3">
              <h1>869</h1>
              <div>
                <Badge className="bg-white text-primary">1.98%</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 col-start-7">
          {" "}
          <div className="rounded-lg bg-white p-5 hover:bg-[#FDE9A1]">
            <div className="flex justify-between">
              <h1 className="text-[#6D6E75] text-[12px] font-normal">
                Shortlisted
              </h1>
              <div>
                <Ellipsis size={15} />
              </div>
            </div>
            <div className="flex justify-between pt-3">
              <h1>869</h1>
              <div>
                <Badge className="bg-white text-primary">1.98%</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 row-span-4 col-start-10 bg-[#CADCFA] rounded-lg p-5">
          <div>
            <div className="flex justify-between">
              <h1 className="text-[#0C0D19] text-[16px] font-medium">
                Your Rank
              </h1>
              <div>
                <Ellipsis size={15} />
              </div>
            </div>
            <RankChart />
          </div>
        </div>
        <div className="col-span-5 row-span-3 row-start-2">
          <div className="rounded-lg bg-white p-5">
            <div className="py-2 flex justify-between items-center">
              <h1>Applications Status</h1>
              <div>
                <DatePicker />
              </div>
            </div>
            <BarChartComponent />
          </div>
        </div>
        <div className="col-span-4 row-span-3 col-start-6 row-start-2">
          <div className="rounded-lg bg-white p-5">
            <div className="py-6 flex justify-between items-center">
              <h1>Applications Status</h1>
            </div>
            <PieChartComponent />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 grid-rows-5 gap-4 py-4">
        <div className="col-span-5 row-span-5">
          <div className="bg-white rounded-lg p-5">
            <Experience />
          </div>
        </div>
        <div className="col-span-3 row-span-5 col-start-6">
          <div className="bg-white rounded-lg p-5">
            <Personalinfo />
          </div>
        </div>
        <div className="col-span-4 row-span-5 col-start-9">
          <div className="bg-white rounded-lg p-5">
            <Schedual />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
