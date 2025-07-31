import { Heading } from "./_components/heading";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer";

const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col flex-1 items-center justify-center md:justify-start text-center gap-y-8 px-6 pb-10">
        <Heading />
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
