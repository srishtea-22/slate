import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
        <Image
          src="/hero.png"
          fill
          className="object-contain dark:hidden"
          alt="hero image"
        />
        <Image
          src="/hero-dark.png"
          fill
          className="object-contain hidden dark:block"
          alt="hero image"
        />
      </div>
    </div>
  );
};
