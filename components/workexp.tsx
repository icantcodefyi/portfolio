import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  location: string;
  link: string;
}

const experiences: WorkExperience[] = [
  {
    company: "Leapflow",
    position: "Full Stack Developer ",
    location: "Remote",
    duration: "Aug 2024 – Present",
    link: "https://leapflow.tech",
  },
  {
    company: "Merlin AI",
    position: "Software Development Intern ",
    location: "Bengaluru",
    duration: "Sept 2024 – Feb 2025",
    link: "https://getmerlin.in",
  },
  {
    company: "TechKareer",
    position: "Software Engineer Intern",
    location: "Remote",
    duration: "Jun 2024 – Aug 2024",
    link: "https://techkareer.com",
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-5">
      <div className="flex flex-col">
        {experiences.map((exp) => (
          <Link
            className="exp cursor-default"
            key={exp.company.replace(" ", "-")}
            href={exp.link}
            target="_blank"
          >
            <article className="mt-3 mb-3">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium leading-[1.3em] text-left text-gray-300">
                  {exp.company}
                </h1>
                <p className="text-sm text-gray-300">{exp.location}</p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-neutral-400">{exp.position}</p>
                <p className="text-sm text-neutral-400">{exp.duration}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
