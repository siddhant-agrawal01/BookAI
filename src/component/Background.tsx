"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function GridBackgroundDemo() {
  const words = [
    {
      text: "BookAI",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Your",
    },
  
    {
      text: "AI  Writing",
    },
   
    {
      text: "Partner",
   
    },
  ];
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Spotlight className="top-0 right-40" />
      
   
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          Unlock your writing potential with 
          </p>
          
          <Spotlight className="top-0 left-96" />

          <TypewriterEffectSmooth words={words} />
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Join now
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              Signup
            </button>
  

          </div>
          
        </div>
      
    </div>
  );
}
