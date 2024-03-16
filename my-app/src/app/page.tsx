"use client"
import { useState } from "react";
import Image from "next/image";

// data

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
        <div className="text-center p-5"><h2>A graduate from Singapore Polytechnic with a diploma in Information Technology. I have a keen interest in Web Design and Project Management, and love collaborating with team members!</h2> </div>
        <div className="text-green-500 font-bold flex items-center justify-between">
          <a className="flex" download="Hein Htet Aung Resume" href="../download/Hein_Htet_Aung_Resume.pdf">
            <div>Resume</div>
            <svg className="w-6 h-6 text-green-500 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
            </svg>
          </a>
          <a className="flex" href="https://www.linkedin.com/in/hein-htet-aung-5b8944210/" target="_blank">
            <div>LinkedIn</div>
            <svg className="w-6 h-6 text-green-500 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
            </svg>
          </a>
          <a className="flex" href="https://github.com/HeinHtetAung5142" target="_blank">
            <div>Github</div>
            <svg className="w-6 h-6 text-green-500 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
            </svg>
          </a>
          <a className="flex" href="mailto:hhaung5142@gmail.com" target="_blank">
            <div>Email</div>
            <svg className="w-6 h-6 text-green-500 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
            </svg>
          </a>
        </div>
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
            <div className="p-5">
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-green-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path className="fill-current text-green-500" fillRule="evenodd" d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Diploma in Information Technology <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2024</time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Singapore Polytechnic</p>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-green-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path className="fill-current text-green-500" fillRule="evenodd" d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">O-Level Certification</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017 - 2020</time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Ang Mo Kio Secondary School</p>
                </li>
                <li className="ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-green-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path className="fill-current text-green-500" fillRule="evenodd" d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">PSLE Certification</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2011 - 2016</time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Zhonghua Primary School</p>
                </li>
              </ol>
            </div>
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
            <div className="p-5">
              <div className="pb-2">
                <p>
                  Full-Stack Development
                </p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-green-500 text-center p-0.5 leading-none rounded-full" style={{ width: '100%' }}> 100%</div>
                </div>
              </div>
              <div className="py-2">
                <p>
                  Project Management
                </p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-green-500 text-center p-0.5 leading-none rounded-full" style={{ width: '100%' }}> 100%</div>
                </div>
              </div>
              <div className="py-2">
                <p>
                  Adaptability
                </p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-green-500 text-center p-0.5 leading-none rounded-full" style={{ width: '90%' }}> 90%</div>
                </div>
              </div>
              <div className="py-2">
                <p>
                  SQL
                </p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-green-500 text-center p-0.5 leading-none rounded-full" style={{ width: '80%' }}> 80%</div>
                </div>
              </div>
              <div className="pt-2">
                <p>
                  Time Management
                </p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-green-500 text-center p-0.5 leading-none rounded-full" style={{ width: '70%' }}> 70%</div>
                </div>
              </div>
            </div>
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
            <div className="py-5">
              <div className="border border-green-500 rounded p-5 mb-4">
                <div className="flex items-center">
                  <svg className='inline-block h-5 w-5 mr-2' viewBox='0 0 16 16'>
                    <path className="fill-current text-green-500" fillRule="evenodd"
                      d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <a href="https://github.com/HeinHtetAung5142/hha-portfolio" target="_blank" className="text-green-500 font-bold">hha-portfolio</a>
                </div>
                <p className="py-2">My Personal Portfolio Website.</p>
                <div className='flex items-center'>
                  <svg className='inline-block h-full w-5 mr-1 mb-1.5' viewBox='0 0 16 16' xmlns="http://www.w3.org/2000/svg">
                    <circle fill="white" cx="50%" cy="65%" r="5" />
                  </svg>
                  <p className="font-bold">React / TypeScript / Tailwind</p>
                </div>
              </div>
              <div className="border border-green-500 rounded p-5 mb-4">
                <div className="flex items-center">
                  <svg className='inline-block h-5 w-5 mr-2' viewBox='0 0 16 16'>
                    <path className="fill-current text-green-500" fillRule="evenodd"
                      d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <a href="https://github.com/HeinHtetAung5142/socket-chat-app" target="_blank" className="text-green-500 font-bold">socket-chat-app</a>
                </div>
                <p className="py-2">A collaboration full-stack project with friends, where we created a chat application that supported direct communication between two users and direct messaging between multiple users in a group.</p>
                <div className='flex items-center'>
                  <svg className='inline-block h-full w-5 mr-1 mb-1.5' viewBox='0 0 16 16' xmlns="http://www.w3.org/2000/svg">
                    <circle fill="white" cx="50%" cy="65%" r="5" />
                  </svg>
                  <p className="font-bold">Socket.io / Next.js / Typescript / React / Prisma</p>
                </div>
              </div>
              <div className="border border-green-500 rounded p-5 mb-4">
                <div className="flex items-center">
                  <svg className='inline-block h-5 w-5 mr-2' viewBox='0 0 16 16'>
                    <path className="fill-current text-green-500" fillRule="evenodd"
                      d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <a href="https://github.com/HeinHtetAung5142/To-Do" target="_blank" className="text-green-500 font-bold">To-Do</a>
                </div>
                <p className="py-2">A comprehensive Task Manager project that encompasses various aspects, including automated task scheduling via cron jobs, efficient email communication using a dedicated database, and intuitive task management features, all aimed at enhancing productivity and organization.</p>
                <div className='flex items-center'>
                  <svg className='inline-block h-full w-5 mr-1 mb-1.5' viewBox='0 0 16 16' xmlns="http://www.w3.org/2000/svg">
                    <circle fill="white" cx="50%" cy="65%" r="5" />
                  </svg>
                  <p className="font-bold">Luxon / DaisyUI / Cron Job / React / Supabase / SendinBlue</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
