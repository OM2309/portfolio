"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const experiences = [
    {
      company: "Octal IT Solution",
      title: "SDE I",
      period: "Feb 2025 – Present",
      location: "Jaipur",
      type: "Full-Time",
      logo: "/images/octal.png",
      bullets: [
        "Developed full-stack web and mobile applications using React, Node.js, and PostgreSQL.",
        "Collaborated with cross-functional teams to deliver features on time.",
        "Improved app performance by 40% through code optimization and caching.",
        "Built reusable UI components and integrated third-party APIs.",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    },
    {
      company: "Kalazara Technologies",
      title: "SDE I",
      period: "Jan 2024 – Feb 2025",
      location: "Gwalior",
      type: "Full-Time",
      logo: "/images/Hop.jpg",
      bullets: [
        "Freelanced with 5+ clients, shipped smooth and pixel-perfect solutions from start to finish.",
        "Crafted modern, responsive websites that blend design with performance.",
        "Turned ideas into smooth, pixel-perfect experiences using React and Next.js.",
        "Worked closely with clients to refine UX and deliver results that stand out.",
        "Integrated APIs, boosted performance, and built reusable UI systems.",
        "Handled projects end-to-end — from concept to production.",
      ],
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Motion",
        "GSAP",
        "Vercel",
      ],
    },
  ];

  return (
    <div className="w-full cursor-pointer">
      <h2 className="text-lg font-semibold text-white mb-8">Work Experience</h2>

      <div className="space-y-4 ">
        {experiences.map((exp, index) => (
          <Collapsible
            key={index}
            open={openIndex === index}
            onOpenChange={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="group"
          >
            {/* Header - Hover & Clickable */}
            <CollapsibleTrigger className="w-full cursor-pointer">
              <div
                className={`flex items-center justify-between rounded-lg transition-all duration-200
                  ${openIndex === index ? "" : ""}
                `}
              >
                <div className="flex items-center gap-4 cursor-pointer">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="rounded-full object-contain bg-white p-1"
                    />
                  </div>

                  <div className="text-left">
                    <h3 className="text-white font-medium flex items-center gap-2">
                      {exp.company}
                      {/* Arrow appears on hover */}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <span className="text-gray-400">{exp.period}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300
                      ${openIndex === index ? "rotate-180" : ""}
                    `}
                  />
                </div>
              </div>
            </CollapsibleTrigger>

            {/* Collapsible Content */}
            <CollapsibleContent>
              <div className="pb-6 pt-2  ml-14 space-y-4">
                {/* Bullets */}
                <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-gray-500 mt-1">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-zinc-800 text-gray-300 text-xs px-2 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
