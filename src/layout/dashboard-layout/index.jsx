import Footer from "@/components/dashboard/footer";
import Navbar from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router";

export default function DashboardLayout() {
  const location = useLocation();
  const isSettingsPage = location.pathname === "/dashboard/setting";

  return (
    <SidebarProvider>
      <Sidebar />
      <main className="bg-[#F0F5FF] w-full">
        {!isSettingsPage && <Navbar />}
        <div className="overflow-y-auto px-5">
          <Outlet />
        </div>
        {!isSettingsPage && <Footer />}
      </main>
    </SidebarProvider>
  );
}
// h-[calc(100svh-98px)]
