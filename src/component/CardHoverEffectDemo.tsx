import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
          <p className="text-6xl text-center font-bold mb-10 text-gray-300 ">
           <span className="text-blue-500">Features</span>{" "}
        </p>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "S AI-Powered Writing",
    description:
    
"Generate high-quality content with advanced AI technology.",
link: "",
  },
  {
    title: "Custom Genres",
    description:
      "Create stories in any genre or blend multiple styles.",
      link: "",
  },
  {
    title: "Instant Download",
    description:
      "Get your completed book in various formats instantly.",
      link: "",
  },
  {
    title: "Multilingual",
    description:
      "Generate content in multiple languages effortlessly.",
      link: "",
  },
  {
    title: "Soon",
    description:
      "seems like more features will be added by me after onboarding",
      link: "",
  },
  {
    title: "Soon",
    description:
      "Great features yet to come.......",
      link:"",
  },
];
