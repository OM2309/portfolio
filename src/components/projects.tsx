import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
      mockup: "/images/Hop.jpg", // Replace with your image
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
      mockup: "/images/Hop.jpg", // Replace with your image
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">
          Projects
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="space-y-6">
            {/* Mockup Image */}
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800">
                <Image
                  src={project.mockup}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.period}</p>
              <p className="text-sm text-muted-foreground  leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Website
                  </a>
                </Button>
                {project.sourceUrl && (
                  <Button size="sm" variant="ghost" asChild>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
