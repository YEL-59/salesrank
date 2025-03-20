import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ArrowDownToLine,
  Trash2,
  Star,
  EllipsisVertical,
  CornerUpLeft,
  CornerUpRight,
} from "lucide-react";

const Inbox = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 bg-white rounded">
        <div className="col-span-4 p-3">
          <div className="">
            <div className="flex gap-2">
              <Input type="email" placeholder="Email" />
              <div className="h-9 w-10 bg-slate-400 rounded"></div>
              <div className="h-9 w-10 bg-slate-400 rounded"></div>
            </div>
            <div className="flex gap-2 w-full border-b py-3">
              <div className="h-10 w-10 rounded-full bg-[#FCE38A]"></div>
              <div>
                <div className="flex justify-between w-full">
                  <div>
                    <h1 className="inline-block mr-2 text-[14px] font-semibold leading-[125%] not-italic">
                      Emily Carter
                    </h1>
                    <Badge className="text-white">Team</Badge>
                  </div>
                  <p className="text-[12px] text-[#6D6E75] font-medium leading-[130%] not-italic">
                    Oct 14, 9:00 AM
                  </p>
                </div>
                <h2 className="text-[12px] font-medium leading-[130%] not-italic py-2">
                  Update on Team Meeting
                </h2>
                <p className="text-[12px] text-[#6D6E75] font-medium leading-[130%] not-italic">
                  Please see the new agenda for tomorrow's team meeting
                  attached.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 bg-[#F3F3F3] p-3">
          <div className="flex justify-between ">
            <div className="flex gap-2">
              <div>
                {" "}
                <ArrowLeft />
              </div>
              <div>
                {" "}
                <ArrowDownToLine />
              </div>
              <div>
                {" "}
                <Trash2 />
              </div>
            </div>
            <div></div>
            <div className="flex ">
              <div>
                <Star />
              </div>
              <div>
                <EllipsisVertical />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-3 mt-5">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-primary"></div>
                <div>
                  <h1 className="text-primary">Jessica Davis</h1>
                  <p className="">j.davis@company.com</p>
                </div>
              </div>
              <div>
                <p className="">October 8, 2030</p>
                <p className="">1:30 PM</p>
              </div>
            </div>

            <h1 className="text-primary py-5 text-[16px] font-semibold leading-[125%] not-italic">
              Budget Approval Needed
            </h1>
            <p className="text-[#6D6E75] text-[14px] font-normal leading-[140%] not-italic">
              Dear Team,
            </p>
            <p className="text-[#6D6E75] text-[14px] font-normal leading-[140%] not-italic py-3">
              I hope this message finds you well. As we approach the final
              quarter of the year, it's essential to finalize our budget to
              ensure all departments can operate smoothly and efficiently.
            </p>

            <p className="text-[#6D6E75] text-[14px] font-normal leading-[140%] not-italic">
              Attached, you will find the proposed budget for Q4, which reflects
              our projected needs and allocations for the upcoming projects and
              departmental expenses. We have made several adjustments to
              optimize our resources and anticipate potential needs.
            </p>
            <p className="text-[#6D6E75] text-[14px] font-normal leading-[140%] not-italic py-3">
              Please review the proposed budget carefully and provide your
              feedback or approval by Wednesday. Your prompt response will help
              us stay on track with our financial planning and ensure no delays
              in departmental activities.
            </p>
            <p className="text-[#6D6E75] text-[14px] font-normal leading-[140%] not-italic">
              Thank you for your attention to this matter and your ongoing
              commitment to our financial health.
            </p>
            <p className="text-[#6D6E75] text-[14px] font-normal leading-[140%] not-italic py-3">
              Best regards,
            </p>
            <p className="text-[#6D6E75] text-[14px] max-w-[12rem] font-normal leading-[140%] not-italic">
              Jessica Davis Finance Department j.davis@company.com
            </p>
          </div>

          <div className="flex gap-3 py-2">
            <div className="flex">
              <CornerUpLeft />
              <p>Reply</p>
            </div>
            <div className="flex">
              <CornerUpRight />
              <p>Forward</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
