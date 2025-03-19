import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const data = {
  overview: {
    title: "Overview",
    description:
      "Ethan is an experienced Network Engineer with a proven track record in designing, implementing, and managing secure and efficient corporate networks. His expertise includes advanced knowledge in network security, system troubleshooting, and deployment of complex network infrastructure.",
  },
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
  education: [
    {
      institution: "University of Illinois at Urbana-Champaign",
      degree: "B.S. in Computer Science",
      duration: "2011 - 2015",
    },
    {
      institution: "Cisco Networking Academy",
      degree: "Certified Network Associate (CCNA)",
      duration: "2015 - 2016",
    },
  ],
  skills: [
    "Network Security",
    "System Troubleshooting",
    "Network Infrastructure Management",
    "Cisco Systems Expertise",
  ],
  certifications: [
    "Certified Network Associate (CCNA)",
    "Certified Network Professional (CCNP)",
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

const Overview = () => {
  return (
    <div className="max-w-3xl mx-auto rounded-lg overflow-hidden">
      <Section title={data.overview.title}>
        <p className="text-[#0C0D19] text-[14px] font-normal leading-[140%]">
          {data.overview.description}
        </p>
      </Section>

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

      <Section title="Education">
        {data.education.map((edu, index) => (
          <div key={index} className="flex gap-2 py-2">
            <div className="h-10 w-10 rounded flex justify-center items-center bg-[#B0BCD0]">
              <GraduationCap />
            </div>
            <div>
              <h1 className="text-[#0C0D19] text-[16px] font-medium leading-[125%]">
                {edu.institution}
              </h1>
              <div className="text-[12px] font-normal text-gray-500">
                {edu.degree} &middot; {edu.duration}
              </div>
            </div>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <Badge key={index} className="bg-[#F2F3FF] px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </Section>

      <Section title="Certifications">
        {data.certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-2 py-1">
            <div className="flex justify-center items-center bg-[#F2F3FF] rounded h-10 w-10 text-gray-700 font-bold">
              {cert.charAt(0)}
            </div>
            <h1 className="text-[#0C0D19] text-[14px] font-medium leading-[125%]">
              {cert}
            </h1>
          </div>
        ))}
      </Section>
    </div>
  );
};

export default Overview;
