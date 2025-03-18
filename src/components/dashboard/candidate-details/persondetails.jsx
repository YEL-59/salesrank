import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
              <h1>Gender</h1>
              <p>MAle</p>
            </div>
          </div>
          <div className="flex  items-center gap-2 py-2">
            <div className="bg-[#f2f3ff] h-12 w-12 rounded flex justify-center items-center"></div>
            <div>
              <h1>Gender</h1>
              <p>MAle</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Persondetails;
