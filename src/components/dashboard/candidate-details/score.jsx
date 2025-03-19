import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Score = () => {
  return (
    <>
      <div>
        <div className=" rounded-lg bg-white ">
          <div className="p-3">
            <h1 className="text-primary text-[18px] font-semibold leading-[125%] mb-3">
              Score
            </h1>
            <div className="rounded-lg bg-[#F3F3F3] p-2">
              <p className="text-[#6D6E75] text-xs">Overall Score</p>
              <p className="text-[#6D6E75]">
                <span className="text-2xl font-semibold">50%</span>Matched
              </p>
            </div>

            <div className="p-2">
              <div className="flex justify-between py-2">
                <h1>Application Completeness</h1>
                <p>10/10</p>
              </div>
              <Progress value={100} />
            </div>
            <div className="p-2">
              <div className="flex justify-between py-2">
                <h1>Skills Match</h1>
                <p>5/10</p>
              </div>
              <Progress value={50} />
            </div>
            <div className="p-2">
              <div className="flex justify-between py-2">
                <h1>Cultural Fit</h1>
                <p>3/10</p>
              </div>
              <Progress value={30} />
            </div>
          </div>
        </div>

        <div className=" rounded-lg bg-white mt-5">
          <div className="p-3">
            <h1 className="text-primary text-[18px] font-semibold leading-[125%] mb-3">
              Upcoming Schedule
            </h1>

            <div className="bg-[#F3F3F3] rounded-lg p-3">
              <h1 className="text-primary text-[18px] font-semibold leading-[125%] mb-3">
                Technical Interview
              </h1>

              <p>Date & Time</p>
              <p>October 15, 2030</p>
              <p>Platform</p>
              <p>Zoom</p>

              <div>
                <p>Participants</p>
                <div className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-yellow-500"></div>
                  <p>HR</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-5 w-5 rounded-full bg-yellow-500"></div>
                  <p>Technical Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" rounded-lg bg-white mt-5">
          <div className="p-3">
            <h1 className="text-primary text-[18px] font-semibold leading-[125%] mb-3">
              Job Applied
            </h1>
            <div className="flex gap-2">
              <div className="h-12 w-12 rounded flex  justify-center items-center bg-[#FCE38A]"></div>
              <div>
                <h1>Network Engineer</h1>
                <p>IT</p>
              </div>
            </div>
            <div className="py-2">
              <Badge>Full-time</Badge>
              <Badge className="ml-2">On-site</Badge>
            </div>
            <div className="border-b py-2">
              <div className="flex gap-2">
                <div></div>
                <h1>Mid-level</h1>
              </div>
              <div className="flex gap-2">
                <div></div>
                <h1>5 Years Experience</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <h1>$80,000 - $95,000</h1>
              <Button>See Details</Button>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white mt-5">
          <div className="p-3">
            <h1 className="text-primary text-[18px] font-semibold leading-[125%] mb-3">
              Attachments
            </h1>

            <div className="flex gap-5">
              <div className="p-2 bg-[#F2F3FF] rounded-lg">
                <h1 className="text-black text-[18px] font-semibold leading-[125%]">
                  Resume
                </h1>
              </div>
              <div className="p-2 bg-[#F2F3FF] rounded-lg">
                <h1 className="text-black text-[18px] font-semibold leading-[125%]">
                  Portfolio
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Score;
