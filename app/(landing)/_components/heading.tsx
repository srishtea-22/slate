"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
      {isLoading && (
        <div className="flex items-center justify-center w-full">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter slate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignUpButton mode="modal">
          <Button>
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </SignUpButton>
      )}
    </div>
  );
};
