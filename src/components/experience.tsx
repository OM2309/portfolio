"use client";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export default function Experience() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);

  const experiences = [
    {
      company: "Octal IT Solution",
      title: "Software Developer",
      period: "Feb 2025 – Present",
      location: "Jaipur",
      type: "Full-Time",
      logo: "/images/Hop.jpg",
      bullets: [
        "Developed full-stack web and mobile applications using React, Node.js, and PostgreSQL.",
        "Collaborated with cross-functional teams to deliver features on time.",
        "Improved app performance by 40% through code optimization and caching.",
        "Built reusable UI components and integrated third-party APIs.",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    },
    {
      company: "Freelance",
      title: "Frontend Engineer",
      period: "Mar 2025 – Present",
      location: "Remote",
      type: "Contract",
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
    <div className="space-y-8">
      <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">
        Work Experience
      </p>

      {experiences.map((exp, index) => {
        const [open, setOpen] =
          index === 0 ? [open1, setOpen1] : [open2, setOpen2];

        return (
          <Card key={index} className="border-0 shadow-none bg-transparent">
            <Collapsible open={open} onOpenChange={setOpen}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <Image
                      src={exp.logo}
                      width={40}
                      height={40}
                      alt={exp.company}
                      className="rounded-md object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-medium text-foreground">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period} • {exp.location} • {exp.type}
                    </p>
                  </div>
                </div>

                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    {open ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>

              <CollapsibleContent className="mt-4 ml-14 space-y-3">
                <CardContent className="p-0">
                  <ul className="list-disc space-y-2 text-sm text-muted-foreground">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        );
      })}
    </div>
  );
}
