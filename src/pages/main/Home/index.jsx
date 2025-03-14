import Delivery from "@/components/main/Home/delivery";
import Faq from "@/components/main/Home/faq";
import Hero from "@/components/main/Home/hero";
import Rank from "@/components/main/Home/rank";
import Review from "@/components/main/Home/review";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Delivery />
        <Review />
        <Faq />
        <Rank />
      </div>
    </>
  );
};

export default Home;
