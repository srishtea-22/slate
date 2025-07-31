"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        A unified workspace to write, plan, and get things done. Welcome to{" "}
        <span className="underline">slate</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl">
        slate is your all-in-one space to <br /> write, plan and collaborate
        without friction.
      </h3>
      <Button>
        Enter slate
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
