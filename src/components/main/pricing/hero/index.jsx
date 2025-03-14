import faqbg from "../../.././../assets/faqbg.png";
import img from "../../../../assets/priceimg.png";
import img1 from "../../../../assets/priceimg1.png";

const Hero = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${faqbg})` }}>
        <div className="container py-10">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-primary max-w-2xl text-[80px] font-normal leading-none tracking-[-0.8px]">
                Hire With Confidence - No More Guesswork
              </h1>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>

          <div className="py-10 flex gap-10 items-center">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <h1 className="text-primary max-w-lg pb-3 text-[36px] font-normal leading-[130%] tracking-[-0.36px]">
                Our affordable pricing options make it possible.
              </h1>
              <p className="text-[19.015px] max-w-xl font-light leading-[120%] tracking-[-0.38px]">
                At our firm, we strive to deliver the highest quality design
                services while providing exceptional value to our clients. We
                offer competitive rates for all our services, including
                architectural design, interior design, project management, and
                furniture design, with pricing tailored to factors such as
                project scope, level of customization, and timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
