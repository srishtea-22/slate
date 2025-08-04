"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex flex-col items-center gap-x-2">
        A unified workspace to write, plan, and get things done.
        <span className="flex items-center gap-x-1 ml-2">
          Welcome to
          <Image
            src="/logo.png"
            alt="Logo"
            height="40"
            width="40"
            className="dark:hidden"
          />
          <Image
            src="/logo-dark.png"
            alt="Logo"
            height="40"
            width="40"
            className="hidden dark:block"
          />
          <span>slate</span>
        </span>
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
