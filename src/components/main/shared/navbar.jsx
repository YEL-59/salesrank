import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router"; // Fixed incorrect import
import logo from "../../../assets/logo.png";
import faqbg from "../../../assets/faqbg.png";

const Navbar = () => {
  const list = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Pricing", to: "/pricing" },
    { label: "Consulting", to: "/consulting" },
    { label: "Ai Coach", to: "/ai-Coach" },
  ];

  return (
    <nav className="w-full py-4  " style={{ backgroundImage: `url(${faqbg})` }}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex justify-between items-center gap-20">
          <div>
            {" "}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>
          <div>
            {" "}
            <ul className="hidden md:flex space-x-6">
              {list.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    className=" text-foreground hover:text-primary transition   text-[14px] font-semibold leading-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden md:block">
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-4">
              <ul className="space-y-4">
                {list.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      className="text-lg text-foreground hover:text-primary transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button variant="outline" className="w-full rounded-full">
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
