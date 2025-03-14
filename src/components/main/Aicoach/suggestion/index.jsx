import faqbg from "../../.././../assets/faqbg.png";
import img1 from "../../.././../assets/aiimg4.png";
import img2 from "../../.././../assets/aiimg5.png";
import img3 from "../../.././../assets/aiimg6.png";
const Suggestion = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${faqbg})` }}>
        <div className="container">
          <div>
            <h3>Live Ai Coach</h3>
            <h1 className="text-primary text-[60px] font-normal leading-[120%] tracking-[-0.6px]">
              Take a Suggestion Coaching{" "}
            </h1>
          </div>

          <div className="flex justify-between items-center py-5">
            <div>
              {" "}
              <img src={img1} alt="" />
            </div>
            <div>
              {" "}
              <img src={img2} alt="" />
            </div>
            <div>
              {" "}
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggestion;
