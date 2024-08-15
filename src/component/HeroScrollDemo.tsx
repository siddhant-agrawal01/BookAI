"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll 
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            create captivating books in  <br />
              <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none">
              minutes.
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/scroll.png`}
          alt="hero"
          height={720}
          width={1600}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
