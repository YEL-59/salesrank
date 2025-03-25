import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router"; // Ensure correct import
import logo from "../../../assets/logo.png";
import faqbg from "../../../assets/faqbg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const list = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Pricing", to: "/pricing" },
    { label: "Consulting", to: "/consulting" },
    { label: "Ai Coach", to: "/ai-Coach" },
  ];

  return (
    <nav className="w-full py-4" style={{ backgroundImage: `url(${faqbg})` }}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex justify-between items-center gap-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>

          <ul className="hidden md:flex space-x-6">
            {list.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className={`text-[14px] font-semibold leading-normal transition ${
                    location.pathname === item.to
                      ? "text-[#B3A162]"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Started Button (Desktop) */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="rounded-full text-[16px] px-5 py-5"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-64 p-4"
              style={{ backgroundImage: `url(${faqbg})` }}
            >
              <ul className="space-y-4">
                {list.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`text-[14px] font-semibold leading-normal transition ${
                        location.pathname === item.to
                          ? "text-[#B3A162]"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="rounded-md w-full text-[16px] px-5 py-5"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
