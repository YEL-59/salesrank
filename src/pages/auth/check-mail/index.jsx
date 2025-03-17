import img from "../../../assets/authbg.png";
import logo from "../../../assets/logo2.png";

import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import frimg from "../../../assets/fr.png";

const CheckMail = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <header className=" w-full py-4 fixed top-0 left-0 z-50 ">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
      </header>

      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className=" rounded-lg  w-full max-w-md">
          <div className="text-center">
            <img
              src={frimg}
              alt="Logo"
              className="flex justify-center items-center max-w-sm mx-auto"
            />
            <h1 className="text-primary text-[32px] font-bold leading-[24px] py-2">
              Check your email
            </h1>
            <p className="text-sm max-w-[12rem] mx-auto py-2">
              We sent a password reset link to olivia@untitledui.com
            </p>
          </div>

          <Button className="w-full h-12 text-white " type="submit">
            Open email app
          </Button>
          <div className="flex justify-center py-5">
            <p className="text-foreground/70 space-x-2">
              <span>Didn't receive the email?</span>
              <Link to="/auth/sign-up" className="font-medium">
                Click to resend
              </Link>
            </p>
          </div>

          <div className="flex justify-center ">
            <p className="text-foreground/70 space-x-2 flex items-center">
              <MoveLeft />
              <Link to="/sign-in" className="font-medium">
                Back to log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckMail;
