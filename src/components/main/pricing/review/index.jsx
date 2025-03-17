import faqbg from "../../.././../assets/faqbg.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Review = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${faqbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-12"
    >
      <div className="container mx-auto">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-8">
                  <Card className="w-full bg-white bg-opacity-70">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <p className="text-xl text-primary font-semibold text-center max-w-4xl mb-6">
                        "They thoroughly analyze our industry and target
                        audience, allowing them to develop customized campaigns
                        that effectively reach and engage our customers. Their
                        creative ideas and cutting-edge techniques have helped
                        us stay ahead of the competition."
                      </p>
                      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 absolute bottom-10 left-1/4 sm:left-20 ">
                        <img
                          src="path_to_avatar_image"
                          alt="Avatar"
                          className="w-16 h-16 rounded-full object-cover mb-4 sm:mb-0"
                        />
                        <div className="text-center sm:text-left">
                          <p className="text-sm font-medium">John Doe</p>
                          <p className="text-xs text-gray-500">CEO, Company</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls */}
          <div className="flex justify-end items-center space-x-2 absolute bottom-10 right-1/4 sm:right-40 transform -translate-y-1/2">
            <CarouselPrevious className="bg-white text-gray-800 p-2 rounded-full shadow-md" />
            <div className="text-lg text-white">
              <span>01/05</span>
            </div>
            <CarouselNext className="bg-white text-gray-800 p-2 rounded-full shadow-md" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
