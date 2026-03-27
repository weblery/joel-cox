"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface AnimatedTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  wordMode?: boolean;
}

export default function AnimatedText({
  text,
  as: Component = "h2",
  className,
  delay = 0,
  wordMode = false,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll(".anim-text-element");

      gsap.fromTo(
        elements,
        {
          y: 100,
          opacity: 0,
          rotateZ: 5,
        },
        {
          y: 0,
          opacity: 1,
          rotateZ: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.04,
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const getElements = () => {
    if (wordMode) {
      return text.split(" ").map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-2 mr-[0.25em]">
          <span className="anim-text-element inline-block origin-bottom-left">
            {word}
          </span>
        </span>
      ));
    }

    return text.split("").map((char, index) => (
      <span key={index} className="inline-block overflow-hidden pb-2">
        <span className="anim-text-element inline-block origin-bottom-left">
          {char === " " ? "\u00A0" : char}
        </span>
      </span>
    ));
  };

  return (
    <Component ref={containerRef} className={cn("", className)}>
      {getElements()}
    </Component>
  );
}
