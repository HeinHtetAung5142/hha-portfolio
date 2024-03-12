"use client"
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [expandedEducation, setExpandedEducation] = useState(false);
  const [expandedSkills, setExpandedSkills] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState(false);

  const handleExpandEducation = () => {
    setExpandedEducation(!expandedEducation);
    setExpandedSkills(false);
    setExpandedProjects(false);
  }

  const handleExpandSkills = () => {
    setExpandedEducation(false);
    setExpandedSkills(!expandedSkills);
    setExpandedProjects(false);
  }

  const handleExpandProjects = () => {
    setExpandedEducation(false);
    setExpandedSkills(false);
    setExpandedProjects(!expandedProjects);
  }

  return (
    <main className="min-h-screen flex-row grid grid-cols-12 gap-16 items-center justify-between py-12 px-32">
      <div className="text-center items-center col-span-5">
        <div className="p-5 flex justify-center items-center">
          <Image
            src="/images/profile_pic.png"
            alt="Htet Aung"
            width={250}
            height={250}
            className="rounded-full border-green-500"
          />
        </div>
        <div className="text-[40px] text-center font-semibold">
          <h1>Hello,</h1>
          <h1>I&apos;m <span className="text-green-500">Htet Aung!</span></h1>
        </div>
        <div className="text-center p-5"><h2>A graduate from Singapore Polytechnic with a diploma in Information Technology. I have a keen interest in Web Design and Project Management.</h2> </div>
      </div>

      <div className="text-left col-span-7">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={handleExpandEducation}
        >
          <h2 className={`mb-3 text-6xl font-semibold text-green-500`}>
            Education{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          {expandedEducation && (
            <p className={`m-0 text-sm opacity-50`}>
              Explore my academic journey, including my degree program, university, achievements, and academic honors.
            </p>
          )}
        </div>
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={handleExpandSkills}
        >
          <h2 className={`mb-3 text-6xl font-semibold text-green-500`}>
            Skills{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          {expandedSkills && (
            <p className={`m-0 text-sm opacity-50`}>
              Discover my technical prowess! Explore a comprehensive list of my skills and proficiencies in various IT domains.
            </p>
          )}
        </div>
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={handleExpandProjects}
        >
          <h2 className={`mb-3 text-6xl font-semibold text-green-500`}>
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          {expandedProjects && (
            <p className={`m-0 text-sm opacity-50`}>
              Dive into my portfolio of projects! Explore real-world examples of my work, including descriptions, roles, technologies used, and outcomes achieved.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
