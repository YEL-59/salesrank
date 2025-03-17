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
import { Link, useLocation } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Menu items.
const items = [
  {
    title: "Candidates ",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/service",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/booking",
    icon: Calendar,
  },
  {
    title: "Onboarding",
    url: "/profile",
    icon: UserIcon,
  },
  {
    title: "Setting",
    url: "/profile",
    icon: UserIcon,
  },
];

export function Sidebar() {
  const { pathname } = useLocation();

  const { setOpenMobile } = useSidebar();

  useEffect(() => {
    setOpenMobile(false);
  }, [pathname]);

  return (
    <CnSidebar>
      <SidebarHeader className="px-6 pt-10 pb-[60px]">
        <Link to="/">
          <img src={logo} alt="sharelink Logo" className="w-[153px]" />
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
                      "bg-primary hover:bg-[#002868] text-primary-foreground hover:text-primary-foreground":
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
      <SidebarFooter className="p-2 ">
        <Card className="bg-[#002868]">
          <CardHeader>
            <CardTitle>
              <h1 className="text-white text-xl font-bold">
                Elevate Your Recruitment Strategy
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Upgrade your recruitment with new features for better efficiency
              and effectiveness.
            </p>
          </CardContent>
          <CardFooter>
            {" "}
            <Button
              variant="secondary"
              className="rounded-md p-[18px] w-full bg-[#FCE38A]  border border-[#EFEFF4] text-primary justify-start 
              "
            >
              Upgrade Now
            </Button>{" "}
          </CardFooter>
        </Card>
      </SidebarFooter>
    </CnSidebar>
  );
}
