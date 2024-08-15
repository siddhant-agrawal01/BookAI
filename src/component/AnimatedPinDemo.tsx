"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="https://trybookai.com"
        href="https://trybookai.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[30rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Fantasy
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            &quot;The ancient prophecy spoke of a child born with starlight in their eyes. As the comet blazed overhead, the kingdom held its breath&quot;{" "}
              their eyes. As the comet blazed overhead, the kingdom held its
              breath&quot;{" "}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 h-full bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          <Image
            src="/fantasy.png"
            width={400}                                                                                                                                                                                                                                                         
            height={100}
            alt="Picture of the author"
          />
        </div>
      </PinContainer>
      <PinContainer
        title="https://trybookai.com"
        href="https://trybookai.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[30rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Science Edition
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            &quot;As Dr. Elara stepped through the shimmering portal, she knew
              there was no turning back. The fate of two universes now rested in
              her hands...&quot;
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          <Image
            src="/science.png"
            width={400}                                                                                                                                                                                                                                                         
            height={100}
            alt="Picture of the author"
          />
        </div>
      </PinContainer>
      <PinContainer
       title="https://trybookai.com"
        href="https://trybookai.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[30rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Mystery
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            &quot;The old lighthouse stood silent, its beacon long extinguished.
              But on foggy nights, some swore they could still see its ghostly
              light...&quot;
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          <Image
            src="/mystery.png"
            width={400}                                                                                                                                                                                                                                                         
            height={100}
            alt="Picture of the author"
          />
        </div>
      </PinContainer>
    </div>
  );
}
