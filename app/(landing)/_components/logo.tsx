import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center">
      <Image
        src="/logo.webp"
        height="20"
        width="20"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo.webp" // to be changed
        height="20"
        width="20"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>slate</p>
    </div>
  );
};
