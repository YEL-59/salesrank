import { Badge } from "@/components/ui/badge";
import faqbg from "../../.././../assets/faqbg.png";
import img from "../../../../assets/logo1.png";

const Logo = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${faqbg})` }}>
        <div className="container">
          <div className="flex gap-5 justify-between">
            <div>
              <Badge className="bg-white text-primary p-2 rounded-full ">
                Big Partner
              </Badge>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
