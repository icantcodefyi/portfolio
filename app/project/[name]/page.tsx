import ImageWithLoader from "@/components/loadingimage";
import BackButton from "@/components/shared/back";
import { Projects } from "@/constants";
import { upperFirst } from "@/utils/uppercase";
import { Metadata } from "next";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export async function generateStaticParams() {
  return Projects.map((p) => ({
    name: encodeURIComponent(p.slug),
  }));
}
interface Props {
  params: {
    name: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = Projects.find(
    (p) => encodeURIComponent(p.slug) === encodeURIComponent(params.name)
  )!;

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      type: "website",
      title: project.name,
      description: project.description,
      images: [
        {
          url: project.image?.url,
          width: project.image?.width,
          height: project.image?.height,
          alt: project.image?.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@icantcodefyi",
    },
  };
}

async function ProjectPage(props: Props) {
  const project = Projects.find(
    (p) => encodeURIComponent(p.slug) === encodeURIComponent(props.params.name)
  )!;
  return (
    <div className="min-h-screen lg:pt-20 lg:p-0 p-5 container items-center justify-center flex-col lg:max-w-xl overflow-hidden">
      <BackButton />

      <ImageWithLoader
        className="mx-auto rounded-md mt-5 object-cover w-[2/3] h-[1/3]"
        src={project.image.url}
        alt={project.image.alt}
        loading="eager"
        width={project.image.width}
        height={project.image.height}
      />

      {project.image.source ? (
        <p className="text-center text-gray-400">
          Source: {project.image.source}
        </p>
      ) : null}
      <div className="flex flex-row items-center my-5">
        <h1 className="text-2xl font-bold text-left">{project.name}</h1>
        <div className="flex flex-row items-center flex-nowrap ml-auto gap-2">
          {Object.keys(project.urls).map((key: keyof typeof project.urls) => (
            <a
              href={project.urls[key]}
              target="_blank"
              rel="noreferrer"
              key={key}
              className="flex flex-row items-center justify-start gap-2.5 
              text-white transition duration-300 ease-in-out
              bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5"
            >
              {key === "githubUrl" ? (
                <FiGithub className="text-white text-xl" />
              ) : (
                <FiExternalLink className="text-white text-xl" />
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-2.5">
        <p className="text-lg text-left text-gray-300">{project.description}</p>
        <div className="flex flex-row flex-wrap items-center justify-start gap-2.5">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className=" text-sm bg-neutral-200 text-black font-medium rounded-xl px-2 py-1 mb-5"
            >
              {upperFirst(tag)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
