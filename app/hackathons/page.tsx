import { Projects } from "@/constants";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import Masonry from "@/components/Masonry/Masonry";
import { hackathonWins, hackathonOrganised } from "@/constants/hackathons";
import BackButton from "@/components/shared/back";
const hackathonImages = [
  { id: 1, image: "/hackathons/image1.webp", height: 300 },
  { id: 2, image: "/hackathons/image2.webp", height: 400 },
  { id: 3, image: "/hackathons/image3.webp", height: 300 },
  { id: 4, image: "/hackathons/image4.webp", height: 350 },
  { id: 5, image: "/hackathons/image5.webp", height: 300 },
  { id: 6, image: "/hackathons/image6.webp", height: 350 },
  { id: 7, image: "/hackathons/image7.webp", height: 300 },
  { id: 8, image: "/hackathons/image8.webp", height: 320 },
  { id: 9, image: "/hackathons/image9.webp", height: 300 },
  { id: 10, image: "/hackathons/image10.webp", height: 350 },
  { id: 11, image: "/hackathons/image11.webp", height: 300 },
  { id: 12, image: "/hackathons/image12.webp", height: 400 },
  { id: 13, image: "/hackathons/image13.webp", height: 350 },
  { id: 14, image: "/hackathons/image14.webp", height: 300 },
  { id: 16, image: "/hackathons/image16.webp", height: 350 },
  { id: 17, image: "/hackathons/image17.webp", height: 300 },
  { id: 18, image: "/hackathons/image18.webp", height: 320 },
  { id: 19, image: "/hackathons/image19.webp", height: 300 },
  { id: 20, image: "/hackathons/image20.webp", height: 400 },
  { id: 21, image: "/hackathons/image21.webp", height: 300 },
];

export default function Hackathons() {
  return (
    <main className="min-h-screen container items-center justify-center flex-col">
      <div className="flex md:mt-4 flex-col max-w-[512px] mx-auto p-5 lg:p-0">
        <div className="container">
          <BackButton />

          <div className="w-full h-[1px]"></div>
          <div className="mt-5">
            <h1 className="text-2xl text-white mt-5 mb-5">Hackathons Wins</h1>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                {hackathonWins.reverse().map((hack) => (
                  <article key={hack.name} className="proj group mb-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-300">
                          {hack.name}
                        </h3>
                        <p className="text-sm text-gray-400 ">{hack.venue}</p>
                      </div>
                      <p className="text-sm text-gray-400 ">
                        {hack.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div>
                <h2 className="text-2xl text-white mb-4">
                  Hackathons Organised
                </h2>
                <div className="flex flex-col">
                  {hackathonOrganised.reverse().map((hack) => (
                    <article key={hack.name} className="proj group mb-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-300">
                            {hack.name}
                          </h3>
                          <p className="text-sm text-gray-400 ">{hack.venue}</p>
                        </div>
                        <p className="text-sm text-gray-400 ">
                          {hack.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="mb-10">
                <Masonry data={hackathonImages} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
