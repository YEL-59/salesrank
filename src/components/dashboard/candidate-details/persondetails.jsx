import Socialx from "@/assets/socialx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";

const Persondetails = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-2  justify-center items-center border-b py-5">
          <div className="h-20 w-20 rounded-full bg-slate-400"></div>
          <h1>Ethan Taylor</h1>
          <Badge>Awaiting Interview</Badge>

          <div className="bg-[#f3f3f3] p-2 py-5 px-5 rounded-lg flex justify-between w-full">
            <div>
              <span className="text-black font-bold ">50%</span>
              <p className="inline-block ml-2">matched</p>
            </div>
            <div>
              <span className="text-black font-bold ">5</span>
              <p className="inline-block ml-2">years</p>
            </div>
          </div>

          <p className="max-w-[15rem] mx-auto text-center">
            Applied on <span>September 225,2030 </span> via{" "}
            <span>Llinkeddin</span>
          </p>

          <div className="flex gap-3">
            <div className="h-10 w-10 rounded bg-[#f3f3f3] flex justify-center items-center">
              1
            </div>
            <div className="h-10 w-10 rounded bg-[#f3f3f3] flex justify-center items-center">
              1
            </div>
            <Button>Schedule Interview</Button>
          </div>
        </div>

        <div>
          <h1>Personal Info</h1>
          <div className="flex  items-center gap-2 py-2">
            <div className="bg-[#f2f3ff] h-12 w-12 rounded flex justify-center items-center"></div>
            <div>
              <h1>Gender</h1>
              <p>MAle</p>
            </div>
          </div>
          <div className="flex  items-center gap-2 py-2">
            <div className="bg-[#f2f3ff] h-12 w-12 rounded flex justify-center items-center"></div>
            <div>
              <h1>Date of Birth</h1>
              <p>May 14, 1989</p>
            </div>
          </div>
          <div className="flex  items-center gap-2 py-2">
            <div className="bg-[#f2f3ff] h-12 w-12 rounded flex justify-center items-center"></div>
            <div>
              <h1>Email Address</h1>
              <p>ethan.taylor@example.com</p>
            </div>
          </div>
          <div className="flex  items-center gap-2 py-2">
            <div className="bg-[#f2f3ff] h-12 w-12 rounded flex justify-center items-center"></div>
            <div>
              <h1>Phone Number</h1>
              <p>+1 555-0123</p>
            </div>
          </div>
          <div className="flex  items-center gap-2 py-2">
            <div className="bg-[#f2f3ff] h-12 w-12 rounded flex justify-center items-center"></div>
            <div>
              <h1>Address</h1>
              <p>342 Oak Lane, Chicago, IL 60601</p>
            </div>
          </div>
          <div className="py-2 flex gap-2 border-b">
            <div className="h-12 w-12 rounded-full bg-[#FEF2C9]  flex justify-center items-center">
              <Linkedin />
            </div>
            <div className="h-12 w-12 rounded-full bg-[#FEF2C9]  flex justify-center items-center">
              <Github />
            </div>
            <div className="h-12 w-12 rounded-full bg-[#FEF2C9] flex justify-center items-center">
              <Socialx />
            </div>
          </div>

          <div className="py-2 border-b">
            <h1 className="text-primary text-[16px] font-semibold leading-[125%] py-2">
              Language
            </h1>
            <div className="flex gap-2">
              <div className="bg-[#F2F3FF] rounded-xl py-1 px-2 flex gap-2">
                <p className="text-[14px] font-semibold leading-[125%]">
                  English
                </p>
                <p className="border-l px-2 text-[14px] font-normal  leading-[125%]">
                  Fluent
                </p>
              </div>
              <div className="bg-[#F2F3FF] rounded-xl py-1 px-2 flex gap-2">
                <p className="text-[14px] font-semibold leading-[125%]">
                  English
                </p>
                <p className="border-l px-2 text-[14px] font-normal  leading-[125%]">
                  Fluent
                </p>
              </div>
            </div>
            <div className="bg-[#F2F3FF] rounded-xl py-1 px-2 flex gap-2 w-48 mt-2">
              <p className="text-[14px] font-semibold leading-[125%]">
                Spanish
              </p>
              <p className="border-l px-2 text-[14px] font-normal  leading-[125%]">
                Intermediate
              </p>
            </div>
          </div>

          <div className="py-2 border-b">
            <h1 className="text-primary text-[16px] font-semibold leading-[125%] ">
              Interest
            </h1>
            <div className="flex gap-2 py-2">
              <Badge className="bg-[#F2F3FF]">Hiking</Badge>
              <Badge className="bg-[#F2F3FF]">Gardening</Badge>
            </div>
            <Badge className="bg-[#F2F3FF]">Photography</Badge>
          </div>
        </div>
      </div>
    </>
  );
};

export default Persondetails;
