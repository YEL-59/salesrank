import Evaluation from "@/components/main/consulting/evaluation";
import Growth from "@/components/main/consulting/growth";
import Hero from "@/components/main/consulting/hero";
import Logo from "@/components/main/consulting/logo";
import Work from "@/components/main/consulting/work";

const Consulting = () => {
  return (
    <>
      <div>
        <Hero />
        <Logo />
        <Work />
        <Growth />
        <Evaluation />
      </div>
    </>
  );
};

export default Consulting;
