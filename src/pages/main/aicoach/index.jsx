import Course from "@/components/main/Aicoach/course";
import Faq from "@/components/main/Aicoach/faq";
import Hero from "@/components/main/Aicoach/hero";
import Review from "@/components/main/Aicoach/review";
import Suggestion from "@/components/main/Aicoach/suggestion";

const Aicoach = () => {
  return (
    <>
      <div>
        <Hero />
        <Suggestion />
        <Course />
        <Faq />
        <Review />
      </div>
    </>
  );
};

export default Aicoach;
