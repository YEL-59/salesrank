import { Button } from "@/components/ui/button";
import faqbg from "../../../../assets/faqbg.png";
import img1 from "../../../../assets/aiimg7.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: 1,
    image: img1,
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "By John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
  },
  {
    id: 2,
    image: img1,
    duration: "6 Weeks",
    level: "Intermediate",
    instructor: "By Jane Doe",
    title: "Advanced UI/UX Design",
    description:
      "Deep dive into UI/UX principles, wireframing, and prototyping with tools like Figma and Adobe XD.",
  },
];

const Course = () => {
  return (
    <div
      className="bg-cover bg-center py-12 px-5"
      style={{ backgroundImage: `url(${faqbg})` }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-primary text-4xl font-semibold leading-[150%]">
              Our Courses
            </h1>
            <p className="text-lg font-normal leading-[150%] text-[#59595A] mt-2">
              Explore our range of courses designed for beginners to advanced
              learners. Improve your skills and advance your career with
              hands-on projects and expert guidance.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="text-white px-6 py-3">View More</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-[#F0F0F0] shadow-md rounded-lg overflow-hidden"
            >
              <CardHeader>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <Badge className="text-primary bg-white text-[16px] font-medium leading-normal px-3 py-1">
                      {course.duration}
                    </Badge>
                    <Badge className="text-primary bg-white text-[16px] font-medium leading-normal ml-2 px-3 py-1">
                      {course.level}
                    </Badge>
                  </div>
                  <p className="text-primary text-[18px] font-medium">
                    {course.instructor}
                  </p>
                </div>
                <h2 className="text-primary text-xl font-semibold leading-[150%] mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </CardContent>
              <CardFooter className="p-6">
                <Button className="w-full text-white font-medium py-3">
                  Get it Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
