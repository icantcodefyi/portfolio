"use client";

import { useRef } from "react";
import {
  AtSignIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/svgs";
import type {
  AtSignIconHandle,
  GithubIconHandle,
  LinkedinIconHandle,
  TwitterIconHandle,
} from "@/components/svgs";

export default function Links() {
  const twitterIconRef = useRef<TwitterIconHandle>(null);
  const githubIconRef = useRef<GithubIconHandle>(null);
  const linkedinIconRef = useRef<LinkedinIconHandle>(null);
  const atSignIconRef = useRef<AtSignIconHandle>(null);

  const handleTwitterMouseEnter = () => {
    twitterIconRef.current?.startAnimation();
  };

  const handleTwitterMouseLeave = () => {
    twitterIconRef.current?.stopAnimation();
  };

  const handleGithubMouseEnter = () => {
    githubIconRef.current?.startAnimation();
  };

  const handleGithubMouseLeave = () => {
    githubIconRef.current?.stopAnimation();
  };

  const handleLinkedinMouseEnter = () => {
    linkedinIconRef.current?.startAnimation();
  };

  const handleLinkedinMouseLeave = () => {
    linkedinIconRef.current?.stopAnimation();
  };

  const handleAtSignMouseEnter = () => {
    atSignIconRef.current?.startAnimation();
  };

  const handleAtSignMouseLeave = () => {
    atSignIconRef.current?.stopAnimation();
  };

  return (
    <div className="flex flex-row gap-3">
      <a
        href="https://www.x.com/icantcodefyi/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
      text-white transition duration-300 ease-in-out
      bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5
      group"
        onMouseEnter={handleTwitterMouseEnter}
        onMouseLeave={handleTwitterMouseLeave}
      >
        <TwitterIcon
          ref={twitterIconRef}
          className="text-white text-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12"
          size={20}
        />
      </a>
      <a
        href="https://github.com/icantcodefyi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
     text-white transition duration-300 ease-in-out
     bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5
     group  
   "
        onMouseEnter={handleGithubMouseEnter}
        onMouseLeave={handleGithubMouseLeave}
      >
        <GithubIcon
          ref={githubIconRef}
          className="text-white text-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
          size={20}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/aniruddhdubge/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
     text-white transition duration-300 ease-in-out
     bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5
     group  
   "
        onMouseEnter={handleLinkedinMouseEnter}
        onMouseLeave={handleLinkedinMouseLeave}
      >
        <LinkedinIcon
          ref={linkedinIconRef}
          className="text-white text-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-6"
          size={20}
        />
      </a>
      <a
        href="mailto:adubge@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-2.5 
     text-white transition duration-300 ease-in-out
     bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5
     group  
   "
        onMouseEnter={handleAtSignMouseEnter}
        onMouseLeave={handleAtSignMouseLeave}
      >
        <AtSignIcon
          ref={atSignIconRef}
          className="text-white text-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-12"
          size={20}
        />
      </a>
    </div>
  );
}
