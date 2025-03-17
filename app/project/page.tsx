import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { Projects } from "@/constants";
import BackButton from "@/components/shared/back";

export default function Project() {
  return (
    <main className="min-h-screen pt-10 container items-center justify-center flex-col">
      <div className="flex mt-8 flex-col max-w-[512px] mx-auto p-5 lg:p-0">
        <div className="container">
          <BackButton />
          <h1 className="text-2xl text-white mt-5 mb-5">Projects</h1>
          <div className="flex flex-col">
            {Projects.map((project) => (
              <Link
                className="proj group"
                key={project.name.replace(" ", "-")}
                href={`/project/${project.slug}`}
              >
                <article className="flex flex-row gap-0 items-center justify-between lg:justify-center mt-3 mb-3 w-full">
                  <div className="flex flex-col justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto mr-3">
                    <h1 className="text-lg font-medium leading-[1.3em] text-left text-gray-300 group-hover:text-white">
                      {project.name}
                    </h1>
                  </div>
                  <div className="w-full mr-2 border-y border-gray-700 rounded-2 transition duration-110 opacity-80 group-hover:border-white"></div>
                  <AiOutlineRight
                    className="text-gray-400 transition-all duration-[110ms] group-hover:text-white h-4 w-4 shrink-0"
                    size={20}
                  />
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
