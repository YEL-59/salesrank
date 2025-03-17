import faqbg from "../../.././../assets/faqbg.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${faqbg})` }}>
        <div className="container py-10 ">
          <div className="flex justify-between">
            <div>
              <h2 className="text-primary text-[24px] max-w-[12rem] font-normal leading-normal tracking-[-0.24px]">
                Frequently asked questions
              </h2>
            </div>
            <div>
              <h1 className="text-primary text-[60px] max-w-4xl font-normal leading-[120%] tracking-[-0.6px]">
                {" "}
                Constant collaboration is how we roll. Let's see if we are a
                good fit.
              </h1>
            </div>
          </div>

          <div className="py-5">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="flex  items-center gap-10"
              >
                <div className="text-[32px] text-[#8B7D4C] font-normal leading-normal tracking-[-0.32px]">
                  01
                </div>
                <div className="flex-1">
                  {" "}
                  <AccordionTrigger className="font-medium text-lg text-primary py-4 px-6 rounded-lg hover:bg-primary/10 transition">
                    Why should I choose Humestic?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-sm sm:text-base text-[#878C91] leading-[180%]">
                    SalesRank.AI is an AI-powered platform that evaluates and
                    ranks sales professionals across multiple industries. With
                    features like AI-powered rankings, industry benchmarking,
                    and skill verification, we help businesses identify
                    top-performing sales professionals and enhance their sales
                    strategies.
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="flex  items-center gap-10"
              >
                <div className="text-[32px] text-[#8B7D4C] font-normal leading-normal tracking-[-0.32px]">
                  02
                </div>
                <div className="flex-1">
                  {" "}
                  <AccordionTrigger className="font-medium text-lg text-primary py-4 px-6 rounded-lg hover:bg-primary/10 transition">
                    I like your works, how do we start a project?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-sm sm:text-base text-[#878C91] leading-[180%]">
                    SalesRank.AI is an AI-powered platform that evaluates and
                    ranks sales professionals across multiple industries. With
                    features like AI-powered rankings, industry benchmarking,
                    and skill verification, we help businesses identify
                    top-performing sales professionals and enhance their sales
                    strategies.
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="flex  items-center gap-10"
              >
                <div className="text-[32px] text-[#8B7D4C] font-normal leading-normal tracking-[-0.32px]">
                  03
                </div>
                <div className="flex-1">
                  {" "}
                  <AccordionTrigger className="font-medium text-lg text-primary py-4 px-6 rounded-lg hover:bg-primary/10 transition">
                    What info is required to get a quotation?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-sm sm:text-base text-[#878C91] leading-[180%]">
                    SalesRank.AI is an AI-powered platform that evaluates and
                    ranks sales professionals across multiple industries. With
                    features like AI-powered rankings, industry benchmarking,
                    and skill verification, we help businesses identify
                    top-performing sales professionals and enhance their sales
                    strategies.
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
