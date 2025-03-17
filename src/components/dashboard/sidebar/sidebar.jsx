import { Calendar, Home, Inbox, LogOutIcon, UserIcon } from "lucide-react";

import {
  Sidebar as CnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Service",
    url: "/service",
    icon: Inbox,
  },
  {
    title: "Booking",
    url: "/booking",
    icon: Calendar,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: UserIcon,
  },
];

export function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { setOpenMobile } = useSidebar();

  const handleLogout = () => {
    // logout();
    navigate("/auth/sign-in");
  };

  useEffect(() => {
    setOpenMobile(false);
  }, [pathname]);

  return (
    <CnSidebar>
      <SidebarHeader className="px-6 pt-10 pb-[60px]">
        <Link to="/">
          <img src={logo} alt="Relaxa Logo" className="w-[153px]" />
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-6">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn("h-14 rounded-[20px] p-[18px]", {
                      "bg-primary hover:bg-primary/95 text-primary-foreground hover:text-primary-foreground":
                        item.url === pathname,
                    })}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-6">
        <Button
          variant="secondary"
          className="h-14 rounded-[20px] p-[18px] border border-[#EFEFF4] text-muted-foreground justify-start gap-[18px]"
          onClick={handleLogout}
        >
          <LogOutIcon className="size-5" />
          Logout
        </Button>
      </SidebarFooter>
    </CnSidebar>
  );
}
