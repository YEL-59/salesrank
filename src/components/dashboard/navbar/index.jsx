import { MessageCircleMore, BellDot } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <>
      <div className="py-5 px-5">
        <div className="p-2 rounded-2xl border bg-white ">
          <div className="flex justify-between">
            <div></div>
            <div className="flex justify-center items-center gap-5">
              <div>
                {" "}
                <MessageCircleMore />
              </div>
              <div>
                {" "}
                <BellDot />
              </div>
              <div className="h-10 w-10 rounded-md bg-slate-500"></div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="size-[50px] cursor-pointer">
                      {" "}
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="cursor-pointer justify-between">
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer justify-between">
                        Booking
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer justify-between">
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
