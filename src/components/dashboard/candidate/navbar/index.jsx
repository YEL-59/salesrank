import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "./date-picker";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Input type="email" placeholder="Email" />
          <Button className="bg-gray-500 text-sky-200">Filter</Button>
        </div>
        <div className="flex gap-2">
          <DatePicker />
          <div className="flex justify-center items-center gap-2">
            Sort by:{" "}
            <Select>
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
