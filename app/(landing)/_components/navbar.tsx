"use client";
import { cn } from "@/lib/utils";
import { UseScrollTop } from "@/hooks/use-scroll-top";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  const scrolled = UseScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-4 dark:bg-[#1F1F1F]",
        scrolled && "border-b shadow-sm",
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between flex items-center w-full gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};
