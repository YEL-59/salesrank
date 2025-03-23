import Candidatetab from "@/components/dashboard/candidate/candidatetab";
import { Candidatetable } from "@/components/dashboard/candidate/candidatetable";

import Navbar from "@/components/dashboard/candidate/navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Candidate = () => {
  return (
    <>
      <div className="flex w-full gap-5">
        <div className="p-5 bg-white rounded-lg h-screen flex-1">
          <h1>Filters</h1>
          <div className="border-b py-4">
            {" "}
            <Select>
              <SelectTrigger className="w-full border-0">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="p-5 bg-white rounded-lg h-screen flex-1">
          <Navbar />
          <Candidatetab />

          <Candidatetable />
        </div>
      </div>
    </>
  );
};

export default Candidate;
