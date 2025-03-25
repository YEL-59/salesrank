import { useState } from "react";
import img from "../../../../assets/homebg2.png";
import faqbg from "../../../../assets/faqbg.png";
import { Button } from "@/components/ui/button";

const tabs = [
  {
    name: "All Work",
    count: 20,
    images: ["/img1.jpg", "/img2.jpg", "/img3.jpg"],
  },
  {
    name: "Top Notch Seals People",
    count: 3,
    images: ["/img4.jpg", "/img5.jpg", "/img6.jpg"],
  },
  {
    name: "Digital Marketing",
    count: 5,
    images: ["/img7.jpg", "/img8.jpg", "/img9.jpg"],
  },
  {
    name: "Branding",
    count: 5,
    images: ["/img10.jpg", "/img11.jpg", "/img12.jpg"],
  },
];

const Review = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div
      style={{ backgroundImage: `url(${faqbg})` }}
      className="bg-cover py-10"
    >
      <div className="container mx-auto px-5">
        <div
          className="bg-cover p-10 rounded-lg shadow-lg text-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h1 className="text-white font-manrope text-4xl font-semibold leading-[130%] tracking-[-1.44px]">
            Real-world examples of how we have helped companies achieve their
            marketing objectives.
          </h1>

          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            {tabs.map((tab, index) => (
              <Button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full border px-5 py-2 transition-all ${
                  activeTab.name === tab.name
                    ? "bg-[#FCE38A] text-primary"
                    : "bg-transparent text-white hover:bg-[#FCE38A] hover:text-primary"
                }`}
              >
                {tab.name} [{tab.count}]
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {activeTab.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="tab content"
                className="rounded-lg shadow-md w-full h-60 object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
