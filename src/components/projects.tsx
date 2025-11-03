import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Chat Collect",
      period: "Jan 2024 – Feb 2024",
      description:
        "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      tech: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      liveUrl: "https://chatcollect.com",
      sourceUrl: "https://github.com/om/chat-collect",
      mockup: "/images/Hop.jpg",
    },
    {
      title: "Magic UI",
      period: "June 2023 – Present",
      description:
        "Designed, developed and sold animated UI components for developers.",
      tech: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      liveUrl: "https://magicui.design",
      sourceUrl: "https://github.com/magic-ui/magic-ui",
      mockup: "/images/Hop.jpg",
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">
          Projects
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="overflow-hidden border shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image - Smaller & Responsive */}
            <div className="relative h-48 overflow-hidden ">
              <Image
                src={project.mockup}
                alt={project.title}
                height={400}
                width={400}
                className="object-cover rounded-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            <CardContent className="p-5 space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs py-0.5 px-2"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" asChild className="text-xs">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live
                  </a>
                </Button>
                {project.sourceUrl && (
                  <Button size="sm" variant="ghost" asChild className="text-xs">
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
