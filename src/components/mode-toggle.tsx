"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { flushSync } from "react-dom";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = async () => {
    const isDark = theme === "dark";
    const newTheme = isDark ? "light" : "dark";

    // Fallback: no support
    if (
      !document.startViewTransition ||
      !buttonRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(newTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(newTheme));
    });

    await transition.ready;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(rect.left, innerWidth - rect.left - rect.width),
      Math.max(rect.top, innerHeight - rect.top - rect.height)
    );

    // Animate only the NEW root with circle reveal
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0% at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 800,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const isDark = theme === "dark";

  return (
    <div className="flex p-4 justify-end">
      <Button
        ref={buttonRef}
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="relative rounded-full overflow-hidden border-slate-300 dark:border-slate-700 cursor-pointer"
        aria-label="Toggle theme"
      >
        <Sun
          className={`h-5 w-5 transition-all duration-300 ${
            isDark ? "-rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 m-auto h-5 w-5 transition-all duration-300 ${
            isDark ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
