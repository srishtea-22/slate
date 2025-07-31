import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="w-full md:ml-auto flex justify-between md:justify-end items-center text-muted-foreground">
        <a
          href="https://github.com/srishtea-22/slate"
          target="_blank"
          rel="noopener noreferror"
        >
          <Button variant="ghost" size="sm">
            Github
          </Button>
        </a>
      </div>
    </div>
  );
};
