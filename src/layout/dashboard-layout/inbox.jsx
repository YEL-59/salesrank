import Sidebarinbox from "@/components/dashboard/inbox/sidebar";
import { Outlet } from "react-router";

export default function InboxLayout() {
  return (
    <>
      <div className="flex gap-2">
        <Sidebarinbox />
        <main className="bg-[#F0F5FF] flex-1 w-full">
          <div className="overflow-y-auto px-5">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
