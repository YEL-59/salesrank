import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="px-5">
        <div className="flex justify-between gap-5">
          <div className="flex justify-between gap-10">
            <h1>Copyright © 2024 SalesRankAi</h1>

            <ul className="flex gap-5">
              <li>Privacy Policy</li>
              <li>Term and conditions</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <Facebook />
            <Linkedin />
            <Youtube />
            <Instagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
