"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Choose Your Genre",
    description:
      "Select from a wide range of genres or create a custom blend..",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center text-4xl justify-center text-white">
       <Image
          src="/genre.webp"
          width={300}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Provide Key Details",
    description:
      "Input main characters, plot points, or themes to guide the AI..",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/key.avif"
          width={300}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "AI Generation",
    description: "Our advanced AI creates your book based on your inputs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Image
          src="/ai.webp"
          width={300}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Review and Download",
    description:
      "Review your generated book and download in your preferred format.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           <Image
          src="/download.webp"
          width={300}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <>
      <div className="">
        <p className="text-6xl text-center font-bold mb-10 text-gray-300 ">
          How it <span className="text-blue-500">Works</span>{" "}
        </p>
        <div className="p-10 ">
          <StickyScroll content={content} />
        </div>
      </div>
    </>
  );
}
