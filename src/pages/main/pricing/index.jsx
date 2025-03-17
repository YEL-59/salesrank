import Faq from "@/components/main/pricing/faq";
import Hero from "@/components/main/pricing/hero";
import Plan from "@/components/main/pricing/plan";
import Review from "@/components/main/pricing/review";
import React from "react";

const Pricing = () => {
  return (
    <div>
      <Hero />
      <Plan />
      <Faq />
      <Review />
    </div>
  );
};

export default Pricing;
