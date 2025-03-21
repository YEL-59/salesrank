import Socialx from "@/assets/socialx";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github } from "lucide-react";

const Personalinfo = () => {
  return (
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
      <h1>Social Links</h1>
      <div className="py-2 flex  gap-2 border-b">
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
    </div>
  );
};

export default Personalinfo;
