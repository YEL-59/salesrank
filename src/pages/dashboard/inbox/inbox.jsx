import { Badge } from "@/components/ui/badge";

const Inbox = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 bg-white rounded">
        <div className="col-span-4 p-3">
          <div className="">
            <div className="flex gap-2 w-full border-b py-2">
              <div className="h-10 w-10 rounded-full bg-[#FCE38A]"></div>
              <div>
                <div className="flex justify-between w-full">
                  <div>
                    <h1 className="inline-block mr-2">Emily Carter</h1>
                    <Badge className="text-white">Team</Badge>
                  </div>
                  <p>Oct 14, 9:00 AM</p>
                </div>
                <h2>Update on Team Meeting</h2>
                <p>
                  Please see the new agenda for tomorrow's team meeting
                  attached.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 bg-[#F3F3F3]">
          <div className="bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
