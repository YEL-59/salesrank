import { useSidebar } from "@/components/ui/sidebar";
import { MenuIcon } from "lucide-react";

export default function SidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar} className="md:hidden">
      <MenuIcon />
    </button>
  );
}
