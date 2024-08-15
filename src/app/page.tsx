// import { AnimatedPinDemo } from "@/component/AnimatedPinDemo";
// import { GridBackgroundDemo } from "@/component/Background";
// import Footer from "@/component/Footer";
// import { HeroScrollDemo } from "@/component/HeroScrollDemo";
// import { InfiniteMovingCardsDemo } from "@/component/InfiniteMovingCardsDemo";
// import { FloatingNavDemo } from "@/component/Navbar";
// import { StickyScrollRevealDemo } from "@/component/StickyScrollRevealDemo";

// export default function Home() {
//   return (
//     <>
//       <GridBackgroundDemo></GridBackgroundDemo>
//       <FloatingNavDemo />
//       <HeroScrollDemo/>
//       <StickyScrollRevealDemo/>
//       <AnimatedPinDemo/>
//       <InfiniteMovingCardsDemo/>
//       <Footer/>
//     </>
//   );
// }
'use client'

import { AnimatedPinDemo } from "@/component/AnimatedPinDemo";
import { GridBackgroundDemo } from "@/component/Background";
import { CardHoverEffectDemo } from "@/component/CardHoverEffectDemo";
import Footer from "@/component/Footer";
import { HeroScrollDemo } from "@/component/HeroScrollDemo";
import { InfiniteMovingCardsDemo } from "@/component/InfiniteMovingCardsDemo";
import { FloatingNavDemo } from "@/component/Navbar";
import { StickyScrollRevealDemo } from "@/component/StickyScrollRevealDemo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      <div className="w-full">
        <GridBackgroundDemo />
      </div>
      <div className="w-full">
        <FloatingNavDemo />
      </div>
      <div className="w-full">
        <HeroScrollDemo />
      </div>
      <div className="w-full">
        <CardHoverEffectDemo />
      </div>
      <div className="w-full">
        <StickyScrollRevealDemo />
      </div>
      <div className="w-full">
        <AnimatedPinDemo />
      </div>
      <div className="w-full">
        <InfiniteMovingCardsDemo />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}