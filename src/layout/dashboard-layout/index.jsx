import Footer from "@/components/dashboard/footer";
import Navbar from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="bg-[#F0F5FF] w-full">
        <Navbar />
        <div className="h-[calc(100svh-98px)] overflow-y-auto">
          <Outlet />
        </div>
        <Footer />
      </main>
    </SidebarProvider>
  );
}
