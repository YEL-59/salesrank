import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const data = {
  experiences: [
    {
      company: "TechSolutions Inc.",
      role: "Network Engineer",
      duration: "January 2020 - Present",
      responsibilities: [
        "Managed and maintained a network for a large corporate office with over 500 employees.",
        "Implemented new security protocols that reduced system vulnerabilities by 40%.",
      ],
    },
    {
      company: "NetGrowth Technologies",
      role: "Junior Network Engineer",
      duration: "June 2016 - December 2019",
      responsibilities: [
        "Assisted in the rollout of a new company-wide email system, enhancing communication efficiency.",
        "Supported network upgrade projects that improved system uptime and performance.",
      ],
    },
  ],
};

const Section = ({ title, children }) => (
  <div className="border-b py-6 px-4 md:px-6">
    <h1 className="text-primary text-[18px] font-semibold leading-[125%] mb-3">
      {title}
    </h1>
    {children}
  </div>
);

const Experience = () => {
  return (
    <div className="max-w-3xl mx-auto rounded-lg overflow-hidden">
      <Section title="Experience">
        {data.experiences.map((exp, index) => (
          <div key={index} className="flex gap-3 py-4">
            <div className="h-12 w-12 rounded-full bg-[#FCE38A] flex justify-center items-center text-lg font-bold text-gray-800">
              {exp.company.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-primary text-[16px] font-normal leading-[130%]">
                {exp.company}
              </h1>
              <div className="flex items-center space-x-2 text-[12px] font-normal text-gray-500">
                <span>{exp.role}</span>
                <span>&middot; {exp.duration}</span>
              </div>
              <ul className="list-disc list-inside text-[14px] text-gray-700">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Section>
    </div>
  );
};

export default Experience;
