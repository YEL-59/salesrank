import { Button } from "@/components/ui/button";
import faqbg from "../../../../assets/faqbg.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div
      className="bg-cover bg-center py-16 lg:py-24"
      style={{ backgroundImage: `url(${faqbg})` }}
    >
      <div className="bg-white/80 rounded-3xl p-8 container mx-auto px-6 py-16 shadow-lg backdrop-blur-md">
        <div className="lg:flex gap-12 justify-between">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-primary max-w-md text-4xl font-semibold leading-[130%] tracking-[-1.44px] uppercase">
              Everything You Need to Know About SalesRank.AI
            </h1>
            <p className="text-primary-foreground max-w-2xl py-5 text-base font-medium leading-[180%] uppercase">
              Your go-to guide for understanding how our AI-powered platform can
              elevate your sales team's performance and drive business success.
            </p>

            <div className="mt-6 flex gap-6 justify-center lg:justify-start items-center">
              <Button className="rounded-full bg-transparent border  px-5 text-primary p-5 text-sm flex items-center gap-2 hover:bg-primary-dark transition">
                More Questions
              </Button>
              <p className="text-primary hover:text-primary-foreground cursor-pointer underline font-semibold">
                Contact Us
              </p>
            </div>
          </div>

          {/* Right Section (Accordion) */}
          <div className="flex-1 mt-8 lg:mt-0">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-medium text-lg text-primary py-4 px-6 rounded-lg hover:bg-primary/10 transition">
                  Why is digital marketing important for my business?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-sm sm:text-base text-[#878C91] leading-[180%]">
                  SalesRank.AI is an AI-powered platform that evaluates and
                  ranks sales professionals across multiple industries. With
                  features like AI-powered rankings, industry benchmarking, and
                  skill verification, we help businesses identify top-performing
                  sales professionals and enhance their sales strategies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="font-medium text-primary text-lg py-4 px-6 rounded-lg hover:bg-primary/10 transition">
                  How does SalesRank.AI help improve my sales team’s
                  performance?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-sm sm:text-base text-[#878C91] leading-[180%]">
                  SalesRank.AI offers real-time data and analytics to identify
                  your team's strengths and areas for improvement. With these
                  insights, you can make data-driven decisions to improve
                  performance and sales outcomes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="font-medium text-primary text-lg py-4 px-6 rounded-lg hover:bg-primary/10 transition">
                  How can I use SalesRank.AI to track and benchmark my team’s
                  performance?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-sm sm:text-base text-[#878C91] leading-[180%]">
                  SalesRank.AI provides clear, industry-specific benchmarks and
                  performance tracking tools. With this, you can compare your
                  team’s performance against top performers and identify areas
                  to improve.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="font-medium  text-lg py-4 px-6 rounded-lg hover:bg-primary/10 transition">
                  Can I integrate SalesRank.AI with my existing CRM or sales
                  tools?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-sm sm:text-base text-[#878C91] leading-[180%]">
                  Yes, SalesRank.AI integrates with several CRM and sales tools,
                  ensuring seamless synchronization with your existing systems
                  to track and optimize your sales team’s performance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
