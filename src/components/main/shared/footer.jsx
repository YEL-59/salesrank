import { Button } from "@/components/ui/button";
import footerbg from "../../../assets/footerbg.png";
import logo from "../../../assets/logo.png";
import {
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="w-full h-auto bg-cover bg-center text-white py-16 relative"
      style={{ backgroundImage: `url(${footerbg})` }}
    >
      <div className="container mx-auto px-6">
        {/* Call to Action Section */}
        <div className="bg-primary p-20 rounded-3xl text-center">
          <h1 className="text-white text-[38px] font-semibold leading-[130%]">
            Ready to Hire Smarter?
          </h1>
          <p className="text-[#B9BDC7] text-[16px] font-normal leading-[160%] mt-2">
            Unlock Exclusive Insights - Subscribe to Our Newsletter
          </p>
          <Button className="bg-[#FCE38A] text-primary rounded-full mt-6 px-8 py-4 text-md font-medium hover:bg-[#fbd56d] transition">
            Join Now
          </Button>
        </div>

        {/* Footer Content */}
        <div className="mt-16 flex flex-col md:flex-row md:justify-between gap-10">
          {/* Left Section */}
          <div className="max-w-xl">
            <img src={logo} alt="Logo" className="h-10" />
            <p className="mt-4 text-[15px] text-primary-foreground hover:text-primary">
              SalesRank.AI offers a comprehensive suite of AI-powered solutions
              to help you find expert sales professionals who can elevate every
              aspect of your business. From performance rankings and skill
              verification to industry benchmarking and real-time analytics, we
              provide the insights and tools to optimize your sales strategy and
              drive growth.
            </p>
            {/* Social Media Icons */}
            <div className="mt-4 flex gap-4">
              {[
                { icon: <Facebook size={20} />, href: "/" },
                { icon: <Linkedin size={20} />, href: "/" },
                { icon: <Youtube size={20} />, href: "/" },
                { icon: <Instagram size={20} />, href: "/" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white text-primary flex items-center justify-center transition transform hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-10 md:flex md:gap-20">
            <div>
              <p className="text-[18px] font-medium text-primary">Navigation</p>
              <ul className="mt-4 space-y-3">
                {["Service", "Agency", "Case Study", "Resource", "Contact"].map(
                  (name, index) => (
                    <li key={index}>
                      <a
                        href="/"
                        className="text-[15px] text-primary-foreground hover:text-primary hover:font-semibold transition"
                      >
                        {name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <p className="text-[18px] font-medium text-primary">Licence</p>
              <ul className="mt-4 space-y-3">
                {["Privacy Policy", "Copyright", "Email Address"].map(
                  (name, index) => (
                    <li key={index}>
                      <a
                        href="/"
                        className="text-[15px] text-primary-foreground hover:text-primary hover:font-semibold transition"
                      >
                        {name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Office Location */}
            <div>
              <p className="text-[18px] font-medium text-primary">
                Office Location
              </p>

              <div className="mt-4 flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <p className="text-[16px] text-primary-foreground hover:text-primary hover:text-white transition cursor-pointer">
                  (406) 555-0120
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <p className="text-[16px] text-primary-foreground hover:text-primary hover:text-white transition cursor-pointer">
                  Hey@boostim.com
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <p className="text-[16px] text-primary-foreground hover:text-primary hover:text-white transition cursor-pointer">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="border-t mx-auto"></div>

          <div className="mt-5 text-center text-primary-foreground hover:text-primary text-[15px]">
            © {new Date().getFullYear()} SalesRank.AI. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
