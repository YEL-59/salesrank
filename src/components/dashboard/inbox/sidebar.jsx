import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Inbox, Home, Calendar, User, LogOut, Plus } from "lucide-react";
import Tag1 from "@/assets/tag1";
import Tag2 from "@/assets/Tag2";

const Sidebarinbox = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Inbox", icon: <Home />, url: "/dashboard/inbox" },
    { name: "Starred", icon: <Inbox />, url: "/inbox" },
    { name: "Sent", icon: <Calendar />, url: "/schedule" },
    { name: "Drafts", icon: <User />, url: "/profile" },
    { name: "Spam", icon: <User />, url: "/profile" },
    { name: "Trash", icon: <User />, url: "/profile" },
  ];

  return (
    <div
      className={`h-[calc(100svh-180px)] bg-white shadow-lg mb-10 rounded-md ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-xl font-semibold ${!isOpen && "hidden"}`}>
          Dashboard
        </h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          ☰
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="mt-4 border-b py-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.url}
            className={`flex items-center gap-3 p-3 rounded-lg mx-2 text-gray-700 hover:bg-gray-200 ${
              pathname === item.url ? "bg-blue-500 text-white" : ""
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className={`${!isOpen && "hidden"}`}>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="flex justify-between p-3">
        <p>Label</p>
        <div>
          <Plus />
        </div>
      </div>

      <div className="flex flex-col p-5 gap-3">
        <div className="flex gap-2">
          <Tag1 />
          Team
        </div>
        <div className="flex gap-2">
          <Tag2 />
          Candidates
        </div>
      </div>

      {/* Logout Button */}
      <div className="absolute bottom-4 left-4">
        <button className="flex items-center gap-2 p-3 text-gray-700 hover:bg-gray-200 rounded-lg">
          <LogOut className="text-lg" />
          <span className={`${!isOpen && "hidden"}`}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebarinbox;
